
import React from 'react';
import PropTypes from 'prop-types';

const GoodsCard = ({ name, price, image }) => {
  return (
    <div className="goods-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Ціна: ${price}</p>
    </div>
  );
};

GoodsCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default GoodsCard;
