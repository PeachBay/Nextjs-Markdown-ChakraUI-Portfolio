import { StarIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/react";

const StarsRating: any = ({ starsCount }: any) => {
	const stars = [0, 0, 0, 0, 0].fill(1, 0, starsCount);

	return (
		<HStack spacing={1} display="flex" alignItems="center" mt={4}>
			{stars.map((value, index) => {
				return (
					<StarIcon
						key={index}
						boxSize={3}
						color={value == 1 ? "yellow.500" : "gray.300"}
					/>
				);
			})}
		</HStack>
	);
};

export default StarsRating;
