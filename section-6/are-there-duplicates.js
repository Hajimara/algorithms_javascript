function areThereDuplicates(...args) {
  const obj = {};
  args.forEach((item) => {
    obj[item] = (obj[item] || 0) + 1;
  });

  for (const key in obj) {
    if (obj[key] > 1) {
      return true;
    }
  }

  return false;
}

const start = performance.now();
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
const end = performance.now();
