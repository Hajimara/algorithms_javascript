/**
 * 문자열을 받아 모든 고유 문자가 포함된 가장 긴 하위
 * 문자열의 길이를 반환하는 findLongestSubstring이라는 함수를 작성하세요.
 * @param {string} str
 */
function findLongestSubstring(str) {
  if (typeof str !== "string") throw Error("Input must be a string");
  // 최대 문자열 길이
  let longest = 0;
  // 각 문자의 마지막 인덱스 저장하는 객체
  let seen = {};
  // 슬라이드 윈도우 시작 인덱스
  let start = 0;

  for (let index = 0; index < str.length; index++) {
    let char = str[index];
    if (seen[char] !== undefined) {
      // 중복된 문자열 확인 후 시작인덱스는 중복된 최근 문자의 다음 문자 인덱스로 변경한다.
      start = Math.max(start, seen[char] + 1);
    }

    // 길이 편차 +1
    // 진행된 idnex - 현재 시작 인덱스 start
    longest = Math.max(longest, index - start + 1);

    seen[char] = index;
  }
  return longest;
}

console.log(findLongestSubstring(""));
console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
console.log(findLongestSubstring("thecatinthehat"));
console.log(findLongestSubstring("bbbbbb"));
console.log(findLongestSubstring("longestsubstring"));
console.log(findLongestSubstring("thisishowwedoit"));

// findLongestSubstring(""); // 0
// findLongestSubstring("rithmschool"); // 7
// findLongestSubstring("thisisawesome"); // 6
// findLongestSubstring("thecatinthehat"); // 7
// findLongestSubstring("bbbbbb"); // 1
// findLongestSubstring("longestsubstring"); // 8
// findLongestSubstring("thisishowwedoit"); // 6
