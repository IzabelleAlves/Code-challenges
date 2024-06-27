let n = [10, 11, 12, 1, 2, 3, 0, 2, 4, 6, 8, 9]
let maxLen = 1
let currentLen = 1;

for (let i = 1; i < n.length; i++) {
    if (n[i] > n[i - 1]) {
        currentLen++ 
    } else {
        if (currentLen > maxLen) {
            maxLen = currentLen 
        }
        currentLen = 1
    }
}

if (currentLen > maxLen) {
    maxLen = currentLen
}

console.log(maxLen)