import {
	Card,
	CardBody,
	CardHeader,
	Flex,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";

export const RecipeCard = ({ recipe, onClick }) => {
	return (
		<Card
			w={"280px"}
			h={"380px"}
			borderRadius={"xl"}
			onClick={() => onClick(recipe)}
			cursor="pointer"
			backgroundColor={"Cornsilk"}
			transition="transform 0.2s"
      		_hover={{
        		transform: "scale(1.06)",
      		}}
      		_hover-off={{
        		transform: "scale(1)"}}>
			{/* Recipe Image */}
			<CardHeader height={"150"} p={0}>
				<Image
				   src={recipe.recipe.image}
				   alt={recipe.recipe.label}
				   boxSize={"100%"}
				   objectFit={"cover"}
				   borderTopRadius={"xl"}/>
			</CardHeader>
			{/* Recipe Details*/}
			<CardBody p={5}>
				{/* Meal Type */}
				<Text fontSize={"xs"} color={"gray"} textTransform="uppercase">
					{recipe.recipe.mealType}
				</Text>
				{/* Recipe Name */}
				<Heading fontSize={"lg"} fontWeight={"medium"} mb={1}>
					{recipe.recipe.label}
				</Heading>
				{/* Recipe Health Labels */}
				{recipe.recipe.healthLabels.includes("Vegetarian") ||
				recipe.recipe.healthLabels.includes("Vegan") ? (
					<Flex justifyContent={"center"} wrap={"wrap"} gap={2} mb={2}>
						{recipe.recipe.healthLabels.map((healthLabel) => {
							if (healthLabel === "Vegetarian" || healthLabel === "Vegan") {
								return (
									<>
									<Text
									  fontSize={"xs"}
									  textTransform={"uppercase"}
									  as={"mark"}
									  bg={"purple.100"}
									  px={1}>
									  {healthLabel}
									</Text>
									</>
								);
							}
							return null;
						})}
					</Flex>
				) : null}
				{/* Recipe Diet Labels */}
				<Flex justifyContent={"center"} wrap={"wrap"} gap={2}>
					{recipe.recipe.dietLabels.map((dietLabel) => {
						return (
							<>
							 <Text
							 fontSize={"xs"}
							 textTransform={"uppercase"}
							 as={"mark"}
							 bg={"green.100"}
							 px={1}>
							 {dietLabel}
							 </Text>
							</>
						);
					})}
				</Flex>
				{/* Dish Type */}
				<Flex justifyContent={"center"} mt={2}>
					<Text color={"gray"}>Dish: </Text>
					<Text textTransform={"capitalize"} px={1}>
						{recipe.recipe.dishType}
					</Text>
				</Flex>
				{/* Cautions */}
				{recipe.recipe.cautions.length > 0 ? (
					<>
						<Text color={"gray"} mb={1}>
							Cautions:
						</Text>
						<Flex justifyContent={"center"} wrap={"wrap"} gap={2}>
							{recipe.recipe.cautions.map((caution) => (
								<Text
								 key={caution}
								 fontSize={"xs"}
								 textTransform={"uppercase"}
								 as={"mark"}
								 bg={"red.100"}
								 px={1}>
								 {caution}
								</Text>
							))}
						</Flex>
					</>
				) : null}
			</CardBody>
		</Card>
	);
};
