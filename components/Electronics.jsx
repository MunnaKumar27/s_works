import React from 'react';

const Electronics = ({ cards }) => {
  return (
    <div className="flex overflow-x-auto max-w-full">
      {cards.map((card, index) => (
        <div key={index} className="flex-shrink-0 w-40 h-42 rounded-lg mx-7">
          <img src={card.image} alt={card.title} className="w-60 h-44 object-cover rounded-md" />
          <div className="mt-4">
            <p className="w-134 h-30 font-poppins font-bold text-center leading-[150%]">
              {card.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Electronics;
