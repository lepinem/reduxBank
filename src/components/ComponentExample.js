import React, {Component} from 'react';

class Product extends Component {
    render() {
        const {product} = this.props;

        return (
            <li>
              <img src={product.image} alt=""></img>
              <h3>{product.title}</h3>
              <h4>{product.price}</h4>
            </li>
        )
    }
}

export default Product;
