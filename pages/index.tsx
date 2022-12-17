import type { NextPage, GetStaticProps } from "next";
import {
	Heading,
	Text,
	Flex,
	Box,
	Link,
	Tag,
	TagLabel,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Card from "../components/ProfileCard";
import ProjectsCard from "../components/ProjectsCard";
import NextLink from "next/link";
import HeadingUnderline from "../components/HeadingUnderline";
import WritingList from "../components/WritingList";
import { getListPosts } from "./api/blog";
import { postsProps } from "../types/posts";

type Props = {
	lastThreePosts: postsProps[];
};

export const getStaticProps: GetStaticProps = async () => {
	const lastThreePosts = getListPosts().slice(0, 3);

	return {
		props: {
			lastThreePosts,
		},
	};
};

const Home: NextPage<Props> = ({ lastThreePosts }: Props) => {
	return (
		<>
			<Flex
				as="section"
				direction={{ base: "column-reverse", md: "row" }}
				justify="space-between"
				align={{ md: "center" }}>
				<Box w={{ md: "60%" }}>
					<Heading as="h1" size="2xl" mt={4}>
						{`Hi, I'm`}{" "}
						<Box
							as="span"
							position="relative"
							display="inline-block"
							_dark={{
								color: "white",
								textShadow: "1px 1px 4px rgba(0, 0, 0, 0.48)",
							}}
							_before={{
								content: `""`,
								position: "absolute",
								display: "block",
								left: "-3px",
								bottom: "0px",
								width: "95%",
								height: "10px",
								bgGradient: "linear(to-r, #c5f9d7, #f7d486, #f27a7d)",
								zIndex: "-1",
							}}>
							name.
						</Box>
					</Heading>
					<Heading as="h2" size="md" mt={2}>
						Subtitle here
					</Heading>
					<Text my={4}>
						{`Passionate front-end developer based in 🇨🇦 Montreal, Canada. I'm enthusiast about new
						technologies and I like building app.`}
					</Text>
					<Wrap spacing={2} my={4}>
						{[
							"JavaScript",
							"TypeScript",
							"React.js",
							"NextJS",
							"Node.js",
							"HTML",
							"CSS",
							"SASS",
							"jQuery",
							"MongoDB",
							"Express",
							"TailwindCSS",
							"Chakra UI",
							"Bulma",
							"Bootstrap",
						].map((skill, index) => (
							<WrapItem key={index}>
								<Tag
									size="sm"
									variant="subtle"
									bg="blackAlpha.300"
									_dark={{
										bg: "whiteAlpha.300",
									}}>
									<TagLabel>{skill}</TagLabel>
								</Tag>
							</WrapItem>
						))}
					</Wrap>
				</Box>

				<Box
					mx={{ base: "auto", sm: "initial" }}
					mb={{ base: "1.5em", sm: "0px" }}
					p="2px"
					rounded="md"
					bgGradient="linear(to-r, #c5f9d7, #f7d486, #f27a7d)">
					<Card
						title="Profile picture"
						image="/images/profile.jpg"
						imageAlt="Profile picture"
						tag="Profile"
						url="https://www.linkedin.com/in/user"
					/>
				</Box>
			</Flex>

			<Flex as="section" direction="column" mt={{ base: "1.5em", sm: "4em" }}>
				<Box>
					<HeadingUnderline as="h2" size="lg" mb={4}>
						Writing
					</HeadingUnderline>
				</Box>

				{lastThreePosts.length === 0 ? (
					<Text>No writing yet.</Text>
				) : (
					lastThreePosts.map(({ slug, frontmatter }) => {
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
					})
				)}
				<Box mt={6}>
					<NextLink href="/writing/" passHref>
						<Link>
							Read all posts <ArrowForwardIcon />
						</Link>
					</NextLink>
				</Box>
			</Flex>

			<Flex as="section" direction="column" mt={{ base: "1.5em", sm: "4em" }}>
				<Box>
					<HeadingUnderline as="h2" size="lg" mb={6}>
						Side projects
					</HeadingUnderline>
				</Box>

				<ProjectsCard
					title="Your project title here"
					screenshot="https://placehold.co/600x400.png"
					description="Describe your project :)"
					stack={["React.js", "TailwindCSS", "JavaScript", "Vercel", "CSS"]}
					url="https://github.com/PeachBay/"
				/>

				<Box mt={6}>
					<NextLink href="/projects/" passHref>
						<Link>
							Check out my others projects <ArrowForwardIcon />
						</Link>
					</NextLink>
				</Box>
			</Flex>
		</>
	);
};

export default Home;
