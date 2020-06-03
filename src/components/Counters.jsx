import React, {Component} from "react";
import Counter from "./Counter";
class Counters extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="reset-button-area">
                                <button
                                    onClick={this.props.onReset}
                                    className="btn btn-primary mb-2 mt-2"
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="counters">
                    {this.props.counters.map(counter => (
                        <Counter
                            key={counter.id}
                            onDelete={this.props.onDelete}
                            onIncrement={this.props.onIncrement}
                            counter={counter}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default Counters;
