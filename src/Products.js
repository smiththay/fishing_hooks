import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';


function Product(props) {
    return (
        props.products.map((product, index) => {
            return (
                <div key={index}>


                    <br></br>
                    <div class="card">
                        <div class="card-header">
                            <h3>{product.name} </h3>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"> $ {product.price} </h5>
                            <p class="card-text"></p>
                            <span>
                                <Link to={'/item/'+ product.id}><button>View Item</button></Link>
                                <Link to={'/cart/'}><button>Add To Cart</button></Link>
                            </span>
                        </div>
                    </div>


                </div>


            )
        })

    )
}
export default Product;