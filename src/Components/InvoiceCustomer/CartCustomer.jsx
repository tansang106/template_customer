import React, { Component } from 'react';
import CartItemCustomer from './CartItemCustomer';
import CartResultCustomer from './CartResultCustomer';

class CartCustomer extends Component {

    

    render() {
        var { children } = this.props;
        return (
        <React.Fragment>
            <div className="col-md-12">
                <div className="table-responsive m-t-40" style={{ clear: "both" }}>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Description</th>
                                <th className="text-center">Quantity</th>
                                {/* <th className="text-right">Unit Cost</th> */}
                                <th className="text-right">ETH Cost</th>
                                <th className="text-right">Total</th>
                                <th className="text-right"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <CartItemCustomer/> */}
                            { children[0] }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-md-12">
                    {children[1]}
            </div>
            </React.Fragment>
        );
    }
}



export default CartCustomer;