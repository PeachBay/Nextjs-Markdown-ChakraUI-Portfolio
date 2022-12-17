import { Flex, useMediaQuery } from "@chakra-ui/react";
import ToggleColor from "./ToggleColor";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
	const [isDesktop] = useMediaQuery("(min-width: 768px)");
	return (
		<Flex as="nav" justify="space-between" align="center" pt="6" pb="30">
			{isDesktop ? <NavbarDesktop /> : <NavbarMobile />}

			<ToggleColor />
		</Flex>
	);
};

export default Navbar;
