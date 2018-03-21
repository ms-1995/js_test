/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

const hammingDistance = (x, y) => {
  let xArr = x.toString(2).split('').reverse(),
    yArr = y.toString(2).split('').reverse(),
    count = 0
  let length = xArr.length > yArr.length ? xArr.length : yArr.length
  for (let i = 0; i < length; i++) {
    let m = parseInt(xArr[i]),
      n = parseInt(yArr[i])
    if (m !== n && !(!m && !n)) {
      count += 1
    }
  }
  return count
};

// var hammingDistance = function(x, y) {
//   return (x ^ y).toString(2).replace(/0/g, '').length;
// };
// 使用位运算符^(将参与运算的两数的二进制进行比较，当前比较的位为异时，返回结果的对应位就为1，反之就为0)并将结果转为二进制字符串，使用正则获得除去0的字符串，并获取这个字符串的长度即为1位数的数量，就是这两个数的海明距离