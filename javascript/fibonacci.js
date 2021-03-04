/**
 * Hardcode using ifs, if the number is 0 or 1
 * set the last 2 values in 2 variables.  Also set a temp var.
 * loop for num - 1 times, and every loop we set the temp to the element 1 behind
 * 1 behind to be 1 behind + 2 behind
 * 2 behind to temp
 */
// function fibonacci(num) {
//     if (num == 0) {
//         return 0;
//     } else if (num == 1) {
//         return 1;
//     } else {
//         let back1 = 1;
//         let back2 = 0;
//         let temp = 0;
//         for (let i = 0; i < num - 1; i++) {
//             temp = back1;
//             back1 = back1 + back2;
//             back2 = temp;
//         }
//         return back1;
//     }
// }

/**
 * Set an array to 0, 1.  Loop as many times as you need and calculate the next
 * element of the array by adding the previous 2 array elements
 * Return the item in the array at the position in the array that we passed in
 */
function fibonacci(num) {
    let fibArray = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray[num];
}

if (require.main === module) {
    // add your own tests in here
    console.log("Expecting: 0");
    console.log("=>", fibonacci(0));

    console.log("");

    console.log("Expecting: 1");
    console.log("=>", fibonacci(2));

    console.log("");

    console.log("Expecting: 55");
    console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
