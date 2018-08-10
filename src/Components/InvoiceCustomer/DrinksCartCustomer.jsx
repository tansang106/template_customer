import React, { Component } from 'react';

class DrinksCartCustomer extends Component {


    render() {
        return (
            <div className="table-responsive">
                <table className="table stylish-table pre-scrollable">
                    <thead>
                        <tr>
                            <th style={{ width: "90px" }}></th>
                            <th style={{ width: "150px" }}>Description</th>
                            {/* <th>QTY</th> */}
                            <th>Price</th>
                            <th>ETH</th>
                        </tr>
                    </thead>
                    <tbody id="slimtest4">
                        {/* {drink} */}
                        {/* <DrinkCart/> */}
                        {/* { this.showDrinks(drinks)} */}
                        { this.props.children }
                    </tbody>
                </table>
            </div>
        );
    }
}


export default DrinksCartCustomer;