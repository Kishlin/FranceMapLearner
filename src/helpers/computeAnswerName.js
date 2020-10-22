export function computeAnswerName(current, value) {
    const formattedValue = undefined !== value ?
        value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f\s\t\-']/g, "") :
        value
    ;

    const isRight = formattedValue === current.nameSlug;

    return { given: value, expected: current.name, isRight };
}
