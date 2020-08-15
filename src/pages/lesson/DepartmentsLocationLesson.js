import React from "react";
import PropTypes from "prop-types";

import { ANSWER_TIME_IN_SECONDS, ASK_AGAIN_KNOWN_IN_LESSON, REGIONS_INDICATIONS_COUNT } from "../../constants/Config";
import DepartmentLocationLessonConfigurator from "../configurator/DepartmentLocationLessonConfigurator";
import LessonLocationHeader from "../../components/lesson/LessonLocationHeader";
import LessonGenericFooter from "../../components/lesson/LessonGenericFooter";
import ScoreScreen from "../../components/ScoreScreen/ScoreScreen";
import MapDepartments from "../../components/maps/MapDepartments";
import Loading from "../../components/loading/Loading";
import Lesson from "../../components/lesson/Lesson";
import { shuffle } from "../../helpers";

class DepartmentsLocationLesson extends React.Component {
    constructor(props) {
        super(props);

        this.state = { regions: [], departments: [], configured: false, finished: false };

        this.onConfigurationSubmit = this.onConfigurationSubmit.bind(this);
        this.onLessonFinished = this.onLessonFinished.bind(this);
    }

    componentDidMount() {
        const regions = import("../../data/Regions");
        const departments = import("../../data/Departments");

        Promise.all([regions, departments])
            .then(values => this.setState({ regions: values[0].default, departments: values[1].default }))
        ;
    }

    onConfigurationSubmit(indicationCountPerSet, askAgainKnown, answerTime, regionSelect) {
        const entities = shuffle(this.state.departments.filter(department => regionSelect[department.region]));
        this.setState({ indicationCountPerSet, askAgainKnown, answerTime, entities, configured: true });
    }

    onLessonFinished(stats) {
        this.setState({ stats, finished: true });
    }

    renderLesson(game, moveOnToNextStep, onAnswer, answerTime) {
        return <>
            <LessonLocationHeader game={game} />
            <MapDepartments game={game} onDepartmentClick={onAnswer} />
            <LessonGenericFooter game={game} moveOnToNextStep={moveOnToNextStep} onAnswer={onAnswer} answerTime={answerTime} />
        </>;
    }

    render() {
        if (0 === this.state.regions.length || 0 === this.state.departments.length) {
            return (<Loading />);
        }

        if (false === this.state.configured) {
            return <DepartmentLocationLessonConfigurator
                onSubmit={this.onConfigurationSubmit}
                regions={this.state.regions}
                {...this.props}
            />;
        }

        if (true === this.state.finished) {
            return <ScoreScreen stats={this.state.stats} />
        }

        return  (
            <Lesson {...this.state} renderLesson={this.renderLesson} onLessonFinished={this.onLessonFinished} />
        );
    }

}

DepartmentsLocationLesson.propTypes = {
    indicationCountPerSet: PropTypes.number.isRequired,
    askAgainKnown: PropTypes.bool.isRequired,
    answerTime: PropTypes.number.isRequired,
};

DepartmentsLocationLesson.defaultProps = {
    indicationCountPerSet: REGIONS_INDICATIONS_COUNT,
    askAgainKnown: ASK_AGAIN_KNOWN_IN_LESSON,
    answerTime: ANSWER_TIME_IN_SECONDS,
}

export default DepartmentsLocationLesson;
