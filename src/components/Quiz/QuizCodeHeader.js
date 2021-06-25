import React from "react";
import PropTypes from "prop-types";

const QuizCodeHeader = function(props) {
    return <header className="unselectable">
        <p>What is the code of {props.game.current.name}?</p>
        <p>Score: {props.stats.score}/{props.stats.max}</p>
    </header>;
}

QuizCodeHeader.propTypes = {
    stats: PropTypes.object.isRequired,
    game: PropTypes.object.isRequired,
};

export default QuizCodeHeader;
