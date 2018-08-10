import React, { Component } from 'react';
import CoffeeSystemItem from './CoffeeSystemItem';

// import $ from 'jquery';

class CoffeeSystemList extends Component {
 
    render() {

        return (
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Coffee System List</h4>
                            {/* <h6 className="card-subtitle"></h6> */}
                            <div className="table-responsive">
                                <table id="demo-foo-addrow" className="table m-t-30 table-hover contact-list color-table success-table" data-page-size="10">
                                    <thead>
                                        <tr>
                                            <th className="text_center">No</th>
                                            <th className="text_center">Name System</th>
                                            {/* <th>Email</th> */}
                                            {/* <th className="text_center">Phone</th> */}
                                            {/* <th className="text_center">Start Date</th>
                                            <th className="text_center">Expire Date</th> */}
                                            <th className="text_center">Address</th>
                                            <th className="text_center">Action</th>
                                        </tr>
                                    </thead>
                                    {/* CoffeeShopItem */}

                                    <CoffeeSystemItem></CoffeeSystemItem>

                                    {/* End CoffeeShopItem */}

                                    {/* CoffeeShop Footer */}


                                    {/* End CoffeeShop Footer */}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CoffeeSystemList;