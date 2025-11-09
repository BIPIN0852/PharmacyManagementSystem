import React, { useEffect, useState } from "react";
import MedicineForm from "../components/MedicineForm";
import MedicineTable from "../components/MedicineTable";

const Inventory = () => {
  const [medicines, setMedicines] = useState([]);

  // Load existing medicines from backend (simulate or connect API)
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("medicines")) || [];
    setMedicines(stored);
  }, []);

  const saveToStorage = (data) => {
    localStorage.setItem("medicines", JSON.stringify(data));
  };

  const addMedicine = (newMed) => {
    const updated = [...medicines, newMed];
    setMedicines(updated);
    saveToStorage(updated);
  };

  const deleteMedicine = (id) => {
    const updated = medicines.filter((m) => m.id !== id);
    setMedicines(updated);
    saveToStorage(updated);
  };

  const updateMedicine = (updatedMed) => {
    const updated = medicines.map((m) =>
      m.id === updatedMed.id ? updatedMed : m
    );
    setMedicines(updated);
    saveToStorage(updated);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>💊 Inventory Management</h2>
      <MedicineForm addMedicine={addMedicine} />
      <MedicineTable
        medicines={medicines}
        deleteMedicine={deleteMedicine}
        updateMedicine={updateMedicine}
      />
    </div>
  );
};

export default Inventory;
