import { Heading } from "@chakra-ui/react";

const HeadingUnderline: any = (props: {
	[x: string]: any;
	variant: any;
	children: any;
}) => {
	const { variant, children, ...rest } = props;
	return (
		<Heading
			position="relative"
			display="inline-block"
			_dark={{
				color: "white",
				textShadow: "1px 1px 4px rgba(0, 0, 0, 0.48)",
			}}
			_before={{
				content: `""`,
				position: "absolute",
				display: "block",
				left: "-5px",
				bottom: "0px",
				width: "90%",
				height: "10px",
				bgGradient: "linear(to-r, #c5f9d7, #f7d486, #f27a7d)",
				zIndex: "-1",
			}}
			{...rest}>
			{children}
		</Heading>
	);
};

export default HeadingUnderline;
