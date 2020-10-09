import {STEP_INDICATION, STEP_PROMPT} from "../constants/GameSteps";
import {shuffle} from "./shuffle";

export function moveOnToNextLessonStep(prevState) {
    if (STEP_INDICATION === prevState.game.step) {
        if (prevState.game.configuration.indicationCountPerSet === prevState.phaseCount || 0 === prevState.entities.length) { // move on to prompt mode
            const known = shuffle(prevState.known);
            return { phaseCount: 1, known, game: { ...prevState.game, step: STEP_PROMPT, current: known[0] } };
        } else { // next indication
            const { known, phaseCount, entities } = prevState;
            const nextEntities = [...entities], current = nextEntities.shift(), nextKnown = [...known, current];
            return { phaseCount: phaseCount + 1, entities: nextEntities, known: nextKnown, game: { ...prevState.game, current } };
        }
    } else {
        if (prevState.known.length > prevState.phaseCount) { // next question
            const phaseCount = 1 + prevState.phaseCount;
            return { phaseCount, game: { ...prevState.game, step: STEP_PROMPT, current: prevState.known[phaseCount - 1] } };
        } else if (0 === prevState.entities.length) { // Lesson finished
            return { finished: true };
        } else { // move on to indication mode
            const nextState = { phaseCount: 0, game: { ...prevState.game, step: STEP_INDICATION } };
            if (false === prevState.game.configuration.askAgainKnown) {
                nextState.known = [];
            }

            return moveOnToNextLessonStep({ ...prevState, ...nextState });
        }
    }
}
