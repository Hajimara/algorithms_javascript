const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args); // 함수 호출에 .apply 대신 스프레드 문법 사용
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs); // 클로저를 사용하여 인자들을 결합
    }
  };
}

const curriedJoin = curry(join);

// console.log(curriedJoin(1, 2, 3));
console.log(curriedJoin(1)(2, 3));
// console.log(curriedJoin(1, 2)(3));
