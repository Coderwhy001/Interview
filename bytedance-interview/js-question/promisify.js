const fs = require('fs')
const util = require('util')
// fs.readFile('./1.js', { encoding: 'utf8' }, (err, file) => {

// })
const readFile = mypromisify(fs.readFile)
readFile('./1.js', { encoding: 'utf8' })
.then(file => console.log(file))
function mypromisify(func) {
  return (...arg) => {
    return new Promise((resolve, reject) => {
      func(...arg, (err, res) => {
        if (err) reject(err)
        resolve(res)
      })
    })
  }
}