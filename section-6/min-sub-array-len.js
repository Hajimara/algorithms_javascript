/**
 * 양수 배열과 양수라는 두 개의 매개 변수를 받아들이는 minSubArrayLen이라는 함수를 작성하세요.
 *
 * 이 함수는 합이 함수에 전달된 정수보다 크거나 같은 인접한 하위 배열의 최소 길이를 반환해야 합니다. 값이 없는 경우 0을 반환합니다.
 * @param {number[]} array
 * @param {number} value
 */
function minSubArrayLen(array, sum) {
  // 윈도우크기 조정
  let total = 0;
  // sum보다 크면 start를 증가시켜 window 축소,
  let start = 0;
  // sum보다 작으면 end를 증가시켜 window 확장
  let end = 0;
  let minLen = Infinity;

  while (start < array.length) {
    // total에 값 적재 및 start, end값 증가
    if (total < sum && end < array.length) {
      total += array[end];
      end++;
    } else if (total >= sum) {
      // 값 비교하여 최소 길이로 수정
      minLen = Math.min(minLen, end - start);
      total -= array[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen; // 값이 크거나 같을 때 len에 값을 넣고, 값이 없다면 0을 반환한다.
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
