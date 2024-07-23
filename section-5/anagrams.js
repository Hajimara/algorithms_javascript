/**
 * 인자는 두 문자열을 받는다
 * 두 인자가 서로의 아나그램이면 참이 반환 됨
 * @param {string} a
 * @param {string} b
 */
function validAnagram(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return false;
  if (a.length !== b.length) return false;

  let aObj = {};
  let bObj = {};

  for (const str of a) {
    aObj[str] = (aObj[str] || 0) + 1;
  }

  for (const str of b) {
    bObj[str] = (bObj[str] || 0) + 1;
  }

  for (const key in aObj) {
    if (aObj[key] !== bObj[key]) {
      return false;
    }
  }

  return true;
}

const start = performance.now();
console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
const end = performance.now();

console.log("Duration :", (end - start) / 1000, "seconds");
