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
const fetch = require('node-fetch');
const config = require('../../config');
const apifel = config.apilol;

module.exports = (bot) => {
  const sendMessage = (chatId, message) => bot.sendMessage(chatId, message);
  const apiUrlBase = `https://api.lolhuman.xyz/api/artinama?apikey=${apifel}&nama=`;

  bot.onText(/\.artinama(.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const nama = match[1].trim();

    if (!nama) {
      sendMessage(chatId, 'Masukan nama yang ingin Anda cek, Contoh: .artinama felix');
      return;
    }

    const apiURL = `${apiUrlBase}${nama}`;

    try {
      const response = await fetch(apiURL);
      const data = await response.json();

      const message = data.status === 200 ? data.result : 'Maaf, terjadi kesalahan saat memproses permintaan Anda.';
      sendMessage(chatId, message);
    } catch (error) {
      console.error(error);
      sendMessage(chatId, 'Maaf, terjadi kesalahan saat memproses permintaan Anda.');
    }
  });

  bot.onText(/^\.artinama$/, (msg) => {
    sendMessage(msg.chat.id, 'Masukan nama yang ingin Anda cek, Contoh: /artinama Viki');
  });
};