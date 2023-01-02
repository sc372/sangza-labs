/**
 * 필수 입력 유효성 검증
 *
 * @param {string} name
 * @return {boolean|string}
 */
const inputRequired = (name) => {
  return (value) => (/.+/.test(value) ? true : `${name} is required`)
}

module.exports = { inputRequired }
