import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchShopRequest, actAddShopResquest, actFetchPositionRequest, actUpdateShopResquest, actAddPositionResquest, actUpdatePositionResquest } from '../../Actions/index';
import $ from 'jquery';
import * as dataStorage from '../../Constants/localStorage';

class PositionItem extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            // shops: [],
            idPosition: '',
            txtPositionName: '',

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

    //Nút sửa - Nhấn vào lấy đc thông tin position
    onGetIdPosition = (ev) => {
        let { shops, positions } = this.props
        // console.log(ev)
        var val = ev.target.dataset.value;
        // console.log(positions);
        // console.log(shops[0])
        let dataShop = this.findObjectByKey(shops, 'shop_id', val);
        let dataPosition = this.findObjectByKey(positions, 'position_id', val);
        // console.log('positiondata', dataPosition.position_name)
        // console.log('log', dataShop.shop_name)
        this.setState({


            txtPositionName: dataPosition.position_name,
            idPosition: dataPosition.position_id
        })
        console.log(dataPosition);
    }


    onSave = (e) => {
        try {
        console.log('click save')
        e.preventDefault();
        var { txtPositionName } = this.state;
        var position = {
            position_name: txtPositionName,
            position_active: 'on',
        }
        if (this.state.idPosition) {
            position.position_id = this.state.idPosition;
            this.props.onUpdatePosition(position);
            console.log('đã update')
            // await Promise.all([this.props.onUpdatePosition(position), this.props.fetchAllPosition()]);
        }
        else {
            position.position_shop_id = dataStorage.DATA_USER.user_shop_id;
            this.props.onAddPosition(position);
            console.log('đã add')
        }
        } catch (error) {
            console.log('Error onSave', error)
        }
    }

    onDelete = (e) => {
        try {
            console.log('click save')
        e.preventDefault();
        var { txtPositionName } = this.state;
        var position = {
            position_name: txtPositionName,
            position_active: 'off',
            position_id: this.state.idPosition
        }
      
            this.props.onUpdatePosition(position);
            console.log('đã update')
            // await Promise.all([this.props.onUpdatePosition(position), this.props.fetchAllPosition()]);
        
       
        } catch (error) {
            console.log('Error onDelete', error)
        }

    }

    onSetState = () => {
        this.setState({
            txtPositionName: '',
            idPosition: ''
        })
    }


    componentDidMount() {
        this.props.fetchAllPosition();
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

    showPosition = (positions) => {
        let result = null;
        if (positions.length > 0) {
            result = positions.map((position, index) => {
                if (position.position_active == 'on') {
                return (
                    <tr className="text_center" key={index}>
                        <td>{index + 1}</td>
                        <td className="text_left">
                            <a >
                                {/* <img src="../assets/images/users/4.jpg" alt="user" width="40" className="img-circle"
                                /> */}
                                {position.position_name}</a>
                        </td>
                        {/* <td>genelia@gmail.com</td> */}
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
                                    data-target="#update-position"
                                    data-value={position.position_id}
                                    onClick={this.onGetIdPosition}
                                >Add</button>
                                <button type="button"
                                    className="btn-sm waves-effect waves-light btn-danger"
                                    data-toggle="modal"
                                    data-target="#delete-modal"
                                    data-value={position.position_id}
                                    onClick={this.onGetIdPosition}
                                >Delete</button>
                            </div>
                        </td>
                    </tr>
                )
            }
            })
        }
        return result;
    }

    render() {
        var { positions } = this.props
        console.log(this.props)
        console.log(positions)
        var { txtPositionName } = this.state
        //Biến shop dùng để đổ ra list shop

        return (
            <React.Fragment>
                <tbody>
                    {/* {position} */}
                    {this.showPosition(positions)}
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
                                        <h4 className="modal-title" id="myModalLabel">Add Position</h4>
                                    </div>
                                    <div className="modal-body" onSubmit={this.onSave}>
                                        <form className="form-horizontal form-material">
                                            <div className="form-group">
                                                <div className="col-md-12 m-b-20">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Type name"
                                                        name="txtPositionName"
                                                        value={txtPositionName}
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
                        <div id="update-position" className="modal fade in" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h4 className="modal-title" id="myModalLabel">Add Position</h4>
                                    </div>
                                    <div className="modal-body" onSubmit={this.onSave}>
                                        <form className="form-horizontal form-material">
                                            <div className="form-group">
                                                <div className="col-md-12 m-b-20">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Type name"
                                                        name="txtPositionName"
                                                        value={txtPositionName}
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
        positions: state.positions,
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
        fetchAllPosition: (position) => {
            dispatch(actFetchPositionRequest(position));
        },
        onUpdateShop: (shop) => {
            dispatch(actUpdateShopResquest(shop));
        },
        onAddPosition: (position) => {
            dispatch(actAddPositionResquest(position));
        },
        onUpdatePosition: (position) => {
            dispatch(actUpdatePositionResquest(position))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionItem);