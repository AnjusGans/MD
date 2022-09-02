let fs = require('fs')
let handler = async (m, { conn, text }) => {
    m.reply('Wait!, Proses Getting Session')
    let sesi = await fs.readFileSync('./session.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'oscar.data.json' }, { quoted: m })
}
handler.help = ['getsessi']
handler.tags = ['owner']
handler.command = /^(getsession)$/i

handler.owner = true

module.exports = handler
