import React, { useEffect } from "react";

const MedicineTable = ({ medicines, deleteMedicine, updateMedicine }) => {
  // Check for low stock or expiring soon
  useEffect(() => {
    const today = new Date();
    const soon = new Date();
    soon.setDate(today.getDate() + 30); // 30 days alert window

    medicines.forEach((m) => {
      const exp = new Date(m.expiry);
      if (parseInt(m.quantity) < 10) {
        alert(`⚠️ Low stock: ${m.name} (only ${m.quantity} left)`);
      }
      if (exp <= soon) {
        alert(`⚠️ ${m.name} expiring soon on ${m.expiry}`);
      }
    });
  }, [medicines]);

  return (
    <table
      border="1"
      cellPadding="8"
      style={{
        width: "100%",
        marginTop: "1.5rem",
        borderCollapse: "collapse",
        textAlign: "center",
      }}
    >
      <thead style={{ background: "#e0f7fa" }}>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Batch</th>
          <th>Quantity</th>
          <th>Expiry</th>
          <th>Manufacturer</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {medicines.length === 0 ? (
          <tr>
            <td colSpan="7">No medicines added yet.</td>
          </tr>
        ) : (
          medicines.map((m) => (
            <tr
              key={m.id}
              style={{
                background:
                  new Date(m.expiry) < new Date() ? "#ffebee" : "white",
              }}
            >
              <td>{m.name}</td>
              <td>{m.category}</td>
              <td>{m.batch}</td>
              <td>{m.quantity}</td>
              <td>{m.expiry}</td>
              <td>{m.manufacturer}</td>
              <td>
                <button
                  onClick={() => {
                    const newQty = prompt("Enter new quantity:", m.quantity);
                    if (newQty) updateMedicine({ ...m, quantity: newQty });
                  }}
                >
                  Edit
                </button>
                <button
                  style={{ marginLeft: "5px", color: "red" }}
                  onClick={() => deleteMedicine(m.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default MedicineTable;
