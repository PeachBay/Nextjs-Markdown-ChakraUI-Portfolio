import { Heading, Box, Tag, Link } from "@chakra-ui/react";
import Moment from "moment";
import NextLink from "next/link";

type WritingListProps = {
	title: string;
	tag: string;
	color: string;
	date: string;
	slug: string;
};

function WritingList({ title, color, date, tag, slug }: WritingListProps) {
	return (
		<Box
			as="article"
			key={slug}
			borderBottom="1px"
			borderBottomColor="whiteAlpha.200"
			_light={{ borderBottomColor: "blackAlpha.600" }}
			py={4}
			_last={{
				borderBottom: "0",
			}}
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			gap={4}>
			<NextLink href={`/writing/${slug}`} passHref>
				<Link>
					<Heading as="h3" size="sm">
						{title}
					</Heading>
				</Link>
			</NextLink>

			<Tag colorScheme={color}>{tag}</Tag>

			<Box as="time" ml="auto" fontSize="sm">
				{Moment(`${date}`, "YYYYMMDD").fromNow()}
			</Box>
		</Box>
	);
}

export default WritingList;
