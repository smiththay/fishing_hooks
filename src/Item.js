import React from 'react'
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Product(props) {
    let { id } = useParams();
    console.log(props.products)
    console.log(typeof id)
    const item = props.products.find(i => i.id === parseInt(id));

    console.log(item)
    return (
        <div>
            {id}

            <h1> {item.name}</h1>
            <p>{item.description}</p>
            <p>{item.type}</p>
            <p>$ {item.price}</p>
            <span>
                <Link to={'/'}><button>View ALL Item</button></Link>
                <Link to={'/cart/'}><button>Add To Cart</button></Link>
            </span>
            {/* <div class="card text-center">
                <div class="card-header">
                  <h2>{name}</h2>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{props.product.description}</h5>
                    <p class="card-text">{props.product.type}</p>
                    <p class="card-text">{props.product.price}</p>
                    <span><a href="#" class="btn btn-primary">View all Products</a><a href="#" class="btn btn-primary">Add To Cart</a></span>
                </div>
                <div class="card-footer text-muted">
                   {props.product.type}
                </div>
            </div>
             */}

        </div>
    )
}
export default Product;
