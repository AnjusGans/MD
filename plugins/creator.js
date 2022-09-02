const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const noown = global.owner
const namown = 'Kenn Owner'
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: Kenn Owner
item.ORG: Kenn Owner
item1.TEL;waid=6281238142144:6281238142144@s.whatsapp.net
item1.X-ABLabel:Phone
item2.ADR:;;Dunia Animek;;;;
item2.X-ABADR:ac
item2.X-ABLabel:Asal
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER BOT', 
            contacts: [{ vcard }]  
        }
    }
)
let jarot = './src/avatar_contact.png'
await conn.send2ButtonImg(m.chat, jarot, `*Hai kak, itu no owner Kenn*`, 'KennMD', 'Sewa Bot', '.sewa', 'Back To Menu', '.menu', sentMsg)}
handler.help = ['owner2', 'creator2']
handler.tags = ['info']

handler.command = /^(owner|creator|pembuat|developer)$/i

module.exports = handler
