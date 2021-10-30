import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/destinations">
            <Destinations></Destinations>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/:id/place-order">
            <PalaceOrder></PalaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/my-orders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/all-orders">
            <AllOrders></AllOrders>
          </PrivateRoute>
          <PrivateRoute path="/add-destinations">
            <AddDestinations></AddDestinations>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </Authprovider>
  );
}

export default App;
