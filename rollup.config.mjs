import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: "dist/index.js",
				format: "cjs",
			},
			{
				file: "dist/index.esm.js",
				format: "esm",
			},
		],
		external: [
			"@fancyapps/ui",
			"@tiptap/extension-blockquote",
			"@tiptap/extension-bold",
			"@tiptap/extension-bullet-list",
			"@tiptap/extension-code-block",
			"@tiptap/extension-document",
			"@tiptap/extension-heading",
			"@tiptap/extension-image",
			"@tiptap/extension-italic",
			"@tiptap/extension-link",
			"@tiptap/extension-list-item",
			"@tiptap/extension-mention",
			"@tiptap/extension-ordered-list",
			"@tiptap/extension-paragraph",
			"@tiptap/extension-placeholder",
			"@tiptap/extension-strike",
			"@tiptap/extension-text",
			"@tiptap/extension-text-align",
			"@tiptap/extension-underline",
			"@tiptap/pm",
			"@tiptap/react",
			"@tiptap/suggestion",
			"react",
			"tippy.js",
		],
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
