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

async function fetchKBBI(query) {
  const apiUrl = `https://api.lolhuman.xyz/api/kbbi?apikey=${API_KEY}&query=${query}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Terjadi kesalahan saat melakukan pencarian di KBBI.');
  }
}

function formatMessage(data) {
  if (data.status !== 200) {
    return `*Status*: ${data.status}\n*Message*: ${data.message}`;
  }

  const { nama, makna } = data.result[0];
  let message = `📖 *${nama}*\n\n`;

  makna.forEach(({ kelas, submakna, contoh }) => {
    message += `_${kelas[0].nama}_\n${submakna.join(', ')}\n`;
    if (contoh.length > 0) {
      message += `Contoh: ${contoh.join(', ')}\n`;
    }
    message += '\n';
  });

  return message;
}

module.exports = (bot) => {
  bot.on('message', async (msg) => {
    const command = msg.text ? msg.text.toLowerCase() : '';

    if (command.startsWith('/kbbi ')) {
      const query = command.slice(6);

      try {
        const data = await fetchKBBI(query);
        const message = formatMessage(data);
        bot.sendMessage(msg.chat.id, message, { parse_mode: 'Markdown' });
      } catch (error) {
        bot.sendMessage(msg.chat.id, error.message);
      }
    } else if (command === '/kbbi') {
      bot.sendMessage(msg.chat.id, 'Masukan kata yang ingin Anda cek, Contoh: /kbbi kasabar');
    }
  });
};