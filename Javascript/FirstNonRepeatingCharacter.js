function firstNonRepeatingCharacter(word) {
    const charFrequency = {};
    let result;
    for (const char of word.split("")) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
    for (const [char, count] of Object.entries(charFrequency)) {
        if (count === 1) {
            result = char;
            break;
        }
    }
    console.log(result ? result : "No repeating character found");
}

firstNonRepeatingCharacter("labbccddeerrhhyy");