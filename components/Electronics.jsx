
import React from 'react';

const Electronics = ({ cards }) => {
  return (
    <div className="flex overflow-x-auto max-w-full">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-40 h-42 bg-white rounded-lg shadow-md mx-4 p-4"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-20 object-cover rounded-md"
          />
          <div className="mt-4">
            <p className="text-lg font-bold">{card.title}</p>
            <p className="text-gray-500 text-sm">{card.bottomName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Electronics;

