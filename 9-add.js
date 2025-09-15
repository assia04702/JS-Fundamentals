// Function to add two integers
function add(a, b) {
    return a + b;
}

// Get command line arguments
const arg1 = parseInt(process.argv[2]);
const arg2 = parseInt(process.argv[3]);

// Check if both arguments are valid numbers
if (isNaN(arg1) || isNaN(arg2)) {
    console.log('NaN');
} else {
    console.log(add(arg1, arg2));
}

