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
- WannOFFC   :   [ My Self ] 
- GlobalElits       [ Support ]
- Ghost       :    [ Support ] 
- Pengguna Bot Yang Selalu Support

• Recode By ( Nama Mu )
*/
/*
* Nama Pengembang: MR.Felix 
* Kontak Whatsapp: wa.me/62856932854302
* Kontak Telegram: t.me/Globalelits
* Akun Github: github.com/Felixhasgawa
* Catatan: Skrip ini tidak Geratis.
*/
const os = require('os');
const cp = require('child_process')
const { promisify } = require('util')
const exec = promisify(cp.exec).bind(cp)
const osu = require('node-os-utils')
const { totalmem, 
  freemem 
   } = require('os')  
   const util = require("util"); 
   const { performance } = require("perf_hooks"); 
   const { sizeFormatter } = require("human-readable"); 
   const format = sizeFormatter({ 
    std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC' 
    decimalPlaces: 2, 
    keepTrailingZeroes: false, 
    render: (literal, symbol) => `${literal} ${symbol}B`, 
  }) 
  function clockString(ms) { 
    var d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) 
    var h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24 
    var m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60 
    var s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60 
    return [d, 'D ', h, 'H ', m, 'M ', s, 'S '].map(v => v.toString().padStart(2, 0)).join('') 
  }
module.exports = (bot) => {
  bot.onText(/\.(ping|speed)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const command = match[1];

    if (command === 'ping') {
      const pingMsg = await bot.sendMessage(chatId, '🔍 Searching...');
      const used = process.memoryUsage() 
   const cpus = os.cpus().map(cpu => { 
     cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0) 
     return cpu 
   }) 
   const cpu = cpus.reduce( 
     (last, cpu, _, { length }) => { 
       last.total += cpu.total; 
       last.speed += cpu.speed / length; 
       last.times.user += cpu.times.user; 
       last.times.nice += cpu.times.nice; 
       last.times.sys += cpu.times.sys; 
       last.times.idle += cpu.times.idle; 
       last.times.irq += cpu.times.irq; 
       return last; 
     }, 
     { 
       speed: 0, 
       total: 0, 
       times: { 
         user: 0, 
         nice: 0, 
         sys: 0, 
         idle: 0, 
         irq: 0, 
       }, 
     } 
   ); 
   var _muptime 
     if (process.send) { 
       process.send('uptime') 
       _muptime = await new Promise(resolve => { 
         process.once('message', resolve) 
         setTimeout(resolve, 1000) 
       }) * 1000 
     } 
    var muptime = clockString(_muptime) 
   var old = performance.now(); 
   var neww = performance.now(); 
   var speed = neww - old; 
   var cpux = osu.cpu 
         var cpuCore = cpux.count() 
         var drive = osu.drive 
         var mem = osu.mem 
         var netstat = osu.netstat 
         var HostN = osu.os.hostname() 
         var OS = osu.os.platform() 
         var cpuModel = cpux.model() 
  
         var d = new Date(new Date + 3600000) 
         var locale = 'id' 
     var weeks = d.toLocaleDateString(locale, { weekday: 'long' }) 
     var dates = d.toLocaleDateString(locale, { 
       day: 'numeric', 
       month: 'long', 
       year: 'numeric' 
     }) 
         var times = d.toLocaleTimeString(locale, { 
       hour: 'numeric', 
       minute: 'numeric', 
       second: 'numeric' 
     })
     latency = ` ᴘ ɪ ɴ ɢ 
 ${Math.round(neww - old)} ms 
 ${speed} ms 
  
 ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ  
 ${muptime} 
  
 s ᴇ ʀ ᴠ ᴇ ʀ 
 🛑 ʀᴀᴍ: ${format(totalmem() - freemem())} / ${format(totalmem())} 
 🔵 ғʀᴇᴇRAM: ${format(freemem())} 
 🔴 ᴍᴇᴍᴏʀy: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB 
 🔭 ᴘʟᴀᴛғᴏʀᴍ: ${os.platform()} 
 🧿 sᴇʀᴠᴇʀ: ${os.hostname()} 
 💻 ᴏs: ${OS} 
 ⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ: ${times} 
  
 _NodeJS Memory Usage_ 
 ${ 
   "```" + 
   Object.keys(used) 
     .map( 
       (key, _, arr) => 
         `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${format( 
           used[key] 
         )}` 
     ) 
     .join("\n") + 
   "```" 
 } 
  
 ${ 
   cpus[0] 
     ? `_Total CPU Usage_ 
 ${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times) 
         .map( 
           (type) => 
             `- *${(type + "*").padEnd(6)}: ${( 
               (100 * cpu.times[type]) / 
               cpu.total 
             ).toFixed(2)}%` 
         ) 
         .join("\n")} 
  
 _CPU Core(s) Usage (${cpus.length} Core CPU)_ 
 ${cpus 
   .map( 
     (cpu, i) => 
       `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys( 
         cpu.times 
       ) 
         .map( 
           (type) => 
             `- *${(type + "*").padEnd(6)}: ${( 
               (100 * cpu.times[type]) / 
               cpu.total 
             ).toFixed(2)}%` 
         ) 
         .join("\n")}` 
   ) 
   .join("\n\n")}` 
     : "" 
 } 
 ` 
      bot.editMessageText(`${latency}`, {
        chat_id: chatId,
        message_id: pingMsg.message_id
      },  { parse_mode: 'Markdown' });
    } else if (command === 'speed') {
      const pingMsg = await bot.sendMessage(chatId, '🔍 Searching...');
      let o
    try {
        o = await exec('python3 speed.py --share --secure')
    } catch (e) {
        o = e
    } finally {
      
      let { stdout, stderr } = o
      if (stdout.trim()) {
        bot.editMessageText(`${stdout}`, {
          chat_id: chatId,
          message_id: pingMsg.message_id
        },  { parse_mode: 'Markdown' });
      }
      if (stderr.trim()) {
        bot.sendMessage(chatId, stderr)
      }
  }
    }
  });
};