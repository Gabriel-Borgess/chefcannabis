"use client"
import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Header from '../components/Header';
import RecipesCard from '../components/RecipesCard';
import RecipesPopup from '../components/RecipesPopup';
import Footer from '../components/Footer';

import recipesData from '../app/data/recipes.json';

export default function Home() {
  const [recipes, setRecipes] = useState(recipesData);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleClosePopup = () => {
    setSelectedRecipe(null);
  };
  const openFavoritesPopup = () => {
    setShowFavoritesPopup(true);
  };

  return (
    <div>
       <Navbar openFavoritesPopup={openFavoritesPopup} />
      <Header recipesData={recipesData} setRecipes={setRecipes} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipesCard
            key={recipe.id}
            recipe={recipe}
            onClick={handleRecipeClick} // Passar a propriedade onClick corretamente
          />
        ))}
      </div>
      {selectedRecipe && (
        <RecipesPopup recipe={selectedRecipe} onClose={handleClosePopup} />
      )}
      
      <Footer />
    </div>
  );
}
