/**
 * @param {string} moves
 * @return {boolean}
 */
// 机器人通过ULDR操作最后能不能走回起点

const judgeCircle = moves => {
  let operation = moves.split('').reduce((res, str) => {
    if (str in res) {
      res[str] += 1
    } else {
      res[str] = 1
    }
    return res
  }, {})
  if (operation['R'] === operation['L'] && operation['U'] === operation['D']) {
    return true
  } else {
    return false
  }
};
