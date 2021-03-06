import React, { Component } from 'react';
import * as dataStorage from '../../Constants/localStorage';
import callApi from '../../Utils/apiCaller';
import Chart from 'chart.js';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class LineGraph extends Component {

    constructor(props) {
        super(props);
        this.state = {
            labels: [],
            dataGraph: [],
            startDate: moment(),
            endDate: moment(),
        }
        this.fromDate = moment().startOf("day").format("YYYY-MM-DD HH:mm:ss")
        this.toDate = moment().endOf("day").format("YYYY-MM-DD HH:mm:ss")
        this.fromDateWeek = moment().subtract(20, "day").startOf("day").format("YYYY-MM-DD HH:mm:ss")
        this.toDateWeek = moment().subtract(20, "day").endOf("day").format("YYYY-MM-DD HH:mm:ss")
        this.fromDateMonth = moment().subtract(1, "months").startOf("month").format("YYYY-MM-DD HH:mm:ss")
        this.toDateMonth = moment().subtract(1, "months").endOf("month").format("YYYY-MM-DD HH:mm:ss")
    }

    componentDidMount() {
        // this.renderGraph();
        console.log(this.fromDateWeek, this.toDate)
        this.getDataLineGraph(this.fromDateWeek, this.toDate);
    }

    handleChange = (date) => {
        this.setState({
            startDate: date,
        });
        console.log(this.state.startDate.format("YYYY-MM-DD HH:mm:ss"))
    }

     handleChangeE = (date) => {
        this.setState({
            endDate: date,
        });
        console.log(this.state.endDate.format("YYYY-MM-DD HH:mm:ss"))
    }

    getDataLineGraph(startDate, endDate) {
        let body = {
            idShop: 2,
            // fromDay: this.fromDateWeek,
            // toDay: this.toDate
            fromDay: startDate,
            toDay: endDate
        }
        let date = [];
        let data = [];
        let count = [];
        console.log('body line graph',body),
        callApi('home/countBillByWeek', 'POST', body, { 'token': dataStorage.TOKEN }).then(res => {
            console.log(res)
            let array = res.data.bill;
            for (let j = 0; j < array.length; j++) {
                console.log(array[j])
                date.push(array[j].Date);
                data.push(array[j].Data/1000);
                count.push(array[j].Count)
                // data.push(array[j].Count)
            }
            console.log(data, date, count)
            this.setState({
                labels: date,
                dataGraph: data
            })
            this.renderGraph();
        })
        
    }

    

    renderGraph() {
        var lineData = {
            // labels: labelLineGraph,
            labels: this.state.labels,
            datasets: [
                {
                    backgroundColor: "rgba(38, 198, 218,0.35)",
                    label: "Total Money",
                    // fillColor: "rgba(28,181,214,0.5)",
                    // strokeColor: "rgba(28,181,214,0.7)",
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "rgba(28,181,241,1)",
                    // pointStrokeColor: "#fff",
                    // pointHighlightFill: "#fff",
                    // pointHighlightStroke: "rgba(220,220,220,1)",
                    // data: [50, 75, 150, 110, 80, 120],
                    borderColor: 'rgba(28,181,214,0.7)',
                    data: this.state.dataGraph,
                    borderWidth: 1.5

                },
                // {
                //     backgroundColor: "rgba(113,179,148,0.5)",
                //     label: "Total resolve warning",
                //     // fillColor: "rgba(113,179,148,0.5)",
                //     // strokeColor: "rgba(26,179,148,0.7)",
                //     pointBorderColor: "#fff",
                //     pointBackgroundColor: "rgba(26,179,148,1)",
                //     // pointStrokeColor: "#fff",
                //     // pointHighlightFill: "#fff",
                //     // pointHighlightStroke: "rgba(26,179,148,1)",
                //     borderColor: 'rgba(26, 179, 148, 0.7)',
                //     data: [4,5,6],
                //     borderWidth: 1.5
                // }
            ]
        };

        var lineOptions = [
            {
                scaleShowGridLines: true,
            },
            {
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                }
            },
            {
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }]
                }
            },
            {
                gridLines: {
                    display: false
                }
            }
            // scaleGridLineColor: "rgba(0,0,0,.05)",
            // scaleGridLineWidth: 0.5,
            // bezierCurve: true,
            // bezierCurveTension: 0.4,
            // pointDot: true,
            // pointDotRadius: 4,
            // pointDotStrokeWidth: 1,
            // pointHitDetectionRadius: 20,
            // datasetStroke: true,
            // datasetStrokeWidth: 2,
            // datasetFill: true,
            // responsive: true,
            //showTooltips: false
            // scales: {
            //     yAxes: [{
            //         gridLines: {
            //             drawBorder: false,
            //         }
            //     }]
            // },
            // elements: {
            //     line: {
            //         tension: 5, // disables bezier curves
            //     }
            // },
            // // scaleShowVerticalLines: false
            // scales : {
            //     xAxes : [ {
            //         gridLines : {
            //             display : false
            //         }
            //     } ]
            // },


        ];

        var chartOptions = {
            responsive: true,
            //Custom legend
            legend: {
                display: true,
                // display: false, //k hien thi legend
                // display: false,
                position: 'top',
                labels: {
                    boxWidth: 0,
                    fontColor: 'white'
                }
            },

            //xoa gridLine
            scales: {
                xAxes: [{
                    // gridLines: {
                    //     display: false
                    // },
                    barPercentage: 1.0,
                    categoryPercentage: 0.1
                    // categorySpacing: 5
                }],
                yAxes: [{
                    // gridLines: {
                    //     display: false
                    // },
                    ticks: {
                        // max: 2000,
                        min: 0,
                        // stepSize: 250,
                        beginAtZero: true,
                        padding: 20,
                        // callback: function (value, index, values) {
                        //     return value / 1000 + "k";
                        // }
                    }
                }]
            },
        };

        var ctx = document.getElementById("lineChart1").getContext("2d");
        var myBarChart = new Chart(ctx, {
            type: "line",
            data: lineData,
            // options: {
            // 	// // bezierCurve: true,
            // 	// // bezierCurveTension: 0.4,
            // 	// pointDot: true,
            // 	// pointHoverRadius: 5,
            // 	// lineTension: 10,
            // 	// legend: {
            // 	//     display: true,
            // 	//     labels: {
            // 	//         fontColor: 'rgb(255, 99, 132)'
            // 	//     }
            // 	// }
            //     legend: {
            //         display: true,
            //         position: 'top',
            //         labels: {
            //             boxWidth: 80,
            //             fontColor: 'black'
            //         }
            //     }
            // }
            options: chartOptions
        });
    }
    
    clickRenderGraph = (startDate, endDate) => {
        console.log(endDate.format("YYYY-MM-DD HH:mm:ss"), startDate.format("YYYY-MM-DD HH:mm:ss"))
        this.getDataLineGraph(startDate.format("YYYY-MM-DD HH:mm:ss"), endDate.format("YYYY-MM-DD HH:mm:ss"))
    }

    render() {
        var {startDate, endDate} = this.state
        return (
            <React.Fragment>
            <div className="row">
                {/* Column */}
                <div className="col-lg-4 col-xlg-3 col-md-5">
                    {/* <div className="card blog-widget">
                            <div className="card-body">
                                <div className="blog-image"><img src="../assets/images/big/img1.jpg" alt="img" className="img-responsive" /></div>
                                <h3>Business development new rules for 2017</h3>
                                <label className="label label-rounded label-success">Technology</label>
                                <p className="m-t-20 m-b-20">
                                    Lorem ipsum dolor sit amet, this is a consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                </p>
                                <div className="d-flex">
                                    <div className="read"><a href="javascript:void(0)" className="link font-medium">Read More</a></div>
                                    <div className="ml-auto">
                                        <a href="javascript:void(0)" className="link m-r-10 " data-toggle="tooltip" title="Like"><i className="mdi mdi-heart-outline"></i></a> <a href="javascript:void(0)" className="link" data-toggle="tooltip" title="Share"><i className="mdi mdi-share-variant"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>   */}
                    <div className="card">
                        <div className="card-header">
                            <div className="card-actions">
                                <a className="" data-action="collapse"><i className="ti-minus"></i></a>
                                <a className="btn-minimize" data-action="expand"><i className="mdi mdi-arrow-expand"></i></a>
                                <a className="btn-close" data-action="close"><i className="ti-close"></i></a>
                            </div>
                            <h4 className="card-title m-b-0">Date</h4>
                        </div>
                        <div className="card-body">
                            <form className="form-horizontal form-material">

                                            <div className="form-group">
                                                {/* <div className="col-md-12 m-b-20"> */}
                                                 <span className="bar"></span>
                                                    <label htmlFor="input1">From Date</label>
                                                    {/* <input
                                                        type="text"
                                                        className="form-control"
                                                        id="input1"
                                                        name="txtDrinkName"
                                                        // value={txtDrinkName}
                                                        // onChange={this.onChange}
                                                    /> */}
                                                    {/* <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="2018-06-04" 
                                                    id="mdate"/>
                                                    */}
                                                      <DatePicker
                                                    className={`form-control`}
                                                    selected={this.state.startDate}
                                                    onChange={this.handleChange}
                                                    />
                                                {/* </div> */}

                                                {/* <div className="col-md-12 m-b-20">*/}
                                                 <span className="bar"></span> 
                                                    <label htmlFor="input1">To Day</label>
                                                    {/* <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="2018-08-04" 
                                                    id="mdate"/> */}
                                                     <DatePicker
                                                    className={`form-control`}
                                                    selected={this.state.endDate}
                                                    onChange={this.handleChangeE}
                                                    />
                                                {/* </div> */}
                                                <button 
                                                    type="button" 
                                                    className="btn btn-danger waves-effect text-left" 
                                                    aria-hidden="true"
                                                    onClick={ () => this.clickRenderGraph(startDate, endDate)}    
                                                >Click</button>
                                            </div>
                                        </form>
                                       
                        </div>
                    </div>
                    {/* <div className="card">
                        <div className="card-header">
                            <div className="card-actions">
                                <a className="" data-action="collapse">
                                    <i className="ti-minus"></i>
                                </a>
                                <a className="btn-minimize" data-action="expand">
                                    <i className="mdi mdi-arrow-expand"></i>
                                </a>
                                <a className="btn-close" data-action="close">
                                    <i className="ti-close"></i>
                                </a>
                            </div>
                            <h4 className="card-title m-b-0">Discount</h4>
                        </div>
                        <div className="card-body collapse show bg-info">
                            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                
                                <div className="carousel-inner">
                                    <div className="carousel-item flex-column active">
                                        <i className="fa fa-shopping-cart fa-2x text-white"></i>
                                        <p className="text-white">25th Jan</p>
                                        <h3 className="text-white font-light">Now Get
                                                    <span className="font-bold">50% Off</span>
                                            <br /> on buy</h3>
                                        <div className="text-white m-t-20">
                                            <i>- Ecommerce site</i>
                                        </div>
                                    </div>
                                    <div className="carousel-item flex-column">
                                        <i className="fa fa-shopping-cart fa-2x text-white"></i>
                                        <p className="text-white">25th Jan</p>
                                        <h3 className="text-white font-light">Now Get
                                                    <span className="font-bold">50% Off</span>
                                            <br /> on buy</h3>
                                        <div className="text-white m-t-20">
                                            <i>- Ecommerce site</i>
                                        </div>
                                    </div>
                                    <div className="carousel-item flex-column">
                                        <i className="fa fa-shopping-cart fa-2x text-white"></i>
                                        <p className="text-white">25th Jan</p>
                                        <h3 className="text-white font-light">Now Get
                                                    <span className="font-bold">50% Off</span>
                                            <br /> on buy</h3>
                                        <div className="text-white m-t-20">
                                            <i>- Ecommerce site</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="col-lg-8 col-xlg-9 col-md-7">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex flex-wrap">
                                <div>
                                    <h3 className="card-title">Total Money</h3>
                                    <h6 className="card-subtitle">Overview of Total money</h6>
                                </div>
                                <div className="ml-auto align-self-center">
                                    <ul className="list-inline m-b-0">
                                        <li>
                                            <h6 className="text-muted text-success"><i className="fa fa-circle font-10 m-r-10 "></i>Total  Money</h6> </li>
                                        {/* <li>
                                                                        <h6 className="text-muted text-info"><i className="fa fa-circle font-10 m-r-10"></i>Recurring Payments</h6> </li> */}

                                    </ul>
                                </div>

                            </div>
                            {/* <div className="campaign ct-charts"></div> */}
                            <canvas id="lineChart1" height="100%" />
                            {/* <div className="row text-center">
                                <div className="col-lg-4 col-md-4 m-t-20"><h1 className="m-b-0 font-light">5098</h1><small>Total Sent</small></div>
                                <div className="col-lg-4 col-md-4 m-t-20"><h1 className="m-b-0 font-light">4156</h1><small>Mail Open Rate</small></div>
                                <div className="col-lg-4 col-md-4 m-t-20"><h1 className="m-b-0 font-light">1369</h1><small>Click Rate</small></div>
                            </div> */}
                        </div>
                    </div>
                </div>
                
            </div> 
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
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="input1"
                                                        name="txtDrinkName"
                                                        // value={txtDrinkName}
                                                        // onChange={this.onChange}
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
                                                        // value={txtDrinkPrice}
                                                        // onChange={this.onChange}
                                                    />
                                                    <span className="bar"></span>
                                                    <label htmlFor="input1">Price</label>
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
            </React.Fragment>
        );
    }
}

export default LineGraph;