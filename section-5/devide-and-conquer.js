/**
 * 분할정복 알고리즘
 * 배열이나 큰 문자열같은 큰 규모의 데이터셋을 처리함
 * @param {number[]} arr
 * @param {number} value
 */

function search(arr, value) {
  let min = 0;
  let max = arr.length - 1;

  // value = 7
  // min = 0, max = 9 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // min = 5, max = 9 [6, 7, 8, 9, 10]
  // min = 5, max = 6 [6, 7]
  // min = 6, max = 6 [7]
  // currentElement === middle 6 [7] escape loop
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    // 찾고자하는 값보다 현재 미들값이 작다면 오른쪽 배열을 볼 수 있도록 min을 상승시켜 절반을 본다
    if (currentElement < value) {
      min = middle + 1;
      // 찾고자하는 값보다 현재 미들값이 크다면 왼쪽 배열을 볼 수 있도록 max를 하락시켜 절반을 본다
    } else if (currentElement > value) {
      max = middle - 1;
    } else {
      // 찾고자 하는값과 동일할 경우
      return middle;
    }
  }
}

const start = performance.now();
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)); // 3

const end = performance.now();

console.log("Duration :", (end - start) / 1000, "seconds");
