import React, { Component } from 'react';
import { connect } from "react-redux";
import DrinksCart from '../Components/Invoice/DrinksCart';
import { actFetchDrinkRequest, actAddToCart } from "../Actions/index";
import DrinkCart from '../Components/Invoice/DrinkCart';
import PropTypes from "prop-types";

class DrinkCartContainer extends Component {

    componentDidMount() {
        this.props.fetchAllDrink();
    }

    showDrinks(drinks) {
        var result = null
        var { onAddToCart } = this.props; 
        if (drinks.length > 0) {
            result = drinks.map((drink, index) => {
                return <DrinkCart
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
            <DrinksCart> 
                { this.showDrinks(drinks)}
            </DrinksCart>
        );
    }
}

DrinkCartContainer.propTypes = {
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
        fetchAllDrink: () => {
            dispatch(actFetchDrinkRequest());
        },
        onAddToCart: (drink) => {
            dispatch(actAddToCart(drink, 1))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkCartContainer);