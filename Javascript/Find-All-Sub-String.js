function substrings(letters) {
    const n = letters.length;
    const collection = new Set();
    for (let end = 1; end <= n; end++) {
        for (let i =0; i<n; i++) {
            let char = letters.substring(i, end + i);
            collection.add(char);
        }
    }
    console.log([...collection]);
}

substrings("abc");