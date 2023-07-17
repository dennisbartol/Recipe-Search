import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { RecipeChoice } from "../components/RecipeChoice";
import { RecipeSearch } from "../components/RecipeSearch";

export const RecipesPage = () => {
	const [userRecipeChoice, setUserRecipeChoice] = useState();
	return (
		<Box backgroundColor={"#fff"} textAlign={"center"} p={8}>
			{userRecipeChoice ? (
				<RecipeChoice recipe={userRecipeChoice} onClick={setUserRecipeChoice} />
			) : (
			  <>
			   <Heading
				 fontSize={{ base: "4xl", md: "5xl", xl: "6xl" }}
				 color={"black"}>
				 #Winc (React) Recipe Search Engine
			   </Heading>
				 
				<RecipeSearch onSearch={setUserRecipeChoice} />
			  </>
			)}
		</Box>
	);
};
