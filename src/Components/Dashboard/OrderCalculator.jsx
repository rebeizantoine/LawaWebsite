import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ordercalculator.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";

const OrderCalculator = () => {
  const [instaFollowers, setInstaFollowers] = useState(0);
  const [data123, setData123] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [updatedUser, setUpdatedUser] = useState({
    calculateName: "",
    calculatePrice: "",
  });
  const [currentEditId, setCurrentEditId] = useState(null); // For tracking which item is being edited
  const [showSidebar, setShowSidebar] = useState(false);

  // Fetch data from the backend
  const fetchData123 = async () => {
    try {
      const response = await axios.get("http://localhost:8000/calculate/");
      if (response.data.success) {
        setData123(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateThatData = async (id) => {
    try {
      const formData = new FormData();
      formData.append("calculateName", updatedUser.calculateName);
      formData.append("calculatePrice", updatedUser.calculatePrice);

      const response = await axios.put(
        `http://localhost:8000/calculate/update/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.success) {
        // Update the data123 state with the modified item
        const updatedData = data123.map((singleCalculate) =>
          singleCalculate._id === id
            ? { ...singleCalculate, ...response.data.data }
            : singleCalculate
        );
        setData123(updatedData);
        toast.success("Updated Successfully");
        setEditModal(false); // Close the modal after update
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  // Handle opening the edit modal
  const handleEdit = (item) => {
    setEditModal(true);
    setCurrentEditId(item._id);
    setUpdatedUser({
      calculateName: item.calculateName,
      calculatePrice: item.calculatePrice,
    });
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData123();
  }, []);

  const filterData = (searchTerm) => {
    return data123.filter(
      (item) =>
        item.calculateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.calculatePrice.toString().includes(searchTerm)
    );
  };
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <div className="order-calculator">
      <ToastContainer />
      <div className="lkoko">
        <button onClick={toggleSidebar} className="toggle-button">
          {showSidebar ? "Hide Sidebar" : "Show Sidebar"}
        </button>
        {showSidebar && <Sidebar />}
      </div>
      <h1>Order Calculator</h1>
      <div className="content" style={{ color: "brown" }}>
        {/* Input for Instagram Followers */}
        <div className="input-group">
          <label htmlFor="followers">Instagram Followers</label>
          <input
            id="followers"
            type="number"
            value={instaFollowers}
            onChange={(e) => setInstaFollowers(Number(e.target.value))}
            placeholder="Enter the number of followers"
          />
        </div>
        <div className="kokos">
          <div className="search-group">
            <input
              className="input-containerOfTheYear"
              id="search"
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search by name or price"
            />
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>SERVICE</th>
              <th>NAME</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filterData(searchInput).map((item, index) => (
              <tr key={index}>
                <td>{item.calculateName.split(" ")[0]}</td>
                <td>{item.calculateName.split(" ")[1]}</td>
                <td>{item.calculatePrice}</td>
                <td>
                  <button className="lokkoz">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* /////////////////////////////////////// */}
        {/* Edit Modal */}
        {editModal && (
          <div className="edit-modal">
            <h3>Edit Item</h3>
            <label htmlFor="edit-name">Calculate Name</label>
            <input
              id="edit-name"
              type="text"
              value={updatedUser.calculateName}
              onChange={(e) =>
                setUpdatedUser((prev) => ({
                  ...prev,
                  calculateName: e.target.value,
                }))
              }
            />
            <label htmlFor="edit-price">Calculate Price</label>
            <input
              id="edit-price"
              type="text"
              value={updatedUser.calculatePrice}
              onChange={(e) =>
                setUpdatedUser((prev) => ({
                  ...prev,
                  calculatePrice: e.target.value,
                }))
              }
            />
            <div className="modal-actions">
              <button onClick={() => updateThatData(currentEditId)}>
                Save Changes
              </button>
              <button onClick={() => setEditModal(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCalculator;
