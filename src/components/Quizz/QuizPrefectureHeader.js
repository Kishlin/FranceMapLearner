import React from "react";
import PropTypes from "prop-types";

const QuizPrefectureHeader = function(props) {
    return <header className="unselectable">
        <p>What is the prefecture of {props.game.current.name}?</p>
        <p>Score: {props.stats.score}/{props.stats.max}</p>
    </header>;
}

QuizPrefectureHeader.propTypes = {
    stats: PropTypes.object.isRequired,
    game: PropTypes.object.isRequired,
};

export default QuizPrefectureHeader;
