import React from "react";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    decrementCounter = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    };

    render() {
        return (
            <div data-test="component-app">
                <h2 data-test="app-counter">The counter is currently {this.state.counter}</h2>
                {this.state.counter < 0 && <h3 style={{color: "red"}}>Counter can not be below 0</h3>}
                <button data-test="app-button" onClick={this.incrementCounter}>Increment counter</button>
                <button data-test="decrement-button" onClick={this.decrementCounter}>Decrement counter</button>
            </div>
        );
    }
}

export default App;
