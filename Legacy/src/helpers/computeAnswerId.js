export function computeAnswerId(current, value) {
    const formattedValue = isNaN(value) ? value.toLowerCase() : value;
    const formattedExpected = isNaN(current.id) ? current.id.toLowerCase() : current.id;

    const isRight = formattedValue === formattedExpected;

    return { given: value, expected: current.id, isRight };
}
