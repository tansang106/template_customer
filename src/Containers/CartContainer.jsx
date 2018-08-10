import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../Components/Invoice/Cart';
// import * as Message from '../Constants/';
import CartItem from '../Components/Invoice/CartItem';
import CartResult from '../Components/Invoice/CartResult';
import {actDeleteProductInCart, actChangeMessage, actUpdateProductInCart} from '../Actions/index'; //chỉ import 1 cái

class CartContainer extends Component {

    showCartItem = (cart) => {
        var { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;
        var result = null;
        // var result = <tr>
        //                 {/* <td>{Message.MSG_CART_EMPTY}</td> */}
        //             </tr>
        if (cart.length > 0){
            result = cart.map((item, index) => {
                return (
                    <CartItem //truyền vào cart item để cart item nhận được các props
                        key = { index } 
                        item = { item }
                        index = { index }
                        onDeleteProductInCart={onDeleteProductInCart}
                        onChangeMessage={onChangeMessage}
                        onUpdateProductInCart={onUpdateProductInCart}
                    />
                )
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var { vat, discount } = this.props;
        var result = null;
        if (cart.length > 0) {
            result = <CartResult 
                        cart={cart}
                        vat={vat}
                        discount={discount}   
                    />
        }
        return result;
    }


    // showTotalAmount = (cart) => {
    //     var result = null;
    //     if (cart.length > 0){
    //         result = <CartResult cart={cart} />
    //     }
    //     return result;
    // }

    render() { 
        var { cart } = this.props;
        return (
            <Cart>
                 { this.showCartItem(cart) }
                 {this.showTotalAmount(cart) }
            </Cart>
        );
    }
}

// CartContainer.propTypes = {
//     cart : PropTypes.arrayOf(PropTypes.shape({
//         product : PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             name: PropTypes.string.isRequired,
//             image: PropTypes.string.isRequired,
//             description: PropTypes.string.isRequired,
//             price: PropTypes.number.isRequired,
//             inventory: PropTypes.number.isRequired,
//             rating: PropTypes.number.isRequired
//         }).isRequired,
//         quantity : PropTypes.number.isRequired
//     })).isRequired,
//     onDeleteProductInCart: PropTypes.func.isRequired,
//     onChangeMessage: PropTypes.func.isRequired,
//     onUpdateProductInCart: PropTypes.func.isRequired,
// }

const mapStateToProps = state => {
    return {
        cart : state.cart //lấy từ index.js trong reducers 
    }
}

const mapDispatchToProps = (dispatch, action) => {
    return {
        onDeleteProductInCart: (product) => { //lấy trong actionType
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
