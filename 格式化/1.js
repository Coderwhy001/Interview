const dayjs = require('dayjs')

const data = new Date('2020-12-30T05:31:43+08:00')
console.log(dayjs(data).format('YYYY-MM-DD HH:mm:ss'))