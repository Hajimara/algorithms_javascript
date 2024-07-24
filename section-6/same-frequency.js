function sameFrequency(a, b) {
  const aStr = String(a);
  const bStr = String(b);

  const aObj = {};
  const bObj = {};

  // { 1: 1, 8: 1, 2: 1 }
  for (const key of aStr) {
    aObj[key] = (aObj[key] || 0) + 1;
  }
  // { 2: 1, 8: 1, 1: 1 }
  for (const key of bStr) {
    bObj[key] = (bObj[key] || 0) + 1;
  }

  for (const key in aObj) {
    if (aObj[key] !== bObj[key]) {
      return false;
    }
  }

  return true;
}

const start = performance.now();
console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));

const end = performance.now();
