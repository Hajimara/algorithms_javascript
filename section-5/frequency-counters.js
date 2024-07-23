function same(a, b) {
  // a배열의 제곱값을 b배열이 포함하고 있어야 한다
  // 순서에 상관없이
  // 한 값은 한개 비교 제공한다.
  // 값을 순회하며 aitem 값을 b와 비교후 일치한다면 index를 제거해야 함
  const bTemp = [...b];
  for (let index = 0; index < a.length; index++) {
    const target = a[index] ** 2;
    const arrIndex = bTemp.indexOf(target);
    if (arrIndex >= 0) {
      bTemp.splice(arrIndex, 1);
    } else {
      return false;
    }
  }

  return bTemp.length === 0;
}

const start = performance.now();
const re = same([1, 2, 3, 2], [1, 4, 9, 4]);
const end = performance.now();
console.log(re);

console.log("Duration :", (end - start) / 1000, "seconds");
