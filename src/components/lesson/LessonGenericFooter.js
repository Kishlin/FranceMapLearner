import React from "react";
import PropTypes from "prop-types";

import { STEP_INDICATION, STEP_PROMPT } from "../../constants/LessonSteps";
import CountdownProgressBar from "../progress/CountdownProgressBar";
import PrimaryButton from "../button/PrimaryButton";

const LessonGenericFooter = function (props) {
    const getContent = function(props) {
        if (STEP_INDICATION === props.game.step) {
            return <PrimaryButton handler={props.moveOnToNextStep} text={"OK"}/>;
        } else if (STEP_PROMPT === props.game.step) {
            return <CountdownProgressBar
                key={props.game.current.id}
                onFinished={props.onAnswer}
                answerTime={props.answerTime}
            />
        }

        return <noscript />;
    }

    return <div style={{height: '50px', marginTop: '10px'}}>
        {getContent(props)}
    </div>;
}

LessonGenericFooter.propTypes = {
    answerTime: PropTypes.number.isRequired,
    onAnswer: PropTypes.func.isRequired,
    game: PropTypes.object.isRequired,
}

export default LessonGenericFooter;
