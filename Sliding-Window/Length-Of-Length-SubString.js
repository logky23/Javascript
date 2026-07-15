const a = "abcabcbb";

function lengthOfLongestSubString(s) {
    const n = s.length;
    console.log(n);
    let set = new Set();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < n; right++) {
        console.log(right);
        console.log(set.has(s[right]));
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        console.log(set);
        maxLen = Math.max(maxLen, right - left + 1);
        console.log(maxLen, "maxLen");
        
    }
    return maxLen;
}

console.log(lengthOfLongestSubString(a));
