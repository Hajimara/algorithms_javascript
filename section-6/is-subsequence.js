/**
 * 왜 두 개의 포인터를 사용하는가?
 * 정렬된 배열: 배열이 정렬되어 있으므로, 특정 조건을 만족하는 쌍을 찾기 위해 이 방법을 사용할 수 있습니다.
 * 효율적인 탐색: 한쪽 포인터를 증가시키거나 다른 쪽 포인터를 감소시키면서 탐색 범위를 줄일 수 있습니다.
 * 시간 복잡도 O(N): 배열의 길이에 비례하는 시간 내에 문제를 해결할 수 있습니다.
 *
 * 두 문자열을 받아 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는 isSubsequence라는 함수를 작성합니다.
 * 즉, 이 함수는 첫 번째 문자열의 문자가 순서가 바뀌지 않고 두 번째 문자열의 어딘가에 나타나는지 확인해야 합니다.
 *
 * @param {string} value1
 * @param {string} value2
 */

function isSubsequence(value1, value2) {
  let left = 0;
  let right = 0;

  while (left <= right) {
    // 값이 같으면 left 증가
    if (value1[left] === value2[right]) left++;
    // 길이가 같아지면 루프탈출
    if (left === value1.length) return true;
    // right으로 이동하면서 문자검사
    right++;
  }

  return false;
}

const start = performance.now();
console.log(isSubsequence("hello", "hello world"));
// console.log(isSubsequence("sing", "sting"));
// console.log(isSubsequence("abc", "abracadabra"));
// console.log(isSubsequence("abc", "acb"));
const end = performance.now();
