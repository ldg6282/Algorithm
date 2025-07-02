/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const arr = new Set();
    
    for (let i = 0; i < sentence.length; i++) {
        arr.add(sentence[i]);
        console.log(arr)
    }

    return arr.size === 26
};