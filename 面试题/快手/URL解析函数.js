function parseURL (url) {
  let URL = decodeURI(url)
  let params = URL.slice(URL.indexOf('?') + 1).split("&")
  let res = {}
  for (let item of params) {
    let char = item.split("=")
    res[char[0]] = char[1]
  } 
  return res
}
console.log(parseURL("?b=1&c=2"))
