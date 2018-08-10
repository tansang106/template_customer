import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    actFetchShopRequest,
    actAddShopResquest,
    actFetchSystemRequest,
    actUpdateShopResquest,
    actFetchAccountRequest,
    actAddDrinkResquest,
    actUpdateDrinkResquest,
    actFetchDrinkRequest,
    actFetchPositionRequest
} from '../Actions/index';
import moment from 'moment';
import $ from 'jquery';
import * as dataStorage from '../Constants/localStorage';
import * as Config from '../Constants/Config';
import callApi from '../Utils/apiCaller';
import DrinkList from '../Components/Drink/DrinkList';
import DrinkItem from '../Components/Drink/DrinkItem';


class DrinkContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            idDrink: '',
            txtDrinkName: '',
            txtDrinkPrice: '',
            txtDrinkAvatar: '',
            avatarUpload: '',
            txtAvatarUpload: '',
        }
    }


    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onChangeImage = (e) => {
        this.setState({
            txtDrinkAvatar: e.target.files[0]
        })    
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
    onGetIdDrink = (ev) => {
        let { drinks, positions } = this.props
        // console.log(ev)
        var val = ev.target.dataset.value;
        // console.log(systems);
        // console.log(users[0])
        let dataDrink = this.findObjectByKey(drinks, 'drink_id', val);
        let dataPosition = this.findObjectByKey(positions, 'position_id', 1);
        // console.log('systemdata', dataSystem.system_name)
        // console.log('log', dataDrink.drink_name)
        console.log('lấy avatar', dataDrink.drink_avatar)
        this.setState({
            txtDrinkPrice: dataDrink.drink_price,
            txtAvatarUpload: dataDrink.drink_avatar,
            txtDrinkName: dataDrink.drink_name,
            idDrink: dataDrink.drink_id
           
        })
        console.log(dataDrink);
        console.log('hình', this.state.txtAvatarUpload, this.state.txtDrinkPrice)
    }

    uploadFile = async () => {
        var formData = new FormData();
        formData.append("avatar", this.state.txtDrinkAvatar);
        let avatar = await callApi('boss/upload-imgDrink', 'POST', formData, {
            'token': dataStorage.TOKEN
        }).then(res => {
            return res.data.imgDrink;
        })
        this.setState({ avatarUpload: avatar})
        // this.setState({ avatarUpload: `${Config.API_URL}/uploads/imgDrink/${avatar}`})
    }

    onSave = async (e) => {
        try {
            console.log('click save')
            e.preventDefault();
            var { txtDrinkPrice, txtDrinkAvatar, txtDrinkName, idDrink } = this.state;
            console.log('hình', this.state.txtAvatarUpload)
            console.log('avatarupload', this.state.avatarUpload)
            console.log('data trước khi save', txtDrinkPrice, txtDrinkName, idDrink)
           
            await this.uploadFile();
            //data này trùng với body call tới api
            // console.log('avatar',avatar);
            var drink = {
                drink_name: txtDrinkName,
                drink_price: txtDrinkPrice,

                // drink_avatar: txtDrinkAvatar,
                drink_avatar: this.state.avatarUpload,

                // drink_position_id: (this.refs.idPosition) ? this.refs.idPosition.value : '',
            }
            if (idDrink) {
                drink.drink_id = idDrink

                console.log('đang kiểm tra tồn tại id', idDrink)
                this.props.onUpdateDrink(drink)
                console.log('đã update')
            }
            else {
                console.log('đã k có id')
                console.log('data trước khi add', drink)
                drink.drink_shop_id = dataStorage.DATA_USER.user_shop_id,
                    this.props.onAddDrink(drink);
                console.log(drink)

            }
        } catch (error) {
            console.log('Error onSave', error)
        }
      
    }

    onSetState = () => {
        this.setState({
            idDrink: '',
            txtDrinkName: '',
            txtDrinkPrice: '',
            txtDrinkAvatar: '',
        })
    }



    componentDidMount() {
        this.props.fetchAllDrink();
        this.props.fetchPosition();

    }

    onTest = () => {
        console.log('state avtar', this.state.txtDrinkAvatar);
        let data = {
            avatar: this.state.txtDrinkAvatar
        }
        console.log(data)
        var formData = new FormData();
        formData.append("avatar", this.state.txtDrinkAvatar);
        callApi('boss/upload-imgDrink', 'POST', formData, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log(res);
        })
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

    showDrinkItem = (drinks) => {

        let result = null;
        if (drinks.length > 0) {
            result = drinks.map((drink, index) => {
            return (
                <DrinkItem 
                    key={index}
                    drink = {drink}
                    index = {index}
                    onGetIdDrink = { () => this.onGetIdDrink(drink.drink_id)}
                />
            )
        })
        }
        return result;
    }

     render() {
        var { drinks, positions } = this.props
        console.log('lấy hình avt',`${Config.API_URL}/uploads/imgDrink/${this.state.txtAvatarUpload}`)
        console.log(this.props)
        console.log(drinks, positions)
        var { txtDrinkPrice, txtDrinkAvatar, txtAvatarUpload,   txtDrinkName} = this.state;

        return (
            <DrinkList> 
                { this.showDrinkItem(drinks)}
            </DrinkList>
        )
    }
}

const mapStateToProps = state => {
    return {
        //users: state.users,
        //systems: state.systems,
        drinks: state.drinks,
        positions: state.positions
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllSystem: (system) => {
            dispatch(actFetchSystemRequest(system))
        },
        fetchAllDrinks: (drink) => {
            dispatch(actFetchAccountRequest(drink))
        },
        onAddDrink: (drink) => {
            dispatch(actAddDrinkResquest(drink))
        },
        onUpdateDrink: (drink) => {
            dispatch(actUpdateDrinkResquest(drink))
        },
        fetchAllDrink: () => {
            dispatch(actFetchDrinkRequest());
        },
        fetchPosition: () => {
            dispatch(actFetchPositionRequest());
        },
        onAddDrink: (drink) => {
            dispatch(actAddDrinkResquest(drink))
        },
        onUpdateDrink: (drink) => {
            dispatch(actUpdateDrinkResquest(drink))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinkContainer);