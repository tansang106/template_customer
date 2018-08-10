import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    createBill,
    clearCart
} from '../../Actions/index';
import * as dataStorage from '../../Constants/localStorage';
import callApi from '../../Utils/apiCaller';
import toastr from 'toastr';
import currencyFormatter from 'currency-formatter';
import $ from 'jquery';
// import {printArea} from '../../../public/js/jquery.PrintArea.js"';

class CartResult extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            total: '',
            vat: '', 
            discount: '',
        }
    }
    
    componentDidMount () {
        //  $(document).ready(function () {
        //     $("#print").click(function () {
        //         var printButton = document.getElementById("print");
        //         var paymentButton = document.getElementById("proceedToPayment");

        //         printButton.style.visibility = 'hidden';
        //         paymentButton.style.visibility = 'hidden';

        //         var mode = 'iframe'; //popup
        //         var close = mode == "popup";
        //         var options = {
        //             mode: mode,
        //             popClose: close
        //         };
        //         $("div.printableArea").printArea(options);
        //         printButton.style.visibility = 'visible';
        //         paymentButton.style.visibility = 'visible';

        //     });
        // });
    }

    showTotalAmount = (cart) => {
        console.log('cart ở result', cart)
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++){
                total += cart[i].product.drink_price * cart[i].quantity;
            }
        }
        return <p>Total Amount: { currencyFormatter.format(total, { locale: 'vn-VN' })} </p>
    }

    calculatorTotal = (cart) => {
        console.log('cart ở result', cart)
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.drink_price * cart[i].quantity;

            }
        }
        return total
    }


    showVAT = (cart, vat) => {
        // let Vat = (vat != '') ? vat : 1
        if (vat != '') {
            var total = 0;
            if (cart.length > 0) {
                for (var i = 0; i < cart.length; i++){
                    total += cart[i].product.drink_price * cart[i].quantity;
                   
                }
            }
            let Total = total*(vat/100)
            return  <p>VAT ({vat}%) : { currencyFormatter.format(Total, { locale: 'vn-VN' })}</p>
        } else {
           return null;
        }
    }

    calculatorVAT = (cart, vat) => {
        // let Vat = (vat != '') ? vat : 1
        if (vat != '') {
            var total = 0;
            if (cart.length > 0) {
                for (var i = 0; i < cart.length; i++) {
                    total += cart[i].product.drink_price * cart[i].quantity;

                }
            }
            let Total = total * (vat / 100)
            return Total
        } else {
            return null;
        }
    }

    showDiscount = (cart, discount) => {
        // let Vat = (vat != '') ? vat : 1
        if (discount != '') {
            var total = 0;
            if (cart.length > 0) {
                for (var i = 0; i < cart.length; i++){
                    total += cart[i].product.drink_price * cart[i].quantity;
                   
                }
            }
            let Total = total*(discount/100)
            return  <p>Discount ({discount}%) : { currencyFormatter.format(Total, { locale: 'vn-VN' })} </p>
        } else {
           return null;
        }
    }

    calculatorDiscount = (cart, discount) => {
        // let Vat = (vat != '') ? vat : 1
        if (discount != '') {
            var total = 0;
            if (cart.length > 0) {
                for (var i = 0; i < cart.length; i++) {
                    total += cart[i].product.drink_price * cart[i].quantity;

                }
            }
            let Total = total * (discount / 100)
            return  Total 
        } else {
            return null;
        }
    }

    showTotal = (cart, vat, discount) => {
        // let { cart, vat, discount} = this.state
        let total =  this.calculatorTotal(cart);
        let Vat =  this.calculatorVAT(cart, vat) || 0;
        let Discount =  this.calculatorDiscount(cart, discount) || 0;
        let Total = total + Vat - Discount;
        console.log('trong showtotal', total,Total, Vat, Discount)
        return Total
    }

    onPay = async (cart, discount, vat) => {
        console.log('cart', cart)
        // let user_id = dataStorage.DATA_USER.user_id
        // let total = this.showTotalAmount(cart);
        let totalBill = await this.showTotal(cart, vat, discount)
        console.log(totalBill)
        // console.log('total', total, user_id)
        let array = [
            {
                "Date": "01/12",
                "Data": 225000,
                "Count": 2
            },
            {
                "Date": "06/12",
                "Data": 33000,
                "Count": 1
            }
        ]
        let date = [];
        let data = [];
        let count = [];
        for (let j = 0; j < array.length; j++){
            console.log(array[j])
            date.push(array[j].Date);
            data.push(array[j].Data);
            count.push(array[j].Count)
            // data.push(array[j].Count)
        }
        console.log(date, data, count)
        console.log('log', array)
        // return;
        //Test
        //=====================
        let bill = {
            bill_user_id: dataStorage.DATA_USER.user_id,
            bill_shop_id: dataStorage.DATA_USER.user_shop_id,
            bill_total: totalBill,
        }
        console.log(bill)
        callApi('bills/create', 'POST', bill, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log('res', res);
            if (res.data.status == 'success') {

                let bill_id = res.data.bill.bill_id;
                // let detail_bill = {
                //     detail_bill_id: res.data.bill.bill_id,
                //     detail_drink_id: 
                // }
                let i = 0;
                let length = cart.length;
                for (i; i < length; i++) {
                    let product = cart[i].product;
                    let quantity = cart[i].quantity;
                    let total = quantity * product.drink_price;
                    let detail_bill = {
                        detail_bill_id: bill_id,
                        detail_drink_id: product.drink_id,
                        detail_drink_name: product.drink_name,
                        detail_number: quantity,
                        detail_price: product.drink_price,
                        detail_toalMoney_drink: total
                    }
                    callApi('detail-bill/create', 'POST', detail_bill, {
                        'token': dataStorage.TOKEN
                    }).then(res => {
                        console.log(res);
                        if (res.data.status == 'success') {
                            if (i == length - 1) {
                                toastr.success('Payment Success', 'Success')
                            }
                            this.props.removeCart();
                            // this.get();
                        } else {
                            toastr.error(res.data.message, 'Error')
                        }
                    })
                }
                // localStorage.removeItem('CART')
                // this.props.removeCart();
            } else {
                toastr.error(res.data.message, 'Error')
            }
        })
    }
    



    render() {
        var { cart, vat, discount, countBill } = this.props;
        // let Vat = (vat != '' ) ? vat : '';
        // let totalVat = this.showVAT(cart, vat)
        // let totalDiscount = this.showDiscount(cart, discount)
        // console.log('dsa', countBill)
        return <React.Fragment>
            <div className="pull-right m-t-30 text-right">
                    {/* <p>Sub - Total amount: $13,8488</p> */}
                    {/* <p>VAT ({Vat}%) : ${this.showVAT(cart,vat)} </p> */}
                    {this.showTotalAmount(cart)}
                    {this.showVAT(cart, vat)}
                    {this.showDiscount(cart, discount)}
                    {/* <p>Total - Discount(%) : </p> */}
                    <hr />
                    <h3>
                    {/* <b>Total :</b> ${ this.showTotal(cart, vat, discount)} */}
                    <b>Total :</b> ${ currencyFormatter.format(this.showTotal(cart, vat, discount), { locale: 'vn-VN' })}
                    {/* {this.showTotal(cart, vat, discount)} */}
                    </h3>
                </div>
                <div className="clearfix" />
                <hr />
                <div className="text-right">
                <button
                    className="btn btn-danger"
                    type="submit"
                    onClick={ () => this.onPay(cart, discount, vat)}
                    id="proceedToPayment"
                >
                    {" "}
                    Proceed to payment{" "}
                    </button>
                    <button id="print" className="btn btn-default btn-outline" type="button">
                    <span>
                        <i className="fa fa-print" /> Print
                    </span>
                    </button>
                </div>
        </React.Fragment>;
    }
}

const mapStateToProps = state => {
    return {
        countBill: state.bill
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        createBill: (bill) => {
            dispatch(createBill(bill));
        },
        removeCart: () => {
            dispatch(clearCart());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartResult);