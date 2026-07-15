function reverseWordsInTheSentence(sentence) {
    const splittedWords = sentence.split(' ');
    const sentenceLength = splittedWords.length;
    const result = [];
    for (let i = 0; i < sentenceLength; i++) {
        const word = [];
        for (let j = 0; j < splittedWords[i].length; j++) {
            word.push(splittedWords[i][(splittedWords[i].length - 1) - j])
        }
        const res = word.join('').toString();
        result.push(res);
    }
    const res = result.join(' ');
    console.log(res);
    
}

reverseWordsInTheSentence("Hello world!");