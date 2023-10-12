import React, { useState } from 'react';

const Header = ({ recipesData, setRecipes }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { name: 'Todas as Receitas', emoji: '🍽️' },
    { name: 'Bolos', emoji: '🍰' },
    { name: 'Sobremesas', emoji: '🍨' },
    { name: 'Bebidas', emoji: '🍹' },
    { name: 'Pratos Principais', emoji: '🍲' },
    { name: 'Saladas', emoji: '🥗' },
    // Adicione mais categorias aqui com emojis
  ];

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setRecipes(recipesData);
    } else {
      setSelectedCategory(category);
      const filteredRecipes = category === "Todas as Receitas"
        ? recipesData
        : recipesData.filter((recipe) => recipe.category === category);
      setRecipes(filteredRecipes);
    }
  };

  return (
    <header className="bg-gradient-to-b from-green-400 to-green-00 py-12 header">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center text-white mb-4">Descubra Receitas Canábicas</h1>
        <p className="text-center text-lg text-white mb-6">
          Explore um mundo de sabores com um toque especial.
        </p>
        <div className="flex flex-col items-center space-y-2 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category.name
                  ? 'bg-green-500 text-white'
                  : 'bg-yellow-300 hover:bg-yellow-400 text-gray-800'
              }`}
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.emoji} {category.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
