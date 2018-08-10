import React, { Component } from 'react';
import * as dataStorage from "../../Constants/localStorage";
import * as Config from "../../Constants/Config";

class Header extends Component {
    render() {
        console.log(this.props.number)
        let permision = dataStorage.DATA_USER.user_permission;
        let img = dataStorage.DATA_USER.user_avatar;
        let userName = dataStorage.DATA_USER.user_name;
        let userEmail = dataStorage.DATA_USER.user_email;
        // let { img, permision, userName } = dataStorage.DATA_USER;
        let sourceImg;
        if (permision = 'boss') {
            sourceImg = 'imgBoss'
        } else {
            sourceImg = 'imgStaff'
        }
        return (
            <header className="topbar">
                <nav className="navbar top-navbar navbar-expand-md navbar-light">
                    {/* ============================================================== */}
                    {/* Logo */}
                    {/* ============================================================== */}
                    <div className="navbar-header">
                        <a className="navbar-brand" href="index.html">
                            {/* Logo icon */}
                            <b>
                                {/*You can put here icon as well // <i className="wi wi-sunset"></i> //*/}
                                {/* Dark Logo icon */}
                                <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                                {/* Light Logo icon */}
                                <img src="../assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                            </b>
                            {/*End Logo icon */}
                            {/* Logo text */}
                            <span>
                                {/* dark Logo text */}
                                <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                                {/* Light Logo text */}
                                <img src="../assets/images/logo-light-text.png" className="light-logo" alt="homepage" />
                            </span>
                        </a>
                    </div>
                    {/* ============================================================== */}
                    {/* End Logo */}
                    {/* ============================================================== */}
                    <div className="navbar-collapse">
                        {/* ============================================================== */}
                        {/* toggle and nav items */}
                        {/* ============================================================== */}
                        <ul className="navbar-nav mr-auto mt-md-0">
                            {/* This is  */}
                            <li className="nav-item">
                                <a className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="javascript:void(0)">
                                    <i className="mdi mdi-menu"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark" href="javascript:void(0)">
                                    <i className="ti-menu"></i>
                                </a>
                            </li>
                            {/* ============================================================== */}
                            {/* Search */}
                            {/* ============================================================== */}
                            <li className="nav-item hidden-sm-down search-box">
                                <a className="nav-link hidden-sm-down text-muted waves-effect waves-dark" href="javascript:void(0)">
                                    <i className="ti-search"></i>
                                </a>
                                <form className="app-search">
                                    <input type="text" className="form-control" placeholder="Search & enter" />
                                    <a className="srh-btn">
                                        <i className="ti-close"></i>
                                    </a>
                                </form>
                            </li>
                            {/* ============================================================== */}
                            {/* Messages */}
                            {/* ============================================================== */}
                            <li className="nav-item dropdown mega-dropdown">
                                <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i className="mdi mdi-view-grid"></i>
                                </a>
                                <div className="dropdown-menu scale-up-left">
                                    <ul className="mega-dropdown-menu row">
                                        <li className="col-lg-3 col-xlg-2 m-b-30">
                                            <h4 className="m-b-20">CAROUSEL</h4>
                                            {/* CAROUSEL */}
                                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                                <div className="carousel-inner" role="listbox">
                                                    <div className="carousel-item active">
                                                        <div className="container">
                                                            <img className="d-block img-fluid" src="../assets/images/big/img1.jpg" alt="First slide" />
                                                        </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <div className="container">
                                                            <img className="d-block img-fluid" src="../assets/images/big/img2.jpg" alt="Second slide" />
                                                        </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <div className="container">
                                                            <img className="d-block img-fluid" src="../assets/images/big/img3.jpg" alt="Third slide" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </div>
                                            {/* End CAROUSEL */}
                                        </li>
                                        <li className="col-lg-3 m-b-30">
                                            <h4 className="m-b-20">ACCORDION</h4>
                                            {/* Accordian */}
                                            <div id="accordion" className="nav-accordion" role="tablist" aria-multiselectable="true">
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="headingOne">
                                                        <h5 className="mb-0">
                                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                Collapsible Group Item #1
                                                        </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                                                        <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high. </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="headingTwo">
                                                        <h5 className="mb-0">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                Collapsible Group Item #2
                                                        </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                        <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                        terry richardson ad squid. </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="headingThree">
                                                        <h5 className="mb-0">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                Collapsible Group Item #3
                                                        </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                                                        <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                        terry richardson ad squid. </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-lg-3  m-b-30">
                                            <h4 className="m-b-20">CONTACT US</h4>
                                            {/* Contact */}
                                            <form>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="exampleInputname1" placeholder="Enter Name" /> </div>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Enter email" /> </div>
                                                <div className="form-group">
                                                    <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Message"></textarea>
                                                </div>
                                                <button type="submit" className="btn btn-info">Submit</button>
                                            </form>
                                        </li>
                                        <li className="col-lg-3 col-xlg-4 m-b-30">
                                            <h4 className="m-b-20">List style</h4>
                                            {/* List style */}
                                            <ul className="list-style-none">
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        <i className="fa fa-check text-success"></i> You can give link</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        <i className="fa fa-check text-success"></i> Give link</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        <i className="fa fa-check text-success"></i> Another Give link</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        <i className="fa fa-check text-success"></i> Forth link</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        <i className="fa fa-check text-success"></i> Another fifth link</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* ============================================================== */}
                            {/* End Messages */}
                            {/* ============================================================== */}


                        </ul>
                        {/* ============================================================== */}
                        {/* User profile and search */}
                        {/* ============================================================== */}
                        <ul className="navbar-nav my-lg-0">
                            {/* ============================================================== */}
                            {/* Profile */}
                            {/* ============================================================== */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    {/* <img src="../assets/images/users/1.jpg" alt="user" className="profile-pic" /> */}
                                    <img src={`${Config.API_URL}/uploads/${sourceImg}/${img}`} alt="user" className="profile-pic"/> 
                                </a>
                                <div className="dropdown-menu dropdown-menu-right scale-up">
                                    <ul className="dropdown-user">
                                        <li>
                                            <div className="dw-user-box">
                                                <div className="u-img">
                                                    {/* <img src="../assets/images/users/1.jpg" alt="user" /> */}
                                                    <img src={`${Config.API_URL}/uploads/${sourceImg}/${img}`} /> 
                                                </div>
                                                <div className="u-text">
                                                    <h4>{ userName }</h4>
                                                    <p className="text-muted">{userEmail}</p>
                                                    <a href="profile.html" className="btn btn-rounded btn-danger btn-sm">View Profile</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <a href="#">
                                                <i className="ti-user"></i> My Profile</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ti-wallet"></i> My Balance</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ti-email"></i> Inbox</a>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <a href="#">
                                                <i className="ti-settings"></i> Account Setting</a>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-power-off"></i> Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* ============================================================== */}
                            {/* End Profile */}

                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;