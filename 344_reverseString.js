/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    const temp = s.length;

    for (i = 0; i < temp / 2; i++) {
        let tempChar = s[i];
        s[i] = s[temp - 1 - i];
        s[temp - 1 - i] = tempChar
    }
};
