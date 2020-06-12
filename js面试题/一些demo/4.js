let unary = (fn) => {
  return (val) => {
    return fn(val)
  }
}
let parse = unary(parseInt);
console.log(['1', '2', '3'].map(parse))


