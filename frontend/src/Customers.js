import React, { useState, useEffect } from 'react';

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5001/Customers")
      .then(response => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setCustomers(data);
      })
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);

  return (
    <div>
      <h1>Customer Details</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.Id}>
              <td>{c.Id}</td>
              <td>{c.Name}</td>
              <td>{c.Age}</td>
              <td>{c.Item_Name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;