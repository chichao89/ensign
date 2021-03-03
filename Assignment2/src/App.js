//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.scss";
import Layout from "./Components/Layout";
import NavigationBar from "./Components/NavigationBar";
import { Route, HashRouter} from "react-router-dom";
import Coffee from "./Components/Coffee";
import Footer from "./Components/Footer"
import Cart from "./Components/Cart"



function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <NavigationBar />
            <Route exact path="/" component={Coffee} />
        <Layout>  
            <Route path="/Shop" component={Coffee} />
            <Route path="/Cart"  component={Cart}/> 
        </Layout>
      </HashRouter>
          <Footer/>  
    </React.Fragment>
  );
}

export default App;
