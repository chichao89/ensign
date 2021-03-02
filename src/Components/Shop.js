import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CoffeeDetails from "./CoffeeDetails";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 5,
      value: "1",
      isToggleOn: false,
    };

    this.onLoadMore = this.onLoadMore.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onTest = this.onTest.bind(this);
  }

  onTest(event) {
    this.setState({
      value: event.target.value,
      limit: (this.setState.limit = 5),
    });
  }

  onLoadMore() {
    this.setState((prevState) => ({
      limit: this.state.limit + 5,
    }));
  }

  handleClick(key) {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
      key: key,
    }));
  }

  render() {
    let product = this.props.product;
    let length = this.props.product.length;
    //details page
    if (this.state.isToggleOn) {
      return (
        <div>
          <button
            className="rounded-circle float-right"
            onClick={this.handleClick}
          >
            X
          </button>
          <CoffeeDetails
            warn={this.state.isToggleOn && this.state.key}
            product={this.props.product}
          />
        </div>
      );
    } else {
      //shop page
      return (
        <div>
          <Row>
            <Col>
              <h1 className="text-uppercase">
                Shop Your Clothings from around the world
              </h1>
            </Col>
          </Row>

          <Row>
            {product.slice(0, this.state.limit).map((key) => (
              <div className="col-lg-4" key={key.id}>
                <Card>
                  <Card.Img
                    src={key.image}
                    variant="top"
                    alt={key.image}
                    onClick={() => this.handleClick(key.id)}
                    key={key.id}
                  ></Card.Img>
                  <Card.Body>
                    <Card.Title className="text-uppercase">
                      {key.title}
                    </Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">{key.price.toFixed(2)}</small>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </Row>
          {this.state.limit >= length ? null : (
            <div className="m-5">
              <button
                className="btn btn-light btn btn-outline-dark"
                onClick={this.onLoadMore}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      );
    }
  }
}

export default Shop;
