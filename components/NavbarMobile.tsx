import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const NavbarMobile = () => {
	return (
		<Menu>
			{({ isOpen }) => (
				<>
					<MenuButton
						isActive={isOpen}
						as={Button}
						rightIcon={<ChevronDownIcon />}>
						{isOpen ? <CloseIcon /> : <HamburgerIcon />}
					</MenuButton>
					<MenuList>
						<NextLink href="/" passHref>
							<MenuItem>Home</MenuItem>
						</NextLink>
						<NextLink href="/projects" passHref>
							<MenuItem>Projects</MenuItem>
						</NextLink>
						<NextLink href="/writing" passHref>
							<MenuItem>Writing</MenuItem>
						</NextLink>
						<NextLink href="/books" passHref>
							<MenuItem>Books</MenuItem>
						</NextLink>
					</MenuList>
				</>
			)}
		</Menu>
	);
};

export default NavbarMobile;
