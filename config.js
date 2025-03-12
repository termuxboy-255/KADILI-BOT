const fs = require('fs-extra');
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname + '/config.env' });

module.exports = {
    session: process.env.SESSION_ID || '',
    PREFIX: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Kadili TECH",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "255xxxxx",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT: process.env.BOT_NAME || 'KADILI-BOT',
    URL: process.env.BOT_MENU_LINKS || 'https://i.ibb.co/TqTGZ0tm/IMG-20250303-WA0037.webp',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    WARN_COUNT: process.env.WARN_COUNT || '3',
    PRESENCE: process.env.PRESENCE || '',
    STARTING_BOT_MESSAGE: process.env.STARTING_BOT_MESSAGE || "no",
    ANTIDELETE: process.env.ANTIDELETE || 'yes',
    MENUTYPE: process.env.MENUTYPE || '1',
    ANTICALL: process.env.ANTICALL || 'no',
    AUTO_REACT: process.env.AUTO_REACT || 'no',
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'yes',
    AUTO_REPLY: process.env.AUTO_REPLY || 'no',
    AUTO_READ: process.env.AUTO_READ || 'no',
    AUTO_SAVE_CONTACTS: process.env.AUTO_SAVE_CONTACTS || 'no',
    AUTO_BIO: process.env.AUTO_BIO || 'yes',
    AUDIO_REPLY: process.env.AUDIO_REPLY || 'yes'
};

// Auto reload on file change
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`Mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
