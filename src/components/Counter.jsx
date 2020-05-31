import React, {Component} from "react";

class Counter extends Component {
    state = {
        count: 0,
        tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
    };
    render() {
        return (
            <React.Fragment>
                <div className="standard-section mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="counter-area">
                                    <span className={this.getBadgeClasses()}>
                                        {this.formatCount()}
                                    </span>
                                    <button className="btn btn-primary">
                                        Increment
                                    </button>
                                    <ul className="list-group mt-5">
                                        {this.state.tags.map(tag => (
                                            <li
                                                key={tag}
                                                className="list-group-item"
                                            >
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
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
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
