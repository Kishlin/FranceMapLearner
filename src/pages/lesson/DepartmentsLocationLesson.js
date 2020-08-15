import React from "react";
import PropTypes from "prop-types";

import { ANSWER_TIME_IN_SECONDS, ASK_AGAIN_KNOWN_IN_LESSON, REGIONS_INDICATIONS_COUNT } from "../../constants/Config";
import DepartmentLocationLessonConfigurator from "../configurator/DepartmentLocationLessonConfigurator";
import LessonLocationHeader from "../../components/lesson/LessonLocationHeader";
import LessonGenericFooter from "../../components/lesson/LessonGenericFooter";
import ScoreScreen from "../../components/ScoreScreen/ScoreScreen";
import MapDepartments from "../../components/maps/MapDepartments";
import Lesson from "../../components/lesson/Lesson";
import Department from "../../lib/Department";
import { shuffle } from "../../helpers";
import Region from "../../lib/Region";

class DepartmentsLocationLesson extends React.Component {
    constructor(props) {
        super(props);

        this.state = { configured: false, finished: false };

        this.onConfigurationSubmit = this.onConfigurationSubmit.bind(this);
        this.onLessonFinished = this.onLessonFinished.bind(this);
    }

    onConfigurationSubmit(indicationCountPerSet, askAgainKnown, answerTime, regionSelect) {
        const entities = shuffle(this.props.departments.filter(department => regionSelect[department.region]));
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
        if (false === this.state.configured) {
            return <DepartmentLocationLessonConfigurator
                onSubmit={this.onConfigurationSubmit}
                regions={this.props.regions}
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
    departments: PropTypes.arrayOf(PropTypes.instanceOf(Department)).isRequired,
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
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
