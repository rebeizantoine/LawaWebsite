import React from "react";
import "./orderdash.css"; // Make sure to create and import a CSS file for styling

const OrderDash = () => {
  return (
    <div className="order-dash">
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="app-icon">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M507.606 371.054a187.217 187.217 0 00-23.051-19.606c-17.316 19.999-37.648 36.808-60.572 50.041-35.508 20.505-75.893 31.452-116.875 31.711 21.762 8.776 45.224 13.38 69.396 13.38 49.524 0 96.084-19.286 131.103-54.305a15 15 0 004.394-10.606 15.028 15.028 0 00-4.395-10.615zM27.445 351.448a187.392 187.392 0 00-23.051 19.606C1.581 373.868 0 377.691 0 381.669s1.581 7.793 4.394 10.606c35.019 35.019 81.579 54.305 131.103 54.305 24.172 0 47.634-4.604 69.396-13.38-40.985-.259-81.367-11.206-116.879-31.713-22.922-13.231-43.254-30.04-60.569-50.039zM103.015 375.508c24.937 14.4 53.928 24.056 84.837 26.854-53.409-29.561-82.274-70.602-95.861-94.135-14.942-25.878-25.041-53.917-30.063-83.421-14.921.64-29.775 2.868-44.227 6.709-6.6 1.576-11.507 7.517-11.507 14.599 0 1.312.172 2.618.512 3.885 15.32 57.142 52.726 100.35 96.309 125.509zM324.148 402.362c30.908-2.799 59.9-12.454 84.837-26.854 43.583-25.159 80.989-68.367 96.31-125.508.34-1.267.512-2.573.512-3.885 0-7.082-4.907-13.023-11.507-14.599-14.452-3.841-29.306-6.07-44.227-6.709-5.022 29.504-15.121 57.543-30.063 83.421-13.588 23.533-42.419 64.554-95.862 94.134zM187.301 366.948c-15.157-24.483-38.696-71.48-38.696-135.903 0-32.646 6.043-64.401 17.945-94.529-16.394-9.351-33.972-16.623-52.273-21.525-8.004-2.142-16.225 2.604-18.37 10.605-16.372 61.078-4.825 121.063 22.064 167.631 16.325 28.275 39.769 54.111 69.33 73.721zM324.684 366.957c29.568-19.611 53.017-45.451 69.344-73.73 26.889-46.569 38.436-106.553 22.064-167.631-2.145-8.001-10.366-12.748-18.37-10.605-18.304 4.902-35.883 12.176-52.279 21.529 11.9 30.126 17.943 61.88 17.943 94.525.001 64.478-23.58 111.488-38.702 135.912zM266.606 69.813c-2.813-2.813-6.637-4.394-10.615-4.394a15 15 0 00-10.606 4.394c-39.289 39.289-66.78 96.005-66.78 161.231 0 65.256 27.522 121.974 66.78 161.231 2.813 2.813 6.637 4.394 10.615 4.394s7.793-1.581 10.606-4.394c39.248-39.247 66.78-95.96 66.78-161.231.001-65.256-27.511-121.964-66.78-161.231z"
              ></path>
            </svg>
          </div>
        </div>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a href="/index.html">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-home"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span>Home</span>
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="/Products.html">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-shopping-bag"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span>Products</span>
            </a>
          </li>
          <li className="sidebar-list-item active">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-file-text"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <line x1="10" y1="9" x2="8" y2="9"></line>
              </svg>
              <span>Orders</span>
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-settings"
              >
                <path d="M19.14 12.936a1 1 0 0 0 0-1.872l-1.6-.924a1 1 0 0 0-1.26.362l-.712 1.236a1 1 0 0 0-1.104.575l-.537 1.083a1 1 0 0 0 .35 1.206l1.563.904a1 1 0 0 0 1.213-.293l.638-1.075a1 1 0 0 0 .095-1.099zM4.86 12.936a1 1 0 0 1 0-1.872l1.6-.924a1 1 0 0 1 1.26.362l.712 1.236a1 1 0 0 1 1.104.575l.537 1.083a1 1 0 0 1-.35 1.206l-1.563.904a1 1 0 0 1-1.213-.293l-.638-1.075a1 1 0 0 1-.095-1.099zM15.262 4.924a1 1 0 0 0 .641-1.175l-.515-1.63a1 1 0 0 0-1.18-.641l-1.458.455a1 1 0 0 0-.638 1.186l.137.549a1 1 0 0 0 1.126.703l1.316-.356a1 1 0 0 0 .674-.679zM7.738 19.068a1 1 0 0 1-.641 1.175l.515 1.63a1 1 0 0 1 1.18.641l1.458-.455a1 1 0 0 1 .638-1.186l-.137-.549a1 1 0 0 1-1.126-.703l-1.316.356a1 1 0 0 1-.674.679zM15.262 19.068a1 1 0 0 1-.641 1.175l.515 1.63a1 1 0 0 1 1.18.641l1.458-.455a1 1 0 0 1 .638-1.186l-.137-.549a1 1 0 0 1-1.126-.703l-1.316.356a1 1 0 0 1-.674.679zM7.738 4.924a1 1 0 0 0-.641-1.175l-.515-1.63a1 1 0 0 0-1.18-.641l-1.458.455a1 1 0 0 0-.638 1.186l.137.549a1 1 0 0 0 1.126.703l1.316-.356a1 1 0 0 0 .674-.679z"></path>
              </svg>
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="content">
        <h1>Order Dashboard</h1>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* Example data - replace with dynamic data */}
              <tr>
                <td>12345</td>
                <td>2024-08-25</td>
                <td>John Doe</td>
                <td>Shipped</td>
                <td>$250.00</td>
              </tr>
              <tr>
                <td>12346</td>
                <td>2024-08-26</td>
                <td>Jane Smith</td>
                <td>Processing</td>
                <td>$150.00</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDash;
