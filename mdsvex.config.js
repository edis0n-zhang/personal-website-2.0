import remarkGithub from 'remark-github';
import remarkAbbr from 'remark-abbr';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	layout: {
		_: 'src/lib/MarkdownLayout.svelte'
	},
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [
		[
			remarkGithub,
			{
				repository: 'https://github.com/edis0n-zhang/personal-website-2.0.git'
			}
		],
		remarkAbbr
	],
	rehypePlugins: [
		rehypeSlug,
		[
			{
				behavior: 'wrap'
			}
		]
	]
});

export default config;
