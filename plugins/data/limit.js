Tentu! Berikut ini adalah contoh kode untuk mengimplementasikan fitur limit dengan menggunakan Node.js dan menyimpan limit dalam file JSON:

```javascript
const fs = require('fs');
const TelegramBot = require('node-telegram-bot-api');

const token = 'TOKEN_BOT_TELEGRAM';
const bot = new TelegramBot(token, { polling: true });

// Load limit data from JSON file
let limitData = {};
fs.readFile('limit.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    limitData = JSON.parse(data);
  }
});

// Save limit data to JSON file
function saveLimitData() {
  fs.writeFile('limit.json', JSON.stringify(limitData), 'utf8', (err) => {
    if (err) {
      console.error(err);
    }
  });
}

// Command to check limit
bot.onText(/\/checklimit/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  if (limitData[userId]) {
    bot.sendMessage(chatId, `Your current limit is ${limitData[userId]} messages.`);
  } else {
    bot.sendMessage(chatId, 'You have no limit set.');
  }
});

// Command to add limit
bot.onText(/\/addlimit (\d+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const limit = parseInt(match[1]);
  
  if (!limit || limit < 0) {
    bot.sendMessage(chatId, 'Invalid limit value.');
    return;
  }
  
  limitData[userId] = limit;
  saveLimitData();
  bot.sendMessage(chatId, `Limit set to ${limit} messages.`);
});

// Command to delete limit
bot.onText(/\/deletelimit/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  if (limitData[userId]) {
    delete limitData[userId];
    saveLimitData();
    bot.sendMessage(chatId, 'Limit deleted.');
  } else {
    bot.sendMessage(chatId, 'You have no limit set.');
  }
});

// Check limit before sending message
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  if (limitData[userId] && limitData[userId] <= 0) {
    bot.sendMessage(chatId, 'Your limit has expired.');
    return;
  }
  
  if (limitData[userId]) {
    limitData[userId]--;
    saveLimitData();
  }
  
  // Process the message
  // ...
});
```

Pastikan Anda telah menginstal `node-telegram-bot-api` dengan menjalankan perintah `npm install node-telegram-bot-api` sebelum menjalankan kode di atas. Gantilah `TOKEN_BOT_TELEGRAM` dengan token bot Telegram Anda.

JSON file `limit.json` akan digunakan untuk menyimpan data limit pengguna:

```json
{}
```

Dalam kode tersebut, Anda dapat menggunakan perintah `/checklimit` untuk memeriksa limit saat ini, `/addlimit <limit>` untuk menambahkan limit, dan `/deletelimit` untuk menghapus limit. Ketika pengguna mengirim pesan, limit akan dikurangi satu. Jika limit mencapai nol, pengguna akan diberitahu bahwa limit telah habis.

Harap diingat bahwa kode ini hanya merupakan contoh dasar dan mungkin perlu disesuaikan sesuai dengan kebutuhan Anda.