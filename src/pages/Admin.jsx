import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  return (
    <section id="adminPage">
      <div className="container">
        <div className="row ">
          <div className="col-12 text-center">
            <h1>Admin Panel</h1>
          </div>
        </div>
        <div className="row ">
         <div className="navigationButtons">
         <button
            onClick={() => {
              navigate("/admin");
            }}
          >
            Products
          </button>
          <button
            onClick={() => {
              navigate("/admin/add");
            }}
          >
            Add
          </button>
         </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Admin;
