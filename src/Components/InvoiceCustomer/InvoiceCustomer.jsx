import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchDrinkRequestCustomer, actGetBillAmountRequest } from '../../Actions/index';
import CartCustomer from './CartCustomer';
import DrinkCartContainerCustomer from '../../Containers/DrinkCartContainerCustomer';
import CartContainerCustomer from '../../Containers/CartContainerCustomer';
import moment from 'moment';
import callApi from '../../Utils/apiCaller';
import * as Config from '../../Constants/Config';
import * as dataStorage from '../../Constants/localStorage';
class InvoiceCustomer extends Component {

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
        let id = this.props.match.url
        callApi('shops/get', 'POST', {
            shop_id: id.slice(-1)
            // shop_id: 1
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
        console.log('chỗ này lấy id đổ vào đây', this.props);
        let id = this.props.match.url
        this.props.fetchAllDrink(id.slice(-1));
        // this.props.fetchAllDrink(1);

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
                           
                                <DrinkCartContainerCustomer />
                        </div>


                    </div>
                    {/* End Table Product */}
                </div>
                {/* End Table Info & Product */}
                {/* Table Invoice */}
                <div className="col-md-6">
                    <div className="card card-body printableArea">
                        
                        
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
                                        <p>
                                            <b>Invoice Date :</b>
                                            <i className="fa fa-calendar"></i> {moment().format('LLL')}</p>
                                    </address>
                                </div>
                            </div>
                                <CartContainerCustomer
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
      
        fetchAllDrink: (id) => {
            dispatch(actFetchDrinkRequestCustomer(id))
        },

        getBill: () => {
            dispatch(actGetBillAmountRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceCustomer);