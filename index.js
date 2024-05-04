/*
  ( Base Ori WannOFFC°GhostMods°GlobalElits )

Script Ini Murni Bikinan Sendiri, Saya Hanya Sekedar Kroco Penghuni Inti Bumi.

Note : 
• Jangan Membagikan Script Ini Secara Free !!
• Jangan Mengganti Name Developer Script !!
• Jangan Menjual Script Ini Di Atas Harga Yang Saya Jual !!

Thanks To :                                
- Allah Swt 
- Nabi Muhammad Saw         
- My Team
- WannOFFC   :   [ Support ] 
- GlobalElits       [ Owner ]
- Ghost       :    [ Support ] 
- Pengguna Bot Yang Selalu Support

* Nama Pengembang: MR.Felix 
* Kontak Whatsapp: wa.me/62856932854302
* Kontak Telegram: t.me/Globalelits
* Akun Github: github.com/Felixhasgawa
* Catatan: Skrip ini tidak Geratis.

• Recode By ( Nama Mu )
*/
// jangan di buka encnya yaa
const moment = require('moment'),
  cluster = require('cluster'),
  { spawn } = require('child_process'),
  path = require('path'),
  fs = require('fs'),
  functions = require('./plugins/tools/global'),
  CFonts = require('cfonts'),
  PORT = process.env.PORT || 8080
let isRunning = false
if (cluster.isMaster) {
  console.log('Cluster Master (Id ' + process.pid + ') is running')
  CFonts.say('Y U D A M O D S', {
    font: 'chrome',
    align: 'center',
    gradient: ['blue', 'green'],
  })
  CFonts.say('RPG BOT TELEGRAM', {
    font: 'console',
    align: 'center',
    gradient: ['blue', 'green'],
  })
  const numWorkers = process.argv[2] || 1
  for (let i = 0; i < numWorkers; i++) {
    cluster.fork()
  }
  cluster.on('exit', (_0x173658, _0x246b03, _0x3a634b) => {
    console.log('Worker (Id ' + _0x173658.process.pid + ') died')
    cluster.fork()
  })
} else {
  start('./main.js')
}
async function start(_0x282809) {
  if (isRunning) {
    return
  }
  if (!(await functions())) {
    return
  }
  isRunning = true
  const _0x6806a7 = [path.join(__dirname, _0x282809), ...process.argv.slice(2)],
    _0x4713f4 = spawn(process.argv[0], _0x6806a7, {
      stdio: ['pipe', 'inherit', 'pipe', 'ipc'],
    })
  let _0x5ba320 = ''
  _0x4713f4.stderr.on('data', (_0xbeda9d) => {
    _0x5ba320 += _0xbeda9d.toString()
  })
  _0x4713f4.on('exit', (_0x2e844c) => {
    isRunning = false
    console.log('Exited with code: ' + _0x2e844c)
    if (_0x2e844c !== null) {
      const _0x269cbc = moment().format('YYYY-MM-DD_HH-mm-ss'),
        _0x1b4c7c = 'error_log_' + _0x269cbc + '.txt',
        _0x19e052 = path.join(__dirname, './temp/' + _0x1b4c7c),
        _0xfb529a =
          'Exit Code: ' +
          _0x2e844c +
          '\nError Stack: ' +
          (_0x5ba320 || 'No error stack available')
      fs.unwatchFile(_0x6806a7[0])
      fs.writeFile(_0x19e052, _0xfb529a, (_0x51187a) => {
        if (_0x51187a) {
          console.error('Error writing log file:', _0x51187a)
        }
        console.log('Error log saved to: ' + _0x19e052)
      })
    } else {
      console.log('Restarting...')
      start(_0x282809)
    }
  })
  _0x4713f4.on('error', (_0x551c4c) => {
    isRunning = false
    console.error('Error starting bot:', _0x551c4c)
  })
  console.log('YudaMods Bot Is Runing')
}