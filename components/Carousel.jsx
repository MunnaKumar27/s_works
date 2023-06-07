import React from 'react';

const Carousel = ({ data }) => {
  return (
    <div className="carousel flex overflow-x-auto overflow-y-hidden">
      {data.map((item, index) => (
        <div
          className="carousel-item flex-none mr-4 mx-4 relative"
          key={index}
        >
          <div
            className="carousel-image mx-4"
            style={{
              backgroundImage: `url(${item.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '210px',
              width: '208px',
              borderRadius: '0px',
              zIndex: 1,
            }}
          />

          <div
            className="carousel-details bg-white mx-4 p-4 relative -bottom- left-2 right-2 -mt-10 z-10"
            style={{
              height: '85px',
              width: '176px',
              boxShadow: '0px 4px 10px rgba(116, 116, 116, 0.1)',
            }}
          >
            <div className="carousel-title">
              <h4 className="text-black text-lg font-semibold mb-2">
                {item.title}
              </h4>
            </div>
            <div className="carousel-description">
              <p className="text-black text-sm">{item.description}</p>
            </div>
            {/* Add more details as needed */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
