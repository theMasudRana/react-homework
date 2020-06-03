import React, {Component} from "react";

class Counter extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="standard-section mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="counter-area">
                                    <span className={this.getBadgeClasses()}>
                                        {this.formatCount()}
                                    </span>
                                    <button
                                        onClick={() =>
                                            this.props.onIncrement(
                                                this.props.counter
                                            )
                                        }
                                        className="btn btn-primary"
                                    >
                                        Increment
                                    </button>
                                    <button
                                        onClick={() =>
                                            this.props.onDelete(
                                                this.props.counter.id
                                            )
                                        }
                                        className="btn btn-danger ml-2"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;
