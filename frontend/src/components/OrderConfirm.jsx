import React, { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import axios from "axios";

const OrderConfirmation = () => {
  const [invoiceData, setInvoiceData] = useState(null);

  useEffect(() => {
    // Simulate fetching order info after successful payment
    const order = {
      orderId: "ORD-" + Math.floor(Math.random() * 1000000),
      customer: "John Doe",
      email: "johndoe@gmail.com",
      date: new Date().toLocaleString(),
      items: [
        { name: "Paracetamol 500mg", qty: 2, price: 50 },
        { name: "Amoxicillin 250mg", qty: 1, price: 120 },
      ],
      total: 220,
      paymentMethod: localStorage.getItem("paymentMethod") || "Stripe",
    };
    setInvoiceData(order);
  }, []);

  const downloadInvoice = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/invoice",
        invoiceData,
        { responseType: "blob" }
      );
      const blob = new Blob([response.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `Invoice_${invoiceData.orderId}.pdf`;
      link.click();
    } catch (error) {
      console.error("Error generating invoice:", error);
    }
  };

  if (!invoiceData) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl text-center">
        <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
        <h2 className="text-2xl font-bold text-gray-800">
          Payment Successful 🎉
        </h2>
        <p className="text-gray-500 mb-6">
          Thank you for your order, {invoiceData.customer}! Your payment via{" "}
          <strong>{invoiceData.paymentMethod}</strong> was successful.
        </p>

        <div className="text-left bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-sm font-semibold">
            Order ID: {invoiceData.orderId}
          </p>
          <p className="text-sm text-gray-600">Date: {invoiceData.date}</p>
          <p className="text-sm text-gray-600">Email: {invoiceData.email}</p>
        </div>

        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b text-left text-gray-600">
              <th>Item</th>
              <th>Qty</th>
              <th>Price (NPR)</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-right text-lg font-semibold mb-6">
          Total: NPR {invoiceData.total}
        </div>

        <button
          onClick={downloadInvoice}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md"
        >
          Download Invoice (PDF)
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
