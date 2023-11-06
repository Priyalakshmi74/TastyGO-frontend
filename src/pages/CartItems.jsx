import React, { useEffect, useState } from 'react';

function YourComponent() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetItems = async () => {
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/items');

      if (!response.ok) {
        throw new Error('Failed to fetch data');
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
    console.log('itemID', itemID);
    try {
      const response = await fetch(`http://localhost:8080/items/${itemID}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete item');
      }

      handleGetItems();
    } catch (error) {
      console.error(error);
    }
  };
 
  return (
    <div className="container mx-auto p-4">
        <h2>Cart Items</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600" onClick={handleGetItems} disabled={loading}>Show Cart Items</button>
      <h2 className="text-3xl font-semibold mb-4">Shopping Cart</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
     { console.log("cartItems", cartItems)}
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white border rounded-lg p-4">
            <div className="flex justify-between mb-2">
              <img
                src={item.imageUrl}
                alt={item.itemName}
                className="w-20 h-20 object-contain"
              />
              <button className="text-red-500 hover:text-red-700" onClick={() => handleDeleteItem(item.itemId)}>
                Remove
              </button>
            </div>
            <h3 className="text-lg font-semibold">Item ID: {item.itemId}</h3> 
            <h3 className="text-lg font-semibold">{item.itemName}</h3>
            <p className="text-gray-600">Price: ${item.priceOfItem.toFixed(2)}</p>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
            <p className="text-gray-600">Total: ${item.totalOfItem.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <p className="text-xl font-semibold">Total: ${cartItems.reduce((total, item) => total + item.totalOfItem, 0).toFixed(2)}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}


export default YourComponent;

