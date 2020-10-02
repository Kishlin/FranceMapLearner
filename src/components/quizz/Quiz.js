import React from "react";
import PropTypes from 'prop-types';

import {moveOnToNextQuestion} from "../../helpers/moveOnToNextQuestion";
import Entity from "../../lib/Entity";
import Game from "../game/Game";

function Quiz(props) {
    return <Game {...props} moveOnToNextStep={moveOnToNextQuestion} />;
}

Quiz.propTypes = {
    entities: PropTypes.arrayOf(PropTypes.instanceOf(Entity)).isRequired,
    renderConfiguration: PropTypes.func.isRequired,
    renderGame: PropTypes.func.isRequired,
};

export default Quiz;
