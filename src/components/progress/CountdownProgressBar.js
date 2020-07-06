import React from "react";
import PropTypes from "prop-types";

import "./CountdownProgressBar.css";

class CountdownProgressBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { style: { animationDuration: this.props.answerTime + 's' } };
        this.timeoutId = undefined;
    }

    componentDidMount() {
        this.timeoutId = setTimeout(this.props.onFinished,this.props.answerTime * 1000);
    }

    componentWillUnmount() {
        if (undefined !== this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    render() {
        return (
            <div id="progress">
                <div id="progress-background">
                    <div id="progress-fill" style={this.state.style} />
                </div>
            </div>
        );
    }
}

CountdownProgressBar.propTypes = {
    answerTime: PropTypes.number.isRequired,
    onFinished: PropTypes.func.isRequired,
};

export default CountdownProgressBar;
