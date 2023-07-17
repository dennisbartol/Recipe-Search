import { RecipeCard } from "./RecipeCard";

export const RecipeCards = ({ recipes, onClick }) => {
	return (
		<>
			{recipes.map((recipe) => {
				return (
					<RecipeCard
					  recipe={recipe}
					  key={Math.random().toString(36).substring(2, 22)}
					  onClick={onClick}/>
				);
			})}
		</>
	);
};
