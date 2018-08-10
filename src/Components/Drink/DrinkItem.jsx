import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadjs from 'loadjs';
import {
    actFetchShopRequest,
    actAddShopResquest,
    actFetchSystemRequest,
    actUpdateShopResquest,
    actFetchAccountRequest,
    actAddDrinkResquest,
    actUpdateDrinkResquest,
    actFetchDrinkRequest,
    actFetchPositionRequest
} from '../../Actions/index';
import moment from 'moment';
import $ from 'jquery';
import * as dataStorage from '../../Constants/localStorage';
import * as Config from '../../Constants/Config';
import callApi from '../../Utils/apiCaller';
import toastr from 'toastr';
// dataStorage.DATA_USER.user_shop_id
//xem lai phan refs dang loi

class DrinkItem extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            idDrink: '',
            txtDrinkName: '',
            txtDrinkPrice: '',
            txtDrinkAvatar: '',
            avatarUpload: '',
            txtAvatarUpload: '',
            txtETH: '',
        }
    }

    getBase64 = (file) => {
    return new Promise((resolve,reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onChangeImage = (e) => {
        // console.log('change')
        // const files= file[0];
        const file = e.target.files[0];
        // this.getBase64(file).then(base64 => {
        //     // localStorage["fileBase64"] = base64;
        //     // console.debug("file stored",base64);
        //     console.log(base64);
        // });
       
        // console.log('hinh', e.target.files[0].name);
        this.setState({
            txtDrinkAvatar: e.target.files[0]
        })
    
        
    }
    
    // onChangeImage = (selectorFiles: FileList) => {
    //     console.log(selectorFiles);
    //     // // const files= file[0];
    //     // const file = e.target.files[0];
    //     // this.getBase64(file).then(base64 => {
    //     //     // localStorage["fileBase64"] = base64;
    //     //     // console.debug("file stored",base64);
    //     //     console.log(base64);
    //     // });
       
    //     // console.log('hinh', e.target.files[0].name);
    //     // this.setState({
    //     //     txtDrinkAvatar: e.target.filses[0]
    //     // })
        
    // }

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

    //Nút sửa - Nhấn vào lấy đc thông tin boss
    onGetIdDrink = (ev) => {
        let { drinks, positions } = this.props
        // console.log(ev)
        var val = ev.target.dataset.value;
        // console.log(systems);
        // console.log(users[0])
        let dataDrink = this.findObjectByKey(drinks, 'drink_id', val);
        let dataPosition = this.findObjectByKey(positions, 'position_id', 1);
        // console.log('systemdata', dataSystem.system_name)
        // console.log('log', dataDrink.drink_name)
        console.log('lấy avatar', dataDrink.drink_avatar)
        this.setState({
            txtDrinkPrice: dataDrink.drink_price,
            txtAvatarUpload: dataDrink.drink_avatar,
            txtDrinkName: dataDrink.drink_name,
            idDrink: dataDrink.drink_id,
            txtETH: dataDrink.drink_eth
        })
        console.log(dataDrink);
        console.log('hình', this.state.txtAvatarUpload, this.state.txtDrinkPrice)
    }

    uploadFile = async () => {
        var formData = new FormData();
        formData.append("avatar", this.state.txtDrinkAvatar);
        let avatar = await callApi('boss/upload-imgDrink', 'POST', formData, {
            'token': dataStorage.TOKEN
        }).then(res => {
            if (res.data.status == 'success'){
                return res.data.imgDrink;
            } else {
                toastr.warning(res.data.mesage, 'Warning')
            }
        })
        this.setState({ avatarUpload: avatar})
        // this.setState({ avatarUpload: `${Config.API_URL}/uploads/imgDrink/${avatar}`})
    }

    onSave = async (e) => {
        try {
            console.log('click save')
            e.preventDefault();
            var { txtDrinkPrice, txtDrinkAvatar, txtDrinkName, idDrink, txtETH } = this.state;
            console.log('hình', this.state.txtAvatarUpload)
            console.log('avatarupload', this.state.avatarUpload)
            console.log('data trước khi save', txtDrinkPrice, txtDrinkName, idDrink, txtETH)
            
            await this.uploadFile();
            //data này trùng với body call tới api
            // console.log('avatar',avatar);
            var drink = {
                drink_name: txtDrinkName,
                drink_price: txtDrinkPrice,
                drink_active: 'on',
                drink_eth: txtETH,
                // drink_avatar: txtDrinkAvatar,
                drink_avatar: this.state.avatarUpload,

                // drink_position_id: (this.refs.idPosition) ? this.refs.idPosition.value : '',
            }
            if (idDrink) {
                drink.drink_id = idDrink

                console.log('đang kiểm tra tồn tại id', idDrink)
                this.props.onUpdateDrink(drink)
                console.log('đã update')
            }
            else {
                console.log('đã k có id')
                console.log('data trước khi add', drink)
                drink.drink_shop_id = dataStorage.DATA_USER.user_shop_id,
                this.props.onAddDrink(drink);
                console.log(drink)

            }
        } catch (error) {
            console.log('Error onSave', error)
        }  
    }

    onDelete = async (e) => {
         try {
            console.log('click save')
            e.preventDefault();
            var { txtDrinkPrice, txtDrinkAvatar, txtDrinkName, idDrink, txtETH } = this.state;
            console.log('hình', this.state.txtAvatarUpload)
            console.log('avatarupload', this.state.avatarUpload)
            console.log('data trước khi save', txtDrinkPrice, txtDrinkName, idDrink)
            // await this.uploadFile();
           
            var drink = {
                drink_name: txtDrinkName,
                drink_price: txtDrinkPrice,
                drink_eth: txtETH,
                drink_id: idDrink,
                drink_active: 'off',
                drink_avatar: this.state.txtAvatarUpload,
            }
            console.log('drink', drink)
           this.props.onUpdateDrink(drink)
        } catch (error) {
            console.log('Error onSave', error)
        }  
    }

    onSetState = () => {
        this.setState({
            idDrink: '',
            txtDrinkName: '',
            txtDrinkPrice: '',
            txtDrinkAvatar: '',
            txtETH: ''
        })
    }

    componentWillMount() {
        // loadjs([
        //     '/assets/plugins/jquery/jquery.min.js',
        //     '/assets/plugins/footable/js/footable.all.min.js',
        //     '/assets/plugins/bootstrap-select/bootstrap-select.min.js',
        //     '/js/footable-init.js',
        //     '/assets/plugins/bootstrap/js/popper.min.js',
        //     '/assets/plugins/bootstrap/js/bootstrap.min.js',
        //     '/js/jquery.slimscroll.js',
        //     '/js/custom.min.js',
        //     '/assets/plugins/styleswitcher/jQuery.style.switcher.js',

        //     // '/assets/plugins/jquery/jquery.min.js',

        // ])
    }


    componentDidMount() {
        console.log('vào did mount')
        // this.props.fetchAllDrinks();
        // this.props.fetchAllSystem();
        this.props.fetchAllDrink();
        this.props.fetchPosition();
        // loadjs([
        //     '/assets/plugins/jquery/jquery.min.js',
        //     '/assets/plugins/footable/js/footable.all.min.js',
        //     '/assets/plugins/bootstrap-select/bootstrap-select.min.js',
        //     '/js/footable-init.js',
        //     '/assets/plugins/bootstrap/js/popper.min.js',
        //     '/assets/plugins/bootstrap/js/bootstrap.min.js',
        //     '/js/jquery.slimscroll.js',
        //     '/js/custom.min.js',

        //     // '/assets/plugins/jquery/jquery.min.js',

        // ])

    }

    onTest = () => {
        console.log('state avtar', this.state.txtDrinkAvatar);
        let data = {
            avatar: this.state.txtDrinkAvatar
        }
        // console.log('vào test')
        // var shop = {
        //     shop_name: "HardTest",
        //     shop_system: "1",
        //     shop_address: "HCM",
        //     shop_phone: "0985545458",
        //     shop_avatar: 'image.png',
        //     shop_email: "056565658656",
        //     shop_dayFrom: "01/01/2018",
        //     shop_dayTo: "01/01/2019",
        // }
        // console.log('log props', this.props)
        // this.props.onAddShop(shop);
        // console.log('chạy add xong')
        console.log(data)
        var formData = new FormData();
        formData.append("avatar", this.state.txtDrinkAvatar);
        callApi('boss/upload-imgDrink', 'POST', formData, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res);
        })
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


    showDrinks = (drinks) => {
        let result = null
        if (drinks.length > 0 ){
            result = drinks.map((drink, index) => {
                if (drink.drink_active == 'on') {
                    return (
                        <tr className="text_center" key={index}>
                            <td>{index + 1}</td>
                            <td className="text_left">
                                <a >
                                    <img src={`${Config.API_URL}/uploads/imgDrink/${drink.drink_avatar}`} alt="shop" width="40" className="img-circle" />
                                    {drink.drink_name}</a>
                                {/* <img src={drink.drink_avatar} alt="drink" width="40" className="img-circle"
                                /> {drink.drink_name}</a> */}
                            </td>
                            {/* <td>genelia@gmail.com</td> */}
                            <td>{drink.drink_price}</td>
                            {/* <td>{nameSystem}</td> */}
                            {/* <td></td> */}
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
                                        data-target="#update-drink"
                                        data-value={drink.drink_id}
                                        onClick={this.onGetIdDrink}
                                    >Edit</button>
                                    <button
                                        type="button"
                                        className="btn-sm waves-effect waves-light btn-danger"
                                        data-toggle="modal"
                                        data-target="#delete-modal"
                                        data-value={drink.drink_id}
                                        onClick={this.onGetIdDrink}
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
        var { drinks, positions } = this.props
        // var { drink } = this.props
        // console.log('drink từ container')
        // console.log('lấy hình avt',`${Config.API_URL}/uploads/imgDrink/${this.state.txtAvatarUpload}`)
        // console.log(this.props)
        // console.log(drinks, positions)
        var { txtDrinkPrice, txtDrinkAvatar, txtAvatarUpload,   txtDrinkName, txtETH} = this.state;

        return (
            <React.Fragment>
                <tbody>
                    {this.showDrinks(drinks)}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">
                            <button type="button" className="btn btn-info btn-rounded" data-toggle="modal" data-target="#add-drink" onClick={this.onSetState}>Add New Drink</button>
                        </td>
                        {/* Modal Add */}
                        <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: "none" }} id="add-drink">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title" id="myLargeModalLabel">Add Drink</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    </div>
                                    <div className="modal-body">
                                        <form className="form-horizontal form-material">
                                            <div className="form-group">
                                                <div className="col-md-12 m-b-20">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h4 className="card-title text_center">Avatar</h4>
                                                            {/* <label htmlFor="input-file-max-fs">Upload Avatar</label> */}
                                                            {/* <input
                                                            type="file"
                                                            id="input-file-max-fs"
                                                            className="dropify"
                                                            data-max-file-size="2M"
                                                            name="txtDrinkAvatar"
                                                            value={txtDrinkAvatar}
                                                            onChange={this.onChange} 
                                                        /> */}
                                                            <input
                                                                type="file"
                                                                id="input-file-max-fs"
                                                                className="dropify"
                                                                data-max-file-size="2M"
                                                                // ref="refAvatar"
                                                                // name="txtDrinkAvatar"
                                                                // value={txtDrinkAvatar}
                                                                onChange={this.onChangeImage} 
                                                                // onchange = {(e) => this.onChangeImage(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12 m-b-20">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="input1"
                                                        name="txtDrinkName"
                                                        value={txtDrinkName}
                                                        onChange={this.onChange}
                                                    />
                                                    <span className="bar"></span>
                                                    <label htmlFor="input1">Drink Name</label>
                                                </div>

                                                <div className="col-md-12 m-b-20">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="input1"
                                                        name="txtDrinkPrice"
                                                        value={txtDrinkPrice}
                                                        onChange={this.onChange}
                                                    />
                                                    <span className="bar"></span>
                                                    <label htmlFor="input1">Price</label>
                                                </div>

                                                <div className="col-md-12 m-b-20">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="input1"
                                                        name="txtETH"
                                                        value={txtETH}
                                                        onChange={this.onChange}
                                                    />
                                                    <span className="bar"></span>
                                                    <label htmlFor="input1">Price ETH</label>
                                                </div>
                                            </div>
                                        </form>
                                       
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger waves-effect text-left" data-dismiss="modal" onClick={this.onSave}>Save</button>
                                    </div>
                                </div>
                                {/* /.modal-content  */}
                            </div>
                            {/* /.modal-dialog  */}
                        </div>
                        {/* End Modal Add */}

                        {/* Modal Update */}
                        <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: "none" }} id="update-drink">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title" id="myLargeModalLabel">Add Drink</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    </div>
                                    <div className="modal-body">
                                        <form className="form-horizontal form-material">
                                            <div className="form-group">
                                                <div className="col-md-12 m-b-20">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h4 className="card-title text_center">Avatar</h4>
                                                            {/* <label htmlFor="input-file-max-fs">Upload Avatar</label> */}
                                                            {/* <input
                                                            type="file"
                                                            id="input-file-max-fs"
                                                            className="dropify"
                                                            data-max-file-size="2M"
                                                            name="txtDrinkAvatar"
                                                            value={txtDrinkAvatar}
                                                            onChange={this.onChange} 
                                                        /> */}
                                                            <input
                                                                type="file"
                                                                id="input-file-max-fs"
                                                                className="dropify"
                                                                data-max-file-size="2M"
                                                                onChange={this.onChangeImage} 
                                                                // data-default-file="../assets/plugins/dropify/src/images/test-image-1.jpg"
                                                                // data-default-file={`'${Config.API_URL}/uploads/imgDrink/${this.state.txtAvatarUpload}'`}
                                                                data-default-file={`${Config.API_URL}/uploads/imgDrink/${this.state.txtAvatarUpload}`}

                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12 m-b-20">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="input1"
                                                        name="txtDrinkName"
                                                        value={txtDrinkName}
                                                        onChange={this.onChange}
                                                    />
                                                    <span className="bar"></span>
                                                    <label htmlFor="input1">Drink Name</label>
                                                </div>

                                                <div className="col-md-12 m-b-20">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="input1"
                                                        name="txtDrinkPrice"
                                                        value={txtDrinkPrice}
                                                        onChange={this.onChange}
                                                    />
                                                    <span className="bar"></span>
                                                    <label htmlFor="input1">Price</label>
                                                </div>

                                                <div className="col-md-12 m-b-20">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="input1"
                                                        name="txtETH"
                                                        value={txtETH}
                                                        onChange={this.onChange}
                                                    />
                                                    <span className="bar"></span>
                                                    <label htmlFor="input1">Price ETH</label>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger waves-effect text-left" data-dismiss="modal" onClick={this.onSave}>Save</button>
                                    </div>
                                </div>
                                {/* /.modal-content  */}
                            </div>
                            {/* /.modal-dialog  */}
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
                                                <button type="button" className="btn btn-danger waves-effect waves-light"
                                                onClick={this.onDelete}
                                                data-dismiss="modal"
                                                >Delete</button>
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
        //users: state.users,
        //systems: state.systems,
        drinks: state.drinks,
        positions: state.positions
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllSystem: (system) => {
            dispatch(actFetchSystemRequest(system))
        },
        fetchAllDrinks: (drink) => {
            dispatch(actFetchAccountRequest(drink))
        },
        onAddDrink: (drink) => {
            dispatch(actAddDrinkResquest(drink))
        },
        onUpdateDrink: (drink) => {
            dispatch(actUpdateDrinkResquest(drink))
        },
        fetchAllDrink: () => {
            dispatch(actFetchDrinkRequest());
        },
        fetchPosition: () => {
            dispatch(actFetchPositionRequest());
        },
        onAddDrink: (drink) => {
            dispatch(actAddDrinkResquest(drink))
        },
        onUpdateDrink: (drink) => {
            dispatch(actUpdateDrinkResquest(drink))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinkItem);