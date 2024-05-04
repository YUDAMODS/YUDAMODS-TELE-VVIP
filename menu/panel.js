const request = require('request');
const axios = require('axios');
const fs = require('fs');
const settings = require('../config')
const adminfile = 'database/AdminFel.json';
const resellerUsersFile = 'database/resellerFile.json';
const owner = settings.adminId;
const domain = settings.domain;
const plta = settings.plta;
const pltc = settings.pltc;
try {
    resellerUsers = JSON.parse(fs.readFileSync(resellerUsersFile));
} catch (error) {
    console.error('Error reading RESELLER Users file:', error);
    }
try {
    adminUsers = JSON.parse(fs.readFileSync(adminfile));
    } catch (error) {
    console.error('Error reading adminUsers file:', error);
    }
// getRandomPassword
function generateRandomPassword() {
 const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
   for (let i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  password += characters[randomIndex];
 }
return password;
}
async function panelHandler(bot) {

// Handle command '/addseller'
bot.onText(/^\.addseller (.+)$/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = match[1];
    
    if (msg.from.id.toString() === owner) {
        if (!resellerUsers.includes(userId)) {
            resellerUsers.push(userId);
            fs.writeFileSync(resellerUsersFile, JSON.stringify(resellerUsers));
            bot.sendMessage(chatId, `User ${userId} has been added to RESELLER users.`);
        } else {
            bot.sendMessage(chatId, `User ${userId} is already a RESELLER user.`);
        }
    } else {
        bot.sendMessage(chatId, 'Only the owner can perform this action.');
    }
});

// Handle command '/delseller'
bot.onText(/^\.delseller (.+)$/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = match[1];  
    if (msg.from.id.toString() === owner) {
        const index = resellerUsers.indexOf(userId);
        if (index !== -1) {
            resellerUsers.splice(index, 1);
            fs.writeFileSync(resellerUsersFile, JSON.stringify(resellerUsers));
            bot.sendMessage(chatId, `User ${userId} has been removed from RESELLER users.`);
        } else {
            bot.sendMessage(chatId, `User ${userId} is not a RESELLER user.`);
        }
    } else {
        bot.sendMessage(chatId, 'Only the owner can perform this action.');
    }
});

// Handle command '/ramlist'
bot.onText(/^\.ramlist$/, (msg) => {
    const chatId = msg.chat.id;
    const usr = msg.from.username;
     
   bot.sendPhoto(chatId, settings.menu2, { 
           caption: `  ∘  ◦ Hi @${usr}👋
▭▬▭( 𝐑𝐀𝐌 𝐘𝐀𝐍𝐆 𝐓𝐄𝐑𝐒𝐄𝐃𝐈𝐀 )▭▬▭

 • 1GB ( RESELLER ) ✅
 • 2GB ( RESELLER ) ✅
 • 3GB ( RESELLER ) ✅
 • 4GB ( RESELLER ) ✅
 • 5GB ( RESELLER ) ✅
 • 6GB ( RESELLER ) ✅
 • 7GB ( RESELLER ) ✅
 • 8GB ( RESELLER ) ✅
 • 9GB ( RESELLER ) ✅
 • 10GB ( RESELLER ) ✅
 • UNLIMITED ( OWNER ) ✅
 
 💨 JOIN RESELLER CUMA 5K BANG 😁`
    });
});

