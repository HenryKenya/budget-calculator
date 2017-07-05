import React, { Component } from 'react';


class Budget extends Component {
    // initial state of active
    constructor() {
        super();
        this.state = {
            active: false
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    // function to handle change in state of active
    clickHandler() {
        var active = !this.state.active;
        this.setState({ active: active });
        this.props.addTotal(active ? this.props.price : -this.props.price)
    }
    render() {
        return (
            <div className='budget'>
                <p className={this.state.active ? 'active' : ''} onClick={this.clickHandler}>
                    {this.props.name} <b>Ksh. {this.props.price.toFixed(1)}</b>
                </p>
            </div>
        );
    }
}
export default Budget;