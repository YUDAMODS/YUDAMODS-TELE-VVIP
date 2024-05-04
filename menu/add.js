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
const fs = require('fs');
const settings = require('../config')
const owner = settings.adminId;
const temporUsersFile = 'database/temporUsers.json';
const adminfile = 'database/AdminFel.json';
const premiumUsersFile = 'database/PremiumFile.json';

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
async function handlealladd(bot) {

// Handle command '/idgroup'
bot.onText(/\.idgroup/, (msg) => {
    const chatId = msg.chat.id;
    const sender = msg.from.username;
    const groupId = msg.chat.id;
    const groupTitle = msg.chat.title;
    const text12 = `Hi @${sender} 👋
    
👤 From  \`${groupId}\`
  └🙋🏽 ID Group

ID Grup : \`${groupId}\`
Nama Grup : \`${groupTitle}\`

🙏🏼 Permisi, bot akan pergi secara otomatis.
 Developer : @YUDAMODSZX`;
    const keyboard = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Testimoni', url: 'https://t.me/YUDAMODSZX' }, { text: 'List Produk Lainnya', url: 'https://t.me/YUDAMODSZX' }],
                [{ text: 'List Murid Unban & Banned', url: 'https://t.me/YUDAMODSZX' }]
            ]
        }
    };
    bot.sendPhoto(chatId, settings.menu, { caption: text12, parse_mode: 'Markdown', reply_markup: keyboard });
});

// Handle command '/cekid'
bot.onText(/\.cekid/, (msg) => {
    const chatId = msg.chat.id;
    const sender = msg.from.username;
    const name = msg.from.first_name;
    const id = msg.from.id; 
    const text12 = `Hi @${sender} 👋
    
👤 From  \`${id}\`
  └🙋🏽 kamu
  
 ID Telegram Anda:  \`${id}\`
 Full Name Anda : \`${name}\`

🙏🏼 Permisi, bot akan pergi secara otomatis.
 Developer : @YUDAMODSZX`;
    const keyboard = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Testimoni', url: 'https://t.me/YUDAMODSZX' }, { text: 'List Produk Lainnya', url: 'https://t.me/YUDAMODSZX' }],
                [{ text: 'List Murid Unban & Banned', url: 'https://t.me/YUDAMODSZX' }]
            ]
        }
    };
    bot.sendPhoto(chatId, settings.menu, { caption: text12, parse_mode: 'Markdown', reply_markup: keyboard });
});
bot.onText(/\/addprem (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = match[1];
    if (msg.from.id.toString() === owner) {
        if (!premiumUsers.includes(userId)) {
            premiumUsers.push(userId);
            fs.writeFileSync(premiumUsersFile, JSON.stringify(premiumUsers));
            bot.sendMessage(chatId, `User ${userId} has been added to premium users.`);
        } else {
            bot.sendMessage(chatId, `User ${userId} is already a premium user.`);
        }
    } else {
        bot.sendMessage(chatId, 'Only the owner can perform this action.');
    }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// delprem
bot.onText(/\/delprem (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = match[1];
    if (msg.from.id.toString() === owner) {
        const index = premiumUsers.indexOf(userId);
        if (index !== -1) {
            premiumUsers.splice(index, 1);
            fs.writeFileSync(premiumUsersFile, JSON.stringify(premiumUsers));
            bot.sendMessage(chatId, `User ${userId} has been removed from premium users.`);
        } else {
            bot.sendMessage(chatId, `User ${userId} is not a premium user.`);
        }
    } else {
        bot.sendMessage(chatId, 'Only the owner can perform this action.');
    }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// addowner
bot.onText(/\/addowner (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = match[1];
    if (msg.from.id.toString() === owner) {
        if (!adminUsers.includes(userId)) {
            adminUsers.push(userId);
            fs.writeFileSync(adminfile, JSON.stringify(adminUsers));
            bot.sendMessage(chatId, `User ${userId} has been added to admin users.`);
        } else {
            bot.sendMessage(chatId, `User ${userId} is already an admin user.`);
        }
    } else {
        bot.sendMessage(chatId, 'Only the owner can perform this action.');
    }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// delowner
bot.onText(/\/delowner (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = match[1];
    if (msg.from.id.toString() === owner) {
        const index = adminUsers.indexOf(userId);
        if (index !== -1) {
            adminUsers.splice(index, 1);
            fs.writeFileSync(adminfile, JSON.stringify(adminUsers));
            bot.sendMessage(chatId, `User ${userId} has been removed from admin users.`);
        } else {
            bot.sendMessage(chatId, `User ${userId} is not an admin user.`);
        }
    } else {
        bot.sendMessage(chatId, 'Only the owner can perform this action.');
    }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
}

module.exports = handlealladd;