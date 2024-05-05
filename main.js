/*
* Nama Pengembang: MR.Felix 
* Kontak Whatsapp: wa.me/62856932854302
* Kontak Telegram: t.me/Globalelits
* Akun Github: github.com/Felixhasgawa
* Catatan: Skrip ini tidak Geratis.
*/
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
- GlobalElits       [ Creator ]
- Ghost       :    [ Support ] 
- Pengguna Bot Yang Selalu Support

• Recode By ( Nama Mu )
*/
// Import all plugins in a more organized way
const { handleRandomJoke, handleRandomQuote, handleRandomMeme, handleRandomCat } = require('./plugins/more/random');

const plugins = {
  // Stalk
  ff: require('./plugins/stalk/ff'),
  ppcp: require('./plugins/stalk/ppcp'),
  pinHandler: require('./plugins/stalk/pin'),
  superhero: require('./plugins/stalk/superhero'),
  handlePixivCommand: require('./plugins/stalk/pixiv'),
  ttprofile: require('./plugins/stalk/ttprofile'),
  mlstalk: require('./plugins/stalk/mlstalk'),
  ghstalk: require('./plugins/stalk/ghstalk'),
  pixiv: require('./plugins/stalk/stalkig'),
  // info
  spec: require('./plugins/info/spec'),
  owner: require('./plugins/info/owner'),
  pantun: require('./plugins/info/pantun'),
  passwordg: require('./plugins/info/passwordg'),
  people: require('./plugins/info/people'),
  roboguru: require('./plugins/info/roboguru'),
  quotesnime: require('./plugins/info/quotesnime'),
  source: require('./plugins/info/source'),
  spamcall: require('./plugins/info/spamcall'),
  namarandom: require('./plugins/info/namarandom'),
  monitorfelix: require('./plugins/info/monitorfelix'),
  infogempa: require('./plugins/info/infogempa'),
  infocuaca: require('./plugins/info/infocuaca'),
  faktaunik: require('./plugins/info/faktaunik'),
  corona: require('./plugins/info/corona'),
  cerpen: require('./plugins/info/cerpen'),
  // Download
  asupan: require('./plugins/download/asupan'),
  handleboep: require('./plugins/download/xxdl'),
  gitdl: require('./plugins/download/gitdl'),
  ytdl: require('./plugins/download/ytdl'),
  yts: require('./plugins/download/yts'),
  ytmp4: require('./plugins/download/ytmp4'),
  ytmp3: require('./plugins/download/ytmp3'),
  handleplay: require('./plugins/download/ytplay'),
  smule: require('./plugins/download/smule'),
  snek: require('./plugins/download/snek'),
  fbdl: require('./plugins/download/fbdl'),
  igdl: require('./plugins/download/igdl'),
  spon: require('./plugins/download/spon'),
  handleboep: require('./plugins/download/bokep'),
  handlemegumin: require('./plugins/download/megumin'),
  handlefeets: require('./plugins/download/feets'),
  handleboot: require('./plugins/download/ecchi'),
  handlebooty: require('./plugins/download/booty'),
  handleneko: require('./plugins/download/neko'),
  handlekanna: require('./plugins/download/kanna'),
  cecan: require('./plugins/download/cecan'),
  ccdl: require('./plugins/download/ccdl'),
  sps: require('./plugins/download/sps'),
  storynime: require('./plugins/download/storynime'),
  ttmp3: require('./plugins/download/ttmp3'),
  ttmp4: require('./plugins/download/ttmp4'),
  ttdl: require('./plugins/download/ttdl'),
  tts: require('./plugins/download/tts'),
  soudcloud: require('./plugins/download/soudcloud'),
  // Tools
  bpurba: require('./plugins/tools/bpurba'),
  handlenpm: require('./plugins/tools/toolsnpm'),
  cekapikey: require('./plugins/tools/cekapikey'),
  ceritahoror: require('./plugins/tools/ceritahoror'),
  donasi: require('./plugins/tools/donasi'),
  doujindesu: require('./plugins/tools/doujindesu'),
  doujinsearch: require('./plugins/tools/doujinsearch'),
  gimage: require('./plugins/tools/gimage'),
  hhextostring: require('./plugins/tools/hextostring'),
  ipinfo: require('./plugins/tools/ipinfo'),
  katabijak: require('./plugins/tools/katabijak'),
  kbbi: require('./plugins/tools/kbbi'),
  lirik: require('./plugins/tools/lirik'),
  handlenekopoi: require('./plugins/tools/nekopoi'),
  morse: require('./plugins/tools/morse'),
  openai: require('./plugins/tools/openai'),
  rules: require('./plugins/tools/rules'),
  proxysite: require('./plugins/tools/proxysite'),
  runtime: require('./plugins/tools/runtime'),
  simisimi: require('./plugins/tools/simisimi'),
  spam: require('./plugins/tools/spam'),
  translet: require('./plugins/tools/translet'),
  ssweb: require('./plugins/tools/ssweb'),
  attp: require('./plugins/tools/attp'),
  ayat: require('./plugins/tools/ayat'),
  chord: require('./plugins/tools/chord'),
  artinama: require('./plugins/tools/artinama'),
  // Data
  handletemp: require('./plugins/data/cleartmp'),
  left: require('./plugins/data/left'),
  welcome: require('./plugins/data/welcome'),
  // Tebak Tebakan
  tebakHandler: require('./plugins/tebak/tebak'),
  // Maker
  makerHandler: require('./plugins/maker/maker'),
  // Menu
  handlealladd: require('./menu/add'),
  handleallmenu: require('./menu/allmenu'),
  handlemenuv: require('./menu/menu'),
  bugHandler: require('./menu/bugmen'),
  ddosHandler: require('./menu/ddosmen'),
  panelHandler: require('./menu/panel'),
  domainHandler: require('./menu/domain'),
  // logo
  logo: require('./plugins/logo/logo'),
};

