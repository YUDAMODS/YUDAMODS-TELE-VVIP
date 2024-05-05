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
  cluster.on('exit', (worker, code, signal) => {
    console.log('Worker (Id ' + worker.process.pid + ') died')
    cluster.fork()
  })
} else {
  start('main.js')
}

async function start(fileName) {
  if (isRunning) {
    return
  }
  // Uncomment or add code here if needed
  isRunning = true
  const filePath = path.join(__dirname, fileName),
    args = [filePath, ...process.argv.slice(2)],
    childProcess = spawn(process.argv[0], args, {
      stdio: ['pipe', 'inherit', 'pipe', 'ipc'],
    })
  let errorLog = ''

  childProcess.stderr.on('data', (data) => {
    errorLog += data.toString()
  })

  childProcess.on('exit', (code) => {
    isRunning = false
    console.log('Exited with code: ' + code)
    if (code !== null) {
      const timestamp = moment().format('YYYY-MM-DD_HH-mm-ss'),
        logFileName = 'error_log_' + timestamp + '.txt',
        logFilePath = path.join(__dirname, './temp/' + logFileName),
        logContent =
          'Exit Code: ' +
          code +
          '\nError Stack: ' +
          (errorLog || 'No error stack available')
      fs.writeFile(logFilePath, logContent, (err) => {
        if (err) {
          console.error('Error writing log file:', err)
        }
        console.log('Error log saved to: ' + logFilePath)
      })
    } else {
      console.log('Restarting...')
      start(fileName)
    }
  })

  childProcess.on('error', (err) => {
    isRunning = false
    console.error('Error starting bot:', err)
  })

  console.log('YudaMods Bot Is Running')
}