// Handle command '/panel'
bot.onText(/^\.panel$/, (msg) => {
    const chatId = msg.chat.id;
    const usr = msg.from.username;
     
   bot.sendPhoto(chatId, settings.menu2, { 
           caption: ` ∘  ◦ Hi @${usr}👋

𝗖𝗔𝗥𝗔 𝗕𝗜𝗞𝗜𝗡 𝗣𝗔𝗡𝗘𝗟 𝗕𝗬 YUDAMODS🔥

𝗖𝗔𝗥𝗔 𝗔𝗗𝗗 𝗨𝗦𝗘𝗥 𝗣𝗔𝗡𝗘𝗟 :
𝗿𝗮𝗺 𝘂𝘀𝗲𝗿𝘀,𝗜𝗱

𝗰𝗼𝗻𝘁𝗼𝗵 : .𝟭𝗴𝗯 𝘆𝘂𝗱𝗮𝗺𝗼𝗱𝘀,𝟭𝟯𝟰𝟰𝟱𝟱𝘅𝘅𝘅

𝗕𝘂𝘆 𝗣𝗿𝗲𝗺? 𝗕𝘂𝘆 𝗩𝗽𝘀? 𝗕𝘂𝘆 𝗔𝗱𝗺𝗶𝗻𝗣&𝗣𝘁 𝗣𝗮𝗻𝗲𝗹? 𝗕𝘂𝘆 𝗦𝗰? 𝗣𝘃 (@YUDAMODSZX)`
    });
});

