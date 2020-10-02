import React from "react";
import PropTypes from "prop-types";

const QuizLocationHeader = function(props) {
    return <header className="unselectable">
        <p>Can you find {props.game.current.name}?</p>
        <p>Score: {props.stats.score}/{props.stats.max}</p>
    </header>;
}

QuizLocationHeader.propTypes = {
    game: PropTypes.object.isRequired,
    stats: PropTypes.object.isRequired,
};

export default QuizLocationHeader;
