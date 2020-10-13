import React from "react";
import PropTypes from "prop-types";

import { STEP_INDICATION } from "../../constants/GameSteps";

const LessonPrefectureHeader = function(props) {
    const headerText = STEP_INDICATION === props.game.step ?
        <p>The prefecture of {props.game.current.name} is: {props.game.current.hometown}</p> :
        <p>What is the prefecture of {props.game.current.name}?</p>;

    return (
        <header className="unselectable">
            {headerText}
            <p>Score: {props.stats.score}/{props.stats.max}</p>
        </header>
    );
}

LessonPrefectureHeader.propTypes = {
    stats: PropTypes.object.isRequired,
    game: PropTypes.object.isRequired,
};

export default LessonPrefectureHeader;
