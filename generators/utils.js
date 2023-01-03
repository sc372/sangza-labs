const inputRequired = (name) => {
  return (value) => (/.+/.test(value) ? true : `${name} 은 필수 입력 입니다.`)
}

const inputPositiveIntegerAndRequired = (name) => {
  return (value) => {
    const isRequired = /.+/.test(value)
    const isNumber = /\d/.test(value)

    if (!isRequired) {
      return `${name} 은 필수 입력 입니다.`
    } else if (isRequired && !isNumber) {
      return `${name} 은 숫자가 아닙니다.`
    } else if (isRequired && isNumber && (value <= 0 || value % 1 !== 0)) {
      return `${name} 은 양의 정수가 아닙니다.`
    } else {
      return true
    }
  }
}

module.exports = { inputRequired, inputPositiveIntegerAndRequired }
