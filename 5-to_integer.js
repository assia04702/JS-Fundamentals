// Get the first argument
const arg = process.argv[2];

// Convert to integer
const num = parseInt(arg);

// Check if conversion worked
if (!isNaN(num)) {
  console.log("My number: " + num);
} else {
  console.log("Not a number");
}
