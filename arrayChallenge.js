function ArrayChallenge(strArr) {
    const parent = [];
    const child = [];

    for (const pair of strArr) {
        child.push(parseInt(pair[1]));
        parent.push(parseInt(pair[3]));
    }

    const parentCounts = new Map([...new Set(parent)].map(x => [x, parent.filter(y => y === x).length]));
    for (const [key, value] of parentCounts.entries()) {
        if (value > 2) {
            return false;
        }
    }

    const childCounts = new Map([...new Set(child)].map(x => [x, child.filter(y => y === x).length]));
    for (const [key, value] of childCounts.entries()) {
        if (value > 1) {
            return false;
        }
    }

    return true;
}


console.log(ArrayChallenge(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));  // Output: true
console.log(ArrayChallenge(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));  // Output: false