// Initialize TelegramBot and attach all plugins
const TelegramBot = require('node-telegram-bot-api');
const functions = require('./plugins/tools/global');
const fetch = require('node-fetch');
const axios = require('axios');
const FormData = require('form-data');
const request = require('request');
const fs = require("fs");
const config = require('./config');
const owner = config.adminId;
const token = config.token;
const btc = config.apibot
const DB_patch = 'database/database.json';

try {
    dbuser = JSON.parse(fs.readFileSync(DB_patch));
} catch (error) {
    console.error('Error reading premiumUsers file:', error);
    }
const bot = new TelegramBot(token, { polling: true });
const prefixes = ['!', '/', '-', '.'];
const prefixPattern = new RegExp(`^(${prefixes.join('|')})`);
let autoMessageInterval;
// Fungsi untuk mengirim pesan otomatis
function sendAutoMessage() {
dbuser.forEach((userId) => {
const chatid = userId;
const messageText = `Sell Script Bot Telegram YudaModsBetaBotz 
Version : 1.0.3

- OwnerMenu
- AddMenu
- PanelMenu
- Funmenu
- SubdomainMenu
- GroupMenu
- StalkMenu
- Aimenu
- Downloadmenu
- Crashmenu
- Tempormenu
- Ddosmenu
- Paymentmenu
- Jpmmenu
- Searchmenu
Bot review, Chat This Bot : @YUDAMODSZX

Contact Owner : @YUDAMODSZX
V1.0.0 enc Harga
Rp.50.000 / 50K 
V1.0.0 No enc Harga
Rp.100.000 / 100K 
V1.0.3 enc Harga
Rp.50.000 / 50K
V1.0.3 no enc Harga
Rp.150.000 / 150K

No enc Free
- Free Apikeys 
- Dapat Update Selanjutnya..
- Free 11 Api Domain Aktif`;
    bot.sendMessage(userId, messageText);
  });
}

// Fungsi untuk mengaktifkan pesan otomatis
function enableAutoMessage() {
  autoMessageInterval = setInterval(sendAutoMessage, 02 * 60 * 1000); // 20 menit
  console.log('Pesan otomatis diaktifkan');
}

// Fungsi untuk menonaktifkan pesan otomatis
function disableAutoMessage() {
  clearInterval(autoMessageInterval);
  console.log('Pesan otomatis dinonaktifkan');
}

