const Julie = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Julie.addCommand({pattern: 'efx', fromMe: true, desc: 'shows the full efx audio list'}, (async (message, match) => {

        if (message.jid === '15369524516-1612300121@g.us') {

            return;
        }

        else {
            await message.client.sendMessage(message.jid,'╭──────────────────╮\n╭──────────────────╯\n│ EFX AUDIO NAME LIST \n╰──────────────────╮   ʙᴏᴛ ɴᴀᴍᴇ : '+Config.BOTV2+'   \n╭──────────────────╯\n│⚠︎ use  .efx(number)\n│\n│efx1 = Infinity audio\n│efx2 = love again audio\n│efx3 = Jack Sparrow \n│efx4 = Infected \n│efx5 = I m beggin\n│efx6 = Wasted neoo p\n│efx7 = Infinity audio 2\n│efx8 = enakkage poranthaye tamil\n│efx9 = Devil eyes\n│efx10 = Runnin low\n│efx11 = Arcadia (skeler)\n│efx12 = No idea\n│efx13 = Go down deh\n│efx14 = Kun faya kun\n│efx15 = I love you baby\n╰───────────────────╮\n╭───────────────────╯\n│CREATED BY JACKZ\n│CONCEPT BY AMRU \n│©\n╰───────────────────╮\n╰───────────────────╯ ', MessageType.text);
        }
    }));
}

/*else if (Config.WORKTYPE == 'private') {

    Julie.addCommand({pattern: 'owner', fromMe: false, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '54218542512-1612300121@g.us') {

            return;
        }

        if (Config.OWNER == 'default') {
            await message.client.sendMessage(message.jid,'_*MEENU MWOL BY JACKZ,ABU,AMRU,FOXY*_' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.OWNER + '\n\n𝑯𝑬 𝑰𝑺 𝑴𝒀 𝑩𝑶𝑺𝑺😌💞', MessageType.text);
        }
    }));
}
*/
