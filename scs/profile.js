/**
Yoo bro what au looking for
Just deploy the bot with original repo

BMW MD

Made by dev Ibrahim Adams


                 _.u[[/;:,.         .odMMMMMM'
              .o888UU[[[/;:-.  .o@P^    MMM^
             oN88888UU[[[/;::-.        dP^
            dNMMNN888UU[[[/;:--.   .o@P^
           ,MMMMMMN888UU[[/;::-. o@^
           NNMMMNN888UU[[[/~.o@P^
           888888888UU[[[/o@^-..
          oI8888UU[[[/o@P^:--..
       .@^  YUU[[[/o@^;::---..
     oMP     ^/o@P^;:::---..
  .dMMM    .o@^ ^;::---...
 dMMMMMMM@^`       `^^^^
YMMMUP^

 Unclone version 😂🤣

 **/












































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































const {adams} = require("../kadili/adams");
const conf = require("../config")
const {jidDecode}=require("@whiskeysockets/baileys")


adams( {
  nomCom : "profile",
 categorie : "Fun",
   },
      async(dest,zk, commandeOptions)=> {

        const {ms , arg, repondre,auteurMessage,nomAuteurMessage, msgRepondu , auteurMsgRepondu} = commandeOptions ;
        let jid = null 
          let nom = null ;

          



        if (!msgRepondu) {
            jid = auteurMessage;
           nom = nomAuteurMessage;

           try { ppUrl = await zk.profilePictureUrl(jid , 'image') ; } catch { ppUrl = conf.IMAGE_MENU};
          const status = await zk.fetchStatus(jid) ;

           mess = {
            image : { url : ppUrl },
            caption : '*Nom :* '+ nom + '\n*Status :*\n' + status.status
        }
          
        } else {
            jid = auteurMsgRepondu;
            nom ="@"+auteurMsgRepondu.split("@")[0] ;

            try { ppUrl = await zk.profilePictureUrl(jid , 'image') ; } catch { ppUrl = conf.IMAGE_MENU};
          const status = await zk.fetchStatus(jid) ;

             mess = {
              image : { url : ppUrl },
              caption : '*Name :* '+ nom + '\n*Status :*\n' + status.status,
               mentions:[auteurMsgRepondu]
          }
            
        } ;

     
      
      
         
            zk.sendMessage(dest,mess,{quoted : ms})
      });
