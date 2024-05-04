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
const temporUsersFile = 'database/temporUsers.json';
const adminfile = 'database/AdminFel.json';
const premiumUsersFile = 'database/PremiumFile.json';
const settings = require('../config')
const owner = settings.adminId;
const nama = 'sc cαmpurαn v1.0';
const ytc = 'YudaMods σffícíαl х dєvєlσpєr';
const author = 'YudaMods σffícíαl х dєvєlσpєr';
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
async function bugHandler(bot) {

// Handle command '/temp'
bot.onText(/^\.temp$/, (msg) => {
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
 
 ∘ type .tempstop to terminate

 ∘ developer: @YUDAMODSZX
 
 ∘ nσtє :
scrípt mαsíh dαlαm pєngєmвαngαn, 
mααf jíkα αdα fítur чαng єrσr👋
┗━━━━━━━━━━━━━━━━`
        });
    } else {
        if (args.length !== 4) {
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

 ∘ use /temp (country code) (number) (time)
 
 ∘ ex: /temp 62 123456789 24

 ∘ developer: @YUDAMODSZX
 
 ∘ nσtє :
scrípt mαsíh dαlαm pєngєmвαngαn, 
mααf jíkα αdα fítur чαng єrσr👋
┗━━━━━━━━━━━━━━━━`
            });
        } else {
            const input1 = args[1];
            const input2 = args[2];
            const timeHours = parseInt(args[3]); // Mengonversi string waktu menjadi bilangan bulat

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

 ∘ use .temp (country code) (number) (time)
 
 ∘ ex: .temp 62 123456789 24

 ∘ developer: @YUDAMODSZX
 
 ∘ nσtє :
scrípt mαsíh dαlαm pєngєmвαngαn, 
mααf jíkα αdα fítur чαng єrσr👋
┗━━━━━━━━━━━━━━━━`
                });
            } else {
                const command = `node plugins/data/temp.js ${input1} ${input2}`;
                exec(command);
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

 ∘ target: ${input1} ${input2}
 
 ∘ status: otp  has been locked

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

 ∘ target: ${input1} ${input2}
 
 ∘ status: otp has opened

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
bot.onText(/^\.temphanter$/, (msg) => {
    const chatId = msg.chat.id;
    const from = msg.from.id;
    const userId = msg.from.id;
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
 
 ∘ type .tempstop to terminate

 ∘ developer: @YUDAMODSZX
 
 ∘ nσtє :
scrípt mαsíh dαlαm pєngєmвαngαn, 
mααf jíkα αdα fítur чαng єrσr👋
┗━━━━━━━━━━━━━━━━`
        });
    } else {
        if (args.length !== 4) {
          const temporUsers = JSON.parse(fs.readFileSync(temporUsersFile));
          const temistempp = temporUsers.includes(String(msg.from.id));
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

 ∘ use .temphanter (country code) (number) (time)
 
 ∘ ex: .temphanter 62 123456789 24

 ∘ developer: @YUDAMODSZX
 
 ∘ nσtє :
scrípt mαsíh dαlαm pєngєmвαngαn, 
mααf jíkα αdα fítur чαng єrσr👋
┗━━━━━━━━━━━━━━━━`
            });
        } else {
            const input1 = args[1];
            const input2 = args[2];
            const timeHours = parseInt(args[3]); // Mengonversi string waktu menjadi bilangan bulat

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

 ∘ use .temphanter (country code) (number) (time)
 
 ∘ ex: .temphanter 62 123456789 24

 ∘ developer: @YUDAMODSZX
 
 ∘ nσtє :
scrípt mαsíh dαlαm pєngєmвαngαn, 
mααf jíkα αdα fítur чαng єrσr👋
┗━━━━━━━━━━━━━━━━`
                });
            } else {
                const command = `node plugins/data/temp.js ${input1} ${input2}`;
                exec(command);
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

 ∘ target: ${input1} ${input2}
 
 ∘ status: otp  has been locked

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

 ∘ target: ${input1} ${input2}
 
 ∘ status: otp has opened

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
bot.onText(/.tempstop/, (msg) => {
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

// Handle command '/crash1'
bot.onText(/\.crash1 (.+)/, (msg, match) => {
  const userId = match[1];
    try {
        const data = fs.readFileSync('database/temporUsers.json', 'utf8');         const temporUsers = new Set(JSON.parse(data)); // Baca data temporUsers dari file JSON

        if (temporUsers.has(msg.from.id.toString())) {
            bot.sendMessage(`${userId}`, 'Tekan Link Di Bawah Ini Dan Pilih Target Yang Anda Kirim Virus 🦠👾\n\n', {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Send Virus Crash',
                            url: 'tg://msg?text=https://youtu.be/IQW49GINvj4'
                        }]
                    ]
                }
            });
        } else {
            bot.sendMessage(msg.chat.id, 'hai ' + (msg.from.username || 'Unknown') + '\nmaaf tidak bisa karena kamu belum menjadi user premium, mau jadi user premium?, bisa beli / sewa di saya admin @YUDAMODSZX', {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Beli Premium',
                            url: 'https://t.me/YUDAMODSZX'
                        }]
                    ]
                }
            });
        }
    } catch (err) {
        console.error('Error reading temporUsers data', err.message);
        bot.sendMessage(msg.chat.id, 'Terjadi kesalahan saat memeriksa status premium.');
    }
});

// Handle command '/crash2'
bot.onText(/\.crash2 (.+)/, (msg, match) => {
  const userId = match[1];
    try {
        const data = fs.readFileSync('database/temporUsers.json', 'utf8');         const temporUsers = new Set(JSON.parse(data)); // Baca data temporUsers dari file JSON

        if (temporUsers.has(msg.from.id.toString())) {
            bot.sendMessage(`${userId}`, 'Tekan Link Di Bawah Ini Dan Pilih Target Yang Anda Kirim Virus 🦠👾\n\n', {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Send Virus Crash',
                            url: 'tg://msg?text=https://youtu.be/397G-2xspg8?si=Ao3Y3fGjHsryGCUU'
                        }]
                    ]
                }
            });
        } else {
            bot.sendMessage(msg.chat.id, 'hai ' + (msg.from.username || 'Unknown') + '\nmaaf tidak bisa karena kamu belum menjadi user premium, mau jadi user premium?, bisa beli / sewa di saya admin @YUDAMODSZX', {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Beli Premium',
                            url: 'https://t.me/YUDAMODSZX'
                        }]
                    ]
                }
            });
        }
    } catch (err) {
        console.error('Error reading temporUsers data', err.message);
        bot.sendMessage(msg.chat.id, 'Terjadi kesalahan saat memeriksa status premium.');
    }
});

// Handle command '/crash3'
bot.onText(/\.crash3/, (msg) => {
    try {
        const data = fs.readFileSync('database/temporUsers.json', 'utf8');         const temporUsers = new Set(JSON.parse(data)); // Baca data temporUsers dari file JSON

        if (temporUsers.has(msg.from.id.toString())) {
            bot.sendMessage(msg.chat.id, 'Tekan Link Di Bawah Ini Dan Pilih Target Yang Anda Kirim Virus 🦠👾\n\n', {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Send Virus Crash',
                            url: 'tg://msg?text=https://youtu.be/7HWID6_36Bs'
                        }]
                    ]
                }
            });
        } else {
            bot.sendMessage(msg.chat.id, 'hai ' + (msg.from.username || 'Unknown') + '\nmaaf tidak bisa karena kamu belum menjadi user premium, mau jadi user premium?, bisa beli / sewa di saya admin @YUDAMODSZX', {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Beli Premium',
                            url: 'https://t.me/YUDAMODSZX'
                        }]
                    ]
                }
            });
        }
    } catch (err) {
        console.error('Error reading temporUsers data', err.message);
        bot.sendMessage(msg.chat.id, 'Terjadi kesalahan saat memeriksa status premium.');
    }
});

// Handle command '/crash4'
bot.onText(/\.crash4/, (msg) => {
    try {
        const data = fs.readFileSync('database/temporUsers.json', 'utf8');         const temporUsers = new Set(JSON.parse(data)); // Baca data temporUsers dari file JSON

        if (temporUsers.has(msg.from.id.toString())) {
            bot.sendMessage(msg.chat.id, 'Tekan Link Di Bawah Ini Dan Pilih Target Yang Anda Kirim Virus 🦠👾\n\n', {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Send Virus Crash',
                            url: 'tg://msg?text=https://youtu.be/g6wlAEBLKIk'
                        }]
                    ]
                }
            });
        } else {
            bot.sendMessage(msg.chat.id, 'hai ' + (msg.from.username || 'Unknown') + '\nmaaf tidak bisa karena kamu belum menjadi user premium, mau jadi user premium?, bisa beli / sewa di saya admin @YUDAMODSZX', {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Beli Premium',
                            url: 'https://t.me/YUDAMODSZX'
                        }]
                    ]
                }
            });
        }
    } catch (err) {
        console.error('Error reading temporUsers data', err.message);
        bot.sendMessage(msg.chat.id, 'Terjadi kesalahan saat memeriksa status premium.');
    }
});

// Handle command '/crash5'
bot.onText(/\.crash5/, (msg) => {
    try {
        const data = fs.readFileSync('database/temporUsers.json', 'utf8');
            const temporUsers = new Set(JSON.parse(data)); // Baca data temporUsers dari file JSON

        if (temporUsers.has(msg.from.id.toString())) {
            bot.sendMessage(msg.chat.id, 'Tekan Link Di Bawah Ini Dan Pilih Target Yang Anda Kirim Virus 🦠👾\n\n', {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Send Virus Crash',
                            url: 'tg://msg?text=https://youtu.be/n6Ma7azQu-Y'
                        }]
                    ]
                }
            });
        } else {
            bot.sendMessage(msg.chat.id, 'hai ' + (msg.from.username || 'Unknown') + '\nmaaf tidak bisa karena kamu belum menjadi user premium, mau jadi user premium?, bisa beli / sewa di saya admin @YUDAMODSZX', {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Beli Premium',
                            url: 'https://t.me/YUDAMODSZX'
                        }]
                    ]
                }
            });
        }
    } catch (err) {
        console.error('Error reading temporUsers data', err.message);
        bot.sendMessage(msg.chat.id, 'Terjadi kesalahan saat memeriksa status premium.');
    }
});

// Handle command '/addtemp'
bot.onText(/\.addtemp (.+)/, (msg, match) => {
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

// Handle command '/deltemp'
bot.onText(/\.deltemp (.+)/, (msg, match) => {
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
        
module.exports = bugHandler;