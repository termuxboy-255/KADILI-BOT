'use strict';

const axios = require('axios');
require('dotenv').config();

// Hakikisha ADAMS_URL inapatikana kwenye environment variables
const scriptUrl = process.env.ADAMS_URL || 'https://your-valid-url.com/script.js';

if (!scriptUrl || !scriptUrl.startsWith('http')) {
    console.error('Error: ADAMS_URL is not set or is invalid');
    process.exit(1);
}

function atbverifierEtatJid(jid) {
    if (!jid.endsWith('@s.whatsapp.net')) {
        console.error('Invalid JID format:', jid);
        return false;
    }
    console.log('JID verified:', jid);
    return true;
}

axios.get(scriptUrl)
    .then(response => {
        console.log('Script loaded successfully!');
        eval(response.data);
        
        const testJid = 'example@s.whatsapp.net';
        const isValidJid = atbverifierEtatJid(testJid);
        console.log('Is JID valid?', isValidJid);
    })
    .catch(error => {
        console.error('Error loading the script:', error.message);
    });