// Command untuk mengaktifkan pesan otomatis
bot.onText(/^\.on$/, (msg) => {
    if (msg.from.id.toString() === owner) {
  enableAutoMessage();
  bot.sendMessage(msg.chat.id, 'Pesan otomatis diaktifkan');
  } else {
        bot.sendMessage(chatId, 'Only the owner can perform this action.');
    }
});

// Command untuk menonaktifkan pesan otomatis
bot.onText(/^\.off$/, (msg) => {
    if (msg.from.id.toString() === owner) {
  disableAutoMessage();
  bot.sendMessage(msg.chat.id, 'Pesan otomatis dinonaktifkan');
  } else {
        bot.sendMessage(chatId, 'Only the owner can perform this action.');
    }
});
// Menangani aksi tombol
bot.setMyCommands([
  {
    command: '/start',
    description: 'Start a new conversation'
  }
]);
// Attach all plugins to the bot
Object.values(plugins).forEach(plugin => {
  // Mengecek apakah pengguna termasuk dalam daftar mutedUsers
  if (typeof plugin === 'function') {
    plugin(bot);
  }
});
// Daftar pengguna yang sedang AFK
let afkUsers = [];
// Daftar pengguna yang sedang AFK

// Mendengarkan pesan yang masuk
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  // Cek apakah pengguna di-tag
  if (messageText.includes(`@${bot.options.username}`)) {
    const userId = msg.chat.id;
    
    // Cek apakah pengguna sudah ada dalam daftar AFK
    if (afkUsers.includes(userId)) {
      bot.sendMessage(chatId, 'Maaf, pengguna sedang AFK.');
    } else {
      bot.sendMessage(chatId, 'Pengguna tidak sedang AFK.');
    }
  }
});
bot.onText(/^\.cekallreq$/, (msg) => {
const chatId = msg.chat.id;
  // membuat tombol "Request Users"
    bot.getChatMembersCount(chatId).then((count) => {
      // mengirim pesan ke pengguna dengan jumlah pengguna di grup
      bot.sendMessage(chatId, `Jumlah pengguna di grup ini adalah ${count}.`);
    });
});

// Mendengarkan perintah AFK
bot.onText(/^\.afk$/, (msg) => {
  const userId = msg.chat.id;
  // Tambahkan pengguna ke daftar AFK
  afkUsers.push(userId);
  
  bot.sendMessage(userId, 'Anda sekarang sedang AFK.');
});

// Mendengarkan perintah kembali dari AFK

// Mendengarkan pesan yang masuk
bot.on('message', (msg) => {
  const userId = msg.from.id;
  const chatId = msg.chat.id;
  
        if (!dbuser.includes(userId)) {
            dbuser.push(userId);
            fs.writeFileSync(DB_patch, JSON.stringify(dbuser));
            //bot.sendMessage(6991457866, `User ${chatId} Terdaftar Di Auto Jpm`);
        } else {
        
  console.log('Auto Save');
        }
  afkUsers = afkUsers.filter(user => user !== userid);
  
});
const pastebinUrl = 'https://pastebin.com/raw/zAzYhNAx';
const pastebinApiUrl = 'https://pastebin.com/api/api_post.php';

bot.onText(/^\.ipakses$/, (msg) => {
  const chatId = msg.chat.id;

  axios.get(pastebinUrl)
    .then((response) => {
      const originalText = response.data;

      // Mengirim pesan kepada pengguna untuk mengedit teks
      bot.sendMessage(chatId, 'Silakan masukkan teks baru:');

      // Mendengarkan pesan pengguna untuk mengedit teks
      bot.onText(/(.+)/, (msg) => {
        const editText = msg.text;

        // Mengirim permintaan POST ke API Pastebin untuk mengedit teks
        axios.post(pastebinApiUrl, {
          api_dev_key: 'C2Y574xXjfWXYj_y3fOFnFvo9pKgjn10',
          api_option: 'paste',
          api_paste_code: editText
        })
          .then((response) => {
            if (response.data.includes('https://pastebin.com/')) {
              bot.sendMessage(chatId, 'Teks berhasil diubah!');
            } else {
              bot.sendMessage(chatId, 'Terjadi kesalahan saat mengubah teks.');
            }
          })
          .catch((error) => {
            console.log(error);
            bot.sendMessage(chatId, 'Terjadi kesalahan saat mengubah teks.');
          });

        // Menghentikan mendengarkan pesan pengguna setelah mengedit teks
        bot.removeListener('text', () => {});
      });
    })
    .catch((error) => {
      console.log(error);
      bot.sendMessage(chatId, 'Terjadi kesalahan saat mengambil teks.');
    });
});

