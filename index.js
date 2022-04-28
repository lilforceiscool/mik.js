/**
 * @param {Number} number
 * @returns {String} formatted number
 * @example 1234 => 1.2K
 */
 function fancy(number) {
    if (isNaN(number)) throw new TypeError('This is not a number');
    if (number <= 999) throw new TypeError('Number must be greater/equal than 1k');

    let formatted = number;
    if (number >= 10 ** 3) {
        const suffix = [`K`, `M`, `B`, `T`];
        let selector = -1;
        do {
            formatted /= 10 ** 3;
            selector++;
        } while (formatted >= 10 ** 3);
        formatted = `${parseFloat(number / 10 ** ((selector + 1) * 3)).toFixed(1)}${suffix[selector] !== undefined ? ` ${suffix[selector]}` : `e${(selector + 1) * 3}`}`;
    }
    return formatted;
};

console.log(fancy(1300))

/**
 * Gets the ordinal numeral of a number
 * @param {int} number
 */
function ordinal(number) {
    if (isNaN(number)) throw new TypeError('This is not a number');
    number = number.toString();
    if (number === '11' || number === '12' || number === '13') return number + 'th';
    if (number.endsWith(1)) return number + 'st';
    else if (number.endsWith(2)) return number + 'nd';
    else if (number.endsWith(3)) return number + 'rd';
    else return number + 'th';
}

console.log(ordinal(22))