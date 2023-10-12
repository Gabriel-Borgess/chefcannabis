import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
const RecipesPopup = ({ recipe, onClose }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = () => {
    if (rating === 0) {
      alert('Por favor, selecione uma avaliação antes de enviar o comentário.');
      return;
    }

    const newComment = {
      rating,
      text: comment,
    };

    setComments([...comments, newComment]);
    setRating(0);
    setComment('');
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70"
      onClick={handleOverlayClick}
    >
      <div className="fixed top-16 w-4/5 md:w-3/5 h-4/5 overflow-y-auto bg-white rounded-lg shadow-lg z-50">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-600 text-4xl"
        >
          &times;
        </button>
        <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-t-lg" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold">{recipe.title}</h2>
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
            <h3 className="text-xl font-semibold">Avaliação e Comentários:</h3>
            <div className="mt-4">
              <h4 className="text-lg font-semibold">Avaliação:</h4>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <label key={star} className="text-2xl text-yellow-400">
                    <input
                      type="radio"
                      name="rating"
                      value={star}
                      onClick={handleRatingChange}
                      checked={star === rating}
                    />
                    ★
                  </label>
                ))}
                <p className="ml-2">Avaliação: {rating} estrela(s)</p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold">Comentários:</h4>
              <textarea
                value={comment}
                onChange={handleCommentChange}
                className="w-full p-2 rounded-md border border-gray-300"
                rows={4}
              />
            </div>
            <button
              onClick={handleSubmitComment}
              className="mt-4 p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Enviar Comentário
            </button>
            <div className="mt-4">
              {comments.map((comment, index) => (
                <div key={index} className="border border-gray-300 p-2 rounded-md">
                  <p className="text-xl font-semibold">Avaliação: {comment.rating} estrela(s)</p>
                  <p>{comment.text}</p>
                </div>
              ))}
              <div className="mt-4">
  <div className="flex items-center">
    <button
      onClick={() => handleFavorite(recipe)}
      className="text-red-500 hover:text-red-700"
    >
      <FontAwesomeIcon icon={faHeart} /> Favoritar
    </button>
    <button
      onClick={() => handleShare(recipe)}
      className="text-blue-500 hover:text-blue-700 ml-4"
    >
      <FontAwesomeIcon icon={faShare} /> Compartilhar
    </button>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesPopup;
