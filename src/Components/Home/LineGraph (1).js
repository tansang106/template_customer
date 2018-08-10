const React = require("react");
const LineChart = require("../LineChart");
const axios = require("axios");
const Response = require("../../../Commons/Response");
const moment = require("moment");

class LineGraph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            arrayTotalWarning: [],
            arrayWarning: [],
            intervalId: "",
        }
    }
    
    
    componentWillMount() {
        clearInterval(this.state.intervalId);
    }
    

    componentDidMount() {
        this.getDataGraph();
    }

    async getTotalWarningLineGraph() {
        let data1 = await axios
            .get(this.props.url.searchWaringGroupByDay, {
                params: {
                    size: 0,
                    startDate: this.props.startDate,
                    endDate: this.props.endDate,
                    show: true
                }
            })
        data1 = Response.formatRespAggs(data1).group_by_day.buckets;
        let today = moment(this.props.startDate.split(" ")[0]).unix();
        let endDay = moment(this.props.endDate.split(" ")[0]).unix();
        let result = [];
        let indexData = 0;
        for (today; today <= endDay; today += 86400) {
            if (data1[indexData]) {
                let dayChecking = moment(data1[indexData].key_as_string.split(" ")[0]).unix();
                if (dayChecking == today) {
                    result.push(data1[indexData].doc_count);
                    indexData++;
                    continue;
                }
            }
            result.push(0);
        }

        return result;
    }

    async getWarningLineGraph() {
        let data2 = await axios
            .get(this.props.url.searchWaringGroupByDay, {
                params: {
                    size: 0,
                    startDate: this.props.startDate,
                    endDate: this.props.endDate,
                    createdIncident: true,
                    onhand: true
                }
            });
        data2 = Response.formatRespAggs(data2).group_by_day.buckets;
        let today = moment(this.props.startDate.split(" ")[0]).unix();
        let endDay = moment(this.props.endDate.split(" ")[0]).unix();
        let result = [];
        let indexData = 0;
        for (today; today <= endDay; today += 86400) {
            if (data2[indexData]) {
                let dayChecking = moment(data2[indexData].key_as_string.split(" ")[0]).unix();
                if (dayChecking == today) {
                    result.push(data2[indexData].doc_count);
                    indexData++;
                    continue;
                }
            }
            result.push(0);
        }

        return result;
    }

    async getDataGraph() {
        var labelLineGraph = [];
        let i = 6;
        for (i; i >= 0; i--) {
            labelLineGraph.push(
                moment()
                    .add(-i, "days")
                    .format("DD/MM")
            );
        }
		try {
			let totalWarning = await this.getWarningLineGraph();
			let resolveWarning = await this.getTotalWarningLineGraph();
			const newState = Object.assign({}, this.state);
			newState.arrayWarning = totalWarning
			newState.arrayTotalWarning = resolveWarning
            this.setState(newState);

		} catch (ex) {
			console.log('Error render line graph', ex)
		}
        // this.renderGraph(
        //     this.state.arrayTotalWarning,
        //     this.state.arrayWarning,
        //     labelLineGraph
        // );
        this.renderGraph2(
            this.state.arrayTotalWarning,
            this.state.arrayWarning,
            labelLineGraph
        );
	}

    timer() {
        // this.renderGraph(
		// 	this.state.arrayTotalWarning,
		// 	this.state.arrayWarning,
		// 	["one", "two", "three", "1", "2", "3", "4"]
        // );
        this.getDataGraph();
    }

    renderGraph(data1, data2, labelLineGraph) {
        var lineData = {
            labels: labelLineGraph,
            datasets: [
                {
                    backgroundColor: "rgba(28,181,214,0.5)",
                    label: "Total Warning",
                    // fillColor: "rgba(28,181,214,0.5)",
                    // strokeColor: "rgba(28,181,214,0.7)",
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "rgba(28,181,241,1)",
                    // pointStrokeColor: "#fff",
                    // pointHighlightFill: "#fff",
                    // pointHighlightStroke: "rgba(220,220,220,1)",
                    // data: [50, 75, 150, 110, 80, 120],
                    borderColor: 'rgba(28,181,214,0.7)',
                    data: data1,
                    borderWidth: 1.5
                    
                },
                {
                    backgroundColor: "rgba(113,179,148,0.5)",
                    label: "Total resolve warning",
                    // fillColor: "rgba(113,179,148,0.5)",
                    // strokeColor: "rgba(26,179,148,0.7)",
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "rgba(26,179,148,1)",
                    // pointStrokeColor: "#fff",
                    // pointHighlightFill: "#fff",
                    // pointHighlightStroke: "rgba(26,179,148,1)",
                    borderColor: 'rgba(26, 179, 148, 0.7)',
                    data: data2,
                    borderWidth: 1.5
                }
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
                position: 'top',
                labels: {
                    boxWidth: 80,
                    fontColor: 'black'
                }
            },
            
            //xoa gridLine
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    barPercentage: 1.0,
                    categoryPercentage: 0.1
                    // categorySpacing: 5
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    },
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

    renderGraph2(data1, data2, labelLineGraph) {
        var ops = {
            responsive: false,
            scales: {
                xAxes: [{
                    ticks: {
                        maxRotation: 90,
                        minRotation: 80
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
        var data = [
            { "Date": "23/07", "SL": 6, "Count": 4, "Detail_Price": 132000, "Drink_Name": "Name1" },
            { "Date": "23/07", "SL": 7, "Count": 3, "Detail_Price": 87000, "Drink_Name": "Name2" },
            { "Date": "23/07", "SL": 3, "Count": 3, "Detail_Price": 99000, "Drink_Name": "Name3" },
            { "Date": "29/07", "SL": 5, "Count": 1, "Detail_Price": 41000, "Drink_Name": "Name4" }]
        let i = 0;
        let j = 0;
        let labels = [];
        let dataSet = [];
        let arrayData = []
        for (i; i < data.length; i++){
            labels.push(data[i].Date)
            for (j; j < labels.length; j++){
                let dataGraph = {
                    label: data[i].Drink_Name,
                    // data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
                    data: [data[i].SL],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }
                dataSet.push(dataGraph);
            }
            
        }
     
        labels = labels.filter((v, i) => labels.indexOf(v) === i)
        console.log('labels', labels)
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                // labels: ["2015-01", "2015-02", "2015-03", "2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "2015-09", "2015-10", "2015-11", "2015-12"],
                labels: labels,
                // datasets: [
                //     {
                //     label: '# of Tomatoes',
                //     // data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
                //     data: data1,
                //     backgroundColor: [
                //         'rgba(255, 99, 132, 0.2)',
                //         'rgba(54, 162, 235, 0.2)',
                //         'rgba(255, 206, 86, 0.2)',
                //         'rgba(75, 192, 192, 0.2)',
                //         'rgba(153, 102, 255, 0.2)',
                //         'rgba(255, 159, 64, 0.2)',
                //         'rgba(255, 99, 132, 0.2)',
                //         'rgba(54, 162, 235, 0.2)',
                //         'rgba(255, 206, 86, 0.2)',
                //         'rgba(75, 192, 192, 0.2)',
                //         'rgba(153, 102, 255, 0.2)',
                //         'rgba(255, 159, 64, 0.2)'
                //     ],
                //     borderColor: [
                //         'rgba(255,99,132,1)',
                //         'rgba(54, 162, 235, 1)',
                //         'rgba(255, 206, 86, 1)',
                //         'rgba(75, 192, 192, 1)',
                //         'rgba(153, 102, 255, 1)',
                //         'rgba(255, 159, 64, 1)',
                //         'rgba(255,99,132,1)',
                //         'rgba(54, 162, 235, 1)',
                //         'rgba(255, 206, 86, 1)',
                //         'rgba(75, 192, 192, 1)',
                //         'rgba(153, 102, 255, 1)',
                //         'rgba(255, 159, 64, 1)'
                //     ],
                //     borderWidth: 1
                // },
                //     {
                //         label: '# of Tomatoes',
                //         data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
                //         // data: data1,
                //         backgroundColor: [
                //             'rgba(255, 99, 132, 0.2)',
                //             'rgba(54, 162, 235, 0.2)',
                //             'rgba(255, 206, 86, 0.2)',
                //             'rgba(75, 192, 192, 0.2)',
                //             'rgba(153, 102, 255, 0.2)',
                //             'rgba(255, 159, 64, 0.2)',
                //             'rgba(255, 99, 132, 0.2)',
                //             'rgba(54, 162, 235, 0.2)',
                //             'rgba(255, 206, 86, 0.2)',
                //             'rgba(75, 192, 192, 0.2)',
                //             'rgba(153, 102, 255, 0.2)',
                //             'rgba(255, 159, 64, 0.2)'
                //         ],
                //         borderColor: [
                //             'rgba(255,99,132,1)',
                //             'rgba(54, 162, 235, 1)',
                //             'rgba(255, 206, 86, 1)',
                //             'rgba(75, 192, 192, 1)',
                //             'rgba(153, 102, 255, 1)',
                //             'rgba(255, 159, 64, 1)',
                //             'rgba(255,99,132,1)',
                //             'rgba(54, 162, 235, 1)',
                //             'rgba(255, 206, 86, 1)',
                //             'rgba(75, 192, 192, 1)',
                //             'rgba(153, 102, 255, 1)',
                //             'rgba(255, 159, 64, 1)'
                //         ],
                //         borderWidth: 1
                //     }
                // ]
                datasets: dataSet
            },
            options: ops
        });
    }

    render() {
        return (
           
                <div className="table-responsive">
                    {/*
                            <div className="flot-chart dashboard-chart">
                                        <div className="flot-chart-content" id="flot-dashboard-chart"></div>
                                    </div> */}
                    {/* <canvas id="lineChart1" height="68%" /> */}
                    <canvas id="myChart" height="200%" />
                    {/* <LineChart></LineChart> */}
                </div>
            
        );
    }
}

module.exports = LineGraph;