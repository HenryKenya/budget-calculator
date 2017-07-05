import React from 'react';
import Budget from './Budget';
class Total extends React.Component {
    // initial state of total
    constructor() {
        super();
        this.state = {
            total: 0
        }
        this.addTotal = this.addTotal.bind(this)
    }

    // function to handle the change in state of total
    addTotal(price) {
        this.setState({
            total: this.state.total + price
        })

    }

    render() {
        var self = this;
        var budget = this.props.items.map(function (s) {
            return (
                <Budget
                    name={s.name}
                    price={s.price}
                    active={s.active}
                    addTotal={self.addTotal}
                    key={s.name} />
            )
        })
        return (

            <div className='total'>
                <h4>Budget</h4>
                {budget}
                <p className='total-text'>Total: Ksh. {this.state.total}</p>
            </div>
        );

    }
};
export default Total;
