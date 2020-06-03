import React, {Component} from "react";
import NavBar from "./Navbar";
import Counters from "./Counters";

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 6},
            {id: 4, value: 0},
            {id: 5, value: 0},
        ],
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    };

    handleReset = () => {
        const newCounters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({newCounters});
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    };
    render() {
        return (
            <React.Fragment>
                <NavBar
                    totalCounters={
                        this.state.counters.filter(c => c.value > 0).length
                    }
                />
                <div className="main container">
                    <Counters
                        counters={this.state.counters}
                        onIncrement={this.handleIncrement}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
