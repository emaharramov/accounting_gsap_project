import React from 'react';

const StateAffairImage = ({ image }) => {
  return (
    <div className="h-[193px]">
      <img
        src={image}
        alt={image}
        className="h-full object-cover rounded-[40px]"
      />
    </div>
  );
};

export default StateAffairImage;