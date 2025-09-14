// Get the first argument (index 2 in process.argv)
const arg = process.argv[2];

if (arg === undefined) {
  console.log("No argument");
} else {
  console.log(arg);
}

