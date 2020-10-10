import React from "react";
import PropTypes from "prop-types";

import { STEP_INDICATION } from "../../constants/GameSteps";

const LessonCodeHeader = function(props) {
    const headerText = STEP_INDICATION === props.game.step ?
        <p>The code of {props.game.current.name} is: {props.game.current.id}</p> :
        <p>What is the code of {props.game.current.name}?</p>;

    return (
        <header className="unselectable">
            {headerText}
            <p>Score: {props.stats.score}/{props.stats.max}</p>
        </header>
    );
}

LessonCodeHeader.propTypes = {
    stats: PropTypes.object.isRequired,
    game: PropTypes.object.isRequired,
};

export default LessonCodeHeader;
