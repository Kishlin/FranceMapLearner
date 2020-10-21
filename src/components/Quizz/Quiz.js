import React from "react";
import PropTypes from 'prop-types';

import { moveOnToNextQuestion, computeAnswerId } from "../../helpers";
import Game from "../Game/Game";

function Quiz(props) {
    return <Game {...props} moveOnToNextStep={moveOnToNextQuestion} />;
}

Quiz.propTypes = {
    renderConfiguration: PropTypes.func.isRequired,
    computeAnswer: PropTypes.func.isRequired,
    renderGame: PropTypes.func.isRequired,
};

Quiz.defaultProps = {
    computeAnswer: computeAnswerId,
};

export default Quiz;
