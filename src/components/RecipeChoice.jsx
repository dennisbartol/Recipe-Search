import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export const RecipeChoice = ({ recipe, onClick }) => {
  return (
    <Center>
      <Box
        w={{ base: "100%", md: "80%", xl: "50%" }}
        h={"minHeight: 100vh"}
        backgroundColor={"Cornsilk"}>
		
        {/* The top-left arrow symbol, to return to main-index.jsx */}
        <Flex>
          <IconButton
            m={4}
            justifyContent={"left"}
            aria-label="Back"
            size={{ base: "sm", md: "md" }}
            icon={<ChevronLeftIcon boxSize={10} />}
			backgroundColor={"Cornsilk"}
            transition="transform 0.2s"
            _hover={{
              transform: "scale(1.3)"
            }}
            _hover-off={{
              transform: "scale(1)",
            }}
            onClick={() => onClick(onClick)}/>
        </Flex>
        {/* Recipe Image */}
        <Box w={"100%"} h={"180px"} mb={"4"}>
          <Image
            src={recipe.recipe.image}
            alt={recipe.label}
            boxSize={"100%"}
            objectFit={"cover"}/>
        </Box>
        {/* Recipe Details*/}
        <SimpleGrid columns={2} spacing={1} mb={4}>
          {/* Left Column */}
          <Container textAlign={"left"} mx={(0, 4)}>
            {/* Meal Type */}
            <Text
             fontSize={"xs"}
             fontWeight={"bold"}
             textTransform={"uppercase"}
             color={"gray.500"}>
             {recipe.recipe.mealType}
            </Text>
            {/* Recipe Name */}
            <Heading fontSize={"lg"} fontWeight={"medium"} mb={2}>
              {recipe.recipe.label}
            </Heading>
            {/* Cooking Time */}
            <Flex fontSize={"sm"}>
             <Text color={"blackAlpha.700"}>Total cooking time:</Text>
             <Text mx={1}>{recipe.recipe.totalTime}</Text>
             <Text>Minutes</Text>
            </Flex>
            {/* Number of Servings */}
            <Flex fontSize={"sm"} mb={2}>
             <Text color={"blackAlpha.700"}>Servings:</Text>
             <Text mx={1}>{recipe.recipe.yield}</Text>
            </Flex>
            {/* Ingredients */}
            <Text mb={1} fontWeight={"semibold"}>
             Ingredients:
            </Text>
            {recipe.recipe.ingredientLines.map((ingredient) => {
              return (
                <>
                 <Text fontSize={"sm"} color={"blackAlpha.700"}>
                   {ingredient}
                 </Text>
                </>
              );
            })}
          </Container>
          {/* Column Right */}
          <Container textAlign={"left"} mx={(4, 0)}>
            {/* Health Labels */}
            <Text fontSize={"sm"} color={"blackAlpha.700"}>
              Health Labels:
            </Text>
            <Flex wrap={"wrap"} gap={"2"} mb={1}>
              {recipe.recipe.healthLabels.map((healthLabel) => {
                return (
                  <>
                    <Text
                      fontSize={{ base: "xs", md: "sm" }}
                      fontWeight={"medium"}
                      textTransform={"uppercase"}
                      as={"mark"}
                      bg={"purple.100"}
                      px={1}>
                      {healthLabel}
                    </Text>
                  </>
                );
              })}
            </Flex>
            {/* Diet Labels */}
            {recipe.recipe.dietLabels.length > 0 ? (
              <>
                <Text fontSize={"sm"} color={"blackAlpha.700"}>
                  Diet:
                </Text>
                <Flex wrap={"wrap"} gap={2}>
                  {recipe.recipe.dietLabels.map((dietLabel) => {
                    return (
                      <>
                        <Text
                          fontSize={{ base: "xs", md: "sm" }}
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
              </>
            ) : null}
            {/* Cautions */}
            {recipe.recipe.cautions.length > 0 ? (
              <>
                <Text fontSize={"sm"} color={"blackAlpha.700"}>
                  Cautions:
                </Text>
                <Flex wrap={"wrap"} gap={2}>
                  {recipe.recipe.cautions.map((caution) => {
                    return (
                      <>
                        <Text
                          fontSize={{ base: "xs", md: "sm" }}
                          textTransform={"uppercase"}
                          as={"mark"}
                          bg={"red.100"}
                          px={1}>
                          {caution}
                        </Text>
                      </>
                    );
                  })}
                </Flex>
              </>
            ) : null}
            {/* Total Nutrients */}
            <Text fontSize={"sm"} fontWeight={"semibold"}>
              TotalNutrients:
            </Text>
            <Flex
              wrap={"wrap"}
              gap={2}
              mb={4}
              fontSize={"xs"}
              color={"blackAlpha.700"}>
              <div>
                <Text>
                  {Math.floor(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)}
                </Text>
                <Text>CALORIES</Text>
              </div>
              <div>
                <Text>
                  {Math.floor(recipe.recipe.totalNutrients.CHOCDF.quantity)}
                  {recipe.recipe.totalNutrients.CHOCDF.unit}
                </Text>
                <Text>CARBS</Text>
              </div>
              <div>
                <Text>
                  {Math.floor(recipe.recipe.totalNutrients.PROCNT.quantity)}
                  {recipe.recipe.totalNutrients.PROCNT.unit}
                </Text>
                <Text>PROTEIN</Text>
              </div>
              <div>
                <Text>
                  {Math.floor(recipe.recipe.totalNutrients.FAT.quantity)}
                  {recipe.recipe.totalNutrients.FAT.unit}
                </Text>
                <Text>FAT</Text>
              </div>
              <div>
                <Text>
                  {Math.floor(recipe.recipe.totalNutrients.FIBTG.quantity)}
                  {recipe.recipe.totalNutrients.CHOLE.unit}
                </Text>
                <Text>CHOLESTEROL</Text>
              </div>
              <div>
                <Text>
                  {Math.floor(recipe.recipe.totalNutrients.NA.quantity)}
                  {recipe.recipe.totalNutrients.NA.unit}
                </Text>
                <Text>SODIUM</Text>
              </div>
            </Flex>
          </Container>
        </SimpleGrid>
      </Box>
    </Center>
  );
};
