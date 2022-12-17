import type { NextPage, GetStaticProps } from "next";
import { Flex, Box } from "@chakra-ui/react";
import WritingList from "../components/WritingList";
import HeadingUnderline from "../components/HeadingUnderline";
import { getListPosts } from "./api/blog";
import { postsProps } from "../types/posts";

type Props = {
	allPosts: postsProps[];
};

export const getStaticProps: GetStaticProps = async () => {
	const allPosts = getListPosts();

	return {
		props: {
			allPosts,
		},
	};
};

const Writing: NextPage<Props> = ({ allPosts }: Props) => {
	return (
		<>
			<Flex direction="column">
				<Box as="section">
					<HeadingUnderline as="h1" size="2xl" mb="5">
						Writing
					</HeadingUnderline>

					{allPosts.map(({ slug, frontmatter }) => {
						return (
							<WritingList
								key={slug}
								slug={slug}
								title={frontmatter.title}
								date={frontmatter.date}
								tag={frontmatter.tag}
								color={frontmatter.tagcolor}
							/>
						);
					})}
				</Box>
			</Flex>
		</>
	);
};

export default Writing;
