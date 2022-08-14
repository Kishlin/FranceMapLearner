import {STEP_PROMPT} from "../constants/GameSteps";
import {shuffle} from "./shuffle";

export function moveOnToNextQuestion(prevState) {
    if (undefined === prevState.loopDone) {
        return moveOnToNextQuestion({ ...prevState, phaseCount: -1, loopDone: 0 });
    } else if (prevState.game.configuration.loopCount === prevState.loopDone) { // no more loops
        return { finished: true };
    } else if (prevState.phaseCount === prevState.entities.length - 1) { // start a new loop
        const loopDone = prevState.loopDone + 1;
        const nextState = { phaseCount: -1, entities: shuffle(prevState.entities), loopDone };
        return moveOnToNextQuestion({ ...prevState, ...nextState });
    } else { // next prompt
        const phaseCount = prevState.phaseCount + 1;
        const current = prevState.entities[phaseCount];
        return { ...prevState, phaseCount, game: { ...prevState.game, step: STEP_PROMPT, current }};
    }
}
