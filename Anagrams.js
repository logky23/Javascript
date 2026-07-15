function groupAnagrams(args) {
    const map = new Map();
    for (const word of args) {
        const key = word.split("").sort().join("");
        if (map.has(key)) {
            map.get(key).push(word);
        } else {
            map.set(key, [word]);
        }
    }
    const result = Array.from(map.values());
    console.log(result);
}

const a = ["bat", "tab", "cat"];
groupAnagrams(a);