// 1gb
bot.onText(/^\.1gb (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const resellerUsers = JSON.parse(fs.readFileSync(resellerUsersFile));
  const isReseller = resellerUsers.includes(String(msg.from.id));
  if (!isReseller) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users RESELLER, Hubungi Admin Saya Untuk Menjadi Users RESELLER...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: settings.adminUrl }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: .1gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '1gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '1024';
  const cpu = '30';
  const disk = '1024';
  const email = `${username}@YUDAMODSZX.com`;
  const akunlo = settings.menu2;
  const password = generateRandomPassword()
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {

        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: 'NYURI SC YATIM',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });

    const data2 = await response2.json();
    server = data2.attributes;
    
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
}
  if (user && server) {
   bot.sendMessage(chatId, `🚩Account Has Been Created!
⚡ Server ID: ${server.id}
🛑 Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
🟢 DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
🚨 CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🌐 Login : ${domain}
💨 Username : \`${user.username}\`
🚩 Password : \`${password}\`

NOTE :
OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI.
━━━━━━━━━━━━━━━━━━━━━━━━━
THANKS FOR BUYING AT YUDAMODS😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud. Jika Data Tidak Masuk, Silahkan Untuk ID Tersebut Chat Ke Bot Ini Setelah Itu Coba Create Lagi.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});

// 2gb
bot.onText(/^\.2gb (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const resellerUsers = JSON.parse(fs.readFileSync(resellerUsersFile));
  const isReseller = resellerUsers.includes(String(msg.from.id));
  if (!isReseller) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users RESELLER, Hubungi Admin Saya Untuk Menjadi Users RESELLER...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: settings.adminUrl }
          ]
        ]
      }
    });
    return;
 }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: .2gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '2gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '2048';
  const cpu = '60';
  const disk = '2048';
  const email = `${username}@YUDAMODSZX.com`;
  const akunlo = settings.menu2;
  const password = generateRandomPassword()
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: 'NYURI SC YATIM',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `🚩Account Has Been Created!
⚡ Server ID: ${server.id}
🛑 Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
🟢 DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
🚨 CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🌐 Login : ${domain}
💨 Username : \`${user.username}\`
🚩 Password : \`${password}\`

NOTE :
OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI.
━━━━━━━━━━━━━━━━━━━━━━━━━
THANKS FOR BUYING AT YUDAMODS😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud. Jika Data Tidak Masuk, Silahkan Untuk ID Tersebut Chat Ke Bot Ini Setelah Itu Coba Create Lagi.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});

// 3gb
bot.onText(/^\.3gb (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const resellerUsers = JSON.parse(fs.readFileSync(resellerUsersFile));
  const isReseller = resellerUsers.includes(String(msg.from.id));
  if (!isReseller) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users RESELLER, Hubungi Admin Saya Untuk Menjadi Users RESELLER...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: settings.adminUrl }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: .3gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '3gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '3072';
  const cpu = '90';
  const disk = '6144';
  const email = `${username}@YUDAMODSZX.com`;
  const akunlo = settings.menu2;
  const password = generateRandomPassword()
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: 'NYURI SC YATIM',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `🚩Account Has Been Created!
⚡ Server ID: ${server.id}
🛑 Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
🟢 DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
🚨 CPU: ${server.limits.cpu}%`);

    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🌐 Login : ${domain}
💨 Username : \`${user.username}\`
🚩 Password : \`${password}\`

NOTE :
OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI.
━━━━━━━━━━━━━━━━━━━━━━━━━
THANKS FOR BUYING AT YUDAMODS😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud. Jika Data Tidak Masuk, Silahkan Untuk ID Tersebut Chat Ke Bot Ini Setelah Itu Coba Create Lagi.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});

// 4gb
bot.onText(/^\.4gb (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const resellerUsers = JSON.parse(fs.readFileSync(resellerUsersFile));
  const isReseller = resellerUsers.includes(String(msg.from.id));
  if (!isReseller) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users RESELLER, Hubungi Admin Saya Untuk Menjadi Users RESELLER...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: settings.adminUrl }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: .4gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '4gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '4048';
  const cpu = '110';
  const disk = '4048';
  const email = `${username}@YUDAMODSZX.com`;
  const akunlo = settings.menu2;
  const password = generateRandomPassword()
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: 'NYURI SC YATIM',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `🚩Account Has Been Created!
⚡ Server ID: ${server.id}
🛑 Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
🟢 DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
🚨 CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🌐 Login : ${domain}
💨 Username : \`${user.username}\`
🚩 Password : \`${password}\`

NOTE :
OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI.
━━━━━━━━━━━━━━━━━━━━━━━━━
THANKS FOR BUYING AT YUDAMODS😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud. Jika Data Tidak Masuk, Silahkan Untuk ID Tersebut Chat Ke Bot Ini Setelah Itu Coba Create Lagi.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});

// 5gb
bot.onText(/^\.5gb (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const resellerUsers = JSON.parse(fs.readFileSync(resellerUsersFile));
  const isReseller = resellerUsers.includes(String(msg.from.id));
  if (!isReseller) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users RESELLER, Hubungi Admin Saya Untuk Menjadi Users RESELLER...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: settings.adminUrl }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: .5gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '5gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '5048';
  const cpu = '140';
  const disk = '5048';
  const email = `${username}@YUDAMODSZX.com`;
  const akunlo = settings.menu2;
  const password = generateRandomPassword()
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: 'NYURI SC YATIM',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `🚩Account Has Been Created!
⚡ Server ID: ${server.id}
🛑 Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
🟢 DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
🚨 CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🌐 Login : ${domain}
💨 Username : \`${user.username}\`
🚩 Password : \`${password}\`

NOTE :
OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI.
━━━━━━━━━━━━━━━━━━━━━━━━━
THANKS FOR BUYING AT YUDAMODS😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud. Jika Data Tidak Masuk, Silahkan Untuk ID Tersebut Chat Ke Bot Ini Setelah Itu Coba Create Lagi.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});

// 6gb
bot.onText(/^\.6gb (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const resellerUsers = JSON.parse(fs.readFileSync(resellerUsersFile));
  const isReseller = resellerUsers.includes(String(msg.from.id));
  if (!isReseller) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users RESELLER, Hubungi Admin Saya Untuk Menjadi Users RESELLER...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: settings.adminUrl }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: .6gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '6gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '6048';
  const cpu = '170';
  const disk = '6048';
  const email = `${username}@YUDAMODSZX.com`;
  const akunlo = settings.menu2;
  const password = generateRandomPassword()
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: 'NYURI SC YATIM',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `🚩Account Has Been Created!
⚡ Server ID: ${server.id}
🛑 Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
🟢 DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
🚨 CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🌐 Login : ${domain}
💨 Username : \`${user.username}\`
🚩 Password : \`${password}\`

NOTE :
OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI.
━━━━━━━━━━━━━━━━━━━━━━━━━
THANKS FOR BUYING AT YUDAMODS😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud. Jika Data Tidak Masuk, Silahkan Untuk ID Tersebut Chat Ke Bot Ini Setelah Itu Coba Create Lagi.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});

// 7gb
bot.onText(/^\.7gb (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const resellerUsers = JSON.parse(fs.readFileSync(resellerUsersFile));
  const isReseller = resellerUsers.includes(String(msg.from.id));
  if (!isReseller) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users RESELLER, Hubungi Admin Saya Untuk Menjadi Users RESELLER...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: settings.adminUrl }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: .7gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '7gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '7048';
  const cpu = '200';
  const disk = '7048';
  const email = `${username}@YUDAMODSZX.com`;
  const akunlo = settings.menu2;
  const password = generateRandomPassword()
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: 'NYURI SC YATIM',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `🚩Account Has Been Created!
⚡ Server ID: ${server.id}
🛑 Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
🟢 DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
🚨 CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🌐 Login : ${domain}
💨 Username : \`${user.username}\`
🚩 Password : \`${password}\`

NOTE :
OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI.
━━━━━━━━━━━━━━━━━━━━━━━━━
THANKS FOR BUYING AT YUDAMODS😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud. Jika Data Tidak Masuk, Silahkan Untuk ID Tersebut Chat Ke Bot Ini Setelah Itu Coba Create Lagi.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});


// 8gb
bot.onText(/^\.8gb (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const resellerUsers = JSON.parse(fs.readFileSync(resellerUsersFile));
  const isReseller = resellerUsers.includes(String(msg.from.id));
  if (!isReseller) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users RESELLER, Hubungi Admin Saya Untuk Menjadi Users RESELLER...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: settings.adminUrl }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: .8gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '8gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '8048';
  const cpu = '230';
  const disk = '8048';
  const email = `${username}@YUDAMODSZX.com`;
  const akunlo = settings.menu2;
  const password = generateRandomPassword()
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `🚩Account Has Been Created!
⚡ Server ID: ${server.id}
🛑 Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
🟢 DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
🚨 CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🌐 Login : ${domain}
💨 Username : \`${user.username}\`
🚩 Password : \`${password}\`

NOTE :
OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI.
━━━━━━━━━━━━━━━━━━━━━━━━━
THANKS FOR BUYING AT YUDAMODS😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud. Jika Data Tidak Masuk, Silahkan Untuk ID Tersebut Chat Ke Bot Ini Setelah Itu Coba Create Lagi.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});

// 9gb
bot.onText(/^\.9gb (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const resellerUsers = JSON.parse(fs.readFileSync(resellerUsersFile));
  const isReseller = resellerUsers.includes(String(msg.from.id));
  if (!isReseller) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users RESELLER, Hubungi Admin Saya Untuk Menjadi Users RESELLER...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: settings.adminUrl }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: .9gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '9gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '9048';
  const cpu = '260';
  const disk = '9048';
  const email = `${username}@YUDAMODSZX.com`;
  const akunlo = settings.menu2;
  const password = generateRandomPassword()
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: 'NYURI SC YATIM',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `🚩Account Has Been Created!
⚡ Server ID: ${server.id}
🛑 Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
🟢 DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
🚨 CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🌐 Login : ${domain}
💨 Username : \`${user.username}\`
🚩 Password : \`${password}\`

NOTE :
OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI.
━━━━━━━━━━━━━━━━━━━━━━━━━
THANKS FOR BUYING AT YUDAMODS😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud. Jika Data Tidak Masuk, Silahkan Untuk ID Tersebut Chat Ke Bot Ini Setelah Itu Coba Create Lagi.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});

// 10gb
bot.onText(/^\.10gb (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const resellerUsers = JSON.parse(fs.readFileSync(resellerUsersFile));
  const isReseller = resellerUsers.includes(String(msg.from.id));
  if (!isReseller) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users RESELLER, Hubungi Admin Saya Untuk Menjadi Users RESELLER...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: settings.adminUrl }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: .10gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '10gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '10000';
  const cpu = '290';
  const disk = '10000';
  const email = `${username}@YUDAMODSZX.com`;
  const akunlo = settings.menu2;
  const password = generateRandomPassword()
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: 'NYURI SC YATIM',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `🚩Account Has Been Created!
⚡ Server ID: ${server.id}
🛑 Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
🟢 DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
🚨 CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🌐 Login : ${domain}
💨 Username : \`${user.username}\`
🚩 Password : \`${password}\`

NOTE :
OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI.
━━━━━━━━━━━━━━━━━━━━━━━━━
THANKS FOR BUYING AT YUDAMODS😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud. Jika Data Tidak Masuk, Silahkan Untuk ID Tersebut Chat Ke Bot Ini Setelah Itu Coba Create Lagi.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});

// unli
bot.onText(/^\.unli (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const adminUsers = JSON.parse(fs.readFileSync(adminfile));
  const isAdmin = adminUsers.includes(String(msg.from.id));  
  if (!isAdmin) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users RESELLER...', {
      reply_markup: {
        inline_keyboard: [
          [
     { text: 'HUBUNGI ADMIN', url: settings.adminUrl }
            ]
         ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: .unli namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + 'unli';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '0';
  const cpu = '0';
  const disk = '0';
  const email = `${username}@YUDAMODSZX.com`;
  const akunlo = settings.menu2;
  const password = generateRandomPassword()
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: 'NYURI SC YATIM',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}',
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `🚩Account Has Been Created!
⚡ Server ID: ${server.id}
🛑 Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
🟢 DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
🚨 CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🌐 Login : ${domain}
💨 Username : \`${user.username}\`
🚩 Password : \`${password}\`

NOTE :
OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI.
━━━━━━━━━━━━━━━━━━━━━━━━━
THANKS FOR BUYING AT YUDAMODS😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud. Jika Data Tidak Masuk, Silahkan Untuk ID Tersebut Chat Ke Bot Ini Setelah Itu Coba Create Lagi.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});
//batas
fs.readFile('database/AdminFel.json', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    adminID = JSON.parse(data);
  }
});
  
// createadmin
bot.onText(/^\.createadmin (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const text = match[1];
  const adminUsers = JSON.parse(fs.readFileSync(adminfile));
  const isAdmin = adminUsers.includes(String(msg.from.id));  
  if (!isAdmin) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Owner, Hubungi Owner Saya Untuk Menjadi Owner atau Users Admin...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: settings.adminUrl }
          ]
        ]
      }
    });
    return;
  }
  const commandParams = match[1].split(',');
  const panelName = commandParams[0].trim();
  const telegramId = commandParams[1].trim();
  if (commandParams.length < 2) {
    bot.sendMessage(chatId, 'Format Salah! Penggunaan: /createadmin namapanel,idtele');
    return;
  }
const password = generateRandomPassword()
const t = text.split(',');
const u = t[1];
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: `${panelName}@YUDAMODSZX.com`,
        username: panelName,
        first_name: panelName,
        last_name: "ADMINP/PT",
        language: "en",
        root_admin: true,
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      bot.sendMessage(chatId, JSON.stringify(data.errors[0], null, 2));
      return;
    }
    const user = data.attributes;
    const userInfo = `🚩Account Has Been Created!
💨 Email: ${user.email}
🍭 Username: \`${user.username}\`
🌐 Login: ${domain}
`;
    bot.sendMessage(chatId, userInfo);
    bot.sendMessage(telegramId, `Hai @${u}

HERE'S YOUR ADMIN PANEL DATA ⤵️
🌐 Login : ${domain}
💨 Username : \`${panelName}\`
🚩 Password : \`${password}\`
━━━━━━━━━━━━━━━━━━━━━━
GROUP : 
BACA RULES DI GROUP, LANGGAR KICK NO DRAMA ✌️
━━━━━━━━━━━━━━━━━━━━━━
JANGAN LUPA BILANG DONE MASEH 🫶🤓
━━━━━━━━━━━━━━━━━━━━━━
THANKS FOR BUYING AT YUDAMODS😁✌️
    `);
  } catch (error) {
    console.error(error);
    bot.sendMessage(chatId, 'Terjadi kesalahan dalam pembuatan admin. Silakan coba lagi nanti.');
  }
});
fs.readFile(adminfile, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    adminID = JSON.parse(data);
  }
});

