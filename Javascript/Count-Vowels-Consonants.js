countVowels("hello");

function countVowels(words) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = words.split('').reduce((acc, currentValue) => {
        if (vowels.includes(currentValue)) acc.vowels++;
        else acc.consonants++;
        return acc;
    }, {
        vowels: 0,
        consonants: 0,
    });
    console.log(result);
}