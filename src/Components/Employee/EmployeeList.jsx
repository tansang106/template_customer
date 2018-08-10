import React, { Component } from 'react';
import EmployeeItem from './EmployeeItem';
import EmployeeFooter from './EmployeeFooter';

class EmployeeList extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Employee list</h4>
                            {/* <h6 className="card-subtitle"></h6> */}
                            <div className="table-responsive">
                                <table id="demo-foo-addrow" className="table m-t-30 table-hover contact-list" data-page-size="10">
                                    <thead>
                                        <tr>
                                            <th className="text_center">No</th>
                                            <th className="text_center">Name</th>
                                            {/* <th>Email</th> */}
                                            <th className="text_center">Phone</th>
                                            <th className="text_center">Role</th>
                                            <th className="text_center">Age</th>
                                            <th className="text_center">Joining date</th>
                                            <th className="text_center">Salery</th>
                                            <th className="text_center">Action</th>
                                        </tr>
                                    </thead>
                                    {/* EmployeeItem */}

                                    <EmployeeItem></EmployeeItem>

                                    {/* End EmployeeItem */}

                                    {/* Employee Footer */}
                                    <EmployeeFooter></EmployeeFooter>
                                   

                                    {/* End Employee Footer */}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeeList;