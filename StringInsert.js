function processString(str) {
    const res = str.split(" ").map((word, i) => {
        word = word.slice(1, word.length) + word[0];
        return word += 'w'.repeat(i + 1);
    });
    console.log(res.join(" "));
}

processString("I speak tamil language");