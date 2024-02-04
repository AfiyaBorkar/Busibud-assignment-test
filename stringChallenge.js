function StringChallenge(st) {
    let maxUniqueChars = 0;

    for (let i = 0; i < st.length; i++) {
        for (let j = i + 1; j < st.length; j++) {
            if (st[i] === st[j]) {
                const substring = st.substring(i + 1, j);
                const uniqueChars = new Set(substring).size;
                maxUniqueChars = Math.max(maxUniqueChars, uniqueChars);
            }
        }
    }

    return maxUniqueChars;
}


console.log(StringChallenge("mmmerme"));  // Output: 3
console.log(StringChallenge("abccdefghi"));  // Output: 0
