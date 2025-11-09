import React, { useState } from "react";

const MedicineForm = ({ addMedicine }) => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    quantity: "",
    batch: "",
    expiry: "",
    manufacturer: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMed = { ...form, id: Date.now() };
    addMedicine(newMed);
    setForm({
      name: "",
      category: "",
      quantity: "",
      batch: "",
      expiry: "",
      manufacturer: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "1rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "10px",
      }}
    >
      <input
        name="name"
        placeholder="Medicine Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={form.quantity}
        onChange={handleChange}
        required
      />
      <input
        name="batch"
        placeholder="Batch Number"
        value={form.batch}
        onChange={handleChange}
      />
      <input
        type="date"
        name="expiry"
        value={form.expiry}
        onChange={handleChange}
        required
      />
      <input
        name="manufacturer"
        placeholder="Manufacturer"
        value={form.manufacturer}
        onChange={handleChange}
      />
      <button style={{ gridColumn: "span 2" }}>Add Medicine</button>
    </form>
  );
};

export default MedicineForm;
