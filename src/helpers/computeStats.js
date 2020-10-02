export function computeStats(stats, expected, isRight) {
    const { score, max, table } = stats;

    return {
        table: {
            ...table,
            [expected]: {
                ...table[expected],
                prompted: table[expected].prompted + 1,
                gotRight: isRight ? table[expected].gotRight + 1 : table[expected].gotRight,
            },
        },
        max: max + 1,
        score: isRight ? score + 1 : score,
    };
}
