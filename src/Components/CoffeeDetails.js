import React, {useState,useEffect} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { Nav } from 'react-bootstrap';
import {NavLink } from 'react-router-dom'
import Navigation from './NavigationBar'

function CoffeeDetails(props) {


    let [final, setFinal] = useState(1)
    //let [isLoaded,setLoaded] = useState(false)
    let arrayItem = JSON.parse(localStorage.getItem('original')) || []  //olditem
    let cartLength = JSON.parse(localStorage.getItem('length')) || [] //for length
    const [cart, setCart] = useState([])
    let [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        final = 0;
    },[cart]);

    
    const addToCart = (selected) => {
       setCart([...cart, selected]);
       setCartTotal(cartTotal = arrayItem.length)
    };

    const [more] = cart
    

    arrayItem.push(more)
    cartLength = cartTotal
    
    const coffeeDetails = props.product.filter(key => (key.id === props.warn)).map(selected => (
        <Row key={selected.id}>
          <Col lg={5}>
          <img className="img-fluid" src={selected.image} alt={selected.image}/>
          </Col>
          <Col lg={5}>
            <div className="m-3"><h1 className="text-uppercase font-weight-bold text-left">{selected.title}</h1></div>
            <div className="m-3"><p className="text-left"><span className="text-uppercase text-light bg-dark">{selected.category}</span></p></div>
            <div className="m-3"><hr/></div>
            <div className="m-3"><p className="single text-justify">{selected.description}</p></div>
          <Row className="m-3">
          <Col lg={5}><div className="m-1"><h6 className="text-uppercase font-weight-bold text-left">Price</h6></div>
          <div className="m-1">
          {/* <Form.Control as="text" onChange={(e)=>setPrice(parseFloat(total = e.target.value))}> */}
          <p class="text-left">{selected.price}</p> 
          </div>
          </Col>
          <Col lg={5}>
          <div className="m-1"><h6 className="text-uppercase font-weight-bold text-left">Quantity</h6></div>
          <div className="mx-auto float-left">
          <input className="form-control" type='text' value={selected.finalQty=final} onChange={(e)=> setFinal(final = e.target.value)}/>
          {(final >= selected.quantity) ? 
            <div className="text-danger text-left">{selected.quantity} quantities available only</div>
            : null
          }
         
          </div>
          </Col>
          <Col lg={2}>
          <div className="m-1"><h6 className="text-uppercase font-weight-bold text-left">Total</h6></div>
          <div className="m-1">      
          <p className="float-left"><span>{`$`}</span><span>{(selected.finalAmt=(final * selected.price)).toFixed(2)}</span></p>
          </div>
          </Col>
          </Row>
          <Row className="m-3">
            <Col>
          <div>
            {selected.quantity === 0 ? (
              <div className="float-left"><small className="text-danger">This item is Out of Stock!</small></div>
            ) : (
              <div className="float-left">
                <button onClick={()=>addToCart(selected)}>Add to Cart</button>
                </div>
              )}  
          </div>
          </Col>
          </Row>
          <Row>
            <Col>
          <div className="m-3"><hr/></div>
          </Col>
          </Row>
          <Row>
            <Col>
            <div className="m-3"><h5 className="text-uppercase text-left">Character</h5></div>
            <div className="m-3"><p className="single text-justify">{selected.description}</p></div>
          </Col>
          </Row>
          <Row>
            <Col lg={3}>
            <div className="m-3"><p className="text-uppercase text-left font-weight-bold">Farmers</p></div>
            </Col>
            <Col>
            <div className="m-3"><p className="text-uppercase text-left">{selected.farmers}</p></div>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
            <div className="m-3"><p className="text-uppercase text-left font-weight-bold">Region</p></div>
            </Col>
            <Col>
            <div className="m-3"><p className="text-uppercase text-left">{selected.region}</p></div>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
            <div className="m-3"><p className="text-uppercase text-left font-weight-bold">Origin</p></div>
            </Col>
            <Col>
            <div className="m-3"><p className="text-uppercase text-left">{selected.origin}</p></div>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
            <div className="m-3"><p className="text-uppercase text-left font-weight-bold">Havest</p></div>
            </Col>
            <Col>
            <div className="m-3"><p className="text-uppercase text-left">{selected.harvest}</p></div>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
            <div className="m-3"><p className="text-uppercase text-left font-weight-bold">Process</p></div>
            </Col>
            <Col>
            <div className="m-3"><p className="text-uppercase text-left">{selected.process}</p></div>
            </Col>
          </Row>
        </Col>
      </Row>
    ))
    
    if (!props.warn) {
        return null;
      }

    return (
        <>  
            {cart.length === 0 ? null :
               <div>
              {localStorage.setItem('original', (JSON.stringify(arrayItem)))}
              {localStorage.setItem('length', (JSON.stringify(cartLength)))}    
              <div>{cartTotal} items has been added to Cart</div>
              <div><Nav.Link className="mx-auto mw-25 w-25" as={NavLink} to={`/Cart/`}><button className="btn btn-dark btn btn-outline-light">Go to Cart</button></Nav.Link></div>              
              </div>
            }
            {coffeeDetails}
        </>
    )
}

export default CoffeeDetails
