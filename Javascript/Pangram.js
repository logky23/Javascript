function pangram(sentence) {
    const collection = new Set();
    const arr = sentence.replaceAll(' ', '').split('');
    for (const char of arr) {
        collection.add(char.toLowerCase());
    }
    console.log(collection.size === 26);
}
pangram("The quick brown fox jumps over the lazy dog");
pangram("The");