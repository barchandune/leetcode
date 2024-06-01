/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    // let temp = 0;
    // const charValue = s.split("");

    // for (i = 0; i < charValue.length - 1; i++) {
    //     temp = temp + Math.abs(charValue[i].charCodeAt(0) - charValue[i + 1].charCodeAt(0))
    // }
    // return temp;

    return s.split("").reduce((temp, char, i, arr) =>
        i < arr.length - 1 ? temp + Math.abs(char.charCodeAt(0) - arr[i + 1].charCodeAt(0)) : temp, 0);

};
