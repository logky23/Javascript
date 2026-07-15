function lastNonRepeatingCharacter(word) {
    const arr = word.split('');
    const charFrequency = {};
    for (el of arr) {
        if (!charFrequency[el]) charFrequency[el] = 1;
        else charFrequency[el] += 1;
    }
    console.log(charFrequency);
    const response = Object.entries(charFrequency).filter(([key, value]) => value === 1).map(([key]) => key );
    console.log(response.at(response.length - 1));
}

lastNonRepeatingCharacter("swiss");