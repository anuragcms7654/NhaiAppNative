// Function arguments

const nums = [10, 20, 30];
console.log(Math.max(...nums)); // 30

// Function parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10


// Spread in props
const user = { name: "Alice", age: 25 };
<Text {...user} />  // spreads props name="Alice" age={25}

// Rest in props
const { name, ...otherProps } = user;
<Text {...otherProps} /> // passes everything except name
