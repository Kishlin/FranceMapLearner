import React from "react";
import PropTypes from "prop-types";

import Entity from "../../lib/Entity";

const QuizLocationHeader = function(props) {
    if (undefined === props.game.current) {
        return <noscript />;
    }

    return <header className="unselectable">
        <p>Can you find {props.game.current.name}?</p>
        <p>Score: {props.game.stats.score}/{props.game.stats.max}</p>
    </header>;
}

QuizLocationHeader.propTypes = {
    game: PropTypes.object.isRequired,
    current: PropTypes.instanceOf(Entity),
};

export default QuizLocationHeader;
