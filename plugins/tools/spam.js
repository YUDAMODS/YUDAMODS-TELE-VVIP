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
module.exports = (bot) => {
  const spamThreshold = 3 * 1000; // 3 seconds
  const spamMap = new Map();

  bot.on('message', (msg) => {
    const { chatId, senderName } = msg.from;
    const now = Date.now();

    if (spamMap.has(chatId) && now - spamMap.get(chatId) < spamThreshold) {
      bot.sendMessage(chatId, `bot mendeteksi spam, ${senderName} telah melakukan spam chat. Mohon untuk memberi jeda chat selama 3 detik.`);
      return;
    }

    spamMap.set(chatId, now);
  });
};