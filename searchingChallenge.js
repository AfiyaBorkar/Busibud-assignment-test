function SearchingChallenge(strArr) {
    const rows = strArr.length;
    const cols = strArr[0].length;

    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    let holesCount = 0;

    function dfs(i, j) {
        if (i < 0 || i >= rows || j < 0 || j >= cols || strArr[i][j] !== '0' || visited[i][j]) {
            return;
        }

        visited[i][j] = true;

        dfs(i - 1, j); 
        dfs(i + 1, j); 
        dfs(i, j - 1); 
        dfs(i, j + 1); 
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (strArr[i][j] === '0' && !visited[i][j]) {
                holesCount++;
                dfs(i, j);
            }
        }
    }

    return holesCount;
}

// Examples
console.log(SearchingChallenge(["01111", "01101", "00011", "11110"])); // Output: 3
console.log(SearchingChallenge(["1011", "0010"])); // Output: 2
