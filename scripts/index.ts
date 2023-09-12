import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { Command } from "commander";
import { existsSync } from "fs";
import { mkdir, writeFile } from "fs/promises";
import path, { dirname, join, resolve } from "path";
import { rimrafSync } from "rimraf";
import { OutputOptions, RollupOptions, rollup } from "rollup";
import dts from "rollup-plugin-dts";

const program = new Command();

program.option("--build", "Build project.", false);
program.option("--clean", "Clean project.", false);
program.parse();

const pwd = join.bind(path, process.cwd());

type BuildFormat = "es" | "cjs" | "dts";
const buildFormat: BuildFormat[] = ["es", "cjs", "dts"];

interface ToolOptions {
  build: boolean;
  clean: boolean;
}

interface ProjectConfig {
  include: string;
  outDir: string;
}

const options = program.opts<ToolOptions>();

const tasks: Array<(config: ProjectConfig) => Promise<void>> = [];

export async function cleanProject({ outDir }: ProjectConfig): Promise<void> {
  if (!existsSync(outDir)) {
    return;
  }
  rimrafSync(outDir);
}

function sourceBuildOptions(
  { include, outDir }: ProjectConfig,
  format: BuildFormat
): RollupOptions {
  return {
    input: pwd(include, "index.ts"),
    output: {
      dir: pwd(outDir),
      format: format === "cjs" ? "cjs" : "es",
      entryFileNames:
        format === "dts" ? "[name].d.ts" : join(format, "[name].js"),
    },
    plugins:
      format === "dts"
        ? [dts()]
        : [
            typescript({
              exclude: "node_modules",
              outDir,
              tsconfig: pwd("tsconfig.json"),
            }),
            commonjs(),
            nodeResolve(),
          ],
  };
}

export async function buildProject(config: ProjectConfig): Promise<void> {
  await Promise.all(
    buildFormat.map(async (format) => {
      const rollupOption = sourceBuildOptions(config, format);
      const buildBundle = await rollup(rollupOption as RollupOptions);
      const { output: outputOptions } = rollupOption;
      const { output } = await buildBundle.generate(
        rollupOption.output as OutputOptions
      );
      for (const chunkOrAsset of output) {
        if (chunkOrAsset.type !== "chunk") {
          return;
        }
        if (format === "dts" && !chunkOrAsset.isEntry) {
          return;
        }

        const { fileName, code = "" } = chunkOrAsset;
        const targetFile = resolve(
          (outputOptions as OutputOptions).dir!,
          fileName
        );
        const targetPath = dirname(targetFile);
        if (!existsSync(targetPath)) {
          await mkdir(targetPath, { recursive: true });
        }

        await writeFile(targetFile, code);
      }
    })
  );
}

async function main() {
  console.log(options);
  if (options.clean || options.build) {
    tasks.push(cleanProject);
  }

  if (options.build) {
    tasks.push(buildProject);
  }

  for (const task of tasks) {
    await task({
      include: "src",
      outDir: "dist",
    });
  }
}

main();
