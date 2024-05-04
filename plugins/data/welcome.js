const fs = require('fs');

let groups = [];
try {
    const data = fs.readFileSync('database/welcome.json', 'utf8');
    groups = JSON.parse(data);
} catch (err) {
    console.error('Error reading welcome data file:', err);
}

function saveGroupsToFile() {
    fs.writeFileSync('database/welcome.json', JSON.stringify(groups, null, 2));
}

module.exports = (bot) => {
    bot.onText(/^\/setwelcome(?: (.+))?$/, (msg, match) => {
        const chatId = msg.chat.id;

        bot.getChatAdministrators(chatId).then(admins => {
            const isAdmin = admins.some(admin => admin.user.id === msg.from.id);
            if (!isAdmin) {
                bot.sendMessage(chatId, 'Anda harus menjadi admin grup untuk menggunakan perintah ini.');
                return;
            }

            const newText = match[2].replace(/\\n/g, '\n')
                                      .replace(/{ID}/g, "{ID}")
                                      .replace(/{NAME}/g, "{NAME}")
                                      .replace(/{SURNAME}/g, "{SURNAME}")
                                      .replace(/{NAMESURNAME}/g, "{NAMESURNAME}")
                                      .replace(/{LANG}/g, "{LANG}")
                                      .replace(/{DATE}/g, "{DATE}")
                                      .replace(/{TIME}/g, "{TIME}")
                                      .replace(/{WEEKDAY}/g, "{WEEKDAY}")
                                      .replace(/{MENTION}/g, "{MENTION}")
                                      .replace(/{USERNAME}/g, "{USERNAME}")
                                      .replace(/{GROUPNAME}/g, "{GROUPNAME}");

            // Update welcome text for the group
            const groupIndex = groups.findIndex(group => group.IdGroup === chatId.toString());
            if (groupIndex !== -1) {
                groups[groupIndex].Text = newText;
                saveGroupsToFile();
                bot.sendMessage(chatId, 'Pesan sambutan telah diubah.');
            } else {
                bot.sendMessage(chatId, 'Grup tidak ditemukan dalam database.');
            }
        }).catch(error => {
            console.error('Error getting chat administrators:', error);
        });
    });
    bot.onText(/^\/listkata/, (msg) => {
        const chatId = msg.chat.id;
        const kataList = [
            "• {ID} = ID pengguna",
            "• {NAME} = nama pengguna",
            "• {SURNAME} = nama belakang pengguna",
            "• {NAMESURNAME} = nama dan nama belakang",
            "• {LANG} = bahasa pengguna",
            "• {DATE} = tanggal bergabung",
            "• {TIME} = waktu bergabung",
            "• {WEEKDAY} = hari mingguan",
            "• {MENTION} = menautkan ke profil pengguna",
            "• {USERNAME} = username pengguna",
            "• {GROUPNAME} = nama grup"
        ];
        const kataText = kataList.join("\n");
        bot.sendMessage(chatId, `Berikut adalah daftar placeholder yang dapat digunakan dalam pesan sambutan:\n${kataText}`);
    });


    bot.onText(/^\/welcome (true|false)/, (msg, match) => {
        const chatId = msg.chat.id;
        const newStatus = match[2] === 'true';

        const groupIndex = groups.findIndex(group => group.IdGroup === chatId.toString());
        if (groupIndex !== -1) {
            groups[groupIndex].welcome = newStatus;
            saveGroupsToFile();
            bot.sendMessage(chatId, `Welcome message is now ${newStatus ? 'enabled' : 'disabled'}.`);
        } else {
            bot.sendMessage(chatId, 'Group not found in database.');
        }
    });

    bot.on('new_chat_members', (msg) => {
        const chatId = msg.chat.id;
        const groupId = chatId.toString();
        const groupIndex = groups.findIndex(group => group.IdGroup === groupId);

        if (groupIndex !== -1 && groups[groupIndex].welcome) {
            const welcomeText = groups[groupIndex].Text;

            const formattedWelcomeText = welcomeText.replace(/{ID}/g, msg.from.id)
                                                      .replace(/{NAME}/g, msg.from.first_name)
                                                      .replace(/{SURNAME}/g, msg.from.last_name || "")
                                                      .replace(/{NAMESURNAME}/g, `${msg.from.first_name} ${msg.from.last_name || ""}`)
                                                      .replace(/{LANG}/g, msg.from.language_code || "")
                                                      .replace(/{DATE}/g, new Date(msg.date * 1000).toLocaleDateString())
                                                      .replace(/{TIME}/g, new Date(msg.date * 1000).toLocaleTimeString())
                                                      .replace(/{WEEKDAY}/g, new Date(msg.date * 1000).toLocaleDateString('en', { weekday: 'long' }))
                                                      .replace(/{MENTION}/g, `[${msg.from.first_name}](tg://user?id=${msg.from.id})`)
                                                      .replace(/{USERNAME}/g, `@${msg.from.username || ""}`)
                                                      .replace(/{GROUPNAME}/g, msg.chat.title);

            bot.sendMessage(chatId, formattedWelcomeText, { parse_mode: 'Markdown' });
        }
    });
};
