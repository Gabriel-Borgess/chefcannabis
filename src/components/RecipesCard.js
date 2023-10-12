import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

const RecipesCard = ({ recipe, onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Você pode adicionar lógica aqui para salvar ou remover a receita dos favoritos.
  };

  const handleShare = () => {
    // Implemente a lógica para compartilhar a receita.
    alert(`Compartilhando a receita: ${recipe.title}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg mb-4 ml-2 cursor-pointer hover:shadow-xl transform hover:scale-105">
      <div
        className="relative overflow-hidden rounded-t-lg"
        onClick={() => onClick(recipe)}
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-52 object-cover"
        />
        <div className="absolute top-0 left-0 p-2 bg-green-500 text-white rounded-tr-lg">
          {recipe.category}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
        <p className="text-gray-600 mb-4">{recipe.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <button
              onClick={() => onClick(recipe)}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 hover:shadow"
            >
              Ver Receita
            </button>
          </div>
          <div>
            <button
              onClick={handleFavorite}
              className={`text-red-500 hover:text-red-700 mr-2 ${isFavorite ? 'text-red-700' : ''}`}
            >
              <FontAwesomeIcon icon={faHeart} /> Salvar
            </button>
            <button
              onClick={handleShare}
              className="text-blue-500 hover:text-blue-700"
            >
              <FontAwesomeIcon icon={faShare} /> Compartilhar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
