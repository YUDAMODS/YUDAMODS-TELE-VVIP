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

module.exports = (bot) => {
  bot.on('message', async (msg) => {
    const command = msg.text ? msg.text.toLowerCase() : '';

    if (command === '/cekapikey') {
      bot.sendMessage(msg.chat.id, 'Masukan api key yang ingin Anda cek, Contoh: /cekapikey ayaka');
    } else if (command.startsWith('/cekapikey ')) {
      const apiKey = command.split(' ')[1];
      await checkApiKey(apiKey, msg.chat.id, bot);
    }
  });
};

async function checkApiKey(apiKey, chatId, bot) {
  const apiUrl = `https://api.lolhuman.xyz/api/checkapikey?apikey=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const message = buildResponseMessage(response.data);
    bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
  } catch (error) {
    console.log(error);
    bot.sendMessage(chatId, 'Terjadi kesalahan saat melakukan pengecekan API key.');
  }
}

function buildResponseMessage(data) {
  if (data.status === 200) {
    const { username, requests, today, account_type, expired } = data.result;
    return `✅ *Status*: ${data.status}\n📝 *Message*: ${data.message}\n👤 *Username*: ${username}\n🔑 *Requests*: ${requests}\n📅 *Today*: ${today}\n💳 *Account Type*: ${account_type}\n⏰ *Expired*: ${expired}`;
  } else {
    return `❌ *Status*: ${data.status}\n📝 *Message*: ${data.message}`;
  }
}