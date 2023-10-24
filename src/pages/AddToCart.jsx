import { useLocation } from "react-router-dom";
import AddToCartForm from "../components/addToCartForm";

function AddToCart() {
  const location = useLocation();
  const { item } = location.state;
  console.log("item", item);

  const handleAddToCart = (product, quantity) => {

    console.log(
      `Adding ${quantity} of ${product.name} to cart`
    );
  };

  return (
    <div>
      
      <AddToCartForm product={item} onAddToCart={handleAddToCart} />
    </div>
  );
}
export default AddToCart;
