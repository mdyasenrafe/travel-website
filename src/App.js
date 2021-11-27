import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Componets/HomePage/Home/Home";
import NotFound from "./Componets/NotFound/NotFound";
import NavBar from "./Componets/NavBar/NavBar";
import About from "./Componets/HomePage/About/About";
import Destinations from "./Componets/HomePage/Destinations/Destinations";
import Contact from "./Componets/HomePage/Contact/Contact";
import Authprovider from "./Context/Authprovider";
import Login from "./Componets/Login/Login";
import PrivateRoute from "./Componets/PrivateRoute/PrivateRoute";
import PalaceOrder from "./Componets/PalaceOrder/PalaceOrder";
import Footer from "./Componets/Footer/Footer";
import MyOrders from "./Componets/MyOrdersPage/MyOrders/MyOrders";
import AllOrders from "./Componets/AllOrdersPage/AllOrders/AllOrders";
import AddDestinations from "./Componets/AddDestinationsPage/AddDestinations/AddDestinations";

function App() {
  return (
    <Authprovider>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route
            path="/destinations"
            element={<Destinations></Destinations>}
          ></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/:id/place-order"
            element={
              <PrivateRoute>
                <PalaceOrder></PalaceOrder>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/my-orders"
            element={
              <PrivateRoute>
                <MyOrders></MyOrders>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/all-orders"
            element={
              <PrivateRoute>
                <AllOrders></AllOrders>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/add-destinations"
            element={
              <PrivateRoute>
                <AddDestinations></AddDestinations>
              </PrivateRoute>
            }
          ></Route>
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <Home></Home>
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </Authprovider>
  );
}

export default App;
