import React from "react";
import PropTypes from 'prop-types';

import { moveOnToNextLessonStep, computeAnswerId } from "../../helpers";
import Game from "../Game/Game";

function Lesson(props) {
    return <Game {...props} moveOnToNextStep={moveOnToNextLessonStep} />;
}

Lesson.propTypes = {
    renderConfiguration: PropTypes.func.isRequired,
    computeAnswer: PropTypes.func.isRequired,
    renderGame: PropTypes.func.isRequired,
};

Lesson.defaultProps = {
    computeAnswer: computeAnswerId,
};

export default Lesson;
