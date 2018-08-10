import React, { Component } from 'react';
import * as Config from "../../Constants/Config";

class DrinkCart extends Component {

    onAddToCart = (drink) => {
        this.props.onAddToCart(drink);
    }

    render() {
        var { drink } = this.props;
        return (
            <tr>
                <td>
                    
                    <img src={`${Config.API_URL}/uploads/imgDrink/${drink.drink_avatar}`} alt="shop" width="40" className="img-circle"/>
                    
                </td>
                <td>
                    <h6>
                        <a className="link">{drink.drink_name}</a>
                    </h6>
                    <small className="text-muted">Price : {drink.drink_price} </small>
                </td>
                {/* <td>
                        <h5>357</h5>
                    </td> */}
                <td>
                    <h5>{drink.drink_price}</h5>
                </td>
                <td>
                    <span className="round" onClick={ () => this.onAddToCart(drink)}>
                        <i className="ti-shopping-cart"></i>
                    </span>
                </td>
            </tr>
        );
    }
}

export default DrinkCart;