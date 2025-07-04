/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    let answer = [];
    let hasStarted = false;
    let isNegative = false;

    s = s.trim();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (!hasStarted && (char === '-' || char === '+')) {
            isNegative = (char === '-');
            hasStarted = true;
            continue;
        }

        if (char >= '0' && char <= '9') {
            hasStarted = true;
            answer.push(char);
        } else {
            break;
        }
    }

    if (answer.length === 0) return 0;

    let num = Number(answer.join(''));
    if (isNegative) num *= -1;

    if (num < INT_MIN) return INT_MIN;
    if (num > INT_MAX) return INT_MAX;

    return num;
};