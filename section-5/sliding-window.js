/**
 * 슬라이딩 윈도우
 * 규모가 큰 데이터셋에서 데이터의 하위 집합을 추적하는 문제에 유용함
 * @param {number[]} arr
 * @param {number} b
 */

function maxSubarraySum(arr, b) {
  if (arr.length < b) return null;
  let max = 0;
  let sum = 0;
  // 첫 번째 윈도우의 합 계산
  for (let index = 0; index < b; index++) {
    max += arr[index];
  }

  // 첫 번째 윈도우의 합을 sum에 저장
  sum = max;

  // 슬라이딩 윈도우 적용
  for (let index = b; index < arr.length; index++) {
    sum += arr[index] - arr[index - b];
    max = Math.max(max, sum);
  }

  return max;
}

const start = performance.now();
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10

const end = performance.now();

console.log("Duration :", (end - start) / 1000, "seconds");
