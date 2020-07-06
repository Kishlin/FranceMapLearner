import React from "react";
import PropTypes from "prop-types";

import { STEP_INDICATION } from "../../constants/GameSteps";
import Entity from "../../lib/Entity";

const LessonLocationHeader = function(props) {
    if (undefined === props.game.current) {
        return <noscript />;
    }

    return <header className="unselectable">
        {
            STEP_INDICATION === props.game.step ?
                <p>This is: {props.game.current.name}</p> :
                <p>Can you find {props.game.current.name}?</p>
        }
        <p>Score: {props.game.stats.score}/{props.game.stats.max}</p>
    </header>;
}

LessonLocationHeader.propTypes = {
    game: PropTypes.object.isRequired,
    current: PropTypes.instanceOf(Entity),
};

export default LessonLocationHeader;
