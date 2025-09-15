// Recursive function to compute factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Get the first argument and cast it to integer
const num = parseInt(process.argv[2]);

// Check if argument is a valid number, otherwise treat as 1
if (isNaN(num)) {
    console.log(1);
} else {
    console.log(factorial(num));
}
