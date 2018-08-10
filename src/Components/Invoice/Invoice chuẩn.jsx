import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    
    actFetchDrinkRequest,
  
} from '../../Actions/index';

class Invoice extends Component {

    componentDidMount() {
        console.log('vào did mount')
        // this.props.fetchAllDrinks();
        // this.props.fetchAllSystem();
        this.props.fetchAllDrink();
    }

    onClickItem = () => {
        console.log('click item')
    }

    render() {
        var { drinks } = this.props;
        console.log('drinks render', drinks)
        let drink = drinks.map((drink, index) => {
            return (
                <tr>
                    <td>
                        <span className="round">
                            <i className="ti-shopping-cart"></i>
                        </span>
                    </td>
                    <td>
                        <h6>
                            <a className="link">{drink.drink_name}</a>
                        </h6>
                        <small className="text-muted">Price : {drink.drink_price} </small>
                    </td>
                   {/* <td>
                        <h5>357</h5>
                    </td> */}
                    <td>
                        <h5>{drink.drink_price}</h5>
                    </td> 
                    <td>
                        <span className="round" onClick={this.onClickItem}>
                            <i className="ti-shopping-cart"></i>
                        </span>
                    </td>
                </tr>
            )
        })
        return (
            <div className="row">
                <div className="col-md-6">
                    {/* Table Info */}
                    <div className="card earning-widget">
                        <div className="card-header">
                            <div className="card-actions">
                                <a className="" data-action="collapse">
                                    <i className="ti-minus"></i>
                                </a>
                                <a className="btn-minimize" data-action="expand">
                                    <i className="mdi mdi-arrow-expand"></i>
                                </a>
                                <a className="btn-close" data-action="close">
                                    <i className="ti-close"></i>
                                </a>
                            </div>
                            <h4 className="card-title m-b-0">Info</h4>
                        </div>

                        <div className="card-body">
                            <h4 className="card-title">Animated Line Inputs Form With Floating Labels</h4>
                            <form className="floating-labels m-t-40">
                                <div className="form-group has-success m-b-40">
                                    <input type="text" className="form-control" id="input11" />
                                    <span className="bar"></span>
                                    <label htmlFor="input11">Name</label>
                                </div>
                                <div className="form-group has-warning m-b-40">
                                    <input type="text" className="form-control" id="input11" />
                                    <span className="bar"></span>
                                    <label htmlFor="input11">Phone</label>
                                </div>
                                <div className="form-group has-error has-danger m-b-40">
                                    <input type="text" className="form-control" id="input12" />
                                    <span className="bar"></span>
                                    <label htmlFor="input12">Address</label>
                                </div>
                            </form>
                        </div>

                    </div>
                    {/* End Table Info */}

                    {/* Table Product */}
                    <div className="card earning-widget">
                        <div className="card-header">
                            <div className="card-actions">
                                <a className="" data-action="collapse">
                                    <i className="ti-minus"></i>
                                </a>
                                <a className="btn-minimize" data-action="expand">
                                    <i className="mdi mdi-arrow-expand"></i>
                                </a>
                                <a className="btn-close" data-action="close">
                                    <i className="ti-close"></i>
                                </a>
                            </div>
                            <h4 className="card-title m-b-0">Product</h4>
                        </div>
                        <div className="card-body">
                            <select className="custom-select pull-right">
                                <option selected="">Electronics</option>
                                <option value="1">Kitchen</option>
                                <option value="2">Crocory</option>
                                <option value="3">Wooden</option>
                            </select>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="exampleInputuname2" placeholder="VAT" />
                                        <div className="input-group-addon">
                                            <i className="fa fa-percent"></i>
                                        </div>
                                    </div>
                                </div>
                                {/*/span*/}
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="exampleInputuname2" placeholder="Discount" />
                                        <div className="input-group-addon">
                                            <i className="fa fa-percent"></i>
                                        </div>
                                    </div>
                                </div>
                                {/*/span*/}
                            </div>
                            <div className="table-responsive">
                                <table className="table stylish-table pre-scrollable">
                                    <thead>
                                        <tr>
                                            <th style={{ width: "90px" }}></th>
                                            <th style={{ width: "150px" }}>Description</th>
                                            <th>QTY</th>
                                            <th>Price</th>

                                        </tr>
                                    </thead>
                                    <tbody id="slimtest4">
                                        {drink}
                                        {/* <tr>
                                            <td>
                                                <span className="round">
                                                    <i className="ti-shopping-cart"></i>
                                                </span>
                                            </td>
                                            <td>
                                                <h6>
                                                    <a href="javascript:void(0)" className="link">Apple iPhone 6 Space Grey, 16 GB</a>
                                                </h6>
                                                <small className="text-muted">Product id : MI5457 </small>
                                            </td>
                                            <td>
                                                <h5>357</h5>
                                            </td>
                                            <td>
                                                <h5>$435</h5>
                                            </td>
                                            <td>
                                                <span className="round">
                                                    <i className="ti-shopping-cart"></i>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="round bg-success">
                                                    <i className="ti-shopping-cart"></i>
                                                </span>
                                            </td>
                                            <td>
                                                <h6>
                                                    <a href="javascript:void(0)" className="link">Fossil Marshall For Men Black watch</a>
                                                </h6>
                                                <small className="text-muted">Product id : MI5457 </small>
                                            </td>
                                            <td>
                                                <h5>357</h5>
                                            </td>
                                            <td>
                                                <h5>$435</h5>
                                            </td>
                                            <td>
                                                <span className="round">
                                                    <i className="ti-shopping-cart"></i>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="round bg-danger">
                                                    <i className="ti-shopping-cart"></i>
                                                </span>
                                            </td>
                                            <td>
                                                <h6>
                                                    <a href="javascript:void(0)" className="link">Sony Bravia 80cm</a>
                                                </h6>
                                                <small className="text-muted">Product id : MI5457 </small>
                                            </td>
                                            <td>
                                                <h5>357</h5>
                                            </td>
                                            <td>
                                                <h5>$435</h5>
                                            </td>
                                            <td>
                                                <span className="round">
                                                    <i className="ti-shopping-cart"></i>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="round bg-primary">
                                                    <i className="ti-shopping-cart"></i>
                                                </span>
                                            </td>
                                            <td>
                                                <h6>
                                                    <a href="javascript:void(0)" className="link">Panasonic P75 Champagne Gold</a>
                                                </h6>
                                                <small className="text-muted">Product id : MI5457 </small>
                                            </td>
                                            <td>
                                                <h5>357</h5>
                                            </td>
                                            <td>
                                                <h5>$435</h5>
                                            </td>
                                            <td>
                                                <span className="round">
                                                    <i className="ti-shopping-cart"></i>
                                                </span>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </div>
                    {/* End Table Product */}
                </div>
                {/* End Table Info & Product */}
                {/* Table Invoice */}
                <div className="col-md-6">
                    <div className="card card-body printableArea">
                        <h3>
                            <b>INVOICE</b>
                            <span className="pull-right">#5669626</span>
                        </h3>
                        <hr />
                        <div className="row">
                            <div className="col-md-12">
                                <div className="pull-left">
                                    <address>
                                        <h3> &nbsp;
                                                <b className="text-danger">Material Pro Admin</b>
                                        </h3>
                                        <p className="text-muted m-l-5">E 104, Dharti-2,
                                                <br /> Nr' Viswakarma Temple,
                                                <br /> Talaja Road,
                                                <br /> Bhavnagar - 364002</p>
                                    </address>
                                </div>
                                <div className="pull-right text-right">
                                    <address>
                                        <h3>To,</h3>
                                        <h4 className="font-bold">Gaala & Sons,</h4>
                                        <p className="text-muted m-l-30">E 104, Dharti-2,
                                                <br /> Nr' Viswakarma Temple,
                                                <br /> Talaja Road,
                                                <br /> Bhavnagar - 364002</p>
                                        <p className="m-t-30">
                                            <b>Phone :</b>
                                            <i className="fa fa-phone"></i> +8456225412</p>
                                        <p>
                                            <b>Invoice Date :</b>
                                            <i className="fa fa-calendar"></i> 23rd Jan 2017</p>
                                    </address>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="table-responsive m-t-40" style={{ clear: "both" }}>
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th className="text-center">#</th>
                                                <th>Description</th>
                                                <th className="text-right">Quantity</th>
                                                <th className="text-right">Unit Cost</th>
                                                <th className="text-right">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">1</td>
                                                <td>Milk Powder</td>
                                                <td className="text-right">2 </td>
                                                <td className="text-right"> $24 </td>
                                                <td className="text-right"> $48 </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td>Air Conditioner</td>
                                                <td className="text-right"> 3 </td>
                                                <td className="text-right"> $500 </td>
                                                <td className="text-right"> $1500 </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">3</td>
                                                <td>RC Cars</td>
                                                <td className="text-right"> 20 </td>
                                                <td className="text-right"> %600 </td>
                                                <td className="text-right"> $12000 </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">4</td>
                                                <td>Down Coat</td>
                                                <td className="text-right"> 60 </td>
                                                <td className="text-right">$5 </td>
                                                <td className="text-right"> $300 </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="pull-right m-t-30 text-right">
                                    <p>Sub - Total amount: $13,848</p>
                                    <p>vat (10%) : $138 </p>
                                    <hr />
                                    <h3>
                                        <b>Total :</b> $13,986</h3>
                                </div>
                                <div className="clearfix"></div>
                                <hr />
                                <div className="text-right">
                                    <button className="btn btn-danger" type="submit"> Proceed to payment </button>
                                    <button id="print" className="btn btn-default btn-outline" type="button">
                                        <span>
                                            <i className="fa fa-print"></i> Print</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Table Invoice */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        //users: state.users,
        //systems: state.systems,
        drinks: state.drinks,
      
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
      
        fetchAllDrink: () => {
            dispatch(actFetchDrinkRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);