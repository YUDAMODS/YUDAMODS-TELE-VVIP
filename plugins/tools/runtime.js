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
function formatDuration(duration) {
  const seconds = Math.floor(duration % 60);
  const minutes = Math.floor((duration / 60) % 60);
  const hours = Math.floor((duration / (60 * 60)) % 24);

  const durationString = [];

  if (hours > 0) {
    durationString.push(`${hours} jam`);
  }

  if (minutes > 0) {
    durationString.push(`${minutes} menit`);
  }

  durationString.push(`${seconds} detik`);

  return durationString.join(', ');
}

module.exports = (bot) => {
  bot.onText(/\.runtime/, (msg) => {
      const uptime = process.uptime();
      const durationString = formatDuration(uptime);

      const response = `Bot telah aktif selama ${durationString}.`;
      bot.sendMessage(msg.chat.id, response);
  });
};