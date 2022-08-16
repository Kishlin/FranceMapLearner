export default function computeMapItemClass(game: undefined, id: string|number, prefix: string = '') {
    return `${prefix ? `${prefix} ` : ''}map-item-blank`;
}
