const languages = ["C is fun", "Python is cool", "JavaScript is amazing"];
let output = ""; // لتجميع جميع الأسطر

for (let i = 0; i < languages.length; i++) {
  output += languages[i];
  if (i < languages.length - 1) output += "\n"; // نزيد سطر جديد إلا مازال باقي عناصر
}

console.log(output);
// Array of strings
const languages = ["C is fun", "Python is cool", "JavaScript is amazing"];

// Loop through the array and join lines with '\n'
console.log(languages.join('\n'));
#!/usr/bin/node

const messages = ['C is fun', 'Python is cool', 'JavaScript is amazing'];

for (const msg of messages) {
  console.log(msg);
}
