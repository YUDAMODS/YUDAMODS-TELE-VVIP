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
const API_KEY = config.apilol; // Sebaiknya simpan di file konfigurasi terpisah
const BASE_URL = 'https://api.lolhuman.xyz/api';

async function fetchQuranAyat(surahNumber) {
  const apiUrl = `${BASE_URL}/quran/${surahNumber}/1?apikey=${API_KEY}`;
  const response = await fetch(apiUrl);
  if (!response.ok) throw new Error('Network response was not ok.');
  return response.json();
}

async function sendAudio(bot, chatId, audioUrl) {
  try {
    const audioResponse = await fetch(audioUrl);
    const audioBuffer = await audioResponse.buffer();
    bot.sendAudio(chatId, audioBuffer);
  } catch (error) {
    console.error('Error sending audio:', error);
  }
}

function formatAyatData(data) {
  const { result } = data;
  const description = `Ayat: ${result.nomor}\nAsma: ${result.asma}\nSurah: ${result.surah}\nJumlah Ayat: ${result.jumlah_ayat}\nType: ${result.type}\nKeterangan: ${result.keterangan}`;
  const ayatList = result.ayat.map(ayat => `\nAyat: ${ayat.ayat}\nArab: ${ayat.arab}\nIndonesia: ${ayat.indonesia}\nLatin: ${ayat.latin}`).join('');
  return `${description}${ayatList}`;
}

module.exports = (bot) => {
  bot.onText(/\.ayat(.*)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const surahNumber = match[1].trim();

    if (!surahNumber) {
      bot.sendMessage(chatId, 'Masukan ayat, Contoh: /ayat 1');
      return;
    }

    try {
      const data = await fetchQuranAyat(surahNumber);
      if (data.status === 200) {
        await sendAudio(bot, chatId, data.result.audio);
        const message = formatAyatData(data);
        bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
      } else {
        bot.sendMessage(chatId, 'Maaf, terjadi kesalahan saat memproses permintaan Anda.');
      }
    } catch (error) {
      console.error('Error fetching ayat:', error);
      bot.sendMessage(chatId, 'Maaf, terjadi kesalahan saat memproses permintaan Anda.');
    }
  });
};