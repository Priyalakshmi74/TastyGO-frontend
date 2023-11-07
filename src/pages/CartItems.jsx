import React, { useEffect, useState } from "react";

function YourComponent() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetItems = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/items");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleDeleteItem = async (itemID) => {
    console.log("itemID", itemID);
    try {
      const response = await fetch(`http://localhost:8080/items/${itemID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete item");
      }

      handleGetItems();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2>Cart Items</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600"
        onClick={handleGetItems}
        disabled={loading}
      >
        Show Cart Items
      </button>
      <h2 className="text-3xl font-semibold mb-4">Shopping Cart</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white border rounded-lg">
            <div className="flex justify-between mb-2">
              <img
                src={item.imageURL}
                alt={item.itemName}
                className="w-80 h-80 object-cover rounded-lg ml-1 mt-4 ml-[10%]"
              />
            </div>

            <h3 className="text-lg font-bold mb-2 ml-[30%]">{item.itemName}</h3>
            <div className="m-2">
              <p className="text-gray-600">
                Price: ${item.priceOfItem.toFixed(2)}
              </p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-gray-600">
                Total: ${item.totalOfItem.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between m-2">
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDeleteItem(item.itemId)}
              >
                Edit
              </button>

              <button
                className="text-red-500 hover:text-red-700 ml-[70%]"
                onClick={() => handleDeleteItem(item.itemId)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <p className="text-xl font-semibold">
          Total: $
          {cartItems
            .reduce((total, item) => total + item.totalOfItem, 0)
            .toFixed(2)}
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default YourComponent;
