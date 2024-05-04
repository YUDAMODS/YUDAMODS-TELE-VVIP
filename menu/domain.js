const request = require('request');
const axios = require('axios');
const fs = require('fs');
const settings = require('../config')
const adminfile = 'database/AdminFel.json';
const grouub = 'database/Group.json';
const owner = settings.adminId;
const nama = 'sc cαmpurαn v2.2';
const author = 'YudaMods σffícíαl х dєvєlσpєr';
const version = '2.2.0';
try {
    groupId = JSON.parse(fs.readFileSync(grouub));
} catch (error) {
    console.error('Error reading GroupId file:', error);
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
async function domainHandler(bot) {
const zones = {
    '03f3569e809aa63eb40d842af3ddb523': 'panelprivv.xyz',
    'a476ffcf9243c44a02220f184da527e8': 'mypanell.biz.id',
    '891a2e5d4ac5b3db4fbcef8d9088ad38': 'cpanel-vip.my.id',
    'c2c8ddf4f1bfd0d0c11eb0ed83a634f9': 'r0ulxye4.my.id',
    '7432f024eeeaa0367fd985a18b2729cc': 'lanzpanel.my.id',
    '6c4af9293eed7ea87c94d8effe5f2de2': 'panellprivate.my.id',
    '15b97d8a42af1c00a70070e577ce7301': 'panellstore.site',
    '9b28f4ad0f06b36dd94cc56b01efc19a': 'plerkuda.my.id',
    '2bb49b2de0cbf75c0462ed90d7d333e1': 'cafegt.my.id',
    'd318f96a6327c5340d136415e860f545': 'kangpanel.biz.id',
    '98264c6c53c5bc9080230b077422d748': 'adminpanel.biz.id'
};

const apiTokens = {
    '03f3569e809aa63eb40d842af3ddb523': 'kLS7qdEt9zuC9UJr2u5ok5LsPaKKk0p0vuuTgmEo',
    'a476ffcf9243c44a02220f184da527e8': 'RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ',
    '891a2e5d4ac5b3db4fbcef8d9088ad38': 'V2BCJ-jhHXQlkN5-_Jv-CuXEtJbLT9fo7NWAlMK2',
    'c2c8ddf4f1bfd0d0c11eb0ed83a634f9': 'RHmElwWM5pEb3HsWi82uramdhi9wzDsaU8F9JV6F',
    '7432f024eeeaa0367fd985a18b2729cc': 'RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ',
    '6c4af9293eed7ea87c94d8effe5f2de2': 'fxR0JgMIVwd0wvGIeBTymygdSMx1yNAN12lN8ure',
    '15b97d8a42af1c00a70070e577ce73017': 'RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ',
    '9b28f4ad0f06b36dd94cc56b01efc19a': 'bMiZlOhkSzozUq1jMLO5bk4OeZr0GllyVtVWX1F4',
    '2bb49b2de0cbf75c0462ed90d7d333e1': 'lZ0XMXdnwp2L1DsI3f8frkPwvkQ6ENee2PnAfOsY',
    'd318f96a6327c5340d136415e860f545': 'RTe9hBdh_-nt0wzOvYN183JyQC011yaiodQ7Po1b',
    '98264c6c53c5bc9080230b077422d748': '1W9IHC9mLAKj8hQaMjczy0gA3Of7kPjJ3gAvTlnZ',
};
// domain 1
bot.onText(/\.d1 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.chat.id;
        
    const groubs = JSON.parse(fs.readFileSync(grouub));
  const isTempor = groubs.includes(String(msg.chat.id));
  if (!isTempor) {
    bot.sendMessage(chatId, 'Printah Hanya Untuk Group Yang Sudah Di Acc', {
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
    const response = await createSubdomain(subdomain, ip, '03f3569e809aa63eb40d842af3ddb523', 'kLS7qdEt9zuC9UJr2u5ok5LsPaKKk0p0vuuTgmEo');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain \`${subdomain}.${zones[zoneId]}\` created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 2
bot.onText(/\.d2 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.chat.id;
        
    const groub = JSON.parse(fs.readFileSync(grouub));
  const isTempor = groub.includes(String(msg.chat.id));
  if (!isTempor) {
    bot.sendMessage(chatId, 'Printah Hanya Untuk Group Yang Sudah Di Acc', {
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
    const response = await createSubdomain(subdomain, ip, 'a476ffcf9243c44a02220f184da527e8', 'RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain2 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain \`${subdomain}.${zones[zoneId]}\` created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 3
bot.onText(/\.d3 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.chat.id;
        
    const groub = JSON.parse(fs.readFileSync(grouub));
  const isTempor = groub.includes(String(msg.chat.id));
  if (!isTempor) {
    bot.sendMessage(chatId, 'Printah Hanya Untuk Group Yang Sudah Di Acc', {
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
    const response = await createSubdomain(subdomain, ip, '891a2e5d4ac5b3db4fbcef8d9088ad38', 'V2BCJ-jhHXQlkN5-_Jv-CuXEtJbLT9fo7NWAlMK2');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain3 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain \`${subdomain}.${zones[zoneId]}\` created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 4
bot.onText(/\.d4 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.chat.id;
        
    const groub = JSON.parse(fs.readFileSync(grouub));
  const isTempor = groub.includes(String(msg.chat.id));
  if (!isTempor) {
    bot.sendMessage(chatId, 'Printah Hanya Untuk Group Yang Sudah Di Acc', {
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
    const response = await createSubdomain(subdomain, ip, 'c2c8ddf4f1bfd0d0c11eb0ed83a634f9', 'RHmElwWM5pEb3HsWi82uramdhi9wzDsaU8F9JV6F');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain4 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain \`${subdomain}.${zones[zoneId]}\` created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 5
bot.onText(/\.d5 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.from.id;
      const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(msg.from.id));

    if (!isAdmin) {
        bot.sendMessage(chatId, 'Perintah hanya untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Hubungi Admin', url: `${cowner}` }
                    ]
                ]
            }
        });
        return;
    }
    
    const response = await createSubdomain(subdomain, ip, '7432f024eeeaa0367fd985a18b2729cc', 'RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain5 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain \`${subdomain}.${zones[zoneId]}\` created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 6
bot.onText(/\.d6 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.from.id;
      const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(msg.from.id));

    if (!isAdmin) {
        bot.sendMessage(chatId, 'Perintah hanya untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
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
    const response = await createSubdomain(subdomain, ip, '6c4af9293eed7ea87c94d8effe5f2de2', 'fxR0JgMIVwd0wvGIeBTymygdSMx1yNAN12lN8ure');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain6 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain \`${subdomain}.${zones[zoneId]}\` created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 7
bot.onText(/\.d7 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.chat.id;
        
    const groub = JSON.parse(fs.readFileSync(grouub));
  const isTempor = groub.includes(String(msg.chat.id));
  if (!isTempor) {
    bot.sendMessage(chatId, 'Printah Hanya Untuk Group Yang Sudah Di Acc', {
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
    const response = await createSubdomain(subdomain, ip, '15b97d8a42af1c00a70070e577ce7301', 'RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain7 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain \`${subdomain}.${zones[zoneId]}\` created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 8
bot.onText(/\.d8 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.chat.id;
        
    const groub = JSON.parse(fs.readFileSync(grouub));
  const isTempor = groub.includes(String(msg.chat.id));
  if (!isTempor) {
    bot.sendMessage(chatId, 'Printah Hanya Untuk Group Yang Sudah Di Acc', {
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
    const response = await createSubdomain(subdomain, ip, '9b28f4ad0f06b36dd94cc56b01efc19a', 'bMiZlOhkSzozUq1jMLO5bk4OeZr0GllyVtVWX1F4');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain8 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain \`${subdomain}.${zones[zoneId]}\` created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 9
bot.onText(/\.d9 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.chat.id;
        
    const groub = JSON.parse(fs.readFileSync(grouub));
  const isTempor = groub.includes(String(msg.chat.id));
  if (!isTempor) {
    bot.sendMessage(chatId, 'Printah Hanya Untuk Group Yang Sudah Di Acc', {
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
    const response = await createSubdomain(subdomain, ip, '2bb49b2de0cbf75c0462ed90d7d333e1', 'lZ0XMXdnwp2L1DsI3f8frkPwvkQ6ENee2PnAfOsY');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain9 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain \`${subdomain}.${zones[zoneId]}\` created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 10
bot.onText(/\.d10 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.chat.id;
        
    const groub = JSON.parse(fs.readFileSync(grouub));
  const isTempor = groub.includes(String(msg.chat.id));
  if (!isTempor) {
    bot.sendMessage(chatId, 'Printah Hanya Untuk Group Yang Sudah Di Acc', {
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
    const response = await createSubdomain(subdomain, ip, 'd318f96a6327c5340d136415e860f545', 'RTe9hBdh_-nt0wzOvYN183JyQC011yaiodQ7Po1b');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain10 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain \`${subdomain}.${zones[zoneId]}\` created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 11
bot.onText(/\.d11 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.chat.id;
        
    const groub = JSON.parse(fs.readFileSync(grouub));
  const isTempor = groub.includes(String(msg.chat.id));
  if (!isTempor) {
    bot.sendMessage(chatId, 'Printah Hanya Untuk Group Yang Sudah Di Acc', {
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
    const response = await createSubdomain(subdomain, ip, '98264c6c53c5bc9080230b077422d748', '1W9IHC9mLAKj8hQaMjczy0gA3Of7kPjJ3gAvTlnZ');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain11 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain \`${subdomain}.${zones[zoneId]}\` created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};

// Handle command '/addtemp'
bot.onText(/\.accgc (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = match[1];
    
    if (msg.from.id.toString() === owner) {
        if (!groupId.includes(userId)) {
            groupId.push(userId);
            fs.writeFileSync(grouub, JSON.stringify(groupId));
            bot.sendMessage(chatId, `${userId} has been added To Group Akses.`);
        } else {
            bot.sendMessage(chatId, `${userId} is already a Akses`);
        }
    } else {
        bot.sendMessage(chatId, 'Only the owner can perform this action.');
    }
});

// Handle command '/deltemp'
bot.onText(/\.deltgc (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = match[1];  
    if (msg.from.id.toString() === owner) {
        const index = groupId.indexOf(userId);
        if (index !== -1) {
            groupId.splice(index, 1);
            fs.writeFileSync(grouub, JSON.stringify(groupId));
            bot.sendMessage(chatId, `${userId} has been removed from Group Akses.`);
        } else {
            bot.sendMessage(chatId, `${userId} is not a Akses`);
        }
    } else {
        bot.sendMessage(chatId, 'Only the owner can perform this action.');
    }
});

}

module.exports = domainHandler;
    