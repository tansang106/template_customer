import React, { Component } from 'react';

class EmployeeFooter extends Component {
    render() {
        return (
            <tfoot>
                <tr>
                    <td colSpan="2">
                        <button type="button" className="btn btn-info btn-rounded" data-toggle="modal" data-target="#add-contact">Add New Contact</button>
                    </td>
                    <div id="add-contact" className="modal fade in" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h4 className="modal-title" id="myModalLabel">Add New Contact</h4>
                                </div>
                                <div className="modal-body">
                                    <form className="form-horizontal form-material">
                                        <div className="form-group">
                                            <div className="col-md-12 m-b-20">
                                                <input type="text" className="form-control" placeholder="Type name" /> </div>
                                            <div className="col-md-12 m-b-20">
                                                <input type="text" className="form-control" placeholder="Email" /> </div>
                                            <div className="col-md-12 m-b-20">
                                                <input type="text" className="form-control" placeholder="Phone" /> </div>
                                            <div className="col-md-12 m-b-20">
                                                <input type="text" className="form-control" placeholder="Designation" /> </div>
                                            <div className="col-md-12 m-b-20">
                                                <input type="text" className="form-control" placeholder="Age" /> </div>
                                            <div className="col-md-12 m-b-20">
                                                <input type="text" className="form-control" placeholder="Date of joining" /> </div>
                                            <div className="col-md-12 m-b-20">
                                                <input type="text" className="form-control" placeholder="Salary" /> </div>
                                            <div className="col-md-12 m-b-20">
                                                <div className="fileupload btn btn-danger btn-rounded waves-effect waves-light">
                                                    <span>
                                                        <i className="ion-upload m-r-5"></i>Upload Contact Image</span>
                                                    <input type="file" className="upload" /> </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-info waves-effect" data-dismiss="modal">Save</button>
                                    <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Cancel</button>
                                </div>
                            </div>
                            {/* /.modal-content */}
                        </div>
                        {/* /.modal-dialog */}
                    </div>
                    <td colSpan="7">
                        <div className="text-right">
                            <ul className="pagination"> </ul>
                        </div>
                    </td>
                </tr>
            </tfoot>
        )
    }
}

export default EmployeeFooter;