import type { NextPage } from "next";
import { Heading, Text, SimpleGrid } from "@chakra-ui/react";
import HeadingUnderline from "../components/HeadingUnderline";
import { Client } from "@notionhq/client";
import BooksCard from "../components/BooksCard";

interface bookProps {
	books: {
		cover: string;
		title: string;
		author: string;
		status: string;
		rating: number;
	};
}
[];

export const getStaticProps = async () => {
	const notion = new Client({
		auth: process.env.NOTION_SECRET,
	});

	const data = await notion.databases.query({
		database_id: process.env.PAGE_ID!,
		filter: {
			property: "Date",
			date: {
				is_not_empty: true,
			},
		},
	});

	const formattedData = data.results.map(
		(bookObject: {
			properties: {
				Cover: { rich_text: { plain_text: string }[] };
				Title: { title: { plain_text: string }[] };
				Author: { rich_text: { plain_text: string }[] };
				Status: { multi_select: { name: string }[] };
				Rating: { number: number };
			};
		}) => {
			return {
				cover: bookObject.properties.Cover.rich_text[0]
					? bookObject.properties.Cover.rich_text[0].plain_text
					: null,
				title: bookObject.properties.Title.title[0].plain_text,
				author: bookObject.properties.Author.rich_text[0].plain_text,
				status: bookObject.properties.Status.multi_select[0].name,
				rating: bookObject.properties.Rating.number,
			};
		}
	);

	return {
		props: {
			books: formattedData,
			raw: data,
		},
	};
};

const Books: NextPage = ({ books }: bookProps) => {
	return (
		<>
			<HeadingUnderline as="h1" size="2xl" mb="5">
				Books
			</HeadingUnderline>

			<Text>Books page using Notion API to fetch data in static page.</Text>

			<SimpleGrid columns={{ base: 1, sm: 2 }} spacing={10} mt={30}>
				{books.map((book: any) => {
					return (
						<BooksCard
							key={book.title}
							cover={
								book.cover
									? `images/books/${book.cover}`
									: "images/books/sapiens.jpg"
							}
							title={book.title}
							author={book.author}
							rating={book.rating}
						/>
					);
				})}
			</SimpleGrid>
		</>
	);
};

export default Books;
