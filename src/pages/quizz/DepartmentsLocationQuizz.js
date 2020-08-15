import React from "react";
import PropTypes from "prop-types";

import DepartmentLocationQuizzConfigurator from "../configurator/DepartmentLocationQuizzConfigurator";
import { ANSWER_TIME_IN_SECONDS, LOOP_COUNT_PER_QUIZZ } from "../../constants/Config";
import QuizLocationHeader from "../../components/quizz/QuizLocationHeader";
import QuizGenericFooter from "../../components/quizz/QuizGenericFooter";
import ScoreScreen from "../../components/ScoreScreen/ScoreScreen";
import MapDepartments from "../../components/maps/MapDepartments";
import Quiz from "../../components/quizz/Quiz";
import Department from "../../lib/Department";
import { shuffle } from "../../helpers";
import Region from "../../lib/Region";

class DepartmentsLocationQuiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = { configured: false, finished: false };

        this.onConfigurationSubmit = this.onConfigurationSubmit.bind(this);
        this.onLessonFinished = this.onLessonFinished.bind(this);
    }

    onConfigurationSubmit(loopCount, answerTime, regionSelect) {
        const entities = shuffle(this.props.departments.filter(department => regionSelect[department.region]));
        this.setState({ loopCount, answerTime, entities, configured: true });
    }

    onLessonFinished(stats) {
        this.setState({ stats, finished: true });
    }

    renderLesson(game, moveOnToNextStep, onAnswer, answerTime) {
        return <>
            <QuizLocationHeader game={game} />
            <MapDepartments game={game} onDepartmentClick={onAnswer} />
            <QuizGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} answerTime={answerTime} />
        </>;
    }

    render() {
        if (false === this.state.configured) {
            return <DepartmentLocationQuizzConfigurator
                onSubmit={this.onConfigurationSubmit}
                regions={this.props.regions}
                {...this.props}
            />
        }

        if (true === this.state.finished) {
            return <ScoreScreen stats={this.state.stats} />
        }

        return  (
            <Quiz {...this.state} renderLesson={this.renderLesson} onQuizFinished={this.onLessonFinished} />
        );
    }
}

DepartmentsLocationQuiz.propTypes = {
    departments: PropTypes.arrayOf(PropTypes.instanceOf(Department)).isRequired,
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
    answerTime: PropTypes.number.isRequired,
    loopCount: PropTypes.number.isRequired,
};

DepartmentsLocationQuiz.defaultProps = {
    answerTime: ANSWER_TIME_IN_SECONDS,
    loopCount: LOOP_COUNT_PER_QUIZZ,
}

export default DepartmentsLocationQuiz;
