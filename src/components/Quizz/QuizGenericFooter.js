import React from "react";
import PropTypes from "prop-types";

import CountdownProgressBar from "../Progress/CountdownProgressBar";
import { STEP_PROMPT } from "../../constants/GameSteps";

const QuizGenericFooter = function (props) {
    const getContent = function(props) {
        if (STEP_PROMPT === props.game.step) {
            return <CountdownProgressBar
                key={props.game.current.id}
                onFinished={props.onAnswer}
                answerTime={props.game.configuration.answerTime}
            />
        }

        return <noscript />;
    }

    return <div style={{height: '50px', marginTop: '10px'}}>
        {getContent(props)}
    </div>;
}

QuizGenericFooter.propTypes = {
    moveOnToNextStep: PropTypes.func.isRequired,
    onAnswer: PropTypes.func.isRequired,
    game: PropTypes.object.isRequired,
}

export default QuizGenericFooter;
