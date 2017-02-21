function callback(value, index) {
  console.log(`${index}: ${value}`)
}

function iterativeLog(array) {
  array.forEach(callback)
}

function iterate(callback) {
  var arr = ['anything']
  arr.forEach(callback)
  return arr
}

function doToArray(array, callback) {
  array.forEach(callback)
}
