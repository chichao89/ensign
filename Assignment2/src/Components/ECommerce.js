import React, { Component } from "react";
import Jumbotron  from "./Jumbotron";
import Home from "./Home";
import Shop from "./Shop";


class ECommerce extends Component {
  constructor(props) {
    let url = props.location.pathname;
    const urlpath = parseInt((url.match(/(\d+)/g)));
    super(props);
    this.state = {
      eCommerce: [],
      myUrl: urlpath,
      Shop: 1,
      switchButton: true,
    };
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              console.log(json)
              this.setState({eCommerce:json})
            })
    // axios.get('/ServiceNailAPI/').then((res) => {
    //   const services = res.data;
    //   this.setState({ services });
    // });
  }

  render() {
    switch (this.state.switchButton) {
      case this.state.Shop === this.state.myUrl: {
        return (
          <>
            <Shop product={this.state.eCommerce} />
          </>
        );
      }
      default:
        return ( 
                <>
                <Jumbotron/>
                <div className="container">
                <Home product={this.state.eCommerce} />
                </div>
                </>
                )
    }
  }
}

export default ECommerce;
