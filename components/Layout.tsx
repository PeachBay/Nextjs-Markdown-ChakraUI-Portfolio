import Head from "next/head";
import Navbar from "./Navbar";
import Social from "./Social";
import { Container, Box } from "@chakra-ui/react";

interface LayoutProps {
	children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
	return (
		<>
			<Head>
				<title>Tiffeny.dev</title>
				<meta
					name="description"
					content="Passionate front end developer working remotely from Paris."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container maxW={{ md: "container.sm", lg: "container.md" }}>
				<Box as="header" mb={30}>
					<Navbar />
				</Box>

				<main>{children}</main>

				<footer>
					<Box
						mt="5em"
						mb="3em"
						pt="30px"
						borderTop="1px"
						borderTopColor="whiteAlpha.200"
						_light={{ borderTopColor: "blackAlpha.300" }}>
						<Social />
					</Box>
				</footer>
			</Container>
		</>
	);
}

export default Layout;
