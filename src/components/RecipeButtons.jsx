import { Box, Button } from "@chakra-ui/react";

export const RecipeButtons = ({ recipeOne, recipeTwo }) => {
	return (
		<Box>
		 <Button m={4} colorScheme="teal" variant="solid">
			{recipeOne.recipe.label}
		 </Button>
		 <Button m={4} colorScheme="teal" variant="solid">
			{recipeTwo.recipe.label}
		 </Button>
		</Box>
	);
};
