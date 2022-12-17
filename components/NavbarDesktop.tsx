import { Link, HStack, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";

type navURL = {
	href: string;
	label: string;
};

const linkURL = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/projects",
		label: "Projects",
	},
	{
		href: "/writing",
		label: "Writing",
	},
	{
		href: "/books",
		label: "Books",
	},
];

const NavbarDesktop = () => {
	const { pathname } = useRouter();
	const nonActiveColorLink = useColorModeValue("gray.600", "gray.400");

	return (
		<HStack spacing="24px">
			{linkURL.map(({ href, label }: navURL) => {
				const activeLink = pathname === href ? "pink.300" : nonActiveColorLink;
				const activeLinkWeight = pathname === href ? "bold" : "regular";
				return (
					<NextLink key={href} href={href} passHref>
						<Link color={activeLink} fontWeight={activeLinkWeight}>
							{label}
						</Link>
					</NextLink>
				);
			})}
		</HStack>
	);
};

export default NavbarDesktop;
