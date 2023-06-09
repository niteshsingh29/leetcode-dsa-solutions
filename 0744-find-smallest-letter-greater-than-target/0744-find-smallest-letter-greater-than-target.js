/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = (letters, target) => {
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].charCodeAt() > target.charCodeAt()) {
            return letters[i];
        }
    }
    return letters[0];
};