import React, { Component } from 'react';
import {Redirect, Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';
import callApi from '../../Utils/apiCaller';
import { actFetchLogin } from '../../Actions/index';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import Home from '../Home/Home';

class Login extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            txtUsername: '',
            txtPassword: '',
            userData: [],
            dataLogin: [],
            login: false,
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onChangeUser(value){
        this.setState({ txtUsername: value})
        console.log(value)
    }

    onChangePass(value){
        this.setState({ txtPassword: value})
        console.log(value)
    }

    onLogin = (e) => {
        e.preventDefault(); 
        console.log(e)
        console.log(this.state.txtUsername)
        console.log(this.state.txtPassword);
        // axios({
        //     method: 'POST',
        //     url: 'http://108.160.130.103/users/login',
        //     data: {
        //         user_password: this.state.txtPassword,
        //         user_email: this.state.txtUsername
        //     }
        // }).then(res => {
        //     console.log(res)
        //     if (res.status === 200){
        //         toastr.info('Are you the 6 fingered man?')
        //         console.log('logined')
        //         return <Redirect to={{
        //             pathname: '/coffeegrid',
        //         }}/>
        //     }
        // }).catch(err => {
        //     console.log(err);
            
        // })

        //=======================Backup
        callApi('users/login', 'POST', { 
            user_password: this.state.txtPassword,
            user_email: this.state.txtUsername}).then(res => {
                console.log(res)
                if (res.data.status === 'success'){
                    this.setState({ userData : res.data})
                    toastr.success('Login Success', 'SUCCESS')
                    console.log('user data', this.state.userData)
                    localStorage.setItem("tokenUser",JSON.stringify({
                        token: this.state.userData.token
                    }));
                    localStorage.setItem("dataUser", JSON.stringify({
                        data: this.state.userData.user
                    }));
                    // <Redirect to= '/'/>
                    // return <Redirect to={{
                    //     pathname: '/',
                    // }}/>
                    // console.log('trc redirect')
                    this.setState({login: true})
                    // return ( <Redirect to='/home' /> )
                    // console.log('sau redirec')
                    // this.props.updated
                    // console.log(this.props)
                    console.log('login', this.state.login)
                }
                else {
                    toastr.error('Login Fail', 'ERROR')
                }
            })
        //==========================End Backup
        // callApi('users/login', 'POST', {
        //     user_password: this.state.txtPassword,
        //     user_email: this.state.txtUsername
        // }).then(res => {
        //     console.log('res data', res.data)
        //     this.props.fetchdataLogin(res.data);
        // })

        // var { txtUsername, txtPassword} = this.state;
        // if (txtUsername === 'admin' && txtPassword === 'admin') {
        //     localStorage.setItem("user",JSON.stringify({
        //         username: txtUsername,
        //         password: txtPassword
        //     }));
        // }
    }

    reload = () => {
        return <Redirect to="/home" />
    }
    render() {
        // if (localStorage.DATA_USER != null) {
        //     return <Redirect to='/home' />
        // }
        // Gọi API Login
        if (this.state.login == true) {
            // var { location } = this.props;
            // return <Redirect to={
            //     {
            //         pathname: '/home',
            //         state: {
            //             from: location
            //         }
            //     }
            // } />
            // return <Redirect to="/home"/>
            // this.reload();
            return <Redirect to="/home"/>
        }
        // let { userData } = this.state

        var { dataLogin } = this.props
        setTimeout(console.log('Props dataLogin', dataLogin), 2000)
        

        // var { txtUsername, txtPassword } = this.state;
        // var loggedInUser = localStorage.getItem('user');
        // if(loggedInUser !== null){
        //     var {location} = this.props;
        //     return <Redirect to={{
        //         pathname: '/coffeegrid',
        //         state: {
        //             from: location
        //         }
        //     }}/>
        // }

        // if(userData.token){
        //     return <Redirect to="/"/>
        // }
        return (
            <React.Fragment>
            {/* ============================================================== */}
            {/* Preloader - style you can find in spinners.css */}
            {/* ============================================================== */}
            <div className="preloader">
                <svg className="circular" viewBox="25 25 50 50">
                    <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" /> </svg>
            </div>
            {/* ============================================================== */}
            {/* Main wrapper - style you can find in pages.scss */}
            {/* ============================================================== */}
            <section id="wrapper">
                <div className="login-register login_background">        
                    <div className="login-box card">
                    <div className="card-body">
                        <form className="form-horizontal form-material" id="loginform" action="index.html" onSubmit={this.onLogin}>
                            <h3 className="box-title m-b-20">Sign In</h3>
                            <div className="form-group ">
                                <div className="col-xs-12">
                                    <input 
                                        className="form-control" 
                                        type="text" 
                                        required="" 
                                        placeholder="Username"
                                        value={this.state.txtUsername}
                                        onChange={e => this.onChangeUser(e.target.value)}
                                        /> </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <input 
                                        className="form-control" 
                                        ref='txtPassword' 
                                        type="password" 
                                        required="" 
                                        placeholder="Password"
                                        value={this.state.txtPassword}
                                        onChange={e => this.onChangePass(e.target.value)}/> </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <div className="checkbox checkbox-primary pull-left p-t-0">
                                        <input id="checkbox-signup" type="checkbox"/>
                                        <label htmlFor="checkbox-signup"> Remember me </label>
                                    </div> <a href="javascript:void(0)" id="to-recover" className="text-dark pull-right"><i className="fa fa-lock m-r-5"></i> Forgot pwd?</a> </div>
                            </div>
                            <div className="form-group text-center m-t-20">
                                <div className="col-xs-12">
                                    <button 
                                        className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" 
                                        type="submit"
                                        // onClick = {e => this.onLogin()}
                                        >Log In</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                                    <div className="social">
                                        <a href="javascript:void(0)" className="btn  btn-facebook" data-toggle="tooltip" title="Login with Facebook"> <i aria-hidden="true" className="fa fa-facebook"></i> </a>
                                        <a href="javascript:void(0)" className="btn btn-googleplus" data-toggle="tooltip" title="Login with Google"> <i aria-hidden="true" className="fa fa-google-plus"></i> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group m-b-0">
                                <div className="col-sm-12 text-center">
                                    <p>Don't have an account? <a href="register.html" className="text-info m-l-5"><b>Sign Up</b></a></p>
                                </div>
                            </div>
                        </form>
                        <form className="form-horizontal" id="recoverform" action="index.html">
                            <div className="form-group ">
                                <div className="col-xs-12">
                                    <h3>Recover Password</h3>
                                    <p className="text-muted">Enter your Email and instructions will be sent to you! </p>
                                </div>
                            </div>
                            <div className="form-group ">
                                <div className="col-xs-12">
                                    <input className="form-control" type="text" required="" placeholder="Email"/> </div>
                            </div>
                            <div className="form-group text-center m-t-20">
                                <div className="col-xs-12">
                                    <button className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                  </div>
                </div>
                
            </section>
            {/* ============================================================== */}
            {/* End Wrapper */}
            
            </React.Fragment>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        dataLogin : state.login
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchdataLogin: (dataLogin) => {
            dispatch(actFetchLogin(dataLogin));
        }
    }
}

export default withRouter(connect(mapStateToProps, null)(Login));