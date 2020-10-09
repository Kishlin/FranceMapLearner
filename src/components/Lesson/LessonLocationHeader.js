import React from "react";
import PropTypes from "prop-types";

import { STEP_INDICATION } from "../../constants/GameSteps";

const LessonLocationHeader = function(props) {
    const headerText = STEP_INDICATION === props.game.step ?
        <p>This is: {props.game.current.name}</p> :
        <p>Can you find {props.game.current.name}?</p>;

    return <header className="unselectable">
        {headerText}
        <p>Score: {props.stats.score}/{props.stats.max}</p>
    </header>;
}

LessonLocationHeader.propTypes = {
    game: PropTypes.object.isRequired,
    stats: PropTypes.object.isRequired,
};

export default LessonLocationHeader;
