import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function AddToCartForm({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddToCart(product, quantity);
  };
  useEffect(() => {
    const priceWithoutCurrency = Number(
      product.price.replace(/[^0-9.-]+/g, "")
    );
    setTotalPrice(priceWithoutCurrency * quantity);
  }, [product.price, quantity]);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalPrice);

  return (
    
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-[700px] h-[350px] mx-auto mt-8 p-4 rounded border shadow hover:scale-105 duration-300 border-orange-600"
    >
      <h2 className="text-orange-600 font-bold text-2xl text-center mt-4">
        {product.name}
      </h2>
      <p>Price: {formattedPrice}</p>
      <label className="block font-bold mb-2">
        Quantity:
        <input
          className="border border-gray-400 p-2 rounded w-full mt-2"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </label>
      <div className="flex">
        <button
          className="border-orange-600 hover:bg-orange-600 hover:text-white p-1 rounded-xl border-2 mt-16 w-[150px] h-[60px]"
          type="submit"
        >
          Add to Cart
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-[250px] h-[140px] object-cover rounder-t-lg mx-auto mr-2 mt-[-3px]"
        />
      </div>
    </form>
  );
}

AddToCartForm.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default AddToCartForm;
