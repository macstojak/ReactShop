import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Catalog from "./components/Catalog";
import Index from "./components/Index";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import "./styles/Body.css";


function App() {

  return (
    <Router>
    <div>
      <Menu></Menu>
        <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/catalog" component={Catalog}></Route>
          <Route component={NotFound}></Route>
        </Switch>
        <Footer></Footer>
    </div>
    </Router>   
  );
}

export default App;
