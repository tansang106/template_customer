import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    actFetchShopRequest,
    actAddShopResquest,
    actFetchSystemRequest,
    actUpdateShopResquest,
    actFetchAccountRequest,
    actAddUserResquest,
    actUpdateUserResquest,
    actFetchStaffRequest,
    actFetchPositionRequest,
    actAddStaffResquest,
    actUpdateStaffResquest
} from '../../Actions/index';
import moment from 'moment';
import $ from 'jquery';
import * as dataStorage from '../../Constants/localStorage';
import callApi from '../../Utils/apiCaller';
import * as Config from '../../Constants/Config';
import loadjs from 'loadjs';
import FormErrors from '../Helper/FormErrors';
// dataStorage.DATA_USER.user_shop_id
//xem lai phan refs dang loi

class BossItem extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            shops: [],
            idUser: '',
            txtUserName: '',
            txtUserAddress: '',
            txtUserAvatar: '',
            txtUserBirthday: '',
            txtUserSexual: '',
            Phone: '',
            txtUserPositionID: '',
            Email: '',
            Password: '',
            txtUserIDCard: '',
            avatarUpload: '',
            txtAvatarUpload: '',
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
        this.setState({
            txtUserAvatar: e.target.files[0]
        })
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
        let passwordValid = this.state.passwordValid;
        let phoneValid = this.state.phoneValid;
        switch (fieldName) {
            case 'Email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.Email = emailValid ? '' : ' is invalid';
                break;
            case 'Password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.Password = passwordValid ? '' : ' is too short';
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
            passwordValid: passwordValid,
            phoneValid: phoneValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.phoneValid && this.state.passwordValid });
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

    //Nút sửa - Nhấn vào lấy đc thông tin boss
    onGetIdUser = (ev) => {
        let { staffs, positions } = this.props
        // console.log(ev)
        var val = ev.target.dataset.value;
        // console.log(systems);
        // console.log(users[0])
        let dataUser = this.findObjectByKey(staffs, 'user_id', val);
        let dataPosition = this.findObjectByKey(positions, 'position_id', 1);
        // console.log('systemdata', dataSystem.system_name)
        // console.log('log', dataUser.user_name)
        console.log('lấy avatar', dataUser.user_avatar)
        this.setState({
            txtUserAddress: dataUser.user_address,
            //txtUserAvatar: dataUser.user_avatar,
            txtUserBirthday: moment(dataUser.user_birthday).format('YYYY-MM-DD'),
            txtUserSexual: dataUser.user_sex,
            Email: dataUser.user_email,
            txtUserName: dataUser.user_name,
            Phone: dataUser.user_phone,
            txtUserPositionID: dataUser.user_position_id,
            idUser: dataUser.user_id,
            txtUserIDCard: dataUser.user_Idcard,
            txtAvatarUpload: dataUser.user_avatar,
        })
        console.log(dataUser);
    }

    uploadFile = async () => {
        var formData = new FormData();
        formData.append("avatar", this.state.txtUserAvatar);
        let avatar = await callApi('boss/upload-imgStaff', 'POST', formData, {
            'token': dataStorage.TOKEN
        }).then(res => {
            return res.data.imgStaff;
        })
        this.setState({ avatarUpload: avatar})
        console.log('đã up ảnh', this.state.avatarUpload)
        // this.setState({ avatarUpload: `${Config.API_URL}/uploads/imgDrink/${avatar}`})
    }


    onSave = async (e) => {
       try {
        console.log('click save')
        e.preventDefault();
        var { txtUserAddress, Password, txtUserAvatar, txtUserBirthday, txtUserSexual, Email, txtUserName, Phone, txtUserPositionID, txtUserIDCard } = this.state;
        console.log('data', txtUserAddress, Password, txtUserBirthday, Email, txtUserName, Phone, txtUserIDCard)
        await this.uploadFile();
        //data này trùng với body call tới api
        
        var user = {
            staff_name: txtUserName,
            staff_address: txtUserAddress,
            staff_phone: Phone,
            staff_avatar: this.state.avatarUpload,
            staff_email: Email,
            staff_birthday: txtUserBirthday,
            staff_active: 'on',
            staff_Idcard: txtUserIDCard,
            staff_position_id: (this.refs.idPosition) ? this.refs.idPosition.value : '',
        }
        console.log('data trước update', user)
        if (this.state.idUser) {
            user.staff_id = this.state.idUser
            console.log('đang kiểm tra tồn tại id', this.state.idUser)
            this.props.onUpdateStaff(user)
            console.log('đã update')
        }
        else {
            console.log('đã k có id')
            user.staff_shop_id = dataStorage.DATA_USER.user_shop_id,
            user.staff_password = Password;
            user.staff_sex = (this.refs.idSex) ? this.refs.idSex.value : '',
            user.staff_permission = 'staff',
                //console.log('log system id', user.boss_shop_id)
                this.props.onAddStaff(user);
            console.log(user)

        }
       } catch (error) {
           console.log('Error onSave', error)
       }

    }

    onDelete = (e) => {
        try {
            console.log('click save')
            e.preventDefault();
            var { txtUserAddress, Password, txtUserAvatar, txtUserBirthday, txtUserSexual, Email, txtUserName, Phone, txtUserPositionID, txtUserIDCard,txtAvatarUpload } = this.state;
            console.log('data', txtUserAddress, Password, txtUserBirthday, Email, txtUserName, Phone, txtUserIDCard, txtAvatarUpload)
            
            
            var user = {
                staff_name: txtUserName,
                staff_address: txtUserAddress,
                staff_phone: Phone,
                staff_avatar: txtAvatarUpload,
                staff_email: Email,
                staff_birthday: txtUserBirthday,
                staff_active: 'off',
                staff_Idcard: txtUserIDCard,
                staff_position_id: (this.refs.idPosition) ? this.refs.idPosition.value : '',
                staff_id: this.state.idUser
            }
            console.log('data trước upload', user)
                this.props.onUpdateStaff(user)

            
           } catch (error) {
               console.log('Error onDelete', error)
           }
    }

    onSetState = () => {
        this.setState({
            idUser: '',
            txtUserName: '',
            txtUserAddress: '',
            txtUserAvatar: '',
            txtUserBirthday: '',
            txtUserSexual: '',
            Phone: '',
            txtUserPositionID: '',
            Email: '',
            Password: '',
            txtUserIDCard: ''
        })
    }



    componentDidMount() {
        this.props.fetchAllStaff();
        this.props.fetchPosition();
        loadjs(['/assets/plugins/footable/js/footable.all.min.js','/assets/plugins/bootstrap-select/bootstrap-select.min.js','/js/footable-init.js'])
    }

    onTest = () => {
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

    }

    pagination = () => {
        // Pagination
        // -----------------------------------------------------------------
        $('#demo-foo-pagination').footable();
        $('#demo-show-entries').change(function (e) {
            e.preventDefault();
            var pageSize = $(this).val();
            $('#demo-foo-pagination').data('page-size', 10);
            $('#demo-foo-pagination').trigger('footable_initialized');
        });
    }

    showStaffs = (staffs, positions) => {
        var result = null;
        if (staffs.length > 0) {
            result = staffs.map((staff, index) => {
                if (staff.user_active == 'on') {
                    let nameSystems = positions.find(x => x.position_id === staff.user_position_id)
            let nameSystem;
            if (nameSystems != undefined) {
                nameSystem = nameSystems.position_name

                // if (dataStorage.DATA_USER.user_user_id == staff.user_system_id)
                // {
                return (
                    <tr className="text_center" key={index}>
                        <td>{index + 1}</td>
                        <td className="text_left">
                            <a >
                                <img src={`${Config.API_URL}/uploads/imgStaff/${staff.user_avatar}`} alt="staff" width="40" className="img-circle"
                                /> {staff.user_name}</a>
                            {/* <img src={staff.user_avatar} alt="staff" width="40" className="img-circle"
                                /> {staff.user_name}</a> */}
                        </td>
                        {/* <td>genelia@gmail.com</td> */}
                        <td>{staff.user_sex}</td>
                        <td>{staff.user_phone}</td>
                        <td>{nameSystem}</td>
                        <td>{staff.user_active}</td>
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
                                    data-target="#update-user"
                                    data-value={staff.user_id}
                                    onClick={this.onGetIdUser}
                                >Edit</button>
                                  <button 
                                    type="button" 
                                    className="btn-sm waves-effect waves-light btn-danger"
                                    data-toggle="modal" 
                                    data-target="#delete-modal"
                                    data-value={staff.user_id}
                                    onClick={this.onGetIdUser}
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
        var { staffs, positions } = this.props
        var { txtUserAddress, txtUserAvatar, txtUserBirthday, Password, Email, txtUserName, Phone, txtUserPositionID, txtUserIDCard } = this.state;
        return (
            <React.Fragment>
                <tbody>
                    {/* {staff} */}
                    {this.showStaffs(staffs, positions)}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">
                            <button type="button" className="btn btn-info btn-rounded" data-toggle="modal" data-target="#add-user" onClick={this.onSetState}>Add New User</button>
                        </td>
                        {/* Modal Add */}
                        <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: "none" }} id="add-user">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title" id="myLargeModalLabel">Add Staff</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
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
                                                {/* <form className="floating-labels m-t-40">

                                                    <div className="col-md-12 m-b-20">
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            placeholder="Date Expire"
                                                            name="txtUserBirthday"
                                                            value={txtUserBirthday}
                                                            onChange={this.onChange}
                                                        />
                                                    </div>

                                                </form> */}
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <form className="form-horizontal form-control-line">
                                                    <div class={`form-group m-b-40 ${this.errorClass(this.state.formErrors.Email)}`}>
                                                        <input
                                                            placeholder="Type Email"
                                                            type="email"
                                                            className="form-control"

                                                            name="Email"
                                                            value={Email}
                                                            onChange={this.onChange}
                                                        />
                                                        <FormErrors formErrors={this.state.formErrors}
                                                            nameValid="Email"
                                                        />
                                                    </div>
                                                    <div className="form-group m-b-40">
                                                        <input
                                                            placeholder="Type Password"
                                                            type="password"
                                                            className="form-control"
                                                            id="input2"
                                                            name="Password"
                                                            value={Password}
                                                            onChange={this.onChange}
                                                        />
                                                        <FormErrors formErrors={this.state.formErrors}
                                                            nameValid="Password"
                                                        />
                                                    </div>
                                                    <div className="form-group m-b-40">
                                                        <input
                                                            placeholder="Type Username"
                                                            type="text"
                                                            className="form-control"

                                                            name="txtUserName"
                                                            required
                                                            value={txtUserName}
                                                            onChange={this.onChange} />
                                                    </div>
                                                    <div className="form-group m-b-40">
                                                        <input
                                                            placeholder="Type Address"
                                                            type="text"
                                                            className="form-control"

                                                            name="txtUserAddress"
                                                            value={txtUserAddress}
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <form className="form-horizontal form-material">
                                                    <div className="form-group m-b-40">
                                                        <input
                                                            placeholder="Type Phone"
                                                            type="text"
                                                            className="form-control"

                                                            name="Phone"
                                                            value={Phone}
                                                            onChange={this.onChange}
                                                        />
                                                        <FormErrors formErrors={this.state.formErrors}
                                                            nameValid="Phone"
                                                        />
                                                    </div>
                                                    <div className="form-group m-b-40">
                                                        <input
                                                            data-placeholder="Birthday"
                                                            type="date"
                                                            className="form-control"
                                                            placeholder="Date Expire"
                                                            name="txtUserBirthday"
                                                            value={txtUserBirthday}
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                    <div className="form-group m-b-40">
                                                        <select
                                                            className="form-control custom-select"
                                                            data-placeholder="System"
                                                            ref='idPosition'>
                                                            {this.props.positions.map((position, index) => {
                                                                return (
                                                                    <option
                                                                        name="txtShopSystemID"
                                                                        value={position.position_id}
                                                                        key={index}>
                                                                        {position.position_name}
                                                                    </option>
                                                                )
                                                            })}
                                                            {/* <option value="Category 1">Sexual</option>
                                                            <option value="Category 2">Category 2</option>
                                                            <option value="Category 3">Category 5</option>
                                                            <option value="Category 4">Category 4</option> */}
                                                        </select>
                                                    </div>

                                                    <div className="form-group m-b-40">
                                                        <select
                                                            className="form-control custom-select"
                                                            data-placeholder="Sexual"
                                                            ref='idSex'>
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
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-danger waves-effect text-left"
                                            data-dismiss="modal"
                                            onClick={this.onSave}
                                            disabled={!this.state.formValid}                                                        
                                        >Save</button>
                                    </div>
                                </div>
                                {/* /.modal-content  */}
                            </div>
                            {/* /.modal-dialog  */}
                        </div>
                        {/* End Modal Add */}

                        {/* Modal Update */}
                        <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: "none" }} id="update-user">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title" id="myLargeModalLabel">Update Staff</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h4 className="card-title text_center">Avatar</h4>
                                                        {/* <label htmlFor="input-file-max-fs">Upload Avatar</label> */}
                                                        <input
                                                            type="file"
                                                            id="input-file-max-fs"
                                                            className="dropify"
                                                            data-max-file-size="2M"
                                                            onChange={this.onChangeImage}
                                                        />
                                                    </div>
                                                </div>
                                                {/* <form className="floating-labels m-t-40">

                                                    <div className="col-md-12 m-b-20">
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            placeholder="Date Expire"
                                                            name="txtUserBirthday"
                                                            value={txtUserBirthday}
                                                            onChange={this.onChange}
                                                        />
                                                    </div>

                                                </form> */}
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <form className="floating-labels m-t-40">
                                                    <div class={`form-group m-b-40 ${this.errorClass(this.state.formErrors.Email)}`}>
                                                        <input
                                                            placeholder="Type Email"
                                                            type="text"
                                                            className="form-control"

                                                            name="Email"
                                                            value={Email}
                                                            onChange={this.onChange}
                                                        />
                                                        <FormErrors formErrors={this.state.formErrors}
                                                            nameValid="Email"
                                                        />
                                                    </div>
                                                    <div className="form-group m-b-40">
                                                        <input
                                                            placeholder="Type Username"
                                                            type="text"
                                                            className="form-control"

                                                            name="txtUserName"
                                                            required
                                                            value={txtUserName}
                                                            onChange={this.onChange} />
                                                    </div>
                                                    <div className="form-group m-b-40">
                                                        <input
                                                            placeholder="Type Address"
                                                            type="text"
                                                            className="form-control"

                                                            name="txtUserAddress"
                                                            value={txtUserAddress}
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <form className="floating-labels m-t-40">
                                                    <div className="form-group m-b-40">
                                                        <input
                                                            placeholder="Type Phone"
                                                            type="text"
                                                            className="form-control"

                                                            name="Phone"
                                                            value={Phone}
                                                            onChange={this.onChange}
                                                        />
                                                        <FormErrors formErrors={this.state.formErrors}
                                                            nameValid="Phone" />
                                                    </div>
                                                    <div className="form-group m-b-40">
                                                        <input
                                                            data-placeholder="Birthday"
                                                            type="date"
                                                            className="form-control"
                                                            placeholder="Date Expire"
                                                            name="txtUserBirthday"
                                                            value={txtUserBirthday}
                                                            onChange={this.onChange}
                                                        />
                                                    </div>
                                                    <div className="form-group m-b-40">
                                                        <select
                                                            className="form-control custom-select"
                                                            data-placeholder="System"
                                                            ref='idPosition'>
                                                            {this.props.positions.map((position, index) => {
                                                                return (
                                                                    <option
                                                                        name="txtShopSystemID"
                                                                        value={position.position_id}
                                                                        key={index}>
                                                                        {position.position_name}
                                                                    </option>
                                                                )
                                                            })}
                                                            {/* <option value="Category 1">Sexual</option>
                                                            <option value="Category 2">Category 2</option>
                                                            <option value="Category 3">Category 5</option>
                                                            <option value="Category 4">Category 4</option> */}
                                                        </select>
                                                    </div>


                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-danger waves-effect text-left"
                                            data-dismiss="modal"
                                            onClick={this.onSave}
                                            // disabled={!this.state.formValid}
                                        >Save</button>
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
        //users: state.users,
        //systems: state.systems,
        staffs: state.staffs,
        positions: state.positions
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
            dispatch(actFetchSystemRequest(system))
        },
        onUpdateShop: (shop) => {
            dispatch(actUpdateShopResquest(shop));
        },
        fetchAllUsers: (user) => {
            dispatch(actFetchAccountRequest(user))
        },
        onAddUser: (user) => {
            dispatch(actAddUserResquest(user))
        },
        onUpdateUser: (user) => {
            dispatch(actUpdateUserResquest(user))
        },
        fetchAllStaff: () => {
            dispatch(actFetchStaffRequest());
        },
        fetchPosition: () => {
            dispatch(actFetchPositionRequest());
        },
        onAddStaff: (user) => {
            dispatch(actAddStaffResquest(user))
        },
        onUpdateStaff: (user) => {
            dispatch(actUpdateStaffResquest(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BossItem);