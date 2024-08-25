// src/components/RecipeDetails.jsx
import { useRecipeStore } from '../recipeStore';
import { useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId, 10))
  );

  return (
    <div>
      {recipe && (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <EditRecipeForm recipeId={recipe.id} />
          <DeleteRecipeButton recipeId={recipe.id} />
        </>
      )}
    </div>
  );
};

export default RecipeDetails;