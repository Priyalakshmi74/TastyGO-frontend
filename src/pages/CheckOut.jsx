import React, { useState } from "react";

function CheckoutPage({ cartTotal }) {
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const [cardNumberError, setCardNumberError] = useState("");
  const [amount, setAmount] = useState(cartTotal); // Initialize with cart total

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });

    if (name === "cardNumber") {
      validateCardNumber(value);
    }

    if (name === "amount") {
      const numericAmount = parseFloat(value.replace(/[^0-9.]/g, ""));
      setAmount(numericAmount);
    }
  };

  const validateCardNumber = (cardNumber) => {
    const cardNumberDigits = cardNumber.replace(/\D/g, "");
    if (cardNumberDigits.length === 16) {
      setCardNumberError("");
    } else {
      setCardNumberError("Card number must be 16 digits long");
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    console.log("Processing payment...");
    alert("Payment successful!");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <form onSubmit={handlePayment} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={billingInfo.name}
            onChange={handleInputChange}
            required
            className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400"
          />
        </div>


        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-600">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={billingInfo.cardNumber}
            onChange={handleInputChange}
            required
            className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-red-500 text-sm mt-1">{cardNumberError}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="expDate" className="block text-sm font-medium text-gray-600">
            Expiration Date
          </label>
          <input
            type="text"
            id="expDate"
            name="expDate"
            value={billingInfo.expDate}
            onChange={handleInputChange}
            required
            placeholder="MM/YY"
            className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cvv" className="block text-sm font-medium text-gray-600">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={billingInfo.cvv}
            onChange={handleInputChange}
            required
            className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-600">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={amount > 0 ? `$${amount.toFixed(2)}` : ""}
            onChange={handleInputChange}
            required
            className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
        >
          Process Payment
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;