bot.onText(/^\.createadmin2 (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const text = match[1];
  const adminUsers = JSON.parse(fs.readFileSync(adminfile));
  const isAdmin = adminUsers.includes(String(msg.from.id));  
  if (!isAdmin) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Owner, Hubungi Owner Saya Untuk Menjadi Owner atau Users Admin...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: settings.adminUrl }
          ]
        ]
      }
    });
    return;
  }
  const commandParams = match[1].split(',');
  const panelName = commandParams[0].trim();
  const telegramId = commandParams[1].trim();
  if (commandParams.length < 2) {
    bot.sendMessage(chatId, 'Format Salah! Penggunaan: /createadmin2 namapanel,idtele');
    return;
  }
const password = generateRandomPassword()
const t = text.split(',');
const u = t[1];
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: `${panelName}@YUDAMODSZX.com`,
        username: panelName,
        first_name: panelName,
        last_name: "ADMINP/PT",
        language: "en",
        root_admin: true,
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      bot.sendMessage(chatId, JSON.stringify(data.errors[0], null, 2));
      return;
    }
    const user = data.attributes;
    const userInfo = `🚩Account Has Been Created!
💨 Email: ${user.email}
🍭 Username: \`${user.username}\`
🌐 Login: ${domain}
`;
    bot.sendMessage(chatId, userInfo);
    bot.sendMessage(telegramId, `Hai @${u}

HERE'S YOUR ADMIN PANEL DATA ⤵️
🌐 Login : ${domain}
💨 Username : \`${panelName}\`
🚩 Password : \`${password}\`
━━━━━━━━━━━━━━━━━━━━━━
GROUP : 
BACA RULES DI GROUP, LANGGAR KICK NO DRAMA ✌️
━━━━━━━━━━━━━━━━━━━━━━
JANGAN LUPA BILANG DONE MASEH 🫶🤓
━━━━━━━━━━━━━━━━━━━━━━
THANKS FOR BUYING AT YUDAMODS😁✌️
    `);
  } catch (error) {
    console.error(error);
    bot.sendMessage(chatId, 'Terjadi kesalahan dalam pembuatan admin. Silakan coba lagi nanti.');
  }
});
fs.readFile(adminfile, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    adminID = JSON.parse(data);
  }
});
// listsrv
bot.onText(/^\.listsrv$/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;   
// Check if the user is the Owner
    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(msg.from.id));   
    if (!isAdmin) {
        bot.sendMessage(chatId, 'Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users RESELLER...', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'HUBUNGI ADMIN', url: settings.adminUrl }
                    ]
                ]
            }
        });
        return;
    }
    let page = 1; // Mengubah penggunaan args[0] yang tidak didefinisikan sebelumnya
    try {
        let f = await fetch(`${domain}/api/application/servers?page=${page}`, { // Menggunakan backticks untuk string literal
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });
        let res = await f.json();
        let servers = res.data;
        let messageText = "Daftar server aktif yang dimiliki:\n\n";
        for (let server of servers) {
            let s = server.attributes;

            let f3 = await fetch(`${domain}/api/client/servers/${s.uuid.split('-')[0]}/resources`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${pltc}`
                }
            });
            let data = await f3.json();
            let status = data.attributes ? data.attributes.current_state : s.status;
            messageText += `ID Server: ${s.id}\n`;
            messageText += `Nama Server: ${s.name}\n`;
            messageText += `Status: ${status}\n\n`;
        }
       messageText += `Total Server: ${res.meta.pagination.count}\n`;
       messageText += `Page Lainnya Silahkan Ketik /2listsrv`;
         bot.sendMessage(chatId, messageText);
         } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, 'Terjadi kesalahan dalam memproses permintaan.');
    }
});

// listsrv page2
bot.onText(/^\/2listsrv$/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;   
// Check if the user is the Owner
    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(msg.from.id));   
    if (!isAdmin) {
        bot.sendMessage(chatId, 'Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users RESELLER...', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'HUBUNGI ADMIN', url: settings.adminUrl }
                    ]
                ]
            }
        });
        return;
    }
    let page = 2; // Mengubah penggunaan args[0] yang tidak didefinisikan sebelumnya
    try {
        let f = await fetch(`${domain}/api/application/servers?page=${page}`, { // Menggunakan backticks untuk string literal
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });
        let res = await f.json();
        let servers = res.data;
        let messageText = "Daftar server aktif yang dimiliki:\n\n";
        for (let server of servers) {
            let s = server.attributes;

            let f3 = await fetch(`${domain}/api/client/servers/${s.uuid.split('-')[0]}/resources`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${pltc}`
                }
            });
            let data = await f3.json();
            let status = data.attributes ? data.attributes.current_state : s.status;
            messageText += `ID Server: ${s.id}\n`;
            messageText += `Nama Server: ${s.name}\n`;
            messageText += `Status: ${status}\n\n`;
        }
       messageText += `Total Server: ${res.meta.pagination.count}\n`;
       messageText += `Page Lainnya Silahkan Ketik /3listsrv`;
          bot.sendMessage(chatId, messageText);
         } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, 'Terjadi kesalahan dalam memproses permintaan.');
    }
});

// listsrv page3
bot.onText(/^\/3listsrv$/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;   
// Check if the user is the Owner
    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(msg.from.id));   
    if (!isAdmin) {
        bot.sendMessage(chatId, 'Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users RESELLER...', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'HUBUNGI ADMIN', url: settings.adminUrl }
                    ]
                ]
            }
        });
        return;
    }
    let page = 3; // Mengubah penggunaan args[0] yang tidak didefinisikan sebelumnya
    try {
        let f = await fetch(`${domain}/api/application/servers?page=${page}`, { // Menggunakan backticks untuk string literal
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });
        let res = await f.json();
        let servers = res.data;
        let messageText = "Daftar server aktif yang dimiliki:\n\n";
        for (let server of servers) {
            let s = server.attributes;

            let f3 = await fetch(`${domain}/api/client/servers/${s.uuid.split('-')[0]}/resources`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${pltc}`
                }
            });
            let data = await f3.json();
            let status = data.attributes ? data.attributes.current_state : s.status;
            messageText += `┏━━━━━━━━━━━\n`;
            messageText += `ID Server: ${s.id}\n`;
            messageText += `Nama Server: ${s.name}\n`;
            messageText += `Status: ${status}\n`;
            messageText += `┗━━━━━━━━━━━\n\n`;
        }
       messageText += `Total Server: ${res.meta.pagination.count}`;
           bot.sendMessage(chatId, messageText);
         } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, 'Terjadi kesalahan dalam memproses permintaan.');
    }
});

// delsrv
bot.onText(/^\.delsrv(.*)$/, async (msg, match) => {
    const chatId = msg.chat.id;
    const srv = match[1].trim();

    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(msg.from.id));

    if (!isAdmin) {
        bot.sendMessage(chatId, 'Perintah hanya untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users RESELLER...', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Hubungi Admin', url: settings.adminUrl }
                    ]
                ]
            }
        });
        return;
    }

    if (!srv) {
        bot.sendMessage(chatId, 'Mohon masukkan ID server yang ingin dihapus, contoh: /delsrv 1234');
        return;
    }

    try {
        let f = await fetch(`${domain}/api/application/servers/${srv}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });

        let res = f.ok ? { errors: null } : await f.json();

        if (res.errors) {
            bot.sendMessage(chatId, 'Server ID tidak ditemukan Oleh Admin');
        } else {
            bot.sendMessage(chatId, 'Oke, Server Telah Berhasil Di Hapus Oleh Admin');
        }
    } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, 'Terjadi kesalahan saat menghapus server.');
    }
});

// listadmin
bot.onText(/^\.listadmin$/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(msg.from.id));
    if (!isAdmin) {
        bot.sendMessage(chatId, 'Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users RESELLER...', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'HUBUNGI ADMIN', url: settings.adminUrl }
                    ]
                ]
            }
        });
        return;
    }
let page = '1';
    try {
        let f = await fetch(`${domain}/api/application/users?page=${page}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });
        let res = await f.json();
        let users = res.data;
        let messageText = "Berikut list admin :\n\n";
        for (let user of users) {
            let u = user.attributes;
            if (u.root_admin) {
    messageText += `🆔 ID: ${u.id} - 🌟 Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
                messageText += `${u.username}\n`;
                messageText += `${u.first_name} ${u.last_name}\n\n`;
            }
        }
        messageText += `Total Admin: ${res.meta.pagination.count}\n`;
               messageText += `Page Lainnya Silahkan Ketik /2listadmin`;
        bot.sendMessage(chatId, messageText, {

            reply_markup: {
        }
     });
    } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, 'Terjadi kesalahan dalam memproses permintaan.');
    }
});

// listadmin page2
bot.onText(/^\/2listadmin$/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(msg.from.id));
    if (!isAdmin) {
        bot.sendMessage(chatId, 'Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users RESELLER...', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'HUBUNGI ADMIN', url: settings.adminUrl }
                    ]
                ]
            }
        });
        return;
    }
