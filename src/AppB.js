import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class App extends Component {
   
    render() {
        
        return (
        <React.Fragment>
        {/* ============================================================== */ }
        {/* Preloader - style you can find in spinners.css */ }
        {/* ============================================================== */ }
        <div className="preloader">
            <svg className="circular" viewBox="25 25 50 50">
                <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" /> </svg>
        </div>
        {/* ============================================================== */ }
        {/* Main wrapper - style you can find in pages.scss */ }
        {/* ============================================================== */ }
        <div id="main-wrapper">
            {/* ============================================================== */}
            {/* Topbar header - style you can find in pages.scss */}
            {/* ============================================================== */}
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
                                <a className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="">
                                    <i className="mdi mdi-menu"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark" href="">
                                    <i className="ti-menu"></i>
                                </a>
                            </li>
                            {/* ============================================================== */}
                            {/* Search */}
                            {/* ============================================================== */}
                            <li className="nav-item hidden-sm-down search-box">
                                <a className="nav-link hidden-sm-down text-muted waves-effect waves-dark" href="">
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
                                <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
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
                                                    <a href="">
                                                        <i className="fa fa-check text-success"></i> You can give link</a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-check text-success"></i> Give link</a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-check text-success"></i> Another Give link</a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-check text-success"></i> Forth link</a>
                                                </li>
                                                <li>
                                                    <a href="">
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
                            {/* Messages */}
                            {/* ============================================================== */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" id="2" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="mdi mdi-email"></i>
                                    <div className="notify">
                                        <span className="heartbit"></span>
                                        <span className="point"></span>
                                    </div>
                                </a>
                                <div className="dropdown-menu mailbox dropdown-menu-right scale-up" aria-labelledby="2">
                                    <ul>
                                        <li>
                                            <div className="drop-title">You have 4 new messages</div>
                                        </li>
                                        <li>
                                            <div className="message-center">
                                                {/* Message */}
                                                <a href="">
                                                    <div className="user-img">
                                                        <img src="../assets/images/users/1.jpg" alt="user" className="img-circle" />
                                                        <span className="profile-status online pull-right"></span>
                                                    </div>
                                                    <div className="mail-contnet">
                                                        <h5>Pavan kumar</h5>
                                                        <span className="mail-desc">Just see the my admin!</span>
                                                        <span className="time">9:30 AM</span>
                                                    </div>
                                                </a>
                                                {/* Message */}
                                                <a href="">
                                                    <div className="user-img">
                                                        <img src="../assets/images/users/2.jpg" alt="user" className="img-circle" />
                                                        <span className="profile-status busy pull-right"></span>
                                                    </div>
                                                    <div className="mail-contnet">
                                                        <h5>Sonu Nigam</h5>
                                                        <span className="mail-desc">I've sung a song! See you at</span>
                                                        <span className="time">9:10 AM</span>
                                                    </div>
                                                </a>
                                                {/* Message */}
                                                <a href="">
                                                    <div className="user-img">
                                                        <img src="../assets/images/users/3.jpg" alt="user" className="img-circle" />
                                                        <span className="profile-status away pull-right"></span>
                                                    </div>
                                                    <div className="mail-contnet">
                                                        <h5>Arijit Sinh</h5>
                                                        <span className="mail-desc">I am a singer!</span>
                                                        <span className="time">9:08 AM</span>
                                                    </div>
                                                </a>
                                                {/* Message */}
                                                <a href="">
                                                    <div className="user-img">
                                                        <img src="../assets/images/users/4.jpg" alt="user" className="img-circle" />
                                                        <span className="profile-status offline pull-right"></span>
                                                    </div>
                                                    <div className="mail-contnet">
                                                        <h5>Pavan kumar</h5>
                                                        <span className="mail-desc">Just see the my admin!</span>
                                                        <span className="time">9:02 AM</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="nav-link text-center" href=";">
                                                <strong>See all e-Mails</strong>
                                                <i className="fa fa-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* ============================================================== */}
                            {/* End Messages */}
                            {/* ============================================================== */}

                            {/* ============================================================== */}
                            {/* Profile */}
                            {/* ============================================================== */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <img src="../assets/images/users/1.jpg" alt="user" className="profile-pic" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right scale-up">
                                    <ul className="dropdown-user">
                                        <li>
                                            <div className="dw-user-box">
                                                <div className="u-img">
                                                    <img src="../assets/images/users/1.jpg" alt="user" />
                                                </div>
                                                <div className="u-text">
                                                    <h4>Steave Jobs</h4>
                                                    <p className="text-muted">varun@gmail.com</p>
                                                    <a href="profile.html" className="btn btn-rounded btn-danger btn-sm">View Profile</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <a href="">
                                                <i className="ti-user"></i> My Profile</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i className="ti-wallet"></i> My Balance</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i className="ti-email"></i> Inbox</a>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <a href="">
                                                <i className="ti-settings"></i> Account Setting</a>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <a href="">
                                                <i className="fa fa-power-off"></i> Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* ============================================================== */}
                        </ul>
                    </div>
                </nav>
            </header>
            {/* ============================================================== */}
            {/* End Topbar header */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Left Sidebar - style you can find in sidebar.scss  */}
            {/* ============================================================== */}
            <aside className="left-sidebar">
                {/* Sidebar scroll*/}
                <div className="scroll-sidebar">
                    {/* User profile */}
                    {/* <div className="user-profile" style="background: url(../assets/images/background/user-info.jpg) no-repeat;"> */}
                    <div className="user-profile user_background">
                        {/* User profile image */}
                        <div className="profile-img">
                            <img src="../assets/images/users/profile.png" alt="user" /> </div>
                        {/* User profile text*/}
                        <div className="profile-text">
                            <a href="" className="dropdown-toggle u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Markarn Doe</a>
                            <div className="dropdown-menu animated flipInY">
                                <a href="" className="dropdown-item">
                                    <i className="ti-user"></i> My Profile</a>
                                <a href="" className="dropdown-item">
                                    <i className="ti-wallet"></i> My Balance</a>
                                <a href="" className="dropdown-item">
                                    <i className="ti-email"></i> Inbox</a>
                                <div className="dropdown-divider"></div>
                                <a href="" className="dropdown-item">
                                    <i className="ti-settings"></i> Account Setting</a>
                                <div className="dropdown-divider"></div>
                                <a href="login.html" className="dropdown-item">
                                    <i className="fa fa-power-off"></i> Logout</a>
                            </div>
                        </div>
                    </div>
                    {/* End User profile text*/}
                    {/* Sidebar navigation*/}
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li className="nav-small-cap">PERSONAL</li>
                            <li>
                                <a href="" className="waves-effect waves-dark">
                                    <i className="mdi mdi-laptop-windows"></i>Home </a>
                            </li>
                            <li>
                                <a href="index2.html" className="has-arrow waves-effect waves-dark">
                                    <i className="mdi mdi-laptop-windows"></i>
                                    <span className="hide-menu">User</span>
                                </a>
                                <ul aria-expanded="false" className="collapse">
                                    <li>
                                        <a href="../minisidebar/index.html">Counter</a>
                                    </li>
                                    <li>
                                        <a href="../horizontal/index2.html">Horizontal</a>
                                    </li>
                                    <li>
                                        <a href="../dark/index3.html">Dark Version</a>
                                    </li>
                                    <li>
                                        <a href="../material-rtl/index4.html">RTL Version</a>
                                    </li>
                                    <li>
                                        <a href="">Anuglar-CLI Starter kit</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="index2.html" className="has-arrow waves-effect waves-dark">
                                    <i className="mdi mdi-laptop-windows"></i>
                                    Template Demos
                            </a>
                                <ul aria-expanded="false" className="collapse">
                                    <li>
                                        <a href="../minisidebar/index.html">Minisidebar</a>
                                    </li>
                                    <li>
                                        <a href="../horizontal/index2.html">Horizontal</a>
                                    </li>
                                    <li>
                                        <a href="../dark/index3.html">Dark Version</a>
                                    </li>
                                    <li>
                                        <a href="../material-rtl/index4.html">RTL Version</a>
                                    </li>
                                    <li>
                                        <a href="">Anuglar-CLI Starter kit</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="index2.html" className="waves-effect waves-dark">
                                    <i className="mdi mdi-laptop-windows"></i>
                                    Counter
                            </a>

                            </li>
                            <li className="nav-devider"></li>
                            <li className="nav-small-cap">FORMS, TABLE &amp; WIDGETS</li>
                            <li>
                                <a className="has-arrow waves-effect waves-dark" href="" aria-expanded="false">
                                    <i className="mdi mdi-file"></i>
                                    <span className="hide-menu">Forms</span>
                                </a>
                                <ul aria-expanded="false" className="collapse">
                                    <li>
                                        <a href="form-basic.html">Basic Forms</a>
                                    </li>
                                    <li>
                                        <a href="form-layout.html">Form Layouts</a>
                                    </li>
                                    <li>
                                        <a href="form-addons.html">Form Addons</a>
                                    </li>
                                    <li>
                                        <a href="form-material.html">Form Material</a>
                                    </li>
                                    <li>
                                        <a href="form-float-input.html">Floating Lable</a>
                                    </li>
                                    <li>
                                        <a href="form-pickers.html">Form Pickers</a>
                                    </li>
                                    <li>
                                        <a href="form-upload.html">File Upload</a>
                                    </li>
                                    <li>
                                        <a href="form-mask.html">Form Mask</a>
                                    </li>
                                    <li>
                                        <a href="form-validation.html">Form Validation</a>
                                    </li>
                                    <li>
                                        <a href="form-dropzone.html">File Dropzone</a>
                                    </li>
                                    <li>
                                        <a href="form-icheck.html">Icheck control</a>
                                    </li>
                                    <li>
                                        <a href="form-img-cropper.html">Image Cropper</a>
                                    </li>
                                    <li>
                                        <a href="form-bootstrapwysihtml5.html">HTML5 Editor</a>
                                    </li>
                                    <li>
                                        <a href="form-typehead.html">Form Typehead</a>
                                    </li>
                                    <li>
                                        <a href="form-wizard.html">Form Wizard</a>
                                    </li>
                                    <li>
                                        <a href="form-xeditable.html">Xeditable Editor</a>
                                    </li>
                                    <li>
                                        <a href="form-summernote.html">Summernote Editor</a>
                                    </li>
                                    <li>
                                        <a href="form-tinymce.html">Tinymce Editor</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="" className="waves-effect waves-dark">
                                    <i className="mdi mdi-laptop-windows"></i>Statistics</a>
                            </li>
                        </ul>
                    </nav>
                    {/* End Sidebar navigation */}
                </div>
                {/* End Sidebar scroll*/}

            </aside>
            {/* ============================================================== */}
            {/* End Left Sidebar - style you can find in sidebar.scss  */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Page wrapper  */}
            {/* ============================================================== */}
            <div className="page-wrapper">
                {/* ============================================================== */}
                {/* Container fluid  */}
                {/* ============================================================== */}
                <div className="container-fluid">
                    {/* ============================================================== */}
                    {/* Bread crumb and right sidebar toggle */}
                    {/* ============================================================== */}
                    <div className="row page-titles">
                        <div className="col-md-5 col-8 align-self-center">
                            <h3 className="text-themecolor m-b-0 m-t-0">Table</h3>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="">Home</a>
                                </li>
                                <li className="breadcrumb-item active">Table</li>
                            </ol>
                        </div>
                    </div>
                    {/* ============================================================== */}
                    {/* End Bread crumb and right sidebar toggle */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* Start Page Content */}
                    {/* ============================================================== */}
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Employee list</h4>
                                    {/* <h6 className="card-subtitle">a</h6> */}
                                    <div className="table-responsive">
                                        <table id="demo-foo-addrow" className="table m-t-30 table-hover contact-list" data-page-size="10">
                                            <thead>
                                                <tr>
                                                    <th className="text-center">No</th>
                                                    <th className="text-center">Name</th>
                                                    <th className="text-center">Email</th>
                                                    <th className="text-center">Phone</th>
                                                    <th className="text-center">Role</th>
                                                    <th className="text-center">Age</th>
                                                    <th className="text-center">Joining date</th>
                                                    <th className="text-center">Salery</th>
                                                    <th className="text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="text-center">
                                                    <td>1</td>
                                                    <td style={{textAlign: "left"}}>
                                                        <a href="">
                                                            <img src="../assets/images/users/4.jpg" alt="user" width="40" className="img-circle" /> Sonu Nigam</a>
                                                    </td>
                                                    <td>sonu@gmail.com</td>
                                                    <td>+456 456 789</td>
                                                    <td>
                                                        <span className="label label-inverse">HR</span>
                                                    </td>
                                                    <td>36</td>
                                                    <td>18-5-2009</td>
                                                    <td>$4200</td>
                                                    <td>
                                                        <div className="button-group text-center">
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-info">Info</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-primary">Add</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="text-center">
                                                    <td>2</td>
                                                    <td style={{textAlign: "left"}}>
                                                        <a href="">
                                                            <img src="../assets/images/users/5.jpg" alt="user" width="40" className="img-circle" /> Arijit Singh</a>
                                                    </td>
                                                    <td>arijit@gmail.com</td>
                                                    <td>+234 456 789</td>
                                                    <td>
                                                        <span className="label label-info">Developer</span>
                                                    </td>
                                                    <td>26</td>
                                                    <td>10-09-2014</td>
                                                    <td>$1800</td>
                                                    <td>
                                                        <div className="button-group text-center">
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-info">Info</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-primary">Add</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="text-center">
                                                    <td>3</td>
                                                    <td style={{textAlign: "left"}}>
                                                        <a href="">
                                                            <img src="../assets/images/users/6.jpg" alt="user" width="40" className="img-circle" /> Govinda jalan</a>
                                                    </td>
                                                    <td>govinda@gmail.com</td>
                                                    <td>+345 456 789</td>
                                                    <td>
                                                        <span className="label label-success">Accountant</span>
                                                    </td>
                                                    <td>28</td>
                                                    <td>1-10-2013</td>
                                                    <td>$2200</td>
                                                    <td>
                                                        <div className="button-group text-center">
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-info">Info</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-primary">Add</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="text-center">
                                                    <td>4</td>
                                                    <td style={{textAlign: "left"}}>
                                                        <a href="">
                                                            <img src="../assets/images/users/7.jpg" alt="user" width="40" className="img-circle" /> Hritik Roshan</a>
                                                    </td>
                                                    <td>hritik@gmail.com</td>
                                                    <td>+456 456 789</td>
                                                    <td>
                                                        <span className="label label-inverse">HR</span>
                                                    </td>
                                                    <td>25</td>
                                                    <td>2-10-2017</td>
                                                    <td>$200</td>
                                                    <td>
                                                        <div className="button-group text-center">
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-info">Info</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-primary">Add</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="text-center">
                                                    <td>5</td>
                                                    <td style={{textAlign: "left"}}>
                                                        <a href="">
                                                            <img src="../assets/images/users/8.jpg" alt="user" width="40" className="img-circle" /> John Abraham</a>
                                                    </td>
                                                    <td>john@gmail.com</td>
                                                    <td>+567 456 789</td>
                                                    <td>
                                                        <span className="label label-danger">Manager</span>
                                                    </td>
                                                    <td>23</td>
                                                    <td>10-9-2015</td>
                                                    <td>$1200</td>
                                                    <td>
                                                        <div className="button-group text-center">
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-info">Info</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-primary">Add</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="text-center">
                                                    <td>6</td>
                                                    <td style={{textAlign: "left"}}>
                                                        <a href="">
                                                            <img src="../assets/images/users/1.jpg" alt="user" width="40" className="img-circle" /> Pawandeep kumar</a>
                                                    </td>
                                                    <td>pawandeep@gmail.com</td>
                                                    <td>+678 456 789</td>
                                                    <td>
                                                        <span className="label label-warning">Chairman</span>
                                                    </td>
                                                    <td>29</td>
                                                    <td>10-5-2013</td>
                                                    <td>$1500</td>
                                                    <td>
                                                        <div className="button-group text-center">
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-info">Info</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-primary">Add</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="text-center">
                                                    <td>7</td>
                                                    <td style={{textAlign: "left"}}>
                                                        <a href="">
                                                            <img src="../assets/images/users/2.jpg" alt="user" width="40" className="img-circle" /> Ritesh Deshmukh</a>
                                                    </td>
                                                    <td>ritesh@gmail.com</td>
                                                    <td>+123 456 789</td>
                                                    <td>
                                                        <span className="label label-danger">Designer</span>
                                                    </td>
                                                    <td>35</td>
                                                    <td>05-10-2012</td>
                                                    <td>$3200</td>
                                                    <td>
                                                        <div className="button-group text-center">
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-info">Info</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-primary">Add</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="text-center">
                                                    <td>8</td>
                                                    <td style={{textAlign: "left"}}>
                                                        <a href="">
                                                            <img src="../assets/images/users/2.jpg" alt="user" width="40" className="img-circle" /> Salman Khan</a>
                                                    </td>
                                                    <td>salman@gmail.com</td>
                                                    <td>+234 456 789</td>
                                                    <td>
                                                        <span className="label label-info">Developer</span>
                                                    </td>
                                                    <td>27</td>
                                                    <td>11-10-2014</td>
                                                    <td>$1800</td>
                                                    <td>
                                                        <div className="button-group text-center">
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-info">Info</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-primary">Add</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="text-center">
                                                    <td>9</td>
                                                    <td style={{textAlign: "left"}}>
                                                        <a href="">
                                                            <img src="../assets/images/users/3.jpg" alt="user" width="40" className="img-circle" /> Govinda jalan</a>
                                                    </td>
                                                    <td>govinda@gmail.com</td>
                                                    <td>+345 456 789</td>
                                                    <td>
                                                        <span className="label label-success">Accountant</span>
                                                    </td>
                                                    <td>18</td>
                                                    <td>12-5-2017</td>
                                                    <td>$100</td>
                                                    <td>
                                                        <div className="button-group text-center">
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-info">Info</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-primary">Add</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="text-center">
                                                    <td>10</td>
                                                    <td style={{textAlign: "left"}}>
                                                        <a href="">
                                                            <img src="../assets/images/users/4.jpg" alt="user" width="40" className="img-circle" /> Sonu Nigam</a>
                                                    </td>
                                                    <td>sonu@gmail.com</td>
                                                    <td>+456 456 789</td>
                                                    <td>
                                                        <span className="label label-inverse">HR</span>
                                                    </td>
                                                    <td>36</td>
                                                    <td>18-5-2009</td>
                                                    <td>$4200</td>
                                                    <td>
                                                        <div className="button-group text-center">
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-info">Info</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-primary">Add</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="text-center">
                                                    <td>11</td>
                                                    <td style={{textAlign: "left"}}>
                                                        <a href="">
                                                            <img src="../assets/images/users/5.jpg" alt="user" width="40" className="img-circle" /> Varun Dhawan</a>
                                                    </td>
                                                    <td>varun@gmail.com</td>
                                                    <td>+567 456 789</td>
                                                    <td>
                                                        <span className="label label-danger">Manager</span>
                                                    </td>
                                                    <td>43</td>
                                                    <td>12-10-2010</td>
                                                    <td>$5200</td>
                                                    <td>
                                                        <div className="button-group text-center">
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-info">Info</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-primary">Add</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="text-center">
                                                    <td>12</td>
                                                    <td style={{textAlign: "left"}}>
                                                        <a href="">
                                                            <img src="../assets/images/users/6.jpg" alt="user" width="40" className="img-circle" /> Genelia Deshmukh</a>
                                                    </td>
                                                    <td>genelia@gmail.com</td>
                                                    <td>+123 456 789</td>
                                                    <td>
                                                        <span className="label label-danger">Designer</span>
                                                    </td>
                                                    <td>23</td>
                                                    <td>12-10-2014</td>
                                                    <td>$1200</td>
                                                    <td>
                                                        <div className="button-group text-center">
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-info">Info</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-primary">Add</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="text-center">
                                                    <td>13</td>
                                                    <td style={{textAlign: "left"}}>
                                                        <a href="">
                                                            <img src="../assets/images/users/7.jpg" alt="user" width="40" className="img-circle" /> Arijit Singh</a>
                                                    </td>
                                                    <td>arijit@gmail.com</td>
                                                    <td>+234 456 789</td>
                                                    <td>
                                                        <span className="label label-info">Developer</span>
                                                    </td>
                                                    <td>26</td>
                                                    <td>10-09-2014</td>
                                                    <td>$1800</td>
                                                    <td>
                                                        <div className="button-group text-center">
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-info">Info</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-primary">Add</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="text-center">
                                                    <td>14</td>
                                                    <td style={{textAlign: "left"}}>
                                                        <a href="">
                                                            <img src="../assets/images/users/8.jpg" alt="user" width="40" className="img-circle" /> Govinda jalan</a>
                                                    </td>
                                                    <td>govinda@gmail.com</td>
                                                    <td>+345 456 789</td>
                                                    <td>
                                                        <span className="label label-success">Accountant</span>
                                                    </td>
                                                    <td>28</td>
                                                    <td>1-10-2013</td>
                                                    <td>$2200</td>
                                                    <td>
                                                        <div className="button-group text-center">
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-info">Info</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-primary">Add</button>
                                                            <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr className="text-center">
                                                    <td colspan="2">
                                                        <button type="button" className="btn btn-success btn-rounded" data-toggle="modal" data-target="#add-contact">Add New Contact</button>
                                                    </td>
                                                    <div id="add-contact" className="modal fade in" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                                    <h4 className="modal-title" id="myModalLabel">Add New Contact</h4>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <form className="form-horizontal form-material">
                                                                        <div className="form-group">
                                                                            <div className="col-md-12 m-b-20">
                                                                                <input type="text" className="form-control" placeholder="Type name" /> </div>
                                                                            <div className="col-md-12 m-b-20">
                                                                                <input type="text" className="form-control" placeholder="Email" /> </div>
                                                                            <div className="col-md-12 m-b-20">
                                                                                <input type="text" className="form-control" placeholder="Phone" /> </div>
                                                                            <div className="col-md-12 m-b-20">
                                                                                <input type="text" className="form-control" placeholder="Designation" /> </div>
                                                                            <div className="col-md-12 m-b-20">
                                                                                <input type="text" className="form-control" placeholder="Age" /> </div>
                                                                            <div className="col-md-12 m-b-20">
                                                                                <input type="text" className="form-control" placeholder="Date of joining" /> </div>
                                                                            <div className="col-md-12 m-b-20">
                                                                                <input type="text" className="form-control" placeholder="Salary" /> </div>
                                                                            <div className="col-md-12 m-b-20">
                                                                                <div className="fileupload btn btn-danger btn-rounded waves-effect waves-light">
                                                                                    <span>
                                                                                        <i className="ion-upload m-r-5"></i>Upload Contact Image</span>
                                                                                    <input type="file" className="upload" /> </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-info waves-effect" data-dismiss="modal">Save</button>
                                                                    <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Cancel</button>
                                                                </div>
                                                            </div>
                                                            {/* /.modal-content */}
                                                        </div>
                                                        {/* /.modal-dialog */}
                                                    </div>
                                                    <td colspan="7">
                                                        <div className="text-right">
                                                            <ul className="pagination"> </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ============================================================== */}
                    {/* End PAge Content */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                </div>
                {/* ============================================================== */}
                {/* End Container fluid  */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* footer */}
                {/* ============================================================== */}
                <footer className="footer"> © 2017 Material Pro Admin by wrappixel.com </footer>
                {/* ============================================================== */}
                {/* End footer */}
                {/* ============================================================== */}
            </div>
            {/* ============================================================== */}
            {/* End Page wrapper  */}
            {/* ============================================================== */}
        </div>
        {/* ============================================================== */ }
        {/* End Wrapper */ }
        {/* ============================================================== */ }
        {/* ============================================================== */ }
        {/* All Jquery */ }
        {/* ============================================================== */ }
        </React.Fragment>
        );
    }
}

export default App;
