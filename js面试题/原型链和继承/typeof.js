function getType(temp) {
  console.log(temp.constructor.prototype)
  var str = temp.constructor.toString();
  console.log(str)
  return str.slice(9, str.indexOf('(')).toLowerCase();
}
getType('1')