import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchShopRequest, actAddShopResquest, actFetchSystemRequest, actUpdateShopResquest, actFetchAccountRequest } from '../../Actions/index';
import moment from 'moment';
import $ from 'jquery';
import * as Config from '../../Constants/Config';
import * as dataStorage from '../../Constants/localStorage';
import callApi from '../../Utils/apiCaller';
import FormErrors from '../Helper/FormErrors';

class CoffeeShopItem extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            shops: [],
            idShop: '',
            txtShopName: '',
            txtShopAddress: '',
            txtShopAvatar: '',
            txtShopDayFrom: '',
            txtShopDayTo: '',
            Phone: '',
            txtShopSystemID: '',
            Email: '',
            avatarUpload: '',
            txtAvatarUpload: '',
            test: '',
            formErrors: {
                Email: '',
                Password: '',
            },
            emailValid: false,
            formValid: false,
            passwordValid: false,
            phoneValid: false,
        }
    }

    onChangeImage = (e) => {
        console.log(this.state.test)
        console.log(e.target.files[0])
        this.setState({
            txtShopAvatar: e.target.files[0],
            test: e.target.files[0]
        })
        console.log(this.state.txtShopAvatar, this.state.test)
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        }, () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let phoneValid = this.state.phoneValid;
        switch (fieldName) {
            case 'Email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.Email = emailValid ? '' : ' is invalid';
                break;
            case 'Phone':
                phoneValid = value.match(/(09|01[2|6|8|9])+([0-9]{8})\b/);
                fieldValidationErrors.Phone = phoneValid ? '' : ' is invalid'
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            phoneValid: phoneValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.phoneValid });
    }

    errorClass(error) {
        console.log(error)
        return (error.length === 0 ? '' : 'has-danger');
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

    //Nút sửa - Nhấn vào lấy đc thông tin shop
    onGetIdShop = (ev) => {
        let { shops, systems } = this.props
        // console.log(ev)
        var val = ev.target.dataset.value;
        // console.log(systems);
        // console.log(shops[0])
        let dataShop = this.findObjectByKey(shops, 'shop_id', val);
        let dataSystem = this.findObjectByKey(systems, 'system_id', 1);
        // console.log('systemdata', dataSystem.system_name)
        // console.log('log', dataShop.shop_name)
        console.log('lấy avatar', dataShop.shop_avatar)
        this.setState({
            txtShopAddress: dataShop.shop_address,
            // txtShopAvatar: dataShop.shop_avatar,
            txtShopDayFrom: moment(dataShop.shop_dayFrom).format('YYYY-MM-DD'),
            txtShopDayTo: moment(dataShop.shop_dayTo).format('YYYY-MM-DD'),
            Email: dataShop.shop_email,
            txtShopName: dataShop.shop_name,
            Phone: dataShop.shop_phone,
            txtShopSystemID: dataShop.shop_system_id,
            idShop: dataShop.shop_id,
            txtAvatarUpload: dataShop.shop_avatar,
        })
        console.log(dataShop);
    }

    uploadFile = async () => {
        console.log('vào upload ảnh', this.state.txtShopAvartar)
        var formData = new FormData();
        formData.append("avatar", this.state.txtShopAvatar);
        let avatar = await callApi('shop/upload-imgshop', 'POST', formData, {
            'token': dataStorage.TOKEN
        }).then(res => {
            return res.data.imgShop;
        })
        this.setState({ avatarUpload: avatar })
        console.log('đã up ảnh', this.state.avatarUpload)
        // this.setState({ avatarUpload: `${Config.API_URL}/uploads/imgDrink/${avatar}`})
    }


    onSave = async (e) => {
        try {
            console.log('click save')
            e.preventDefault();
            var { txtShopAddress, txtShopAvatar, txtShopDayFrom, txtShopDayTo, Email, txtShopName, Phone, txtShopSystemID, avatarUpload } = this.state;
            // console.log('xem systemid', txtShopSystemID)
            await this.uploadFile();
            // return;
            var shop = {
                shop_name: txtShopName,
                // shop_system: (this.refs.idSystem) ? this.refs.idSystem.value : '',
                shop_address: txtShopAddress,
                shop_phone: Phone,
                shop_avatar: this.state.avatarUpload,
                shop_email: Email,
                shop_dayFrom: txtShopDayFrom,
                shop_dayTo: txtShopDayTo,
                shop_active: 'on'
                //shop_id: this.state.idShop
            }
            if (this.state.idShop) {
                console.log('đang tìm id system', shop.shop_system)
                shop.shop_system = (this.refs.idSystem) ? this.refs.idSystem.value : '',
                    shop.shop_id = this.state.idShop
                console.log('đang kiểm tra tồn tại id', this.state.idShop)
                this.props.onUpdateShop(shop);
                console.log('đã update')
            }
            else {
                console.log('đã k có id')
                shop.shop_system_id = (this.refs.idSystem) ? this.refs.idSystem.value : '',
                    console.log('log system id', shop.shop_system_id)

                this.props.onAddShop(shop);
                console.log(shop)

            }
            // callApi('shops/create', 'POST', {
            //     shop_name: txtShopName,
            //     shop_system_id: txtShopSystemID,
            //     shop_address: txtShopAddress,
            //     shop_phone: Phone,
            //     shop_avatar: txtShopAvatar,
            //     shop_email: Email,
            //     shop_dayFrom: txtShopDayFrom,
            //     shop_dayTo: txtShopDayTo
            // }, {
            //     'token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjJAZ21haWwuY29tIiwiaWF0IjoxNTI2Njk2Njc5fQ.mMmoD11AmjiyARIWufhJDl3LifDAf8LqSAzKEzeV7bE"    
            // }).then(res => {
            //     console.log(res);
            // })
        } catch (error) {
            console.log('Error onSave', error)
        }

    }

    onSetState = () => {
        this.setState({
            txtShopName: '',
            txtShopAddress: '',
            Phone: '',
            txtShopAvatar: '',
            Email: '',
            txtShopDayFrom: '',
            txtShopDayTo: '',
            idShop: ''
        })
    }


    componentDidMount() {
        this.props.fetchAllShops();
        this.props.fetchAllSystem();
    }

    onTest = () => {
        console.log('vào test')
        var shop = {
            shop_name: "HardTest",
            shop_system: "1",
            shop_address: "HCM",
            shop_phone: "0985545458",
            shop_avatar: 'image.png',
            shop_email: "056565658656",
            shop_dayFrom: "01/01/2018",
            shop_dayTo: "01/01/2019",
        }
        console.log('log props', this.props)
        this.props.onAddShop(shop);
        console.log('chạy add xong')

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

    onDelete = (e) => {
        try {
            console.log('click save')
            e.preventDefault();
            var { txtShopAddress, txtShopAvatar, txtShopDayFrom, txtShopDayTo, Email, txtShopName, Phone, txtShopSystemID, avatarUpload } = this.state;

            var shop = {
                shop_name: txtShopName,
                // shop_system: (this.refs.idSystem) ? this.refs.idSystem.value : '',
                shop_address: txtShopAddress,
                shop_phone: Phone,
                shop_avatar: this.state.avatarUpload,
                shop_email: Email,
                shop_dayFrom: txtShopDayFrom,
                shop_dayTo: txtShopDayTo,
                shop_system: (this.refs.idSystem) ? this.refs.idSystem.value : '',
                shop_id: this.state.idShop,
                shop_active: 'off'
                //shop_id: this.state.idShop
            }
            console.log('data trước upload', shop)
            this.props.onUpdateShop(shop);

        } catch (error) {
            console.log('Error onSave', error)
        }
    }

    showShops = (shops, systems) => {
        var result = null;
        if (shops.length > 0) {
            result = shops.map((shop, index) => {
                if (shop.shop_active == 'on') {
                    let nameSystems = systems.find(x => x.system_id === shop.shop_system_id)
                    let nameSystem;
                    if (nameSystems != undefined) {
                        nameSystem = nameSystems.system_name

                        // if (dataStorage.DATA_USER.user_shop_id == shop.shop_system_id)
                        // {
                        return (
                            <tr className="text_center" key={index}>
                                <td>{index + 1}</td>
                                <td className="text_left">
                                    {/* <a >
                                <span className="mytooltip tooltip-effect-4 ">
                                  
                                    <img src={`${Config.API_URL}/uploads/imgShop/${shop.shop_avatar}`} alt="user" width="40" className="img-circle"/>
                                    <span className="tooltip-content clearfix">
                                    <img src={`${Config.API_URL}/uploads/imgShop/${shop.shop_avatar}`}/>
                                        <span className="tooltip-text">Also known as Euclid of andria, was a Greek mathematician, often referred</span>
                                    </span>
                                </span> 
                                    {shop.shop_name}
                            </a> */}

                                    {/* <span className="mytooltip tooltip-effect-4 "> */}

                                    <img src={`${Config.API_URL}/uploads/imgShop/${shop.shop_avatar}`} alt="shop" width="40" className="img-circle" />
                                    {/* <span className="tooltip-content clearfix"> */}
                                    {/* <img src={`${Config.API_URL}/uploads/imgShop/${shop.shop_avatar}`}/>
                                        <span className="tooltip-text">Also known as Euclid of andria, was a Greek mathematician, often referred</span> */}
                                    {/* </span> */}
                                    {/* </span>  */}
                                    {shop.shop_name}

                                </td>
                                {/* <td>genelia@gmail.com</td> */}
                                <td>{shop.shop_phone}</td>
                                <td>{moment(shop.shop_dayFrom).format("DD/MM/YYYY")}</td>
                                <td>{moment(shop.shop_dayTo).format("DD/MM/YYYY")}</td>
                                <td>{nameSystem}</td>
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
                                            data-target="#update-shop"
                                            data-value={shop.shop_id}
                                            onClick={this.onGetIdShop}
                                        >Edit</button>
                                        <button type="button" className="btn-sm waves-effect waves-light btn-danger"
                                            data-toggle="modal"
                                            data-target="#delete-modal"
                                            data-value={shop.shop_id}
                                            onClick={this.onGetIdShop}
                                        >Delete</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                }
            })
        }
        return result;
    }

    render() {
        var { shops, systems } = this.props

        var { txtShopAddress, txtShopAvatar, txtShopDayFrom, txtShopDayTo, Email, txtShopName, Phone, txtShopSystemID } = this.state
        //Biến shop dùng để đổ ra list shop
        var shop = shops.map((shop, index) => {
            // var getNameSystem = this.findObjectByKey(systems, 'system_id', )
            // if (shop != undefined) {


            let nameSystems = systems.find(x => x.system_id === shop.shop_system_id)
            let nameSystem;
            if (nameSystems != undefined) {
                nameSystem = nameSystems.system_name

                // if (dataStorage.DATA_USER.user_shop_id == shop.shop_system_id)
                // {
                return (
                    <tr className="text_center" key={index}>
                        <td>{index + 1}</td>
                        <td className="text_left">
                            {/* <a >
                                <span className="mytooltip tooltip-effect-4 ">
                                  
                                    <img src={`${Config.API_URL}/uploads/imgShop/${shop.shop_avatar}`} alt="user" width="40" className="img-circle"/>
                                    <span className="tooltip-content clearfix">
                                    <img src={`${Config.API_URL}/uploads/imgShop/${shop.shop_avatar}`}/>
                                        <span className="tooltip-text">Also known as Euclid of andria, was a Greek mathematician, often referred</span>
                                    </span>
                                </span> 
                                    {shop.shop_name}
                            </a> */}

                            {/* <span className="mytooltip tooltip-effect-4 "> */}

                            <img src={`${Config.API_URL}/uploads/imgShop/${shop.shop_avatar}`} alt="shop" width="40" className="img-circle" />
                            {/* <span className="tooltip-content clearfix"> */}
                            {/* <img src={`${Config.API_URL}/uploads/imgShop/${shop.shop_avatar}`}/>
                                        <span className="tooltip-text">Also known as Euclid of andria, was a Greek mathematician, often referred</span> */}
                            {/* </span> */}
                            {/* </span>  */}
                            {shop.shop_name}

                        </td>
                        {/* <td>genelia@gmail.com</td> */}
                        <td>{shop.shop_phone}</td>
                        <td>{moment(shop.shop_dayFrom).format("DD/MM/YYYY")}</td>
                        <td>{moment(shop.shop_dayTo).format("DD/MM/YYYY")}</td>
                        <td>{nameSystem}</td>
                        {/* <td></td> */}
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
                                    data-target="#update-shop"
                                    data-value={shop.shop_id}
                                    onClick={this.onGetIdShop}
                                >Add</button>
                                <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                            </div>
                        </td>
                    </tr>
                )
            }
            // }
        })

        return (
            <React.Fragment>
                <tbody>
                    {/* {shop} */}
                    {this.showShops(shops, systems)}
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
                                        <h4 className="modal-title" id="myModalLabel">Add New Coffee Shop</h4>
                                    </div>
                                    <div className="modal-body" >
                                        <form className="form-horizontal form-material">
                                            <div className="form-group">
                                                <div className="col-md-12 m-b-20">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h4 className="card-title text_center">Avatar</h4>
                                                            <input
                                                                type="file"
                                                                id="input-file-max-fs"
                                                                className="dropify"
                                                                data-max-file-size="2M"
                                                                onChange={this.onChangeImage}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 m-b-20">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Type name"
                                                            name="txtShopName"
                                                            value={txtShopName}
                                                            onChange={this.onChange} /> </div>
                                                    <div className="col-md-12 m-b-20">
                                                        {/* <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="System"
                                                        name="txtShopSystemID"
                                                        value={txtShopSystemID}
                                                        onChange={this.onChange} /> */}
                                                        <select
                                                            className="form-control custom-select"
                                                            data-placeholder="Choose system"
                                                            ref='idSystem'>
                                                            {this.props.systems.map((system, index) => {
                                                                return (
                                                                    <option
                                                                        name="txtShopSystemID"
                                                                        value={system.system_id}
                                                                        key={index}>
                                                                        {system.system_name}
                                                                    </option>
                                                                )
                                                            })}
                                                            {/* <option value="Category 1">Choose system</option>
                                                            <option value="Category 2">Category 2</option>
                                                            <option value="Category 3">Category 5</option>
                                                            <option value="Category 4">Category 4</option> */}

                                                        </select> </div>
                                                    <div className="col-md-12 m-b-20">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Address"
                                                            name="txtShopAddress"
                                                            value={txtShopAddress}
                                                            onChange={this.onChange} /> </div>
                                                    <div className="col-md-12 m-b-20">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Phone"
                                                            name="Phone"
                                                            value={Phone}
                                                            onChange={this.onChange} />
                                                        <FormErrors formErrors={this.state.formErrors}
                                                            nameValid="Phone"
                                                        />
                                                    </div>
                                                    <div className="col-md-12 m-b-20">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Email"
                                                            name="Email"
                                                            value={Email}
                                                            onChange={this.onChange} />
                                                        <FormErrors formErrors={this.state.formErrors}
                                                            nameValid="Email"
                                                        />
                                                    </div>
                                                    <div className="col-md-12 m-b-20">
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            placeholder="Date start"
                                                            name="txtShopDayFrom"
                                                            value={txtShopDayFrom}
                                                            onChange={this.onChange} /> </div>
                                                    <div className="col-md-12 m-b-20">
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            placeholder="Date Expire"
                                                            name="txtShopDayTo"
                                                            value={txtShopDayTo}
                                                            onChange={this.onChange} /> </div>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="submit"
                                            className="btn btn-info waves-effect"
                                            data-dismiss="modal"
                                            onClick={this.onSave}
                                            disabled={!this.state.formValid}               
                                        >Save</button>
                                        <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Cancel</button>
                                    </div>
                                </div>
                                {/* /.modal-content */}
                            </div>
                            {/* /.modal-dialog */}
                        </div>
                        {/* End Modal Add */}

                        {/* Modal Update */}
                        <div id="update-shop" className="modal fade in" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h4 className="modal-title" id="myModalLabel">Edit Coffee Shop</h4>
                                    </div>
                                    <div className="modal-body" >
                                        <form className="form-horizontal form-material">
                                            <div className="form-group">
                                                <div className="col-md-12 m-b-20">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h4 className="card-title text_center">Avatar</h4>
                                                            <input
                                                                type="file"
                                                                id="input-file-max-fs"
                                                                className="dropify"
                                                                data-max-file-size="2M"
                                                                onChange={this.onChangeImage}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 m-b-20">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Type name"
                                                            name="txtShopName"
                                                            value={txtShopName}
                                                            onChange={this.onChange} /> </div>
                                                    <div className="col-md-12 m-b-20">
                                                        {/* <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="System"
                                                        name="txtShopSystemID"
                                                        value={txtShopSystemID}
                                                        onChange={this.onChange} /> */}
                                                        <select
                                                            className="form-control custom-select"
                                                            data-placeholder="Choose system"
                                                            ref='idSystem'>
                                                            {this.props.systems.map((system, index) => {
                                                                return (
                                                                    <option
                                                                        name="txtShopSystemID"
                                                                        value={system.system_id}
                                                                        key={index}>
                                                                        {system.system_name}
                                                                    </option>
                                                                )
                                                            })}
                                                            {/* <option value="Category 1">Choose system</option>
                                                            <option value="Category 2">Category 2</option>
                                                            <option value="Category 3">Category 5</option>
                                                            <option value="Category 4">Category 4</option> */}

                                                        </select> </div>
                                                    <div className="col-md-12 m-b-20">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Address"
                                                            name="txtShopAddress"
                                                            value={txtShopAddress}
                                                            onChange={this.onChange} /> </div>
                                                    <div className="col-md-12 m-b-20">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Phone"
                                                            name="Phone"
                                                            value={Phone}
                                                            onChange={this.onChange} />
                                                        <FormErrors formErrors={this.state.formErrors}
                                                            nameValid="Phone"
                                                        />
                                                    </div>
                                                    <div className="col-md-12 m-b-20">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Email"
                                                            name="Email"
                                                            value={Email}
                                                            onChange={this.onChange} />
                                                        <FormErrors formErrors={this.state.formErrors}
                                                            nameValid="Email"
                                                        />
                                                    </div>
                                                    <div className="col-md-12 m-b-20">
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            placeholder="Date start"
                                                            name="txtShopDayFrom"
                                                            value={txtShopDayFrom}
                                                            onChange={this.onChange} /> </div>
                                                    <div className="col-md-12 m-b-20">
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            placeholder="Date Expire"
                                                            name="txtShopDayTo"
                                                            value={txtShopDayTo}
                                                            onChange={this.onChange} /> </div>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="submit"
                                            className="btn btn-info waves-effect"
                                            data-dismiss="modal"
                                            onClick={this.onSave}
                                            disabled={!this.state.formValid}              
                                        >Save</button>
                                        <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Cancel</button>
                                    </div>
                                </div>
                                {/* /.modal-content */}
                            </div>
                            {/* /.modal-dialog */}
                        </div>
                        {/* End Modal Update */}

                        {/* Modal Delete */}
                        <div id="delete-modal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{ display: "none" }}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h4 className="modal-title">Delete</h4>
                                    </div>
                                    <div className="modal-body">
                                        <h1 className="text-danger">
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
        systems: state.systems,
        shops: state.shops
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
        fetchAllSystem: () => {
            dispatch(actFetchSystemRequest())
        },
        onUpdateShop: (shop) => {
            dispatch(actUpdateShopResquest(shop));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeShopItem);