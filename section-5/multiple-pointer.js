/**
 * 포인터 패턴 1
 * 하나의 수가 값을 더해 0이되는 수를 찾고 연산에 필요한 값을 반환하기
 * @param {number[]} arr 오름차순 배열
 */
function sumZero(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    let sum = arr[leftIndex] + arr[rightIndex];
    if (sum === 0) return [arr[leftIndex], arr[rightIndex]];
    if (sum < 0) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }
}

const start = performance.now();
console.log(sumZero([-10, -3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([-4, -3, -2, 0, 1, 2, 5, 10]));
console.log(sumZero([1, 2, 3]));
const end = performance.now();

console.log("Duration :", (end - start) / 1000, "seconds");
