import React from "react";

const Grid = ({productImages}) => {
    return (
      <div
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        data-aos='fade-up'
        data-aos-offset='400'
        data-aos-delay='500'
      >
        {productImages.map((productImage, index) => (
          <div key={index} className="flex justify-center">
            <div className="w-full h-64 sm:h-auto shadow-2xl">
              <img
                src={productImage.image}
                alt={`Product ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
  );
};

export default Grid;
