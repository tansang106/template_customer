import React, { Component } from 'react';
// import $ from 'jquery';

class App extends Component {

    render() {

        return (
            <React.Fragment>
                {/* ============================================================== */}
                {/* Preloader - style you can find in spinners.css */}
                {/* ============================================================== */}
                <div className="preloader">
                    <svg className="circular" viewBox="25 25 50 50">
                        <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" /> </svg>
                </div>
                {/* ============================================================== */}
                {/* Main wrapper - style you can find in pages.scss */}
                {/* ============================================================== */}
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
                                <div className="profile-img"> <img src="../assets/images/users/profile.png" alt="user" /> </div>
                                {/* User profile text*/}
                                <div className="profile-text"> <a href="#" className="dropdown-toggle u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Markarn Doe</a>
                                    <div className="dropdown-menu animated flipInY">
                                        <a href="#" className="dropdown-item"><i className="ti-user"></i> My Profile</a>
                                        <a href="#" className="dropdown-item"><i className="ti-wallet"></i> My Balance</a>
                                        <a href="#" className="dropdown-item"><i className="ti-email"></i> Inbox</a>
                                        <div className="dropdown-divider"></div> <a href="#" className="dropdown-item"><i className="ti-settings"></i> Account Setting</a>
                                        <div className="dropdown-divider"></div> <a href="login.html" className="dropdown-item"><i className="fa fa-power-off"></i> Logout</a>
                                    </div>
                                </div>
                            </div>
                            {/* End User profile text*/}
                            {/* Sidebar navigation*/}
                            <nav className="sidebar-nav">
                                <ul id="sidebarnav">
                                    <li className="nav-small-cap">PERSONAL</li>
                                    <li>
                                        <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-gauge"></i><span className="hide-menu">Dashboard </span></a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li><a href="index.html">Dashboard 1</a></li>
                                            <li><a href="index2.html">Dashboard 2</a></li>
                                            <li><a href="index3.html">Dashboard 3</a></li>
                                            <li><a href="index4.html">Dashboard 4</a></li>
                                            <li><a href="index5.html">Dashboard 5</a></li>
                                            <li><a href="index6.html">Dashboard 6</a></li>
                                        </ul>
                                    </li>
                                    <li> <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-laptop-windows"></i><span className="hide-menu">Template Demos</span></a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li><a href="../minisidebar/index.html">Minisidebar</a></li>
                                            <li><a href="../horizontal/index2.html">Horizontal</a></li>
                                            <li><a href="../dark/index3.html">Dark Version</a></li>
                                            <li><a href="../material-rtl/index4.html">RTL Version</a></li>
                                            <li><a href="javascript:angular">Anuglar-CLI Starter kit</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-bullseye"></i><span className="hide-menu">Apps</span></a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li><a href="app-calendar.html">Calendar</a></li>
                                            <li><a href="app-chat.html">Chat app</a></li>
                                            <li><a href="app-ticket.html">Support Ticket</a></li>
                                            <li><a href="app-contact.html">Contact / Employee</a></li>
                                            <li><a href="app-contact2.html">Contact Grid</a></li>
                                            <li><a href="app-contact-detail.html">Contact Detail</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-email"></i><span className="hide-menu">Inbox</span></a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li><a href="app-email.html">Mailbox</a></li>
                                            <li><a href="app-email-detail.html">Mailbox Detail</a></li>
                                            <li><a href="app-compose.html">Compose Mail</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-chart-bubble"></i><span className="hide-menu">Ui Elements</span></a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li><a href="ui-cards.html">Cards</a></li>
                                            <li><a href="ui-user-card.html">User Cards</a></li>
                                            <li><a href="ui-buttons.html">Buttons</a></li>
                                            <li><a href="ui-modals.html">Modals</a></li>
                                            <li><a href="ui-tab.html">Tab</a></li>
                                            <li><a href="ui-tooltip-popover.html">Tooltip &amp; Popover</a></li>
                                            <li><a href="ui-tooltip-stylish.html">Tooltip stylish</a></li>
                                            <li><a href="ui-sweetalert.html">Sweet Alert</a></li>
                                            <li><a href="ui-notification.html">Notification</a></li>
                                            <li><a href="ui-progressbar.html">Progressbar</a></li>
                                            <li><a href="ui-nestable.html">Nestable</a></li>
                                            <li><a href="ui-range-slider.html">Range slider</a></li>
                                            <li><a href="ui-timeline.html">Timeline</a></li>
                                            <li><a href="ui-typography.html">Typography</a></li>
                                            <li><a href="ui-horizontal-timeline.html">Horizontal Timeline</a></li>
                                            <li><a href="ui-session-timeout.html">Session Timeout</a></li>
                                            <li><a href="ui-session-ideal-timeout.html">Session Ideal Timeout</a></li>
                                            <li><a href="ui-bootstrap.html">Bootstrap Ui</a></li>
                                            <li><a href="ui-breadcrumb.html">Breadcrumb</a></li>
                                            <li><a href="ui-bootstrap-switch.html">Bootstrap Switch</a></li>
                                            <li><a href="ui-list-media.html">List Media</a></li>
                                            <li><a href="ui-ribbons.html">Ribbons</a></li>
                                            <li><a href="ui-grid.html">Grid</a></li>
                                            <li><a href="ui-carousel.html">Carousel</a></li>
                                            <li><a href="ui-date-paginator.html">Date-paginator</a></li>
                                            <li><a href="ui-dragable-portlet.html">Dragable Portlet</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-devider"></li>
                                    <li className="nav-small-cap">FORMS, TABLE &amp; WIDGETS</li>
                                    <li>
                                        <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-file"></i><span className="hide-menu">Forms</span></a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li><a href="form-basic.html">Basic Forms</a></li>
                                            <li><a href="form-layout.html">Form Layouts</a></li>
                                            <li><a href="form-addons.html">Form Addons</a></li>
                                            <li><a href="form-material.html">Form Material</a></li>
                                            <li><a href="form-float-input.html">Floating Lable</a></li>
                                            <li><a href="form-pickers.html">Form Pickers</a></li>
                                            <li><a href="form-upload.html">File Upload</a></li>
                                            <li><a href="form-mask.html">Form Mask</a></li>
                                            <li><a href="form-validation.html">Form Validation</a></li>
                                            <li><a href="form-dropzone.html">File Dropzone</a></li>
                                            <li><a href="form-icheck.html">Icheck control</a></li>
                                            <li><a href="form-img-cropper.html">Image Cropper</a></li>
                                            <li><a href="form-bootstrapwysihtml5.html">HTML5 Editor</a></li>
                                            <li><a href="form-typehead.html">Form Typehead</a></li>
                                            <li><a href="form-wizard.html">Form Wizard</a></li>
                                            <li><a href="form-xeditable.html">Xeditable Editor</a></li>
                                            <li><a href="form-summernote.html">Summernote Editor</a></li>
                                            <li><a href="form-tinymce.html">Tinymce Editor</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-table"></i><span className="hide-menu">Tables</span></a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li><a href="table-basic.html">Basic Tables</a></li>
                                            <li><a href="table-layout.html">Table Layouts</a></li>
                                            <li><a href="table-data-table.html">Data Tables</a></li>
                                            <li><a href="table-footable.html">Footable</a></li>
                                            <li><a href="table-jsgrid.html">Js Grid Table</a></li>
                                            <li><a href="table-responsive.html">Responsive Table</a></li>
                                            <li><a href="table-bootstrap.html">Bootstrap Tables</a></li>
                                            <li><a href="table-editable-table.html">Editable Table</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-widgets"></i><span className="hide-menu">Widgets</span></a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li><a href="widget-apps.html">Widget Apps</a></li>
                                            <li><a href="widget-data.html">Widget Data</a></li>
                                            <li><a href="widget-charts.html">Widget Charts</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-devider"></li>
                                    <li className="nav-small-cap">EXTRA COMPONENTS</li>
                                    <li>
                                        <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-book-multiple"></i><span className="hide-menu">Page Layout</span></a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li><a href="layout-single-column.html">1 Column</a></li>
                                            <li><a href="layout-fix-header.html">Fix header</a></li>
                                            <li><a href="layout-fix-sidebar.html">Fix sidebar</a></li>
                                            <li><a href="layout-fix-header-sidebar.html">Fixe header &amp; Sidebar</a></li>
                                            <li><a href="layout-boxed.html">Boxed Layout</a></li>
                                            <li><a href="layout-logo-center.html">Logo in Center</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-book-open-variant"></i><span className="hide-menu">Sample Pages</span></a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li><a href="starter-kit.html">Starter Kit</a></li>
                                            <li><a href="pages-blank.html">Blank page</a></li>
                                            <li><a href="#" className="has-arrow">Authentication <span className="label label-rounded label-success">6</span></a>
                                                <ul aria-expanded="false" className="collapse">
                                                    <li><a href="pages-login.html">Login 1</a></li>
                                                    <li><a href="pages-login-2.html">Login 2</a></li>
                                                    <li><a href="pages-register.html">Register</a></li>
                                                    <li><a href="pages-register2.html">Register 2</a></li>
                                                    <li><a href="pages-lockscreen.html">Lockscreen</a></li>
                                                    <li><a href="pages-recover-password.html">Recover password</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="pages-profile.html">Profile page</a></li>
                                            <li><a href="pages-animation.html">Animation</a></li>
                                            <li><a href="pages-fix-innersidebar.html">Sticky Left sidebar</a></li>
                                            <li><a href="pages-fix-inner-right-sidebar.html">Sticky Right sidebar</a></li>
                                            <li><a href="pages-invoice.html">Invoice</a></li>
                                            <li><a href="pages-treeview.html">Treeview</a></li>
                                            <li><a href="pages-utility-classNamees.html">Helper classNamees</a></li>
                                            <li><a href="pages-search-result.html">Search result</a></li>
                                            <li><a href="pages-scroll.html">Scrollbar</a></li>
                                            <li><a href="pages-pricing.html">Pricing</a></li>
                                            <li><a href="pages-lightbox-popup.html">Lighbox popup</a></li>
                                            <li><a href="pages-gallery.html">Gallery</a></li>
                                            <li><a href="pages-faq.html">Faqs</a></li>
                                            <li><a href="#" className="has-arrow">Error Pages</a>
                                                <ul aria-expanded="false" className="collapse">
                                                    <li><a href="pages-error-400.html">400</a></li>
                                                    <li><a href="pages-error-403.html">403</a></li>
                                                    <li><a href="pages-error-404.html">404</a></li>
                                                    <li><a href="pages-error-500.html">500</a></li>
                                                    <li><a href="pages-error-503.html">503</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-file-chart"></i><span className="hide-menu">Charts</span></a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li><a href="chart-morris.html">Morris Chart</a></li>
                                            <li><a href="chart-chartist.html">Chartis Chart</a></li>
                                            <li><a href="chart-echart.html">Echarts</a></li>
                                            <li><a href="chart-flot.html">Flot Chart</a></li>
                                            <li><a href="chart-knob.html">Knob Chart</a></li>
                                            <li><a href="chart-chart-js.html">Chartjs</a></li>
                                            <li><a href="chart-sparkline.html">Sparkline Chart</a></li>
                                            <li><a href="chart-extra-chart.html">Extra chart</a></li>
                                            <li><a href="chart-peity.html">Peity Charts</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-brush"></i><span className="hide-menu">Icons</span></a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li><a href="icon-material.html">Material Icons</a></li>
                                            <li><a href="icon-fontawesome.html">Fontawesome Icons</a></li>
                                            <li><a href="icon-themify.html">Themify Icons</a></li>
                                            <li><a href="icon-linea.html">Linea Icons</a></li>
                                            <li><a href="icon-weather.html">Weather Icons</a></li>
                                            <li><a href="icon-simple-lineicon.html">Simple Lineicons</a></li>
                                            <li><a href="icon-flag.html">Flag Icons</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-map-marker"></i><span className="hide-menu">Maps</span></a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li><a href="map-google.html">Google Maps</a></li>
                                            <li><a href="map-vector.html">Vector Maps</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-arrange-send-backward"></i><span className="hide-menu">Multi level dd</span></a>
                                        <ul aria-expanded="false" className="collapse">
                                            <li><a href="#">item 1.1</a></li>
                                            <li><a href="#">item 1.2</a></li>
                                            <li>
                                                <a className="has-arrow" href="#" aria-expanded="false">Menu 1.3</a>
                                                <ul aria-expanded="false" className="collapse">
                                                    <li><a href="#">item 1.3.1</a></li>
                                                    <li><a href="#">item 1.3.2</a></li>
                                                    <li><a href="#">item 1.3.3</a></li>
                                                    <li><a href="#">item 1.3.4</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">item 1.4</a></li>
                                        </ul>
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
                                            <a href="javascript:void(0)">Home</a>
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
                                            <h4 className="card-title">Emplyee list</h4>
                                            <h6 className="card-subtitle"></h6>
                                            <div className="table-responsive">
                                                <table id="demo-foo-addrow" className="table m-t-30 table-hover contact-list" data-page-size="10">
                                                    <thead>
                                                        <tr>
                                                            <th class="text_center">No</th>
                                                            <th class="text_center">Name</th>
                                                            {/* <th>Email</th> */}
                                                            <th class="text_center">Phone</th>
                                                            <th class="text_center">Role</th>
                                                            <th class="text_center">Age</th>
                                                            <th class="text_center">Joining date</th>
                                                            <th class="text_center">Salery</th>
                                                            <th class="text_center">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="text_center">
                                                            <td>1</td>
                                                            <td className="text_left">
                                                                <a >
                                                                    <img src="../assets/images/users/4.jpg" alt="user" width="40" className="img-circle"
                                                                    /> Genelia Deshmukh</a>
                                                            </td>
                                                            {/* <td>genelia@gmail.com</td> */}
                                                            <td>+123 456 789</td>
                                                            <td>
                                                                <span className="label label-danger">Designer</span>
                                                            </td>
                                                            <td>23</td>
                                                            <td>12-10-2014</td>
                                                            <td className="text_right">$1200</td>
                                                            <td>
                                                                {/* <button type="button" className="btn btn-lg btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete">
                                                                    {/* <i className="ti-close" aria-hidden="true"></i> 
                                                                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                                                                </button> */}
                                                                <div className="button-group text-center">
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-info icon_action">Info</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-primary icon_action">Add</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="text_center">
                                                            <td>2</td>
                                                            <td className="text_left">
                                                                <a >
                                                                    <img src="../assets/images/users/5.jpg" alt="user" width="40" className="img-circle"
                                                                    /> Arijit Singh</a>
                                                            </td>
                                                            {/* <td>arijit@gmail.com</td> */}
                                                            <td>+234 456 789</td>
                                                            <td>
                                                                <span className="label label-info">Developer</span>
                                                            </td>
                                                            <td>26</td>
                                                            <td>10-09-2014</td>
                                                            <td className="text_right">$1800</td>
                                                            <td>
                                                                <div className="button-group text-center">
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-info icon_action">Info</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-primary icon_action">Add</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="text_center">
                                                            <td>3</td>
                                                            <td className="text_left">
                                                                <a >
                                                                    <img src="../assets/images/users/6.jpg" alt="user" width="40" className="img-circle"
                                                                    /> Govinda jalan</a>
                                                            </td>
                                                            {/* <td>govinda@gmail.com</td> */}
                                                            <td>+345 456 789</td>
                                                            <td>
                                                                <span className="label label-success">Accountant</span>
                                                            </td>
                                                            <td>28</td>
                                                            <td>1-10-2013</td>
                                                            <td className="text_right">$2200</td>
                                                            <td>
                                                                <div className="button-group text-center">
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-info icon_action">Info</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-primary icon_action">Add</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="text_center">
                                                            <td>4</td>
                                                            <td className="text_left">
                                                                <a >
                                                                    <img src="../assets/images/users/7.jpg" alt="user" width="40" className="img-circle"
                                                                    /> Hritik Roshan</a>
                                                            </td>
                                                            {/* <td>hritik@gmail.com</td> */}
                                                            <td>+456 456 789</td>
                                                            <td>
                                                                <span className="label label-inverse">HR</span>
                                                            </td>
                                                            <td>25</td>
                                                            <td>2-10-2017</td>
                                                            <td className="text_right">$200</td>
                                                            <td>
                                                                <div className="button-group text-center">
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-info icon_action">Info</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-primary icon_action">Add</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="text_center">
                                                            <td>5</td>
                                                            <td className="text_left">
                                                                <a >
                                                                    <img src="../assets/images/users/8.jpg" alt="user" width="40" className="img-circle"
                                                                    /> John Abraham</a>
                                                            </td>
                                                            {/* <td>john@gmail.com</td> */}
                                                            <td>+567 456 789</td>
                                                            <td>
                                                                <span className="label label-danger">Manager</span>
                                                            </td>
                                                            <td>23</td>
                                                            <td>10-9-2015</td>
                                                            <td className="text_right">$1200</td>
                                                            <td>
                                                                <div className="button-group text-center">
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-info icon_action">Info</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-primary icon_action">Add</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="text_center">
                                                            <td>6</td>
                                                            <td className="text_left">
                                                                <a >
                                                                    <img src="../assets/images/users/1.jpg" alt="user" width="40" className="img-circle"
                                                                    /> Pawandeep kumar</a>
                                                            </td>
                                                            {/* <td>pawandeep@gmail.com</td> */}
                                                            <td>+678 456 789</td>
                                                            <td>
                                                                <span className="label label-warning">Chairman</span>
                                                            </td>
                                                            <td>29</td>
                                                            <td>10-5-2013</td>
                                                            <td className="text_right">$1500</td>
                                                            <td>
                                                                <div className="button-group text-center">
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-info icon_action">Info</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-primary icon_action">Add</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="text_center">
                                                            <td>7</td>
                                                            <td className="text_left">
                                                                <a >
                                                                    <img src="../assets/images/users/2.jpg" alt="user" width="40" className="img-circle"
                                                                    /> Ritesh Deshmukh</a>
                                                            </td>
                                                            {/* <td>ritesh@gmail.com</td> */}
                                                            <td>+123 456 789</td>
                                                            <td>
                                                                <span className="label label-danger">Designer</span>
                                                            </td>
                                                            <td>35</td>
                                                            <td>05-10-2012</td>
                                                            <td className="text_right">$3200</td>
                                                            <td>
                                                                <div className="button-group text-center">
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-info icon_action">Info</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-primary icon_action">Add</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="text_center">
                                                            <td>8</td>
                                                            <td className="text_left">
                                                                <a >
                                                                    <img src="../assets/images/users/2.jpg" alt="user" width="40" className="img-circle"
                                                                    /> Salman Khan</a>
                                                            </td>
                                                            {/* <td>salman@gmail.com</td> */}
                                                            <td>+234 456 789</td>
                                                            <td>
                                                                <span className="label label-info">Developer</span>
                                                            </td>
                                                            <td>27</td>
                                                            <td>11-10-2014</td>
                                                            <td className="text_right">$1800</td>
                                                            <td>
                                                                <div className="button-group text-center">
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-info icon_action">Info</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-primary icon_action">Add</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="text_center">
                                                            <td>9</td>
                                                            <td className="text_left">
                                                                <a >
                                                                    <img src="../assets/images/users/3.jpg" alt="user" width="40" className="img-circle"
                                                                    /> Govinda jalan</a>
                                                            </td>
                                                            {/* <td>govinda@gmail.com</td> */}
                                                            <td>+345 456 789</td>
                                                            <td>
                                                                <span className="label label-success">Accountant</span>
                                                            </td>
                                                            <td>18</td>
                                                            <td>12-5-2017</td>
                                                            <td className="text_right">$100</td>
                                                            <td>
                                                                <div className="button-group text-center">
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-info icon_action">Info</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-primary icon_action">Add</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="text_center">
                                                            <td>10</td>
                                                            <td className="text_left">
                                                                <a >
                                                                    <img src="../assets/images/users/4.jpg" alt="user" width="40" className="img-circle"
                                                                    /> Sonu Nigam</a>
                                                            </td>
                                                            {/* <td>sonu@gmail.com</td> */}
                                                            <td>+456 456 789</td>
                                                            <td>
                                                                <span className="label label-inverse">HR</span>
                                                            </td>
                                                            <td>36</td>
                                                            <td>18-5-2009</td>
                                                            <td className="text_right">$4200</td>
                                                            <td>
                                                                <div className="button-group text-center">
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-info icon_action">Info</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-primary icon_action">Add</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="text_center">
                                                            <td>11</td>
                                                            <td className="text_left">
                                                                <a >
                                                                    <img src="../assets/images/users/5.jpg" alt="user" width="40" className="img-circle"
                                                                    /> Varun Dhawan</a>
                                                            </td>
                                                            {/* <td>varun@gmail.com</td> */}
                                                            <td>+567 456 789</td>
                                                            <td>
                                                                <span className="label label-danger">Manager</span>
                                                            </td>
                                                            <td>43</td>
                                                            <td>12-10-2010</td>
                                                            <td className="text_right">$5200</td>
                                                            <td>
                                                                <div className="button-group text-center">
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-info icon_action">Info</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-primary icon_action">Add</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="text_center">
                                                            <td>12</td>
                                                            <td className="text_left">
                                                                <a >
                                                                    <img src="../assets/images/users/6.jpg" alt="user" width="40" className="img-circle"
                                                                    /> Genelia Deshmukh</a>
                                                            </td>
                                                            {/* <td>genelia@gmail.com</td> */}
                                                            <td>+123 456 789</td>
                                                            <td>
                                                                <span className="label label-danger">Designer</span>
                                                            </td>
                                                            <td>23</td>
                                                            <td>12-10-2014</td>
                                                            <td className="text_right">$1200</td>
                                                            <td>
                                                                <div className="button-group text-center">
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-info icon_action">Info</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-primary icon_action">Add</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="text_center">
                                                            <td>13</td>
                                                            <td className="text_left">
                                                                <a >
                                                                    <img src="../assets/images/users/7.jpg" alt="user" width="40" className="img-circle"
                                                                    /> Arijit Singh</a>
                                                            </td>
                                                            {/* <td>arijit@gmail.com</td> */}
                                                            <td>+234 456 789</td>
                                                            <td>
                                                                <span className="label label-info">Developer</span>
                                                            </td>
                                                            <td>26</td>
                                                            <td>10-09-2014</td>
                                                            <td className="text_right">$1800</td>
                                                            <td>
                                                                <div className="button-group text-center">
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-info icon_action">Info</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-primary icon_action">Add</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="text_center">
                                                            <td>14</td>
                                                            <td className="text_left">
                                                                <a >
                                                                    <img src="../assets/images/users/8.jpg" alt="user" width="40" className="img-circle"
                                                                    /> Govinda jalan</a>
                                                            </td>
                                                            {/* <td>govinda@gmail.com</td> */}
                                                            <td>+345 456 789</td>
                                                            <td>
                                                                <span className="label label-success">Accountant</span>
                                                            </td>
                                                            <td>28</td>
                                                            <td>1-10-2013</td>
                                                            <td className="text_right">$2200</td>
                                                            <td>
                                                                <div className="button-group text-center">
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-info icon_action">Info</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-primary icon_action">Add</button>
                                                                    <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <td colSpan="2">
                                                                <button type="button" className="btn btn-info btn-rounded" data-toggle="modal" data-target="#add-contact">Add New Contact</button>
                                                            </td>
                                                            <div id="add-contact" className="modal fade in" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
                                                            <td colSpan="7">
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
                {/* ============================================================== */}
                {/* End Wrapper */}
                {/* ============================================================== */}
            </React.Fragment>
        );
    }
}

export default App;