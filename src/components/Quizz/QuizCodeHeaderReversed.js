import React from "react";
import PropTypes from "prop-types";

const QuizCodeHeaderReversed = function(props) {
    return <header className="unselectable">
        <p>What department has a code of {props.game.current.id}?</p>
        <p>Score: {props.stats.score}/{props.stats.max}</p>
    </header>;
}

QuizCodeHeaderReversed.propTypes = {
    stats: PropTypes.object.isRequired,
    game: PropTypes.object.isRequired,
};

export default QuizCodeHeaderReversed;
