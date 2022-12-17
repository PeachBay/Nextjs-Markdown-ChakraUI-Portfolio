import type { NextPage, GetStaticPaths } from "next";
import { getAllMarkdowns, markdownToHtml, getPostBySlug } from "../api/blog";
import Head from "next/head";
import { Heading, Box, HStack, Tag, Divider } from "@chakra-ui/react";
import Moment from "moment";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { postProps } from "../../types/posts";

const PostPage: NextPage<postProps> = ({ frontmatter, contentHtml }) => {
	return (
		<>
			<Head>
				<title>{frontmatter.title}</title>
			</Head>
			<article>
				<Heading as="h1" size="2xl" my={6}>
					{frontmatter.title}
				</Heading>
				<HStack gap={4} mb={6}>
					<Box as="time">{Moment(`${frontmatter.date}`).format("LL")}</Box>
					<Tag colorScheme={frontmatter.tagcolor}>{frontmatter.tag}</Tag>
				</HStack>
				<Divider />
				<Prose dangerouslySetInnerHTML={{ __html: contentHtml }} />
			</article>
		</>
	);
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
	const files = getAllMarkdowns();
	const paths = files.map((fileName) => ({
		params: {
			slug: fileName.replace(".md", ""),
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

type Params = {
	params: {
		slug: string;
	};
};

export const getStaticProps = async ({ params }: Params) => {
	const post = getPostBySlug(params.slug);

	const frontmatter = post.frontmatter;
	const contentHtml = await markdownToHtml(post.content);

	return {
		props: {
			frontmatter,
			contentHtml,
		},
	};
};
