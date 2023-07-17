import { useState } from "react";
import { Center, Input, Select, SimpleGrid } from "@chakra-ui/react";
import { RecipeCards } from "./RecipeCards";
import { data } from "../utils/data";

export const RecipeSearch = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedDiet, setSelectedDiet] = useState("");

	const handleSearchTermChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleDietChange = (event) => {
		setSelectedDiet(event.target.value);
	};

	const selectedRecipes = data.hits.filter((recipe) => {
		const isIncludedInSearchTerm = recipe.recipe.label
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
		if (selectedDiet === "") {
			return isIncludedInSearchTerm;
		}
		const isVegan =
			selectedDiet === "vegan" && recipe.recipe.healthLabels.includes("Vegan");
		const isVegetarian =
			selectedDiet === "vegetarian" &&
			recipe.recipe.healthLabels.includes("Vegetarian");
		const isPescetarian =
			selectedDiet === "pescetarian" &&
			recipe.recipe.healthLabels.includes("Pescatarian");
		return isIncludedInSearchTerm && (isVegan || isVegetarian || isPescetarian);
	});

	return (
		<>
			<Center flexDir={"column"} m={{ base: 4, md: 8, xl: 12 }}>
				<Input
					w={{ base: "100%", md: "50%", xl: "30%" }}
					mb={4}
					backgroundColor={"lightyellow"}
					color={"black"}
					placeholder="Search for a delicious recipe"
					onChange={handleSearchTermChange}/>
					
				<Select
					w={{ base: "100%", md: "50%", xl: "30%" }}
					mb={4}
					backgroundColor={"lightyellow"}
					color={"grey.900"}
					onChange={handleDietChange}
					defaultValue="">
						<option value="">All diets / Select your diet </option>
						<option value="vegan">Vegan</option>
						<option value="vegetarian">Vegetarian</option>
						<option value="pescetarian">Pescetarian</option>
				</Select>
			</Center>
			<SimpleGrid minChildWidth={"290px"} justifyItems={"center"} spacing={8}>
				<RecipeCards onClick={onSearch} recipes={selectedRecipes} />
			</SimpleGrid>
		</>
	);
};
