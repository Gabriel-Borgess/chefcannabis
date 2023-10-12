import React from 'react';
import Modal from 'react-modal';

function FavoritesPopup({ isOpen, onRequestClose, favoriteRecipes }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          width: '90%', // Ajuste o tamanho conforme necessário
          maxWidth: '600px', // Ajuste o tamanho máximo conforme necessário
          margin: 'auto',
          padding: '0',
          border: 'none',
        },
      }}
    >
      <div className="bg-white rounded-lg shadow-lg">
        <button
          onClick={onRequestClose}
          className="absolute top-4 right-4 text-white hover:text-red-600 text-4xl"
        >
          &times;
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-semibold">Suas Receitas Favoritas</h2>
          <ul>
            {favoriteRecipes.map((recipe, index) => (
              <li key={index}>
                <strong>{recipe.title}:</strong> {recipe.description}
              </li>
            ))}
          </ul>
          <button
            onClick={onRequestClose}
            className="mt-4 p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Fechar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default FavoritesPopup;
