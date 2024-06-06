import React, { useState } from 'react';
import { RxArrowTopRight } from 'react-icons/rx';

const FlippingCard = ({ backgroundImage,head,option1,option2,option3,option4,option5 }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`relative flex flex-col gap-6 mb-20 group shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${
        isFlipped ? 'rotate-y-180' : ''
      }`}
      onClick={handleClick}
    >
      <div className={`absolute inset-0 backface-hidden ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black opacity-10" />
      </div>
      {isFlipped && (
        <div className="absolute inset-0 flex pl-20 justify-center mt-4 transform rotate-y-360">
          <div className="p-4 text-black" style={{ transform: 'rotateY(180deg)' }}>
          <h2 className="text-2xl font-bold">{head}</h2>
          <p className="mt-4">{option1}</p>
          <p className="mt-2">{option2}</p>
          <p className="mt-2">{option3}</p>
          <p className="mt-2">{option4}</p>
          <p className="mt-2">{option5}</p>
          </div>
        </div>
        
      )}
      <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-orange-500 group-hover:rotate-45 duration-100" />
    </div>
  );
};

export default FlippingCard;
