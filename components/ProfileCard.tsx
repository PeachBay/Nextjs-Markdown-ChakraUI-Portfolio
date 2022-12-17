import {
	HStack,
	Heading,
	Tag,
	TagLabel,
	TagRightIcon,
	Flex,
	Image,
	Center,
	Link,
	Box,
	useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon, InfoOutlineIcon } from "@chakra-ui/icons";

type CardProps = {
	title: string;
	image: string;
	imageAlt: string;
	url: string;
	tag: string;
};

const Card = ({ title, image, tag, url, imageAlt }: CardProps) => {
	const cardBgColor = useColorModeValue("white", "gray.700");
	return (
		<>
			<Box
				maxW="180px"
				mx="auto"
				p={2}
				bg={cardBgColor}
				rounded="lg"
				shadow="lg">
				<HStack spacing={4}>
					<Tag size="sm" variant="subtle" colorScheme="blue" mb={2}>
						<TagLabel>{tag}</TagLabel>
						<TagRightIcon as={InfoOutlineIcon} />
					</Tag>
				</HStack>
				<Flex
					as="figure"
					direction="column"
					justify="space-between"
					align="center">
					<Image
						boxSize="180px"
						objectFit="cover"
						src={image}
						alt={imageAlt}
						rounded="md"
						mb={1}
					/>

					<Center as="figcaption">
						<Link href={url} isExternal>
							<Heading as="h3" size="xs">
								{title} <ExternalLinkIcon w={3} h={3} mb="3" />
							</Heading>
						</Link>
					</Center>
				</Flex>
			</Box>
		</>
	);
};

export default Card;
