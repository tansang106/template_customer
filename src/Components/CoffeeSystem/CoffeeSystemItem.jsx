import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchShopRequest, actAddShopResquest, actFetchSystemRequest, actUpdateShopResquest, actAddSystem, actAddSystemResquest, actUpdateSystemResquest } from '../../Actions/index';
import moment from 'moment';
import $ from 'jquery';
import * as dataStorage from '../../Constants/localStorage';

class CoffeeSystemItem extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            // shops: [],
            idSystem: '',
            txtSystemName: '',
            txtSystemAddress: '',
        }
    }


    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    findObjectByKey(array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] == value) {
                return array[i];
            }
        }
        return null;
    }

    findElementInObjectOfArray(nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i].name === nameKey) {
                return myArray[i];
            }
        }
    }

    //Nút sửa - Nhấn vào lấy đc thông tin system
    onGetIdSystem = (ev) => {
        let { shops, systems } = this.props
        // console.log(ev)
        var val = ev.target.dataset.value;
        // console.log(systems);
        // console.log(shops[0])
        let dataShop = this.findObjectByKey(shops, 'shop_id', val);
        let dataSystem = this.findObjectByKey(systems, 'system_id', val);
        // console.log('systemdata', dataSystem.system_name)
        // console.log('log', dataShop.shop_name)
        this.setState({
            txtSystemAddress: dataSystem.system_address,
            // txtShopAvatar: dataShop.shop_avatar,
            txtSystemName: dataSystem.system_name,
            idSystem: dataSystem.system_id
        })
        console.log(dataSystem);
    }


    onSave = async (e) => {
        console.log('click save')
        e.preventDefault();
        var { txtSystemAddress, txtSystemName } = this.state;
        var system = {
            system_name: txtSystemName,
            system_address: txtSystemAddress,
            system_active: 'on'
        }
        if (this.state.idSystem) {
            system.system_id = this.state.idSystem
            this.props.onUpdateSystem(system);
            await this.props.fetchAllSystem();
            // await Promise.all([this.props.onUpdateSystem(system), this.props.fetchAllSystem()]);
        }
        else {
            this.props.onAddSystem(system);
            console.log('đã add')
        }
    }

    onDelete = (e) => {
        try {
             e.preventDefault();
        var { txtSystemAddress, txtSystemName } = this.state;
        var system = {
            system_name: txtSystemName,
            system_address: txtSystemAddress,
            system_active: 'off',
            system_id: this.state.idSystem
        }
        
            this.props.onUpdateSystem(system);
        } catch (error) {
            console.log('onDelete', error)
        }
       
       
    }

    onSetState = () => {
        this.setState({
            txtSystemName: '',
            txtSystemAddress: '',
            idSystem: ''
        })
    }


    componentDidMount() {
        this.props.fetchAllSystem();
    }

    onTest = () => {
        console.log('vào test')
    }

    pagination = () => {
        // Pagination
        // -----------------------------------------------------------------
        $('#demo-foo-pagination').footable();
        $('#demo-show-entries').change(function (e) {
            e.preventDefault();
            var pageSize = $(this).val();
            $('#demo-foo-pagination').data('page-size', pageSize);
            $('#demo-foo-pagination').trigger('footable_initialized');
        });
    }

    showSystem = (systems) => {
        var result = null;
        if (systems.length > 0) {
            result = systems.map((system, index) => {
                 if (system.system_active == 'on') {
                return (
                    <tr className="text_center" key={index}>
                        <td>{index + 1}</td>
                        <td className="text_left">
                            <a >
                                {/* <img src="../assets/images/users/4.jpg" alt="user" width="40" className="img-circle"
                                />  */}
                                {system.system_name}</a>
                        </td>
                        {/* <td>genelia@gmail.com</td> */}
                        <td>{system.system_address}</td>
                        <td>
                            {/* <button type="button" className="btn btn-lg btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete">
                                                {/* <i className="ti-close" aria-hidden="true"></i> 
                                                <i className="fa fa-info-circle" aria-hidden="true"></i>
                                            </button> */}
                            <div className="button-group text-center">
                                {/* <button type="button" className="btn-sm waves-effect waves-light btn-info icon_action"
                                    onClick={this.onTest}>Info</button> */}
                                <button
                                    type="button"
                                    className="btn-sm waves-effect waves-light btn-primary icon_action"
                                    data-toggle="modal"
                                    data-target="#update-system"
                                    data-value={system.system_id}
                                    onClick={this.onGetIdSystem}
                                >Edit</button>
                                <button type="button"
                                    className="btn-sm waves-effect waves-light btn-danger"
                                    data-toggle="modal"
                                    data-target="#delete-modal"
                                    data-value={system.system_id}
                                    onClick={this.onGetIdSystem}
                                >Delete</button>
                            </div>
                        </td>
                    </tr>
                )
            }
                }
            )
        }

        return result;
    }
  
    render() {
        var { systems } = this.props
        console.log(this.props)
        console.log(systems)
        var { txtSystemAddress, txtSystemName, } = this.state
        //Biến shop dùng để đổ ra list shop
        var system = systems.map((system, index) => {
            // var getNameSystem = this.findObjectByKey(systems, 'system_id', )
            // if (shop != undefined) {
            // if (dataStorage.DATA_USER.user_shop_id == shop.shop_system_id)
            // {
            // if(system.system_name)
            return (
                <tr className="text_center" key={index}>
                    <td>{index + 1}</td>
                    <td className="text_left">
                        <a >
                            <img src="../assets/images/users/4.jpg" alt="user" width="40" className="img-circle"
                            /> {system.system_name}</a>
                    </td>
                    {/* <td>genelia@gmail.com</td> */}
                    <td>{system.system_address}</td>
                    <td>
                        {/* <button type="button" className="btn btn-lg btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete">
                                                {/* <i className="ti-close" aria-hidden="true"></i> 
                                                <i className="fa fa-info-circle" aria-hidden="true"></i>
                                            </button> */}
                        <div className="button-group text-center">
                            <button type="button" className="btn-sm waves-effect waves-light btn-info icon_action"
                                onClick={this.onTest}>Info</button>
                            <button
                                type="button"
                                className="btn-sm waves-effect waves-light btn-primary icon_action"
                                data-toggle="modal"
                                data-target="#update-system"
                                data-value={system.system_id}
                                onClick={this.onGetIdSystem}
                            >Add</button>
                            <button type="button"
                                className="btn-sm waves-effect waves-light btn-danger"
                                data-toggle="modal"
                                data-target="#modal-test"
                            >Delete</button>
                        </div>
                    </td>
                </tr>
            )

            // }
        })

        return (
            <React.Fragment>
                <tbody>
                    {/* {system} */}
                    { this.showSystem(systems)}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">
                            <button type="button" className="btn btn-info btn-rounded" data-toggle="modal" data-target="#add-contact" onClick={this.onSetState}>Add New Contact</button>
                        </td>
                        {/* Modal Add */}
                        <div id="add-contact" className="modal fade in" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h4 className="modal-title" id="myModalLabel">Add System</h4>
                                    </div>
                                    <div className="modal-body" onSubmit={this.onSave}>
                                        <form className="form-horizontal form-material">
                                            <div className="form-group">
                                                <div className="col-md-12 m-b-20">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Type name"
                                                        name="txtSystemName"
                                                        value={txtSystemName}
                                                        onChange={this.onChange} /> </div>

                                                <div className="col-md-12 m-b-20">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Address"
                                                        name="txtSystemAddress"
                                                        value={txtSystemAddress}
                                                        onChange={this.onChange} /> </div>





                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-info waves-effect" data-dismiss="modal" onClick={this.onSave}>Save</button>
                                        <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Cancel</button>
                                    </div>
                                </div>
                                {/* /.modal-content */}
                            </div>
                            {/* /.modal-dialog */}
                        </div>
                        {/* End Modal Add */}

                        {/* Modal Update */}
                        <div id="update-system" className="modal fade in" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h4 className="modal-title" id="myModalLabel">Add System</h4>
                                    </div>
                                    <div className="modal-body" onSubmit={this.onSave}>
                                        <form className="form-horizontal form-material">
                                            <div className="form-group">
                                                <div className="col-md-12 m-b-20">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Type name"
                                                        name="txtSystemName"
                                                        value={txtSystemName}
                                                        onChange={this.onChange} /> </div>

                                                <div className="col-md-12 m-b-20">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Address"
                                                        name="txtSystemAddress"
                                                        value={txtSystemAddress}
                                                        onChange={this.onChange} /> </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-info waves-effect" data-dismiss="modal" onClick={this.onSave}>Save</button>
                                        <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Cancel</button>
                                    </div>
                                </div>
                                {/* /.modal-content */}
                            </div>
                            {/* /.modal-dialog */}
                        </div>
                        {/* End Modal Update */}

                        {/* Modal Test */}
                        <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: "none" }} id="modal-test">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title" id="myLargeModalLabel">Add Boss</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h4 className="card-title text_center">Avatar</h4>
                                                        {/* <label htmlFor="input-file-max-fs">Upload Avatar</label> */}
                                                        <input type="file" id="input-file-max-fs" className="dropify" data-max-file-size="2M" />
                                                    </div>
                                                </div>
                                                <form className="floating-labels m-t-40">
                                             
                                                <div className="col-md-12 m-b-20">
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        placeholder="Date Expire"
                                                        name="txtShopDayTo"
                                                    // value={txtShopDayTo}
                                                    // onChange={this.onChange} 
                                                    />
                                                    </div>
                                                 
                                                </form>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <form className="floating-labels m-t-40">
                                                    <div className="form-group m-b-40">
                                                        <input type="text" className="form-control"  />
                                                        <span className="bar"></span>
                                                        <label >User Email</label>
                                                    </div>
                                                    <div className="form-group m-b-40">
                                                        <input type="password" className="form-control" />
                                                        <span className="bar"></span>
                                                        <label htmlFor="input2">Password</label>
                                                    </div>
                                                    <div className="form-group m-b-40">
                                                        <input type="text" className="form-control"  />
                                                        <span className="bar"></span>
                                                        <label >User Name</label>
                                                    </div>
                                                    <div className="form-group m-b-40">
                                                        <input type="text" className="form-control"  />
                                                        <span className="bar"></span>
                                                        <label >Address</label>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <form className="floating-labels m-t-40">
                                                    <div className="form-group m-b-40">
                                                        <input type="text" className="form-control"  />
                                                        <span className="bar"></span>
                                                        <label >Phone</label>
                                                    </div>
                                                    <div className="form-group m-b-40">
                                                        <input type="text" className="form-control"  />
                                                        <span className="bar"></span>
                                                        <label >ID</label>
                                                    </div>
                                                    <div className="form-group m-b-40">
                                                    <select
                                                        className="form-control custom-select"
                                                        data-placeholder="Sexual"
                                                        ref='idSystem'>
                                                        {/* {this.props.systems.map((system, index) => {
                                                            return (
                                                                <option
                                                                    name="txtShopSystemID"
                                                                    value={system.system_id}
                                                                    key={index}>
                                                                    {system.system_name}
                                                                </option>
                                                            )
                                                        })} */}
                                                        <option value="Category 1">Sexual</option>
                                                        <option value="Category 2">Category 2</option>
                                                        <option value="Category 3">Category 5</option>
                                                        <option value="Category 4">Category 4</option>
                                                    </select>
                                                    </div>
                                                 
                                                    <div className="form-group m-b-40">
                                                    <select
                                                        className="form-control custom-select"
                                                        data-placeholder="Sexual"
                                                        ref='idSystem'>
                                                        {/* {this.props.systems.map((system, index) => {
                                                            return (
                                                                <option
                                                                    name="txtShopSystemID"
                                                                    value={system.system_id}
                                                                    key={index}>
                                                                    {system.system_name}
                                                                </option>
                                                            )
                                                        })} */}
                                                        <option value="Category 1">System</option>
                                                        <option value="Category 2">Category 2</option>
                                                        <option value="Category 3">Category 5</option>
                                                        <option value="Category 4">Category 4</option>

                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger waves-effect text-left" data-dismiss="modal">Save</button>
                                    </div>
                                </div>
                                {/* /.modal-content  */}
                            </div>
                            {/* /.modal-dialog  */}
                        </div>
                        {/* End Modal Test */}
                                                        
                        {/* Modal Delete */}
                        <div id="delete-modal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: "none"}}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">  
                                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                <h4 className="modal-title">Delete</h4>
                                            </div>
                                            <div className="modal-body">
                                                <h1 className= "text-danger"> 
                                                    Are you sure delete?
                                                </h1>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                                                <button 
                                                    type="button" 
                                                    className="btn btn-danger waves-effect waves-light" 
                                                    onClick={this.onDelete}
                                                    data-dismiss="modal">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                
                        {/* End Modal Delete */}

                        {/* Pagination */}
                        <td colSpan="7">
                            <div className="text-right">
                                <ul className="pagination"> </ul>
                            </div>
                        </td>
                        {/* End Pagination*/}
                    </tr>
                </tfoot>
            </React.Fragment>


        )
    }
}

const mapStateToProps = state => {
    return {
        shops: state.shops,
        systems: state.systems,
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllShops: () => {
            dispatch(actFetchShopRequest());
        },
        onAddShop: (shop) => {
            dispatch(actAddShopResquest(shop));
        },
        fetchAllSystem: (system) => {
            dispatch(actFetchSystemRequest(system));
        },
        onUpdateShop: (shop) => {
            dispatch(actUpdateShopResquest(shop));
        },
        onAddSystem: (system) => {
            dispatch(actAddSystemResquest(system));
        },
        onUpdateSystem: (system) => {
            dispatch(actUpdateSystemResquest(system))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeSystemItem);