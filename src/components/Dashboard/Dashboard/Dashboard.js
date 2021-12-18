import React from "react";
import "./Dashboard.css";

import useFirebase from "../../Hooks/useFirebase";
import { Link, Outlet } from "react-router-dom";
// import DashBoardHome from "../DashboardHome/DashBoardHome";

const Dashboard = () => {
  const { admin, logOut } = useFirebase();
  return (
    <div className="dash-container">
      <h1 className="dashbord">Dashboard</h1>
      <div className="row dash-body">
        <div className="col-4  dash-link-container ">
          <div className="dash-link">
            <Link to="/home">
              {" "}
              <img
                className="desh-logo"
                src="https://i.ibb.co/2vL4tSR/logo0-removebg-preview.png"
                alt=""
              />
            </Link>
            <div className="route-link">
              <Link to="/dashboard">Dashboard</Link>
              {!admin ? (
                <div className="usePannel">
                  <Link to="/dashboard/pay">Payment</Link>
                  <Link to="/dashboard/Order">My Order</Link>
                  <Link to="/dashboard/revirew">Review</Link>
                </div>
              ) : (
                <div className="adminPannel">
                  <Link to="/dashboard/makeAdmin">Make Admin</Link>
                  <Link to="/dashboard/addWatch">Add Watch</Link>

                  <Link to="/dashboard/ManageWatches">Manage Watch</Link>
                  <Link to="/dashboard/manageOrders">Manage Orders</Link>
                </div>
              )}
              <Link to="/login">
                <button className="log-out" onClick={logOut}>
                  Log Out
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
