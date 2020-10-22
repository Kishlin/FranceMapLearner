export function computeAnswerPrefecture(current, value) {
    const formattedValue = undefined !== value ?
        value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f\s\t\-']/g, "") :
        value
    ;

    const isRight = formattedValue === current.hometownSlug;

    return { given: value, expected: current.hometown, isRight };
}
