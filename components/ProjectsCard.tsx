import {
	Heading,
	Flex,
	Image,
	Text,
	Box,
	Tag,
	TagLabel,
	Wrap,
	WrapItem,
	LinkBox,
	LinkOverlay,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";

type ProjectsCardProps = {
	title: string;
	screenshot: string;
	description: string;
	stack: string[];
	url: string;
};

const ProjectsCard = ({
	title,
	screenshot,
	description,
	stack,
	url,
}: ProjectsCardProps) => {
	return (
		<LinkBox mt={6}>
			<Flex
				direction={{ base: "column", md: "row" }}
				rounded="lg"
				shadow="lg"
				overflow="hidden"
				p={3}
				bg="gray.50"
				_dark={{
					bg: "gray.700",
				}}
				alignItems="center"
				justifyContent="center"
				gap="4">
				<Box w={{ base: "full", md: "50%" }}>
					<Image
						src={screenshot}
						alt={title}
						w={{ base: "100%", md: "330" }}
						h={{ base: "auto", md: "200" }}
						objectFit="contain"
					/>
				</Box>

				<Box w={{ base: "full", md: "50%" }}>
					<NextLink href={url} passHref>
						<LinkOverlay>
							<Heading
								as="h3"
								fontSize="lg"
								fontWeight="bold"
								noOfLines={2}
								color="gray.800"
								_dark={{
									color: "white",
								}}>
								{title} <ArrowForwardIcon />
							</Heading>
						</LinkOverlay>
					</NextLink>
					<Text
						mt={2}
						fontSize="sm"
						color="gray.600"
						_dark={{
							color: "gray.400",
						}}>
						{description}
					</Text>
					<Wrap spacing={2} my={4}>
						{stack.map((item, index) => (
							<WrapItem key={index}>
								<Tag
									size="sm"
									variant="subtle"
									bg="blackAlpha.300"
									_dark={{
										bg: "whiteAlpha.300",
									}}>
									<TagLabel>{item}</TagLabel>
								</Tag>
							</WrapItem>
						))}
					</Wrap>
				</Box>
			</Flex>
		</LinkBox>
	);
};

export default ProjectsCard;
