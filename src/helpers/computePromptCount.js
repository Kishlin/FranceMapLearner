export function computePromptCount(askAgainKnown, indicationCountPerSet, max) {
    if (false === askAgainKnown) {
        return max;
    }

    let sum = max;
    for(let i = indicationCountPerSet; i < max; i += indicationCountPerSet) {
        sum += i;
    }

    return sum;
}
