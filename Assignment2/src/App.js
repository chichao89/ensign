//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.scss";
import Layout from "./Components/Layout";
import NavigationBar from "./Components/NavigationBar";
import { Route, HashRouter} from "react-router-dom";
import ECommerce from "./Components/ECommerce";
import Footer from "./Components/Footer"
import Cart from "./Components/Cart"



function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <NavigationBar />
            <Route exact path="/" component={ECommerce} />
        <Layout>  
            <Route path="/Shop" component={ECommerce} />
            <Route path="/Cart"  component={Cart}/> 
        </Layout>
      </HashRouter>
          <Footer/>  
    </React.Fragment>
  );
}

export default App;
