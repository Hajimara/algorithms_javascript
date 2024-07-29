// Sliding Window - maxSubarraySum
// 슬라이딩 윈도우는 먼저 값을 구한 후 그 값을 기준으로 순회를 돌 수 있다.
// 정수의 배열과 숫자가 주어졌을 때, 함수에 전달된 숫자의 길이를 가진 하위 배열의 최대 합을 구하는 maxSubarraySum이라는 함수를 작성하세요.
// 하위 배열은 원래 배열의 연속적인 요소로 구성되어야 한다는 점에 유의하세요. 아래 첫 번째 예제에서 [100, 200, 300]은 원래 배열의 하위 배열이지만 [100, 300]은 그렇지 않습니다.

/**
 *
 * @param {number[]} array
 * @param {number} value
 */
function maxSubarraySum(array, value) {
  // array가 value(기준값) 보다 길이가 짧을경우 예외처리
  if (array.length < value) return null;

  // 기준값이 될 총 합값 구하기
  let total = 0;
  let sum = 0;
  for (let index = 0; index < value; index++) {
    const element = array[index];
    total += element;
  }
  sum = total;
  for (let index = value; index < array.length; index++) {
    // 현재 요소를 추가하고, 윈도우의 첫 번째 요소를 뺀다
    sum += array[index] - array[index - value];
    total = Math.max(sum, total);
  }

  return total;
}

const start = performance.now();
console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));

const end = performance.now();

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null
