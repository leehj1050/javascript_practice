// function solution(my_string) {
//   return Array.from(my_string).map((_, i) => my_string.substring(i));
//   // [ 'banana', 'anana', 'nana', 'ana', 'na', 'a' ]
// }

// const result = solution("banana");
// console.log(result);

// function solution(my_string, is_prefix) {
//   const arr = [...my_string].map((_, idx) => my_string.slice(0, idx + 1));

//   return arr.includes(is_prefix) ? 1 : 0;
// }

// const result = solution("banana", "ban");
// console.log(result);

// function solution(n) {
//   let answer = [];
//   for (let i = 0; i < n; i++) {
//     const row = Array(n).fill(0);
//     row[i] = 1;
//     answer.push(row);
//   }
//   return answer;
// }
// const result = solution(3);
// console.log(result);

// function solution(n) {
//   for (let i = 0; i <= n; i++) {
//     console.log("*".repeat(i));
//   }
// }
// const result = solution(3);
// console.log(result);

// const solution = (arr, intervals) => {
//   const [[a, b], [c, d]] = intervals;

//   return [...arr.slice(a, b + 1), ...arr.slice(c, d + 1)];
// };
// const result = solution(
//   [1, 2, 3, 4, 5],
//   [
//     [1, 3],
//     [0, 4],
//   ]
// );
// console.log(result);

// function solution(a, d, included) {
//   let resultArray = [];
//   let currentValue = a;

//   for (var i = 0; i < included.length; i++) {
//     resultArray.push(currentValue);
//     currentValue += d;
//   }
//   const trueValue = resultArray.filter((_, idx) => included[idx] === true);
//   return trueValue.reduce((acc, cur) => acc + cur);
// }

// const result = solution(3, 4, [true, false, false, true, true]);
// console.log(result);

// function solution(arr, queries) {
//   const [[a, b], [c, d], [e, f]] = queries;
//   const resultArray = arr;
//   // resultArray.splice(queries[0][0], 1, arr[queries[0][0]] + 1);
//   // resultArray.splice(queries[0][1], 1, arr[queries[0][1]] + 1);
//   // resultArray.splice(queries[1][0], 1, arr[queries[1][0]] + 1);
//   // resultArray.splice(queries[1][1], 1, arr[queries[1][1]] + 1);
//   // resultArray.splice(queries[2][0], 1, arr[queries[2][0]]  + 1);
//   // resultArray.splice(queries[2][1], 1, arr[queries[2][1]]  + 1);

//   for (let i = 0; i < queries.length; i++) {
//     for (let j = 0; j < queries[i].length; j++) {
//       resultArray.splice(queries[i][j], 1, arr[queries[i][j]] + 1);
//     }
//   }

//   return resultArray;
// }

// const result = solution(
//   [0, 1, 2, 3, 4],
//   [
//     [0, 1],
//     [1, 2],
//     [2, 3],
//   ]
// );
// console.log(result);

/** 콜라츠 수열 문제 */

// function solution(n) {
//   // n이 짝수면 2로 나누고 , 2로 나눈값이 홀수면 3*n+1
//   var answer = [n];
//   while (n > 1) {
//     if (n % 2 === 0) n /= 2;
//     else n = 3 * n + 1;
//     answer.push(n);
//   }
//   return answer;
// }

// const result = solution(10);
// console.log(result);

// const inputString = "onetwothreefourfivesixseveneightnine";

// const alpa = {
//   zero: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
// };

// const transformedString = inputString.replace(
//   /zero|one|two|three|four|five|six|seven|eight|nine/g,
//   (v) => alpa[v]
// );

// console.log(transformedString);

const arr = [1, 2, 3, 4, 5];

arr.forEach((v) => arr.push(6));
const mapArr = arr.map((b) => b * 2);
console.log(arr);
