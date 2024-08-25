// src/components/EditRecipeForm.jsx
import { useState } from 'react';
import useRecipeStore from '../recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === recipeId));
  const [title, setTitle] = useState(recipe ? recipe.title : '');
  const [description, setDescription] = useState(recipe ? recipe.description : '');

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(recipeId, { title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;