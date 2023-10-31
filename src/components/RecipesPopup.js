import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

const RecipesPopup = ({ recipe, onClose, handleShare }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70"
      onClick={handleOverlayClick}
    >
      <div className="fixed top-16 w-4/5 md:w-3/5 h-4/5 overflow-y-auto bg-white rounded-lg shadow-lg z-50">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl text-gray-700 hover:text-red-600"
        >
          &times;
        </button>
        <div className="relative h-60 md:h-80 overflow-hidden rounded-t-lg">
          <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-semibold mb-2">{recipe.title}</h2>
          <p className="text-gray-600 my-4">{recipe.description}</p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Ingredientes:</h3>
            <ul className="list-disc pl-6">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Instruções:</h3>
            <ol className="list-decimal pl-6">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleShare(recipe)}
                className="flex items-center text-blue-500 hover:text-blue-700"
              >
                <FontAwesomeIcon icon={faShare} className="mr-2" /> Compartilhar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesPopup;
