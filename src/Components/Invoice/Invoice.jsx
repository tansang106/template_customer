import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchDrinkRequest, actGetBillAmountRequest } from '../../Actions/index';
import Cart from './Cart';
import DrinkCartContainer from '../../Containers/DrinkCartContainer';
import CartContainer from '../../Containers/CartContainer';
import moment from 'moment';
import callApi from '../../Utils/apiCaller';
import * as Config from '../../Constants/Config';
import * as dataStorage from '../../Constants/localStorage';
class Invoice extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            txtName: '',
            txtPhone: '',
            txtAddress: '',
            txtVAT: '',
            txtDiscount: '',
            shop: '',
            name: '',
            bill:'',
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        // var value = target.value;
        var value = (target.validity.valid) ? target.value : this.state[name]
        this.setState({
            [name]: value
        });
    }
    
    getShop = () => {
        callApi('shops/get', 'POST', {
            shop_id: dataStorage.DATA_USER.user_shop_id
        }, { 'token': dataStorage.TOKEN
            }).then(res => {
                console.log(res)
                if (res.data.status == 'success') {
                    this.setState({
                    shop: res.data.shop.shop_address,
                    name: res.data.shop.shop_name
                    })
                } else {
                    console.log('Error get Shop', res.data.message);
                    return;
                }
                
        })
    }

    getAmountBill = () => {
        callApi('bills/countBillInvoice', 'POST', {
            idShop: dataStorage.DATA_USER.user_shop_id
        }, {
            'token': dataStorage.TOKEN
            }).then(res => {
                console.log(res)
                if (res.data.status == 'success') {
                this.setState({
                   bill : res.data.bill.count + 1
                })
                } else {
                    console.log('Error');
                    return;
                }
                
            })
    }

    componentDidMount() {
        this.props.fetchAllDrink();
        this.getShop();
        this.getAmountBill();
        this.props.getBill();
    }

    render() {
        console.log('location', this.props)
        var { drinks, bills } = this.props;
        var { txtName, txtPhone, txtAddress, txtVAT, txtDiscount } = this.state
        console.log('drinks render', drinks)
        console.log('số bill', bills);
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
                            <h4 className="card-title m-b-0">Info Customer</h4>
                        </div>

                        <div className="card-body">
                            {/* <h4 className="card-title">Info Customer</h4> */}
                            <form className="form-horizontal form-control-line m-t-10">
                                <div className="form-group has-success m-b-20">
                                    <span className="bar"></span>
                                    <label className="text-info">Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        // id="input11" 
                                        name="txtName"
                                        value={txtName}
                                        onChange={this.onChange}
                                    />
                                    {/* <span className="bar"></span>
                                    <label htmlFor="input11">Name</label> */}
                                </div>
                                <div className="form-group has-warning m-b-20">
                                    <span className="bar"></span>
                                    <label className="text-warning">Phone</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        // id="input11" 
                                        name="txtPhone"
                                        value={txtPhone}
                                        onChange={this.onChange}/>
                                    {/* <span className="bar"></span>
                                    <label htmlFor="input11">Phone</label> */}
                                </div>
                                <div className="form-group has-error has-danger m-b-20">
                                    <span className="bar"></span>
                                    <label className="text-danger">Address</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        // id="input12" 
                                        name="txtAddress"
                                        value={txtAddress}
                                        onChange={this.onChange}
                                    />
                                    {/* <span className="bar"></span>
                                    <label htmlFor="input12">Address</label> */}
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
                            {/* <select className="custom-select pull-right">
                                <option selected="">Electronics</option>
                                <option value="1">Kitchen</option>
                                <option value="2">Crocory</option>
                                <option value="3">Wooden</option>
                            </select> */}
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            // id="exampleInputuname2"
                                            placeholder="VAT"
                                            name="txtVAT"
                                            value={txtVAT}
                                            onChange={this.onChange}
                                            pattern="[0-9]*"
                                        />
                                        <div className="input-group-addon">
                                            <i className="fa fa-percent"></i>
                                        </div>
                                    </div>
                                </div>
                                {/*/span*/}
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            // id="exampleInputuname2" 
                                            placeholder="Discount" 
                                             name="txtDiscount"
                                            value={txtDiscount}
                                            onChange={this.onChange}
                                            pattern="[0-9]*"
                                        />
                                        <div className="input-group-addon">
                                            <i className="fa fa-percent"></i>
                                        </div>
                                    </div>
                                </div>
                                {/*/span*/}
                            </div>
                                <DrinkCartContainer />
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
                            <span className="pull-right">#{this.state.bill}</span>
                        </h3>
                        <hr />
                        <div className="row">
                            <div className="col-md-12">
                                <div className="pull-left">
                                    <address>
                                        <h3> &nbsp;
                                                {/* <b className="text-danger">Material Pro Admin</b> */}
                                            <b className="text-danger">{this.state.name}</b>

                                        </h3>
                                        {/* <p className="text-muted m-l-5">E 104, Dharti-2,
                                                <br /> Nr' Viswakarma Temple,
                                                <br /> Talaja Road,
                                                <br /> Bhavnagar - 364002</p> */}
                                        <p className="text-muted m-l-5">{this.state.shop}</p>
                                    </address>
                                </div>
                                <div className="pull-right text-right">
                                    <address>
                                        <h3>To,</h3>
                                        {/* <h4 className="font-bold">Gaala & Sons,</h4> */}
                                        <h4 className="font-bold">{txtName},</h4>
                                        {/* <p className="text-muted m-l-30">E 104, Dharti-2,
                                                <br /> Nr' Viswakarma Temple,
                                                <br /> Talaja Road,
                                                <br /> Bhavnagar - 364002</p> */}
                                         <p className="text-muted m-l-30">{txtAddress}</p>
                                        <p className="m-t-30">
                                            <b>Phone :</b>
                                            <i className="fa fa-phone"></i> {txtPhone}</p>
                                        <p>
                                            <b>Invoice Date :</b>
                                            <i className="fa fa-calendar"></i> {moment().format('LLL')}</p>
                                    </address>
                                </div>
                            </div>
                                <CartContainer
                                    vat= {txtVAT}
                                    discount= {txtDiscount}
                                />
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
        bills: state.bill
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
      
        fetchAllDrink: () => {
            dispatch(actFetchDrinkRequest())
        },

        getBill: () => {
            dispatch(actGetBillAmountRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);