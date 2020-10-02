import React from "react";
import PropTypes from 'prop-types';

import {moveOnToNextLessonStep} from "../../helpers/moveOnToNextLessonStep";
import Entity from "../../lib/Entity";
import Game from "../game/Game";

function Lesson(props) {
    return <Game {...props} moveOnToNextStep={moveOnToNextLessonStep} />;
}

Lesson.propTypes = {
    entities: PropTypes.arrayOf(PropTypes.instanceOf(Entity)).isRequired,
    renderConfiguration: PropTypes.func.isRequired,
    renderGame: PropTypes.func.isRequired,
};

export default Lesson;
