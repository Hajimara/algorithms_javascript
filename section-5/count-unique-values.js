/**
 * 포인터 패턴 2
 * 유니크한 수의 갯수를 세기
 * @param {number[]} arr 오름차순 배열
 */
// function countUniqueValues(arr) {
//   const a = {};
//   arr.forEach((item) => {
//     a[item] = (a[item] || 0) + 1;
//   });
//   return Object.keys(a).length;
// }

function countUniqueValues(arr) {
  return new Set(arr).size;
}

const start = performance.now();
console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 1, 0, 1]));
const end = performance.now();

console.log("Duration :", (end - start) / 1000, "seconds");
