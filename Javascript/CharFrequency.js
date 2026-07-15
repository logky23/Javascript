function charFrequency(word) {
    const result = word.split("").reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
    console.log(result);
};

charFrequency("banana");
