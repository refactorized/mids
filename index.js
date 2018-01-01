/* eslint-disable new-cap */
const midi = require('midi')

const mid = (port = 0) => {
  let o = new midi.output()
  o.openPort(port)
  return { o }
}

const play = (mid) => (n, v = 100, d = 100) => {
  console.log([144, n, v])
  mid.o.sendMessage([144, n, v])
  const off = () => { mid.o.sendMessage([144, n, 0]) }
  setTimeout(off, d)
}

module.exports = {
  midi,
  mid,
  play
}
