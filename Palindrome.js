function isPanlindrome(word) {
    const length = word.length;
    for (let i = 0; i < (length/2); i++) {
        if (word[i] !== word[(length - 1) - i]) {
            return false;
        }
    }
    return true;
};
 
const result = isPanlindrome("madam");
console.log(result ? 'Palindrome' : 'Not a palindrome');
