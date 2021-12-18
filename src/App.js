import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Explore from "./components/Explore/Explore";
import Login from "./components/Login/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Register from "./components/Login/Register/Register";
import PlaceOrder from "./components/Login/PlaceOrder/PlaceOrder";
import Payment from "./components/Dashboard/User/Payment/Payment";
import AddReview from "./components/Dashboard/User/AddReview/AddReview";
import Orders from "./components/Dashboard/User/Orders/Orders";
import MakeAdmin from "./components/Dashboard/Admin/MakeAdmin/MakeAdmin";
import AddWatch from "./components/Dashboard/Admin/AddWatch/AddWatch";
import ManageOrders from "./components/Dashboard/Admin/ManageOrders/ManageOrders";

import DashHome from "./components/Dashboard/DashHome/DashHome";
import ManageWatches from "./components/Dashboard/Admin/ManageWatch/ManageWatches";
import AuthProvider from "./components/Context/AuthProvider";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import AdminRoute from "./components/Login/AdminRoute/AdminRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route
              path="/placeorder/:id"
              element={
                <PrivateRoute>
                  <PlaceOrder />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard" element={<DashHome />} />
              <Route path="/dashboard/pay" element={<Payment />} />
              <Route path="/dashboard/revirew" element={<AddReview />} />
              <Route path="/dashboard/Order" element={<Orders />} />
              <Route
                path="/dashboard/makeAdmin"
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/addWatch"
                element={
                  <AdminRoute>
                    <AddWatch />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/manageOrders"
                element={
                  <AdminRoute>
                    <ManageOrders />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/ManageWatches"
                element={
                  <AdminRoute>
                    <ManageWatches />
                  </AdminRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
