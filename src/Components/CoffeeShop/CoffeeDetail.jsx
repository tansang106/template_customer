import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';


class CoffeeDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    onClick = (isChecked) => {
        this.setState({
            isChecked: isChecked
        })
    }
    

    render() {
        var { match } = this.props;
        var name = match.params.slug;
        var { isChecked } = this.state
        return (
            <div>
                Detail {name} <br/>
                <button type="button" className="btn btn-info" onClick={() => this.onClick(false)}>Allow</button> <br/>
                <button type="button" className="btn btn-danger" onClick={() => this.onClick(true)}>Denied</button>
                <Prompt
                    when={isChecked}
                    message={location => (`You want access ${location.pathname}`)}
                />
            </div>
        );
    }
}

export default CoffeeDetail;