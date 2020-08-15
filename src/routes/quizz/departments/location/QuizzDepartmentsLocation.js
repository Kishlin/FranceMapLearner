import React from "react";
import PropTypes from "prop-types";

import DepartmentLocationQuizzConfigurator from "../../../../components/configurator/DepartmentLocationQuizzConfigurator";
import { ANSWER_TIME_IN_SECONDS, LOOP_COUNT_PER_QUIZZ } from "../../../../constants/Config";
import QuizLocationHeader from "../../../../components/quizz/QuizLocationHeader";
import QuizGenericFooter from "../../../../components/quizz/QuizGenericFooter";
import ScoreScreen from "../../../../components/ScoreScreen/ScoreScreen";
import MapDepartments from "../../../../components/maps/MapDepartments";
import Loading from "../../../../components/loading/Loading";
import Quiz from "../../../../components/quizz/Quiz";
import { shuffle } from "../../../../helpers";

class QuizDepartmentsLocation extends React.Component {
    constructor(props) {
        super(props);

        this.state = { regions: [], departments: [], configured: false, finished: false };

        this.onConfigurationSubmit = this.onConfigurationSubmit.bind(this);
        this.onLessonFinished = this.onLessonFinished.bind(this);
    }

    componentDidMount() {
        const regions = import("../../../../data/Regions");
        const departments = import("../../../../data/Departments");

        Promise.all([regions, departments])
            .then(values => this.setState({ regions: values[0].default, departments: values[1].default }))
        ;
    }

    onConfigurationSubmit(loopCount, answerTime, regionSelect) {
        const entities = shuffle(this.state.departments.filter(department => regionSelect[department.region]));
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
        if (0 === this.state.regions.length || 0 === this.state.departments.length) {
            return (<Loading />);
        }

        if (false === this.state.configured) {
            return <DepartmentLocationQuizzConfigurator
                onSubmit={this.onConfigurationSubmit}
                regions={this.state.regions}
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

QuizDepartmentsLocation.propTypes = {
    answerTime: PropTypes.number.isRequired,
    loopCount: PropTypes.number.isRequired,
};

QuizDepartmentsLocation.defaultProps = {
    answerTime: ANSWER_TIME_IN_SECONDS,
    loopCount: LOOP_COUNT_PER_QUIZZ,
}

export default QuizDepartmentsLocation;
