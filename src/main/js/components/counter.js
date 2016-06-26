import React, { Component, PropTypes } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { currentValue, onIncrement, onDecrement } = this.props
        return (
            <div>
                <h1>
                    Simple Counter Made with React and Redux
                </h1>
                <hr></hr>
                <button onClick={onIncrement}>
                    INCREASE
                </button>
                <p> {currentValue} </p>
                <button onClick={onDecrement}>
                    DECREASE
                </button>
            </div>
        )
    }

}

Counter.propTypes = {
    currentValue: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter
