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
function generatePassword(length = 12) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  let password = '';
  for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * charset.length);
      password += charset[index];
  }
  return password;
}

module.exports = (bot) => {
  bot.onText(/\/password/, (msg) => {
      const chatId = msg.chat.id;
      const passwords = Array.from({ length: 3 }, generatePassword);
      const message = `Ini beberapa password yang aman untuk kamu gunakan:\n\n${passwords.join('\n')}`;
      bot.sendMessage(chatId, message);
  });
};