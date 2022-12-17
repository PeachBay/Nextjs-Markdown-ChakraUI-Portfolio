import { extendTheme, theme as base } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";
import "cal-sans";

const theme = extendTheme(
	{
		fonts: {
			heading: `Cal Sans, ${base.fonts?.heading}`,
			body: `Inter, ${base.fonts?.body}`,
		},
		config: {
			initialColorMode: "dark",
			useSystemColorMode: true,
		},
		styles: {
			global: {
				body: {
					_light: {
						color: "gray.600",
					},
					_dark: {
						color: "gray.400",
					},
				},
				a: {
					_hover: {
						textDecoration: "underline",
					},
				},
			},
		},
		components: {
			Heading: {
				baseStyle: {
					_light: {
						color: "gray.800",
					},
					_dark: {
						color: "white",
					},
				},
			},
		},
	},
	withProse({
		baseStyle: {
			h1: {
				_dark: {
					color: "white",
				},
				color: "gray.800",
				fontSize: { base: "2xl" },
			},
			h2: {
				_dark: {
					color: "white",
				},
				color: "gray.800",
				fontSize: { base: "xl" },
			},
			h3: {
				_dark: {
					color: "white",
				},
				color: "gray.800",
				fontSize: { base: "lg" },
			},
			h4: {
				_dark: {
					color: "white",
				},
				color: "gray.800",
				fontSize: { base: "md" },
			},
		},
	})
);

export default theme;
