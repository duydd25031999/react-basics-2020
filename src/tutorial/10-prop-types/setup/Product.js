import React from "react";
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg';

const Product = (props) => {
  const {image, name, price} = props
  const url = image && image.url

  console.log(props)

  return <article className="product">
    <h4>single product</h4>
    <img src={url || defaultImage} alt={name} />
    <h4>{name}</h4>
    <p>${price}</p>
  </article>;
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

Product.defaultProps = {
  name: 'default name',
  price: 3.99,
  image: false,
};

export default Product;
