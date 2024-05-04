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
async function handleallmenu(bot) {

//___________ ┏  LIST COMMAND  ┓ ___________\\

// Handle Event command 'menu'
bot.onText(/\.menu/, (msg) => {
    const chatId = msg.chat.id;
    const sender = msg.from.username;
    const name = msg.from.first_name;
    const menuText = `
 *YudaMods Botz* 🇮🇩
     *Prefixes* : \`.\`
\n*Developer*   : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)\n*My Support* : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)
`;


// Event listener for button 'menu'
bot.on('callback_query', (callbackQuery) => {
    if (callbackQuery.data === 'menu') {
        const chatId = callbackQuery.message.chat.id;
        const startTime = Date.now();

        const menuText = `
 *YudaMods Botz* 🇮🇩
     *Prefixes* : \`.\`

\n*Developer*   : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)\n*My Support* : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)\n
*silahkan ketik* \`.menu\` *untuk membuka menu ulang.*`;
 const message = menuText;
 const keyboard = {
            reply_markup: {
               inline_keyboard: [
            [{ text: '𝗔𝗱𝗱', callback_data: 'add' }, 
            { text: '𝗢𝘄𝗻𝗲𝗿', callback_data: 'owner' }],
            [{ text: '𝗣𝗮𝗻𝗲𝗹', callback_data: 'panel' }, 
            { text: '𝗧𝗼𝗼𝗹𝘀', callback_data: 'tools' }],
            [{ text: '𝗙𝘂𝗻', callback_data: 'fun' }, 
            { text: '𝗦𝘂𝗯𝗱𝗼', callback_data: 'subdo' }],
            [{ text: '⪻', callback_data: '4mnu' }, 
            { text: 'ⓧ', callback_data: 'menu' },
            { text: '⪼', callback_data: '2mnu' }],        
                ]
            }
        };
        bot.answerCallbackQuery(callbackQuery.id);
        bot.editMessageText(message, {
            chat_id: chatId,
            message_id: callbackQuery.message.message_id,
            reply_markup: keyboard,
            parse_mode: 'Markdown'
        });
    }
});

const message = menuText;
const keyboard = {
  reply_markup: {
  inline_keyboard: [               
            [{ text: '𝗔𝗱𝗱', callback_data: 'add' }, 
            { text: '𝗢𝘄𝗻𝗲𝗿', callback_data: 'owner' }],
            [{ text: '𝗣𝗮𝗻𝗲𝗹', callback_data: 'panel' }, 
            { text: '𝗧𝗼𝗼𝗹𝘀', callback_data: 'tools' }],
            [{ text: '𝗙𝘂𝗻', callback_data: 'fun' }, 
            { text: '𝗦𝘂𝗯𝗱𝗼', callback_data: 'subdo' }],
            [{ text: '⪻', callback_data: '4mnu' }, 
            { text: 'ⓧ', callback_data: 'menu' },
            { text: '⪼', callback_data: '2mnu' }], 
           ]
        },
  parse_mode: 'Markdown'
    };  
    bot.sendMessage(chatId, message, keyboard );
});

// Handle Event command 'v2menu'
bot.onText(/\.v2menu/, (msg) => {
    const chatId = msg.chat.id;
    const sender = msg.from.username;
    const name = msg.from.first_name;
    const menuText = `
 *YudaMods Botz* 🇮🇩
     *Prefixes* : \`.\`
\n*Developer*   : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)\n*My Support* : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)
`;

// Event listener for button 'v2menu'
bot.on('callback_query', (callbackQuery) => {
    if (callbackQuery.data === '2menu') {
        const chatId = callbackQuery.message.chat.id;
        const startTime = Date.now();
        const menuText = `
 *YudaMods Botz* 🇮🇩
     *Prefixes* : \`.\`

\n*Developer*   : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)\n*My Support* : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)\n
*silahkan ketik* \`.menu\` *untuk membuka menu ulang.*`;
 const message = menuText;
 const keyboard = {
            reply_markup: {
               inline_keyboard: [
            [{ text: '𝗚𝗿𝗼𝘂𝗽', callback_data: 'group' }, 
            { text: '𝗦𝘁𝗮𝗹𝗸', callback_data: 'stalk' }],
            [{ text: '𝗔𝗶', callback_data: 'ai' }, 
            { text: '𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱', callback_data: 'download' }],
            [{ text: '𝗖𝗿𝗮𝘀𝗵', callback_data: 'crash' }, 
            { text: '𝗧𝗲𝗺𝗽𝗼𝗿', callback_data: 'tempor' }],
            [{ text: '⪻', callback_data: '1mnu' }, 
            { text: 'ⓧ', callback_data: 'menu' },
            { text: '⪼', callback_data: '3mnu' }],   
                ]
            }
        };
        bot.answerCallbackQuery(callbackQuery.id);
        bot.editMessageText(message, {
            chat_id: chatId,
            message_id: callbackQuery.message.message_id,
            reply_markup: keyboard,
            parse_mode: 'Markdown'
        });
    }
});

const message = menuText;
const keyboard = {
  reply_markup: {
  inline_keyboard: [               
            [{ text: '𝗚𝗿𝗼𝘂𝗽', callback_data: 'group' }, 
            { text: '𝗦𝘁𝗮𝗹𝗸', callback_data: 'stalk' }],
            [{ text: '𝗔𝗶', callback_data: 'ai' }, 
            { text: '𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱', callback_data: 'download' }],
            [{ text: '𝗖𝗿𝗮𝘀𝗵', callback_data: 'crash' }, 
            { text: '𝗧𝗲𝗺𝗽𝗼𝗿', callback_data: 'tempor' }],
            [{ text: '⪻', callback_data: '1mnu' }, 
            { text: 'ⓧ', callback_data: 'menu' },
            { text: '⪼', callback_data: '3mnu' }], 
           ]
        },
  parse_mode: 'Markdown'
    };  
    bot.sendMessage(chatId, message, keyboard );
});

// Handle Event command 'v3menu'
bot.onText(/\.v3menu/, (msg) => {
    const chatId = msg.chat.id;
    const sender = msg.from.username;
    const name = msg.from.first_name;
    const menuText = `
 *YudaMods Botz* 🇮🇩
     *Prefixes* : \`.\`
\n*Developer*   : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)\n*My Support* : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)
`;

// Event listener for button 'v3menu'
bot.on('callback_query', (callbackQuery) => {
    if (callbackQuery.data === '3menu') {
        const chatId = callbackQuery.message.chat.id;
        const startTime = Date.now();
        const menuText = `
 *YudaMods Botz* 🇮🇩
     *Prefixes* : \`.\`

\n*Developer*   : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)\n*My Support* : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)\n
*silahkan ketik* \`.menu\` *untuk membuka menu ulang.*`;
 const message = menuText;
 const keyboard = {
            reply_markup: {
               inline_keyboard: [
            [{ text: '𝗗𝗱𝗼𝘀', callback_data: 'ddos' }, 
            { text: '𝗣𝗮𝘆𝗺𝗲𝗻𝘁', callback_data: 'payment' }],
            [{ text: '𝗝𝗽𝗺', callback_data: 'jpm' }, 
            { text: '𝗦𝗲𝗮𝗿𝗰𝗵', callback_data: 'search' }],
            [{ text: '𝗔𝘀𝘂𝗽𝗮𝗻', callback_data: 'asupan' }, 
            { text: '𝗧𝗲𝗯𝗮𝗸', callback_data: 'tebak' }],
            [{ text: '⪻', callback_data: '2mnu' }, 
            { text: 'ⓧ', callback_data: 'menu' },
            { text: '⪼', callback_data: '4mnu' }],  
                ]
            }
        };
        bot.answerCallbackQuery(callbackQuery.id);
        bot.editMessageText(message, {
            chat_id: chatId,
            message_id: callbackQuery.message.message_id,
            reply_markup: keyboard,
            parse_mode: 'Markdown'
        });
    }
});
  
const message = menuText;
const keyboard = {
  reply_markup: {
  inline_keyboard: [               
            [{ text: '𝗗𝗱𝗼𝘀', callback_data: 'ddos' }, 
            { text: '𝗣𝗮𝘆𝗺𝗲𝗻𝘁', callback_data: 'payment' }],
            [{ text: '𝗝𝗽𝗺', callback_data: 'jpm' }, 
            { text: '𝗦𝗲𝗮𝗿𝗰𝗵', callback_data: 'search' }],
            [{ text: '𝗔𝘀𝘂𝗽𝗮𝗻', callback_data: 'asupan' }, 
            { text: '𝗧𝗲𝗯𝗮𝗸', callback_data: 'tebak' }],
            [{ text: '⪻', callback_data: '2mnu' }, 
            { text: 'ⓧ', callback_data: 'menu' },
            { text: '⪼', callback_data: '4mnu' }],  
           ]
        },
      parse_mode: 'Markdown'
    };  
    bot.sendMessage(chatId, message, keyboard );
});

// Handle Event command 'v4menu'
bot.onText(/\.v4menu/, (msg) => {
    const chatId = msg.chat.id;
    const sender = msg.from.username;
    const name = msg.from.first_name;
    const menuText = `
 *YudaMods Botz* 🇮🇩
     *Prefixes* : \`.\`
\n*Developer*   : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)\n*My Support* : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)
`;

// Event listener for button 'v4menu'
bot.on('callback_query', (callbackQuery) => {
    if (callbackQuery.data === '4menu') {
        const chatId = callbackQuery.message.chat.id;
        const startTime = Date.now();
        const menuText = `
 *YudaMods Botz* 🇮🇩
     *Prefixes* : \`.\`
\n*Developer*   : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)\n*My Support* : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)\n
*silahkan ketik* \`.menu\` *untuk membuka menu ulang.*`;
 const message = menuText;
 const keyboard = {
            reply_markup: {
               inline_keyboard: [
            [{ text: '𝗠𝗮𝗸𝗲𝗿', callback_data: 'maker' }, 
            { text: '𝗟𝗼𝗴𝗼', callback_data: 'logo' }],
            [{ text: '⪻', callback_data: '3mnu' }, 
            { text: 'ⓧ', callback_data: 'menu' },
            { text: '⪼', callback_data: '1mnu' }],   
                ]
            }
        };
        bot.answerCallbackQuery(callbackQuery.id);
        bot.editMessageText(message, {
            chat_id: chatId,
            message_id: callbackQuery.message.message_id,
            reply_markup: keyboard,
            parse_mode: 'Markdown'
        });
    }
});
  
const message = menuText;
const keyboard = {
  reply_markup: {
  inline_keyboard: [               
            [{ text: '𝗠𝗮𝗸𝗲𝗿', callback_data: 'maker' }, 
            { text: '𝗟𝗼𝗴𝗼', callback_data: 'logo' }],
            [{ text: '⪻', callback_data: '3mnu' }, 
            { text: 'ⓧ', callback_data: 'menu' },
            { text: '⪼', callback_data: '1mnu' }],   
           ]
        },
      parse_mode: 'Markdown'
    };  
    bot.sendMessage(chatId, message, keyboard );
});

// Event listener for button '1menu'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === '1mnu') {
    bot.answerCallbackQuery(callbackQuery.id);
    const v2menuMessage = "*YudaMods Botz* 🇮🇩\n\n*Developer*   : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)\n*My Support* : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)";
    bot.editMessageText(v2menuMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
            [{ text: '𝗔𝗱𝗱', callback_data: 'add' }, 
            { text: '𝗢𝘄𝗻𝗲𝗿', callback_data: 'owner' }],
            [{ text: '𝗣𝗮𝗻𝗲𝗹', callback_data: 'panel' }, 
            { text: '𝗧𝗼𝗼𝗹𝘀', callback_data: 'tools' }],
            [{ text: '𝗙𝘂𝗻', callback_data: 'fun' }, 
            { text: '𝗦𝘂𝗯𝗱𝗼', callback_data: 'subdo' }],
            [{ text: '⪻', callback_data: '4mnu' }, 
            { text: 'ⓧ', callback_data: 'menu' },
            { text: '⪼', callback_data: '2mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button '2mnu'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === '2mnu') {
    bot.answerCallbackQuery(callbackQuery.id);
    const v2menuMessage = "*YudaMods Botz* 🇮🇩\n\n*Developer*   : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)\n*My Support* : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)";
    bot.editMessageText(v2menuMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
            [{ text: '𝗚𝗿𝗼𝘂𝗽', callback_data: 'group' }, 
            { text: '𝗦𝘁𝗮𝗹𝗸', callback_data: 'stalk' }],
            [{ text: '𝗔𝗶', callback_data: 'ai' }, 
            { text: '𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱', callback_data: 'download' }],
            [{ text: '𝗖𝗿𝗮𝘀𝗵', callback_data: 'crash' }, 
            { text: '𝗧𝗲𝗺𝗽𝗼𝗿', callback_data: 'tempor' }],
            [{ text: '⪻', callback_data: '1mnu' }, 
            { text: 'ⓧ', callback_data: 'menu' },
            { text: '⪼', callback_data: '3mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button '3menu'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === '3mnu') {
    bot.answerCallbackQuery(callbackQuery.id);
    const v2menuMessage = "*YudaMods Botz* 🇮🇩\n\n*Developer*   : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)\n*My Support* : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)";
    bot.editMessageText(v2menuMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
            [{ text: '𝗗𝗱𝗼𝘀', callback_data: 'ddos' }, 
            { text: '𝗣𝗮𝘆𝗺𝗲𝗻𝘁', callback_data: 'payment' }],
            [{ text: '𝗝𝗽𝗺', callback_data: 'jpm' }, 
            { text: '𝗦𝗲𝗮𝗿𝗰𝗵', callback_data: 'search' }],
            [{ text: '𝗔𝘀𝘂𝗽𝗮𝗻', callback_data: 'asupan' }, 
            { text: '𝗧𝗲𝗯𝗮𝗸', callback_data: 'tebak' }],
            [{ text: '⪻', callback_data: '2mnu' }, 
            { text: 'ⓧ', callback_data: 'menu' },
            { text: '⪼', callback_data: '4mnu' }],   
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button '4menu'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === '4mnu') {
    bot.answerCallbackQuery(callbackQuery.id);
    const v2menuMessage = "*YudaMods Botz* 🇮🇩\n\n*Developer*   : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)\n*My Support* : [𝗬𝗨𝗗𝗔𝗠𝗢𝗗𝗦](https://t.me/YUDAMODSZX)";
    bot.editMessageText(v2menuMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
            [{ text: '𝗠𝗮𝗸𝗲𝗿', callback_data: 'maker' }, 
            { text: '𝗟𝗼𝗴𝗼', callback_data: 'logo' }],
            [{ text: '⪻', callback_data: '3mnu' }, 
            { text: 'ⓧ', callback_data: 'menu' },
            { text: '⪼', callback_data: '1mnu' }],   
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'add'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'add') {
    bot.answerCallbackQuery(callbackQuery.id);
    const addMessage = "*Bantuan Perintah Add*\n\n• *Perintah:* \`.addg\` *[id group]*\n\n• *Perintah:* \`.addowner\` *[id]*\n\n• *Perintah:* \`.delowner\` *[id]*\n\n• *Perintah:* \`.addprem\` *[id]*\n\n• *Perintah:* \`.delprem\` *[id]*\n\n• *Perintah:* \`.addseller\` *[id]*\n\n• *Perintah:* \`.delseller\` *[id]*\n\n• *Perintah:* \`.addtemp\` *[id]*\n\n• *Perintah:* \`.deltemp\` *[id]*\n\n. *Perintah: *\`.deltgc\` *[id]*\n\n. *Perintah: *\`.accgc\` *[id]*";
    bot.editMessageText(addMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '1mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'owner'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'owner') {
    bot.answerCallbackQuery(callbackQuery.id);
    const ownerMessage = "*Bantuan Perintah Owner*\n\n• *Perintah:* \`.script\` *[info script]*\n\n• *Perintah:* \`.daftar\` *[dftr database]*\n\n• *Perintah:* \`.ping\` *[info spek]*\n\n• *Perintah:* \`.informasi\` *[info sc]*\n\n• *Perintah:* \`.totaljs\` *[total file]*\n\n• *Perintah:* \`.totalfitur\` *[total fitur]*\n\n• *Perintah:* \`.runtime\` *[waktu on]*\n\n• *Perintah:* \`.testi\` *[testi owner]*\n\n• *Perintah:* \`.rules\` *[rules bot]*\n\n• *Perintah:* \`.donasi\` *[sedekah]*";
    bot.editMessageText(ownerMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '1mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'panel'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'panel') {
    bot.answerCallbackQuery(callbackQuery.id);
    const panelMessage = "*Bantuan Perintah Panel*\n\n• *Perintah:* \`.panel\` *[cara buat]*\n\n• *Perintah:* \`.ramlist\` *[ram yg bisa di buat]*\n\n• *Perintah:* \`.listsrv\` *[list server]*\n\n• *Perintah:* \`.delsrv\` *[del server]*\n\n• *Perintah:* \`.listadmin\` *[list adminp]*\n\n• *Perintah:* \`.createadmin\` *[c adminp]*\n\n• *Perintah:* \`.createadmin2\` *[c adminp2]*";
    bot.editMessageText(panelMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '1mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'tools'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'tools') {
    bot.answerCallbackQuery(callbackQuery.id);
    const toolsMessage = "*Bantuan Perintah Tools*\n\n• *Perintah:* \`.pinterest\` *[get foto pin]*\n\n• *Perintah:* \`.gimage\` *[foto teks]*\n\n• *Perintah:* \`.detiknews\` *[berita]*\n\n• *Perintah:* \`.people\` *[data orang]*\n\n• *Perintah:* \`.simi\` *[ai chat]*\n\n• *Perintah:* \`.gempa\` *[info gempa]*\n\n• *Perintah:* \`.infocuaca\` *[info cuaca]*\n\n• *Perintah:* \`.proxy\` *[search]*\n\n• *Perintah:* \`.quotesanime\` *[quotes]*\n\n• *Perintah:* \`.spamcall\` *[bugcall]*\n\n• *Perintah:* \`.ssweb\` *[foto web]*\n\n• *Perintah:* \`.ayat\` *[list ayat]*\n\n• *Perintah:* \`.bpurba\` *[bahasa p]*\n\n• *Perintah:* \`.hextostring\` *[string]*\n\n• *Perintah:* \`.speedtest\` *[-]*";
    bot.editMessageText(toolsMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '1mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'fun'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'fun') {
    bot.answerCallbackQuery(callbackQuery.id);
    const funMessage = "*Bantuan Perintah Fun*\n\n• *Perintah:* \`.namarandom\` *[-]*\n\n• *Perintah:* \`.random\` *[-]*\n\n• *Perintah:* \`.ppcp\` *[-]*\n\n• *Perintah:* \`.blackpink\` *[-]*\n\n• *Perintah:* \`.faktaunik\` *[-]*\n\n• *Perintah:* \`.attp\` *[-]*\n\n• *Perintah:* \`.manga\` *[-]*\n\n• *Perintah:* \`.caklontong\` *[-]*\n\n• *Perintah:* \`.ceritahoror\` *[-]*\n\n• *Perintah:* \`.doujindesu\` *[-]*\n\n• *Perintah:* \`.pantun\` *[-]*\n\n• *Perintah:* \`.whatmusik\` *[-]*\n\n• *Perintah:* \`.doujinsearch\` *[-]*\n\n• *Perintah:* \`.corona\` *[-]*\n\n• *Perintah:* \`.asupan\` *[-]*\n\n• *Perintah:* \`.kbbi\` *[-]*\n\n• *Perintah:* \`.pixiv\` *[-]*\n\n• *Perintah:* \`.katabijak\` *[-]*\n\n• *Perintah:* \`.storynime\` *[-]*\n\n• *Perintah:* \`.megumi\` *[-]*\n\n• *Perintah:* \`.artinama\` *[-]*\n\n• *Perintah:* \`.superhero\` *[-]*\n\n• *Perintah:* \`.cerpen\` *[-l]*\n\n• *Perintah:* \`.randomjoke\` *[-]*\n\n• *Perintah:* \`.randomquote\` *[-]*\n\n• *Perintah:* \`.randommeme\` *[-]*\n\n• *Perintah:* \`.randomcat\* *[-]*";
    bot.editMessageText(funMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '1mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'subdo'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'subdo') {
    bot.answerCallbackQuery(callbackQuery.id);
    const subdoMessage = "*Bantuan Perintah Subdomain*\n\n• *Perintah:* \`.d1\` *[subdomain]*\n*[ip]*\n\n• *Perintah:* \`.d2\` *[subdomain]*\n*[ip]*\n\n• *Perintah:* \`.d3\` *[subdomain]*\n*[ip]*\n\n• *Perintah:* \`.d4\` *[subdomain]*\n*[ip]*\n\n• *Perintah:* \`.d5\` *[subdomain]*\n*[ip]*\n\n• *Perintah:* \`.d6\` *[subdomain]*\n*[ip]*\n\n• *Perintah:* \`.d7\` *[subdomain]*\n*[ip]*\n\n• *Perintah:* \`.d8\` *[subdomain]*\n*[ip]*\n\n• *Perintah:* \`.d9\` *[subdomain]*\n*[ip]*\n\n• *Perintah:* \`.d10\` *[subdomain]*\n*[ip]*\n\n• *Perintah:* \`.d11\` *[subdomain]*\n*[ip]*\n\n𝗗𝗮𝗳𝘁𝗮𝗿 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 :  \n\n .d1 panelprivv.xyz ✓\n .d2 mypanell.biz.id ✓\n .d3 cpanel-vip.my.id ✓\n .d4 r0ulxye4.my.id ✓\n .d5 lanzpanel.my.id ✓ \n .d6 panellprivate.my.id ✓\n .d7 panellstore.site ✓\n .d8 plerkuda.my.id ✓\n .d9 cafegt.my.id ✓\n .d10 kangpanel.biz.id ✓\n .d11 adminpanel.biz.id ✓\n  \n 𝗧𝗼𝘁𝗮𝗹 𝗦𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻 𝗔𝗸𝘁𝗶𝗳 𝗔𝗱𝗮𝗹𝗮𝗵 𝟭𝟭\n\nfσund α вug? plєαsє rєpσrt thє dєvєlσpєr.\ncσntαct thє σwnєr : @YUDAMODSZX";
    bot.editMessageText(subdoMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '1mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'group'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'group') {
    bot.answerCallbackQuery(callbackQuery.id);
    const groupMessage = "*Bantuan Perintah Group*\n\n• *Perintah:* \`.add\` *[id]*\n\n• *Perintah:* \`.kick\` *[id]*\n\n• *Perintah:* \`.antilinktele\` *[on/off]*\n\n• *Perintah:* \`.admin\` *[-]*\n\n• *Perintah:* \`.setwelcome\` *[text]*\n\n• *Perintah:* \`.setleft\` *[text]*\n\n• *Perintah:* \`.ban\` *[id]*\n\n• *Perintah:* \`.unban\` *[id]*\n\n• *Perintah:* \`.ress\` *[-]*\n\n• *Perintah:* \`.sett\` *[-]*\n\n• *Perintah:* \`.buatlink\` *[-]*\n\n• *Perintah:* \`.editlink\` *[-]*\n\n• *Perintah:* \`.revolink\` *[-]*\n\n• *Perintah:* \`.dellphoto\` *[-]*\n\n• *Perintah:* \`.approall\` *[-]*\n\n• *Perintah:* \`.settitlegroup\` *[-]*\n\n• *Perintah:* \`.delic\` *[-]*";
    bot.editMessageText(groupMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '2mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'stalk'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'stalk') {
    bot.answerCallbackQuery(callbackQuery.id);
    const stalkMessage = "*Bantuan Perintah Stalk*\n\n• *Perintah:* \`.stalkff\` *[id epep]*\n\n• *Perintah:* \`.stalkig\` *[usr ig]*\n\n• *Perintah:* \`.stalktt\` *[usr tt]*";
    bot.editMessageText(stalkMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '2mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'ai'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'ai') {
    bot.answerCallbackQuery(callbackQuery.id);
    const aiMessage = "*Bantuan Perintah Ai*\n\n• *Perintah:* \`.ai\` *[-]*\n\n• *Perintah:* \`.cai\` *[-]*\n\n• *Perintah:* \`.roboguru\` *[-]*\n\n• *Perintah:* \`.wiki\` *[-]*";
    bot.editMessageText(aiMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '2mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'download'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'download') {
    bot.answerCallbackQuery(callbackQuery.id);
    const downloadMessage = "*Bantuan Perintah Download*\n\n• *Perintah:* \`.play\` *[judul]*\n\n• *Perintah:* \`.lirik\` *[judul]*\n\n• *Perintah:* \`.igdl\` *[link]*\n\n• *Perintah:* \`.soundcloud\` *[link]*\n\n• *Perintah:* \`.snackvideo\` *[link]*\n\n• *Perintah:* \`.cocofun\` *[link]*\n\n• *Perintah:* \`.smule\` *[link]*\n\n• *Perintah:* \`.ttmp4\` *[link]*\n\n• *Perintah:* \`.ttmp3\` *[link]*\n\n• *Perintah:* \`.ytmp4\` *[link]*\n\n• *Perintah:* \`.ytmp3\` *[link]*\n\n• *Perintah:* \`.spotify\` *[link]*";
    bot.editMessageText(downloadMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '2mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'crash'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'crash') {
    bot.answerCallbackQuery(callbackQuery.id);
    const crashMessage = "*Bantuan Perintah Crash*\n\n• *Perintah:* \`.crash1\` *[id]*\n\n• *Perintah:* \`.crash2\` *[id]*\n\n• *Perintah:* \`.crash3\` *[id]*\n\n• *Perintah:* \`.crash4\` *[id]*\n\n• *Perintah:* \`.crash5\` *[id]*";
    bot.editMessageText(crashMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '2mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'tempor'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'tempor') {
    bot.answerCallbackQuery(callbackQuery.id);
    const temporMessage = "*Bantuan Perintah Temp*\n\n• *Perintah:* \`.temp\` *[-]*\n\n• *Perintah:* \`.stop\` *[-]*";
    bot.editMessageText(temporMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '2mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'ddos'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'ddos') {
    bot.answerCallbackQuery(callbackQuery.id);
    const ddosMessage = "*Bantuan Perintah Ddos*\n\n• *Perintah:* \`.ddos\` *[-]*\n\n• *Perintah:* \`.ddosstop\` *[-]*\n\n• *Perintah:* \`.attack\` *[-]*\n\n• *Perintah:* \`.addddos\` *[-]*\n\n• *Perintah:* \`.delddos\` *[-]*\n\n• *Perintah:* \`.checkhost\` *[-]*";
    bot.editMessageText(ddosMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '3mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'payment'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'payment') {
    bot.answerCallbackQuery(callbackQuery.id);
    const paymentMessage = "*Bantuan Perintah Payment*\n\n• *Perintah:* \`.qris\` *[-]*\n\n• *Perintah:* \`.dana\` *[-]*\n\n• *Perintah:* \`.gopay\` *[-]*\n\n• *Perintah:* \`.ovo\` *[-]*\n\n• *Perintah:* \`.donasi\` *[-]*";
    bot.editMessageText(paymentMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '3mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'jpm'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'jpm') {
    bot.answerCallbackQuery(callbackQuery.id);
    const jpmMessage = "*Bantuan Perintah Jpm*\n\n• *Perintah:* \`.cekid\` *[-]*\n\n• *Perintah:* \`.idgroup\` *[-]*\n\n• *Perintah:* \`.joingc\` *[-]*\n\n• *Perintah:* \`.addgc\` *[-]*\n\n• *Perintah:* \`.broadcast\` *[-]*\n\n• *Perintah:* \`.bcfoto\` *[-]*";
    bot.editMessageText(jpmMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '3mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'search'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'search') {
    bot.answerCallbackQuery(callbackQuery.id);
    const sMessage = "*Bantuan Perintah Search*\n\n• *Perintah:* \`.spotifysearch\` *[judul]*\n\n• *Perintah:* \`.yts\` *[judul]*\n\n• *Perintah:* \`.xnxxserach\` *[judul]*";
    bot.editMessageText(sMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '3mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'asupan'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'asupan') {
    bot.answerCallbackQuery(callbackQuery.id);
    const asupanMessage = "*Bantuan Perintah Asupan*\n\n• *Perintah:* \`.nekopoi\` *[-]*\n\n• *Perintah:* \`.neko\` *[-]*\n\n• *Perintah:* \`.randomasupan\` *[-]*\n\n• *Perintah:* \`.bocil\` *[-]*\n\n• *Perintah:* \`.neko\` *[-]*\n\n• *Perintah:* \`.bokep` *[-]*\n\n• *Perintah:* \`.booty\` *[-]*\n\n• *Perintah:* \`.ecchi\` *[-]*\n\n• *Perintah:* \`.kanna\` *[-]*\n\n• *Perintah:* \`.megumin\` *[-]*";
    bot.editMessageText(asupanMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '3mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'tebak'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'tebak') {
    bot.answerCallbackQuery(callbackQuery.id);
    const tebakMessage = "*Bantuan Perintah Tebak*\n\n• *Perintah:* \`.tebak\` *[-]* n\n\n• *Perintah:* \`.family100\` *[-]*\n\n• *Perintah:* \`.tebaksimpel\` *[-]* n\n\n• *Perintah:* \`.tebaksulit\` *[-]* n\n\n• *Perintah:* \`.tebakgambar\` *[-]*";
    bot.editMessageText(tebakMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '3mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'maker'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'maker') {
    bot.answerCallbackQuery(callbackQuery.id);
    const MakerMessage = "*Bantuan Perintah Maker*\n\n• *Perintah:* \`.remini\` *[-]*\n\n• *Perintah:* \`.hd\` *[-]*\n\n• *Perintah:* \`.unblur\` *[-]*\n\n• *Perintah:* \`.removebg\` *[-]*\n\n• *Perintah:* \`.jadianime\` *[-]*\n\n• *Perintah:* \`.jadigta` *[-]*\n\n• *Perintah:* \`.jadizombie\` *[-]*\n\n• *Perintah:* \`.agedetect\` *[-]*";
    bot.editMessageText(MakerMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '4mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});

// Event listener for button 'logo'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'logo') {
    bot.answerCallbackQuery(callbackQuery.id);
    const LogoMessage = "*Bantuan Perintah Logo*\n\n• *Perintah:* \`.pornhub\` *[-]*\n\n• *Perintah:* \`.logowolf\` *[-]*\n\n• *Perintah:* \`.space\` *[-]*\n\n• *Perintah:* \`.glitch\` *[-]*\n\n• *Perintah:* \`.multicolor\` *[-]*\n\n• *Perintah:* \`.watercolor` *[-]*\n\n• *Perintah:* \`.glossy\` *[-]*\n\n• *Perintah:* \`.brokenglass\` *[-]*\n\n• *Perintah:* \`.neongreen\` *[-]*\n\n• *Perintah:* \`.neongalaxy\` *[-]*\n\n• *Perintah:* \`.neonlight\` *[-]*\n\n• *Perintah:* \`.valentine\` *[-]*\n\n• *Perintah:* \`.hallowen\` *[-]*\n\n• *Perintah:* \`.magma\` *[-]*\n\n• *Perintah:* \`.giraffe\` *[-]*";
    bot.editMessageText(LogoMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'BACK', callback_data: '4mnu' }], 
        ]
      },
   parse_mode: 'Markdown'
    });
  }
});
}

module.exports = handleallmenu;