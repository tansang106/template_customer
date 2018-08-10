import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartCustomer from '../Components/InvoiceCustomer/CartCustomer';
// import * as Message from '../Constants/';
import CartItemCustomer from '../Components/InvoiceCustomer/CartItemCustomer';
import CartResultCustomer from '../Components/InvoiceCustomer/CartResultCustomer';
import { actDeleteProductInCartCustomer, actChangeMessage, actUpdateProductInCartCustomer} from '../Actions/index'; //chỉ import 1 cái

class CartContainerCustomer extends Component {

    showCartItem = (cart) => {
        var { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;
        var result = null;
        // var result = <tr>
        //                 {/* <td>{Message.MSG_CART_EMPTY}</td> */}
        //             </tr>
        if (cart.length > 0){
            result = cart.map((item, index) => {
                return (
                    <CartItemCustomer //truyền vào cart item để cart item nhận được các props
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
            result = <CartResultCustomer 
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
    //         result = <CartResultCustomer cart={cart} />
    //     }
    //     return result;
    // }

    render() { 
        var { cart } = this.props;
        return (
            <CartCustomer>
                 { this.showCartItem(cart) }
                 {this.showTotalAmount(cart) }
            </CartCustomer>
        );
    }
}

// CartContainerCustomer.propTypes = {
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
        cart : state.cartcustomer //lấy từ index.js trong reducers 
    }
}

const mapDispatchToProps = (dispatch, action) => {
    return {
        onDeleteProductInCart: (product) => { //lấy trong actionType
            dispatch(actDeleteProductInCartCustomer(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCartCustomer(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainerCustomer);
