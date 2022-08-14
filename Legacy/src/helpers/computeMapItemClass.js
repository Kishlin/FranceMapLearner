import {STEP_ANSWER, STEP_INDICATION} from "../constants/GameSteps";

export function computeMapItemClass(game, id, prefix = "") {
    if (undefined !== game) {
        if (STEP_INDICATION === game.step && game.current.id === id) {
            return (prefix ? prefix + " " : "") + "map-item-indicated";
        }

        if (STEP_ANSWER === game.step && game.answer.expected === id) {
            return (prefix ? prefix + " " : "") + "map-item-correct";
        }

        if (STEP_ANSWER === game.step && game.answer.given === id) {
            return (prefix ? prefix + " " : "") + "map-item-wrong";
        }
    }

    return (prefix ? prefix + " " : "") + "map-item-blank";
}
