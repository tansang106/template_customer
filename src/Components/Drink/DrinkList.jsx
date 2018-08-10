import React, { Component } from 'react';
import DrinkItem from './DrinkItem';


// import $ from 'jquery';

class Drink extends Component {

   

    componentDidMount() {
	    window.jQuery('.table').footable();
    }
 
    render() {
        var { children } = this.props;
        return (
            <React.Fragment>
            <div className="row page-titles">
            <div className="col-md-5 col-8 align-self-center">
                <h3 className="text-themecolor m-b-0 m-t-0">Drink</h3>
                {/* <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="javascript:void(0)">Home</a>
                    </li>
                    {/* <li className="breadcrumb-item active">Table</li> 
                </ol> */}
            </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Drink List</h4>
                            {/* <h6 className="card-subtitle"></h6> */}
                            <div className="table-responsive">
                                <table id="demo-foo-addrow" className="table m-t-30 table-hover contact-list color-table success-table" data-page-size="10">
                                    <thead>
                                        <tr>
                                            <th className="text_center">No</th>
                                            <th className="text_center">Name</th>
                                            {/* <th>Email</th> */}
                                            <th className="text_center">Price</th>

                                            <th className="text_center">Action</th>
                                        </tr>
                                    </thead>
                                    {/* BossItem */}

                                    <DrinkItem></DrinkItem>
                                    {/* { children } */}

                                    {/* End CoffeeShopItem */}

                                    {/* Drink Footer */}


                                    {/* End Drink Footer */}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Drink;