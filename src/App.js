
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import axios from 'axios';
import Products from './Products';
import Item from './Item';
import Cart from './Cart';

function App() {

  const [products, setProducts] = useState([])

  const axiosGet = () => {
    let apiURL = 'https://awesomeincbootcampapi-ianrios529550.codeanyapp.com/api/store/products'
    axios.get(apiURL)
      .then(function (response) {
        setProducts(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  useEffect(axiosGet, [])


  return (

    <div className="App">
      <Router>

        <header className="App-header">
          <h1><u>Earth Worm Jim's Bait Shop</u></h1>

        </header>
        <br></br>
        <div className='container text-align-center'>
          <div className='row'>
            <div className='col'>

              <Switch>


                <Route exact path="/">
                  <Products products={products} />
                </Route>

                <Route path="/item/:id" >
                  <Item products={products}/>
                </Route>

                <Route path="/cart/:id">
                  <Cart products={products}/>
                </Route>
              </Switch>

            </div>
          </div>

        </div>
      </Router>
    </div>
  );
}

export default App;
