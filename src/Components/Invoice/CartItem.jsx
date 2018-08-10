import React, { Component } from 'react';
import * as Config from "../../Constants/Config";

class CartItem extends Component {

    showSubTotal = (price, quantity) => {
        return price * quantity;
    }

    onDelete = (product) =>{
        console.log(product);
        var { onDeleteProductInCart } = this.props
        onDeleteProductInCart(product);
    }

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0 ){
            this.props.onUpdateProductInCart(product, quantity);
        }
    }
    render() {
        var { item } = this.props;
        var {quantity} = item.quantity > 0 ? item : this.state;
        console.log('item cart', quantity)
        return (
        <tr>
            <td className="text-center">1</td>
            <td> <img src={`${Config.API_URL}/uploads/imgDrink/${item.product.drink_avatar}`} alt="shop" width="40" className="img-circle" />{item.product.drink_name }</td>
            <td className="text-center"> <button
                    type="button"
                    className="btn btn-xs btn-outline-success waves-effect waves-light"
                    data-toggle="tooltip"
                    data-placement="top"
                    onClick={ () => this.onUpdateQuantity(item.product, item.quantity - 1)}   
                    style = {{ marginRight: '3%'}}
                >
                -
                </button>        
                <span className="label label-info" 
                        style={{ fontSize: '80%', padding: '4% 9% 4% 9%'}}
                >{ quantity }
                </span>
                
                <button
                    type="button"
                    className="btn btn-xs btn-outline-success waves-effect waves-light"
                    data-toggle="tooltip"
                    data-placement="top"
                    onClick={ () => this.onDelete(item.product)}   
                    onClick={ () => this.onUpdateQuantity(item.product, item.quantity + 1)}   
                    style = {{ marginLeft: '3%'}}
                >
                +
                </button> </td>
            <td className="text-right"> { item.product.drink_price} </td>
            <td className="text-right"> { this.showSubTotal(item.product.drink_price, item.quantity)} </td>
            <td className="text-right">
                <button
                    type="button"
                    className="btn btn-sm btn-primary waves-effect waves-light"
                    data-toggle="tooltip"
                    data-placement="top"
                    onClick={ () => this.onDelete(item.product)}   
                >
                <i className="ti-trash"></i>
                </button>
            </td>
        </tr>
        );
    }


}



export default CartItem;