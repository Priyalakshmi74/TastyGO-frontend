import { useLocation,useNavigate } from "react-router-dom";
import { useState } from "react";
import AddToCartForm from "../components/addToCartForm";


function AddToCart() {
    const location = useLocation();
    const navigate = useNavigate();
    const { item } = location.state;
    const [totalPrice, setTotalPrice] = useState(item.price);

    const handleAddToCart = async (product, price,quantity, totalPrice) => {
        setTotalPrice(totalPrice);
        const formattedPrice = `$${price}`;
        const sanitizedPrice = formattedPrice.replace(/[^0-9.]/g, '');
        const numericPrice = parseFloat(sanitizedPrice);
        console.log(
                `Adding ${quantity} of ${product.name} to cart`
        );
        try {
            const response = await fetch('http://localhost:8080/items/add-to-cart', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                itemName: product.name,    
                priceOfItem: numericPrice, 
                quantity: quantity,
                totalOfItem: totalPrice,
              }),
            });
            console.log("response", response);
          
            if (!response.ok) {
              throw new Error('Failed to make the API call');
            } else {
              alert("Item added to cart successfully");
              navigate('/');
            }
          
          } catch (error) {
            console.error(error);
          }
    };          
    return (
        <div>
            <AddToCartForm product={item} onAddToCart={handleAddToCart} />
        </div>
    );
}
export default AddToCart;
