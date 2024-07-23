function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i += 1) {
    total += i;
  }
  return total;
}

function chatCount(str) {
  if (typeof str !== "string") throw new Error("Input must be a string");
  if (!str) throw new Error("String cannot be empty");
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    obj[char] = ++obj[char] || 1;
  }

  return obj;
}

const start = performance.now();
const result = chatCount("My phone number is 01065405086");
// const result = addUpTo(1000000000);
const end = performance.now();

console.log("result", result);
console.log("Duration :", (end - start) / 1000, "seconds");
