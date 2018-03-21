/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

// const numJewelsInStones = (J, S) => {
//   const jewels = new Set(J)
//   return S.split('').reduce((res, s) => res + jewels.has(s), 0)
// };
// var numJewelsInStones = function (J, S) {
//   let arr1 = J.split(''),
//     arr2 = S.split('')
//   return arr1.reduce((x, y) => {
//     x += arr2.reduce((a, b) => {
//       if (y === b) {
//         a += 1
//       }
//       return a
//     }, 0)
//     return x
//   }, 0)
// };
var numJewelsInStones = function (J, S) {
  let arr1 = J.split(''),
    arr2 = S.split(''),
    count = 0
  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr2.length; j += 1) {
      if (arr1[i] === arr2[j]) {
        count += 1
      }
    }
  }
  return count
};