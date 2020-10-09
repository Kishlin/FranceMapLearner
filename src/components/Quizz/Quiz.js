import React from "react";
import PropTypes from 'prop-types';

import {moveOnToNextQuestion} from "../../helpers/moveOnToNextQuestion";
import Game from "../Game/Game";

function Quiz(props) {
    return <Game {...props} moveOnToNextStep={moveOnToNextQuestion} />;
}

Quiz.propTypes = {
    renderConfiguration: PropTypes.func.isRequired,
    renderGame: PropTypes.func.isRequired,
};

export default Quiz;
