import React, { Component } from 'react';
import { connect } from "react-redux";
import DrinksCartCustomer from '../Components/InvoiceCustomer/DrinksCartCustomer';
import { actFetchDrinkRequestCustomer, actAddToCartCustomer } from "../Actions/index";
import DrinkCartCustomer from '../Components/InvoiceCustomer/DrinkCartCustomer';
import PropTypes from "prop-types";

class DrinkCartContainerCustomer extends Component {

    componentDidMount() {
        this.props.fetchAllDrink(1);
    }

    showDrinks(drinks) {
        var result = null
        var { onAddToCart } = this.props; 
        if (drinks.length > 0) {
            result = drinks.map((drink, index) => {
                return <DrinkCartCustomer
                            key={index}
                            drink={drink}
                            onAddToCart={onAddToCart}
                />
            })
        }
        return result
    }

    render() {
        var { drinks } = this.props
        return (
            <DrinksCartCustomer> 
                { this.showDrinks(drinks)}
            </DrinksCartCustomer>
        );
    }
}

DrinkCartContainerCustomer.propTypes = {
    drinks: PropTypes.arrayOf(
        PropTypes.shape({
            drink_avatar : PropTypes.string.isRequired,
            drink_id : PropTypes.number.isRequired,
            drink_name : PropTypes.string.isRequired,
            drink_price : PropTypes.string.isRequired,
            drink_shop_id : PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        drinks: state.drinks
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllDrink: (id) => {
            dispatch(actFetchDrinkRequestCustomer(id));
        },
        onAddToCart: (drink) => {
            dispatch(actAddToCartCustomer(drink, 1))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkCartContainerCustomer);