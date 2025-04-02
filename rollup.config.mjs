import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: "dist/index.esm.js",
				format: "esm",
			},
		],
		external: ["react", "react-dom"],
		plugins: [
			resolve(),
			commonjs(),
			typescript(),
			postcss({
				extensions: [".css"],
				inject: true,
			}),
		],
	},
];
