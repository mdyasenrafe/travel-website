import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Componets/HomePage/Home/Home";
import NotFound from "./Componets/NotFound/NotFound";
import NavBar from "./Componets/NavBar/NavBar";
import About from "./Componets/HomePage/About/About";
import Destinations from "./Componets/HomePage/Destinations/Destinations";
import Contact from "./Componets/HomePage/Contact/Contact";

function App() {
  return (
    <>
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
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