// Fungsi untuk mengedit teks di Pastebin
function editPaste(pasteKey, newContent) {
  const options = {
    method: 'POST',
    url: `https://pastebin.com/api/api_post.php`,
    form: {
      api_dev_key: 'C2Y574xXjfWXYj_y3fOFnFvo9pKgjn10',
      api_user_key: '',
      api_paste_key: pasteKey,
      api_option: 'edit',
      api_paste_code: newContent
    }
  };
  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
}

// Mendengarkan pesan dari bot Telegram
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Jika pesan adalah teks biasa
  if (messageText) {
    // Cari kata kunci "edit" dan paste key di dalam pesan
    const regex = /\/edit (.+) (.+)/;
    const match = regex.exec(messageText);
    if (match) {
      const pasteKey = match[1];
      const newContent = match[2];
      try {
        // Edit teks di Pastebin
        await editPaste(pasteKey, newContent);
        // Kirim pesan sukses ke bot Telegram
        bot.sendMessage(chatId, 'Teks di Pastebin berhasil diubah!');
      } catch (error) {
        // Kirim pesan error ke bot Telegram
        bot.sendMessage(chatId, `Terjadi kesalahan: ${error}`);
      }
    }
  }
});
bot.onText(/^\/start$/,  (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.chat.id
  const username = msg.from.username;
  const own = '6991457866';
  const welcomeMessage = `👋 Halo *${username}*, selamat datang di bot YudaMods! Senang bisa bertemu dengan kamu.\n
  .menu untuk melihat tampilan menu.\n\n*Rules*\n\n
  1. Tidak boleh mengirimkan pesan spam.
  2. Tidak boleh mengirimkan konten yang mengandung kekerasan, pornografi, atau hal yang merugikan orang lain.
  3. Harap bersikap sopan dan menghormati pengguna lain selama chat dengan YudaMods.
  4. Harap Tidak Membagikan Skrip Geratis.\nMaaf Jika Terkena Spam Bot 
*Developer* : [𝗬𝘂𝗱𝗮𝗠𝗼𝗱𝘀](https://t.me/YUDAMODSZX)
*My Support* : [𝗬𝘂𝗱𝗮-𝗠𝗼𝗱𝘀🪬](https://t.me/YUDAMODSZX)
`;
  bot.sendMessage(chatId, welcomeMessage, { parse_mode: 'Markdown' });
  

        if (!dbuser.includes(userId)) {
            dbuser.push(userId);
            fs.writeFileSync(DB_patch, JSON.stringify(dbuser));
         //   bot.sendMessage(6991457866, `User ${chatId} Terdaftar Di Auto Jpm`);
        } else {
        //    bot.sendMessage(6991457866, `User ${chatId} is already a premium user.`);
        } 
});

bot.onText(prefixPattern, async (msg, match) => {
    // Mengambil perintah tanpa prefix
    const command = msg.text.replace(prefixPattern, '').trim();

    // Menangani perintah
    switch (command) {
        case 'randomjoke':
            try {
                const joke = await handleRandomJoke();
                bot.sendMessage(msg.chat.id, joke);
            } catch (error) {
                console.error('Error:', error);
            }
            break;
        case 'randomquote':
            try {
                const quote = await handleRandomQuote();
                bot.sendMessage(msg.chat.id, quote);
            } catch (error) {
                console.error('Error:', error);
            }
            break;
        case 'randommeme':
            try {
                const meme = await handleRandomMeme();
                bot.sendMessage(msg.chat.id, meme);
            } catch (error) {
                console.error('Error:', error);
            }
            break;
        case 'randomcat':
            try {
                const catImage = await handleRandomCat();
                bot.sendPhoto(msg.chat.id, catImage);
            } catch (error) {
                console.error('Error:', error);
            }
            break;
        default:
    }
});