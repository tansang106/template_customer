import React, { Component } from 'react';

class EmployeeItem extends Component {
    render() {
        return (
            
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
            
        )
    }
}

export default EmployeeItem;