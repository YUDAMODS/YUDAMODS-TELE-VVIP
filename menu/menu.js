/*
  ( Base Ori WannOFFC°GhostMods°YUDAMODSZX )

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
- YUDAMODSZX       [ Support ]
- Ghost       :    [ Support ] 
- Pengguna Bot Yang Selalu Support

• Recode By ( Nama Mu )
*/
const fs = require('fs');
const settings = require('../config')
const cowner= settings.adminId;
const temporUsersFile = 'database/temporUsers.json';
const adminfile = 'database/AdminFel.json';
const DB_PATH = 'database/database.json';
const premiumUsersFile = 'database/PremiumFile.json';
function getRuntime(startTime) {
    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);
    return `${hours} Jam ${minutes} Menit ${seconds} Detik`;
}
try {
  database = JSON.parse(fs.readFileSync(DB_PATH));
} catch (error) {
  console.error('Error reading database file:', error);
}
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

async function handlemenuv(bot) {
bot.onText(/\/cekprem/, (msg) => {
  const chatId = msg.chat.id;
  
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));
  if (!isPremium) {
    bot.sendMessage(chatId, 'adalah pengguna non-premium. ⭐', {
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
    // Lakukan proses cloning bot di sini menggunakan requestedToken
    bot.sendMessage(chatId, 'adalah pengguna Premium. 🌟🌟🌟⭐⭐..');
});

bot.onText(/\/dana/, (msg) => {
  const chatId = msg.chat.id;
  const sender = msg.from.username;
 text12 = `Hi @${sender} 👋 
    SCAN FOTO DI ATAS MELALU APLIKASI DANA DAN KIRIM BUKTI KE ADMIN`;
        bot.sendPhoto(chatId, settings.dana, { caption: text12, });});
bot.onText(/\/qris/, (msg) => {
    const chatId = msg.chat.id;
    const sender = msg.from.username;
    const id = msg.from.id;
    const owner = '6991457866'; // Ganti dengan ID pemilik bot 
    const text12 = `Hi @${sender} 👋 
    SCAN QRIS All Paymet DI ATAS DAN KIRIM BUKTI KE ADMIN
${tagme}`;
    const keyboard = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Testimoni', url: settings.adminUrl }, { text: 'List Produk Lainnya', url: settings.adminUrl }],
                [{ text: 'List Murid Unban & Banned', url: settings.adminUrl }]
            ]
        }
    };
    bot.sendPhoto(chatId, settings.qris, { caption: text12, parse_mode: 'Markdown', reply_markup: keyboard });
});

//menu testi 
bot.onText(/\/testi/, (msg) => {
  const chatId = msg.chat.id;

  // Menampilkan chenel
  bot.sendMessage(chatId, "CHANNEL TESTIOMI SAYA ADA DI BAWAH👇",
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: '❗ CHENEL ❗', url: settings.adminUrl }
          ]
        ]
      },
      parse_mode: "Markdown"
    }
  );
});

bot.onText(/\/cekbot/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Haii Kak, Bot Online ( Aktif ), Jika Bot Off Mungkin Sedang Maintenance Atau Hubungi Owner Kami Makasih⬇️",
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: '🛒 OWNER KAMI 🛒', url: `${cowner}` }
          ]
        ]
      },
      parse_mode: "Markdown"
    }
  );
});
const MAX_MESSAGES_BEFORE_CLEAR_PROMPT = 5;
let messageCount = 2;

bot.onText(/\/clear/, (msg) => {
  const chatId = msg.chat.id;

  if (messageCount < MAX_MESSAGES_BEFORE_CLEAR_PROMPT) {
    // Menghapus riwayat obrolan bot dengan pengguna
    bot.deleteMessage(chatId, msg.message_id)
      .then(() => {
        messageCount++;
        bot.sendMessage(chatId, 'Riwayat obrolan Anda telah dihapus.');
      })
      .catch((error) => {
        console.error('Error deleting message:', error);
        bot.sendMessage(chatId, 'Maaf, terjadi kesalahan dalam menghapus riwayat obrolan.');
      });
  } else {
    bot.sendMessage(chatId, 'Anda telah menggunakan bot ini sebanyak 15 kali. Mohon bersihkan riwayat chat Anda sendiri untuk melanjutkan penggunaan bot.');
  }
});
bot.onText(/\/murban/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "📌OPEN MURID BANNED \n\n\nKEUNTUNGAN :\n\n• DAPET METHOD BAND ALL NEGARA\n• DAPET METHOD ONE CLICK\n• DAPET METHOD BAN HARD\n• AUTO JADI KANG BANIDO\n• TEKS KEBAKAR? DIGANTI BARU\n• METHOD ALL PRIVATE SEMUA\n\nPRICE : PV OWNER KAMI⬇️",
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: '🛒 OWNER KAMI 🛒', url: `${cowner}` }
          ]
        ]
      },
      parse_mode: "Markdown"
    }
  );
});
bot.onText(/\/murunban/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "📌OPEN MURUNBANNED\n\n\nKEUNTUNGAN\n\n• BISA OPEN JASA UNBAN\n• DIKASIH METHOD SPAM\n• DIKASIH METHOD PERMA BIASA\n• DIKASIH METHOD PERMA HARD\n• BISA UNBAN SESUKA HATI\n• BISA BALMOD PARAH\n• BISA JADI KANG UNBAN\n• AUTO CUAN\n• GACOR PARAH\n\nPRICE : PV OWNER KAMI⬇️",
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: '🛒 OWNER KAMI 🛒', url: `${cowner}` }
          ]
        ]
      },
      parse_mode: "Markdown"
    }
  );
});
bot.onText(/\/fatner/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "📌OPEN FATNER BANNED & UNBANNED PRIBADI\n\n📌KEUNTUNGAN FATNER PRIBADI :\n- ADMIN MURBAN\n- ADMIN MURUNBAN\n- ADMIN GRUP PUBLIK\n- ADMIN CHANNEL TESTI\n- FREE JOIN MURBAN\n- FREE JOIN MURUNBAN\n- BISA OPEN PT ( FATNER )\n- DI PROMOTE BANYAK GRUP\n- DIBANTU NAIK NAMA\n- DICARIKAN BUYER\n- DIUTAMAKAN KETIKA ADA TEXT FRESH\n- DAPAT METHD UNBAN/BANNED\n- DAPAT FULL TUTOR UNBAN/BAN\n- DIJAMIN BALMOD PARAH\n- DIPASTIKAN BAKAL UNTUNG BESAR JIKA NIAT\n\nFREE :\n- METHD BANNED PRIVATE\n\n📌SYARAT FATNER : PV\nPRICE : PV OWNER KAMI KAK⬇️",
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: '🛒 OWNER KAMI 🛒', url: `${cowner}` }
          ]
        ]
      },
      parse_mode: "Markdown"
    }
  );
});
bot.onText(/\/dana/, (msg) => {
  const chatId = msg.chat.id;
  const sender = msg.from.username;
 text12 = `Hi @${sender} 👋 
    SCAN FOTO DI ATAS MELALU APLIKASI DANA DAN KIRIM BUKTI KE ADMIN`;
        bot.sendPhoto(chatId, settings.dana, { caption: text12, });});
}

module.exports = handlemenuv;