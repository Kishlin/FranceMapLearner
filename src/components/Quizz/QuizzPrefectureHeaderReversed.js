import React from "react";
import PropTypes from "prop-types";

const QuizPrefectureHeaderReversed = function(props) {
    return <header className="unselectable">
        <p>What department has for prefecture {props.game.current.hometown}?</p>
        <p>Score: {props.stats.score}/{props.stats.max}</p>
    </header>;
}

QuizPrefectureHeaderReversed.propTypes = {
    stats: PropTypes.object.isRequired,
    game: PropTypes.object.isRequired,
};

export default QuizPrefectureHeaderReversed;
