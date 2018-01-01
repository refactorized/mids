// things i want in repl
const path = require('path')
const reload = require('require-nocache')(module)
const _watch = require('node-watch')

const watchFile = (gname, reqPath) => {
  const pth = path.join(__dirname, reqPath)
  const load = () => {
    console.log(`reloading ${gname} from ${pth}`)
    global[gname] = reload(pth)
  }
  _watch(pth, {}, load)
  load()
}

watchFile('mids', './index.js')

global.reload = reload
global.r = require('ramda') // <3 http://ramdajs.com/
// launch, also capture ref to the repl, in case i want it later
global.repl = require('repl').start()
