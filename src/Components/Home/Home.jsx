import React, { Component } from 'react';
import LineGraph from './LineGraph';
import BarChart from './BarChart';
import * as Graph from './LineBar';
import callApi from '../../Utils/apiCaller';   
import * as dataStorage from '../../Constants/localStorage';
import moment from 'moment';
import toastr from 'toastr';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalDay: 0,
            totalWeek: 0,
            totalMonth: 0,
            totalHaftYear: 0,
            toatalCountDay: 0,
            totalCountWeek: 0,
            totalCountMonth: 0,
            totalCountHaftYear: 0,
        }
        this.fromDate = moment().startOf("day").format("YYYY-MM-DD HH:mm:ss") //00h hom nay
        this.toDate = moment().endOf("day").format("YYYY-MM-DD HH:mm:ss") //tai thoi diem hom nay
        this.fromDateWeek = moment().subtract(20, "day").startOf("day").format("YYYY-MM-DD HH:mm:ss") //dau 20 ngay trc
        this.toDateWeek = moment().subtract(20, "day").endOf("day").format("YYYY-MM-DD HH:mm:ss") //cuoi 20 ngay trc
        this.fromLastMonth = moment().subtract(1, "months").startOf("month").format("YYYY-MM-DD HH:mm:ss") //dau thang trc
        this.toLastMonth = moment().subtract(1, "months").endOf("month").format("YYYY-MM-DD HH:mm:ss") //cuoi thang trc
        this.fromLastWeek = moment().subtract(1, 'week').startOf('isoWeek').format("YYYY-MM-DD HH:mm:ss")
        this.toLastWeek = moment().subtract(1, 'week').endOf('isoWeek').format("YYYY-MM-DD HH:mm:ss")
        this.fromHalfYear = moment().subtract(6, "months").startOf("month").format("YYYY-MM-DD HH:mm:ss") //dau thang trc
        this.toHalfYear = moment().subtract(6, "months").endOf("month").format("YYYY-MM-DD HH:mm:ss") //cuoi thang trc
    }

    componentDidMount() {
        this.getTotalDay(this.fromDate, this.toDate);
        this.getTotalWeek(this.fromLastWeek, this.toLastWeek);
        this.getTotalMonth(this.fromLastMonth, this.toLastMonth)
        this.getTotalHalfYear(this.fromHalfYear, this.toDate)
        console.log(this.fromLastMonth, this.toLastMonth)
    }
    

    getTotalDay(fromDay, toDay) {
        callApi('home/countBillByDay', 'POST', {
            idShop: dataStorage.DATA_USER.user_shop_id,
            fromDay,
            toDay
        }, { 'token': dataStorage.TOKEN }).then(res => {
            if (res.data.status == 'success' && res.data.bill.data != null) {
                console.log(res);
                this.setState({
                    totalDay: res.data.bill.data,
                    toatalCountDay: res.data.bill.Count
                })
            } else {
                // toastr.error("Can't get data Day", 'Error');
                return;
            }   
        })
    }   

    getTotalWeek(fromDay, toDay) {
        callApi('home/countBillByDay', 'POST', {
            idShop: dataStorage.DATA_USER.user_shop_id,
            fromDay,
            toDay
        }, { 'token': dataStorage.TOKEN }).then(res => {
            if (res.data.status == 'success' && res.data.bill.data != null) {
                this.setState({
                    totalWeek: res.data.bill.data,
                    totalCountWeek: res.data.bill.Count
                })
            } else {
                // toastr("Can't get data Day", 'Error')
                return;
            }
        })
    }

    getTotalMonth(fromDay, toDay) {
        callApi('home/countBillByDay', 'POST', {
            idShop: dataStorage.DATA_USER.user_shop_id,
            fromDay,
            toDay
        }, { 'token': dataStorage.TOKEN }).then(res => {
            if (res.data.status == 'success' && res.data.bill.data != null) {
                this.setState({
                    totalMonth: res.data.bill.data,
                    totalCountMonth: res.data.bill.Count
                })
            } else {
                // toastr("Can't get data Month", 'Error')
                return;
            }
        })
    }

    getTotalHalfYear(fromDay, toDay) {
        callApi('home/countBillByDay', 'POST', {
            idShop: dataStorage.DATA_USER.user_shop_id,
            fromDay,
            toDay
        }, { 'token': dataStorage.TOKEN }).then(res => {
            if (res.data.status == 'success' && res.data.bill.data != null) {
                this.setState({
                    totalHaftYear: res.data.bill.data,
                    totalCountHaftYear: res.data.bill.Count
                })
            } else {
                // toastr("Can't get data Year", 'Error')
                return;
            }
        })
    }

    render() {

        console.log('render')

        return (
            <React.Fragment>
                <div className="row page-titles">
                    <div className="col-md-5 col-8 align-self-center">
                        <h3 className="text-themecolor">Home</h3>
                        <ol className="breadcrumb">
                            {/* <a className="breadcrumb-item"><a href="javascript:void(0)">Home</a></a> */}
                            {/* <li className="breadcrumb-item active">Dashboard2</li> */}
                        </ol>
                    </div>
                    {/* <div className="col-md-7 col-4 align-self-center">
                        <div className="d-flex m-t-10 justify-content-end">
                            <div className="d-flex m-r-20 m-l-10 hidden-md-down">
                                <div className="chart-text m-r-10">
                                    <h6 className="m-b-0"><small>THIS MONTH</small></h6>
                                    <h4 className="m-t-0 text-info">$58,356</h4></div>
                                <div className="spark-chart">
                                    <div id="monthchart"></div>
                                </div>
                            </div>
                            <div className="d-flex m-r-20 m-l-10 hidden-md-down">
                                <div className="chart-text m-r-10">
                                    <h6 className="m-b-0"><small>LAST MONTH</small></h6>
                                    <h4 className="m-t-0 text-primary">$48,356</h4></div>
                                <div className="spark-chart">
                                    <div id="lastmonthchart"></div>
                                </div>
                            </div>
                            <div className="">
                                <button className="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10"><i className="ti-settings text-white"></i></button>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* ============================================================== */}
                {/* End Bread crumb and right sidebar toggle */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Start Page Content */}
                {/* ============================================================== */}
                <div className="row">
                    {/* Column */}
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-row">
                                    <div className="round round-lg align-self-center round-info"><i className="ti-wallet"></i></div>
                                    <div className="m-l-10 align-self-center">
                                        <h3 className="m-b-0 font-light">{this.state.totalDay}</h3>
                                        <h5 className="text-muted m-b-0">{this.state.toatalCountDay} Product / Day</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Column */}
                    {/* Column */}
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-row">
                                    <div className="round round-lg align-self-center round-warning"><i className="mdi mdi-cellphone-link"></i></div>
                                    <div className="m-l-10 align-self-center">
                                        <h3 className="m-b-0 font-lgiht">{this.state.totalWeek}</h3>
                                        <h5 className="text-muted m-b-0">{this.state.totalCountWeek} PROD / Week</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Column */}
                    {/* Column */}
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-row">
                                    <div className="round round-lg align-self-center round-primary"><i className="mdi mdi-cart-outline"></i></div>
                                    <div className="m-l-10 align-self-center">
                                        <h3 className="m-b-0 font-lgiht">{this.state.totalMonth}</h3>
                                        <h5 className="text-muted m-b-0">{this.state.totalCountMonth} PROD / Month</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Column */}
                    {/* Column */}
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-row">
                                    <div className="round round-lg align-self-center round-danger"><i className="mdi mdi-bullseye"></i></div>
                                    <div className="m-l-10 align-self-center">
                                        {/* <h3 className="m-b-0 font-lgiht">{this.state.totalHaftYear}</h3> */}
                                        <h3 className="m-b-0 font-lgiht">1232000</h3>
                                        {/* <h5 className="text-muted m-b-0">{this.state.totalCountHaftYear} PROD / Year</h5></div> */}
                                        <h5 className="text-muted m-b-0">12 PROD / Year</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Column */}
                </div>
                <LineGraph/>
                <BarChart/>
            </React.Fragment>
        );
    }
}

export default Home;