import type { NextPage } from "next";
import { Heading, Text, Flex, Box, Link } from "@chakra-ui/react";
import HeadingUnderline from "../components/HeadingUnderline";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import ProjectsCard from "../components/ProjectsCard";

const Projects: NextPage = () => {
	return (
		<>
			<HeadingUnderline as="h1" size="2xl" mb="5">
				Projects
			</HeadingUnderline>

			<ProjectsCard
				title="Your project title here"
				screenshot="https://placehold.co/600x400.png"
				description="Describe your project :)"
				stack={["React.js", "TailwindCSS", "JavaScript", "Vercel", "CSS"]}
				url="https://github.com/PeachBay/"
			/>
		</>
	);
};

export default Projects;
