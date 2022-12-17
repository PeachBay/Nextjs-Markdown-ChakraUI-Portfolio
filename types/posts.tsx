export interface postsProps {
	slug: string;
	frontmatter: {
		title: string;
		date: string;
		tag: string;
		tagcolor: string;
	};
	content: string;
}

export interface postProps {
	frontmatter: {
		title: string;
		date: string;
		tag: string;
		tagcolor: string;
	};
	contentHtml: string;
}
