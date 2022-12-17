import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function markdownToHtml(markdown: string) {
	const result = await remark().use(html).process(markdown);
	return result.toString();
}

export function getAllMarkdowns() {
	return fs.readdirSync("posts");
}

export function getPostSlug(slug: string) {
	return fs.readFileSync(`posts/${slug}.md`, "utf-8");
}

export function getListPosts() {
	const files = getAllMarkdowns();

	const posts = files
		.map((fileName) => {
			const slug = fileName.replace(".md", "");
			const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
			const { data: frontmatter } = matter(readFile);
			return {
				slug,
				frontmatter,
			};
		})
		.sort((post1, post2) => {
			if (post1.frontmatter.date > post2.frontmatter.date) {
				return -1;
			} else {
				return 1;
			}
		});

	return posts;
}

export function getPostBySlug(slug: string) {
	const file = getPostSlug(slug);

	const { data: frontmatter, content } = matter(file);

	return {
		slug,
		frontmatter,
		content,
	};
}
