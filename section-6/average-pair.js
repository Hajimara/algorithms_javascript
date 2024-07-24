/**
 * 왜 두 개의 포인터를 사용하는가?
 * 정렬된 배열: 배열이 정렬되어 있으므로, 특정 조건을 만족하는 쌍을 찾기 위해 이 방법을 사용할 수 있습니다.
 * 효율적인 탐색: 한쪽 포인터를 증가시키거나 다른 쪽 포인터를 감소시키면서 탐색 범위를 줄일 수 있습니다.
 * 시간 복잡도 O(N): 배열의 길이에 비례하는 시간 내에 문제를 해결할 수 있습니다.
 * averagePair라는 함수를 작성합니다.
 * 정렬되어있다면 다중 포인트가 유용
 * 정렬된 정수 배열과 목표 평균이 주어졌을 때, 배열에 쌍의 평균이 목표 평균과 같은 값의 쌍이 있는지 확인합니다.
 * 목표 평균과 일치하는 쌍이 두 개 이상 있을 수 있습니다.
 *
 * @param {*} arr
 * @param {*} value
 */

function averagePair(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const average = (arr[left] + arr[right]) / 2;
    console.log(average);
    if (average > value) {
      right--;
    } else if (average < value) {
      left++;
    } else {
      return true;
    }
  }

  return false;
}

const start = performance.now();
console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
// console.log(averagePair([], 4));
const end = performance.now();