let page = '2';
    try {
        let f = await fetch(`${domain}/api/application/users?page=${page}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });
        let res = await f.json();
        let users = res.data;
        let messageText = "Berikut list admin :\n\n";
        for (let user of users) {
            let u = user.attributes;
            if (u.root_admin) {
           messageText += `┏━━━━━━━━━━━\n`;
                messageText += `🆔 ID: ${u.id} - 🌟 Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
                messageText += `${u.username}\n`;
                messageText += `${u.first_name} ${u.last_name}\n`;
            messageText += `┗━━━━━━━━━━━\n\n`;
            }
        }
        messageText += `Total Admin: ${res.meta.pagination.count}\n`;
               messageText += `Page Lainnya Silahkan Ketik /3listadmin`;
        bot.sendMessage(chatId, messageText, {

            reply_markup: {
        }
     });
    } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, 'Terjadi kesalahan dalam memproses permintaan.');
    }
});

// listadmin page3 
bot.onText(/^\/3listadmin$/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(msg.from.id));
    if (!isAdmin) {
        bot.sendMessage(chatId, 'Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users RESELLER...', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'HUBUNGI ADMIN', url: settings.adminUrl }
                    ]
                ]
            }
        });
        return;
    }
let page = '3';
    try {
        let f = await fetch(`${domain}/api/application/users?page=${page}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });
        let res = await f.json();
        let users = res.data;
        let messageText = "Berikut list admin :\n\n";
        for (let user of users) {
            let u = user.attributes;
            if (u.root_admin) {
           messageText += `┏━━━━━━━━━━━\n`;
                messageText += `🆔 ID: ${u.id} - 🌟 Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
                messageText += `${u.username}\n`;
                messageText += `${u.first_name} ${u.last_name}\n`;
            messageText += `┗━━━━━━━━━━━\n\n`;
            }
        }
        messageText += `Total Admin: ${res.meta.pagination.count}`;
        bot.sendMessage(chatId, messageText, {
            reply_markup: {
        }
     });
    } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, 'Terjadi kesalahan dalam memproses permintaan.');
    }
});
}

module.exports = panelHandler;