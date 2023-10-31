import React, { useState } from 'react';

export default function SearchBar({ recipes, onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (searchText.trim() === '') {
      // Se o campo de pesquisa estiver vazio, exiba todas as receitas
      onSearch(recipes);
    } else {
      const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchText.toLowerCase())
      );
      onSearch(filteredRecipes);
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center mb-4">
      <div className="flex">
        <input
          type="text"
          placeholder="Pesquisar receitas..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={handleKeyPress}
          className="bg-gray-200 border-2 border-gray-300 rounded-full py-2 px-4 w-64 sm:w-64 focus:outline-none focus:ring focus:border-green-500"
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 text-white px-4 py-2 rounded-full ml-2 hover:bg-green-600 transition-all duration-300"
        >
          Pesquisar
        </button>
      </div>
    </div>
  );
}
