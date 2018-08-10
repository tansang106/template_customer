import React, { Component } from 'react';
import StaffItem from './StaffItem';


// import $ from 'jquery';

class Staff extends Component {
 
    render() {

        return (
            <React.Fragment>
            <div className="row page-titles">
            <div className="col-md-5 col-8 align-self-center">
                <h3 className="text-themecolor m-b-0 m-t-0">Staff List</h3>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a>User</a>
                    </li>
                    <li className="breadcrumb-item active">Staff List</li> 
                </ol>
            </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Staff List</h4>
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
                                            <th className="text_center">Position</th>
                                            <th className="text_center">Status</th>

                                            <th className="text_center">Action</th>
                                        </tr>
                                    </thead>
                                    {/* BossItem */}

                                    <StaffItem></StaffItem>

                                    {/* End CoffeeShopItem */}

                                    {/* Staff Footer */}


                                    {/* End Staff Footer */}
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

export default Staff;