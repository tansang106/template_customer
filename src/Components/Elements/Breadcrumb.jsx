import React, { Component } from 'react';

class Breadcrumb extends Component {
    render() {
        return (
            <div className="row page-titles">
            <div className="col-md-5 col-8 align-self-center">
                <h3 className="text-themecolor m-b-0 m-t-0">Table</h3>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="javascript:void(0)">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Table</li>
                </ol>
            </div>
        </div>
        )
    }
}

export default Breadcrumb;