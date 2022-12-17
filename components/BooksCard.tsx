import { Heading, Flex, Image, Text, Box } from "@chakra-ui/react";
import StarsRating from "../components/StarsRating";

type BooksCardProps = {
	title: string;
	cover: string;
	author: string;
	rating: number;
};

const BooksCard = ({ title, cover, author, rating }: BooksCardProps) => {
	return (
		<Flex
			rounded="lg"
			shadow="lg"
			overflow="hidden"
			maxW="md"
			p={5}
			_dark={{
				bg: "gray.700",
			}}
			alignItems="center">
			<Box w={1 / 3}>
				<Image src={cover} alt={title} w="60px" h="90px" objectFit="cover" />
			</Box>

			<Box w={2 / 3}>
				<Heading
					as="h3"
					fontSize="lg"
					fontWeight="bold"
					noOfLines={2}
					color="gray.800"
					_dark={{
						color: "white",
					}}>
					{title}
				</Heading>
				<Text
					mt={2}
					fontSize="sm"
					color="gray.600"
					_dark={{
						color: "gray.400",
					}}>
					{author}
				</Text>
				<StarsRating starsCount={rating} />
			</Box>
		</Flex>
	);
};

export default BooksCard;
