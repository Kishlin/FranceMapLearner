export function computeAnswerPrefecture(current, value) {
    const formattedValue = value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f\s\t]/g, "")
    ;

    const isRight = formattedValue === current.slug;

    return { given: value, expected: current.hometown, isRight };
}
