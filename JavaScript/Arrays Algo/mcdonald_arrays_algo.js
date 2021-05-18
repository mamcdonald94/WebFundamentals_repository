// Print values and sum:

var testArr = [6, 3, 5, 1, 2, 4]
var sum = 0 // stores result of loop outside of loop to preserve it for next loop
for (var i = 0; i < testArr.length; i++) {
    if (i == 0) {
        console.log("Num", testArr[i], ",");
        console.log("Sum", testArr[i]);
        sum = testArr[i];
    }
    else {
        sum += testArr[i];
        console.log("Num", testArr[i], ",");
        console.log("Sum", sum);
    }
}

// Value * position:

var newArr = [] // blank array to store new values
for (var i = 0; i < testArr.length; i++) {
    newArr.push(testArr[i] * i);
}
console.log(newArr)