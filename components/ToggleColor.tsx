import { Button, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ToggleColor = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Button
			onClick={toggleColorMode}
			color="white"
			bgGradient="linear(to-r, #9bf8f4, #6f7bf7)"
			_dark={{
				bgGradient: "linear(to-r, #ffa585, #ffeda0)",
			}}
			_hover={{}}>
			{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
		</Button>
	);
};

export default ToggleColor;
