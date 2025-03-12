const { adams } = require('../kadili/adams');

// Set a riddle list with questions and answers
const devinettes = [
  {
    "question": "Ninaweza kuruka bila mabawa, mimi ni nani?",
    "reponse": "Upepo 🌬️"
  },
  {
    "question": "Nina njaa kila wakati, kadri ninavyokula, ndivyo ninavyonenepa. Mimi ni nani?",
    "reponse": "Shimo jeusi 🕳️"
  },
  {
    "question": "Nikiwa chini nina nguvu, lakini nikisimama ninakuwa dhaifu. Mimi ni nani?",
    "reponse": "Namba 6 🔢"
  },
  {
    "question": "Naweza kuwa fupi au ndefu, ngumu au laini. Watoto na watu wazima wote wanaweza kunitumia. Mimi ni nani?",
    "reponse": "Penseli ✏️"
  },
  {
    "question": "Mimi ni mwanzo wa mwisho, mwisho wa kila mahali. Mimi ni mwanzo wa milele, mwisho wa muda na anga. Mimi ni nani?",
    "reponse": "Herufi 'E' 🔠"
  },
  {
    "question": "Nikiwa mchafu ni mweupe, nikiwa safi ni mweusi. Mimi ni nani?",
    "reponse": "Ubao wa kuandikia 🖍️"
  },
  {
    "question": "Mimi ni kimiminika, lakini ukiondoa maji kwangu, ninakuwa kigumu. Mimi ni nani?",
    "reponse": "Chai ☕"
  },
  {
    "question": "Naruka bila mabawa, nalia bila macho. Popote nilipo, kifo hunifuata. Mimi ni nani?",
    "reponse": "Upepo 💨"
  },
  {
    "question": "Nina miji lakini sina nyumba. Nina milima lakini sina miti. Nina maji lakini hakuna samaki. Mimi ni nani?",
    "reponse": "Ramani 🗺️"
  },
  {
    "question": "Ninaweza kusomwa lakini huwezi kuniandika. Watu hunipa kila mara lakini mara chache huweka kwako. Mimi ni nani?",
    "reponse": "Kitabu cha kukopa 📖"
  },
  {
    "question": "Naja mara mbili kwa wiki, mara moja kwa mwaka, lakini siwezi kuonekana katika siku moja. Mimi ni nani?",
    "reponse": "Herufi 'E' 🔡"
  },
  {
    "question": "Ni vigumu kunishika, lakini ukinipata utanihifadhi mkononi mwako. Mimi ni nani?",
    "reponse": "Pumzi yako 😮‍💨"
  },
  {
    "question": "Kadri ninavyopata joto, ndivyo ninavyokuwa baridi. Mimi ni nani?",
    "reponse": "Kahawa ☕"
  },
  {
    "question": "Mimi ni sehemu ya ndoto. Ninafunika mawazo yaliyovunjika. Ninabadilisha roho kuwa na mabawa. Mimi ni nani?",
    "reponse": "Kitabu 📚"
  },
  {
    "question": "Naweza kuruka bila mabawa na kulia bila macho. Mimi ni nani?",
    "reponse": "Wingu ☁️"
  },
  {
    "question": "Naanza usiku na kumaliza asubuhi. Mimi ni nani?",
    "reponse": "Herufi 'N' 🔤"
  },
  {
    "question": "Ninakula kila kitu kilicho karibu nami, hewa, ardhi, hata miti. Mimi ni nani?",
    "reponse": "Moto 🔥"
  }
  ];
  
adams({ nomCom: "riddle", categorie: "Games" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre } = commandeOptions;

  // Choose a random riddle
  const devinette = devinettes[Math.floor(Math.random() * devinettes.length)];
// Send the riddle question
  await zk.sendMessage(
    dest,
    {
      text: `Riddle: ${devinette.question} . \n you have 30 seconds to think about.`,
    },
    { quoted: ms }
  );

  //Wait 60 seconds before sending the response
  await delay(30000);

  // Answer
  await zk.sendMessage(
    dest,
    {
      text: `The answer was : ${devinette.reponse}`,
    },
    { quoted: ms }
  );
});

// Function to create a pause/delay in milliseconds
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
