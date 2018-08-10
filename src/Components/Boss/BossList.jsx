import React, { Component } from 'react';
import BossItem from './BossItem';


// import $ from 'jquery';

class Boss extends Component {
 
    render() {

        return (
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Boss List</h4>
                            {/* <h6 className="card-subtitle"></h6> */}
                            <div className="table-responsive">
                                <table id="demo-foo-addrow" className="table m-t-30 table-hover contact-list color-table success-table" data-page-size="10">
                                    <thead>
                                        <tr>
                                            <th className="text_center">No</th>
                                            <th className="text_center">Name</th>
                                            {/* <th>Email</th> */}
                                            <th className="text_center">Sexual</th>
                                            <th className="text_center">Phone</th>
                                            <th className="text_center">System</th>
                                            <th className="text_center">Status</th>

                                            <th className="text_center">Action</th>
                                        </tr>
                                    </thead>
                                    {/* BossItem */}

                                    <BossItem></BossItem>

                                    {/* End CoffeeShopItem */}

                                    {/* Boss Footer */}


                                    {/* End Boss Footer */}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Boss;