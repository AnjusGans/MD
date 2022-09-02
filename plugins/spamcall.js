let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix }) => {

  if (!text) throw `Contoh Penggunaan\n${usedPrefix}spamcall 628xxxxxxxx`

  let nomor = text.replace(/[^0-9]/gi, '').slice(2)

  if (!nomor.startsWith('8')) throw `Contoh Penggunaan\n${usedPrefix}spamcall 628xxxxxxxx`
  
  m.reply('_*Tunggu permintaan anda sedang diproses.....*_')

  let anu = await fetch(`https://xteam.xyz/spammer/pizzahut?no=${nomor}&APIKEY=Dawnfrostkey`).then(a => a.json())
  
  let spcall = `Kenn berhasil menelpon ${nomor}_`
  
  conn.reply(anu)
  conn.reply(m.chat, `${spcall}`.trim(), m)

  }

handler.help = ['spamcall <nomor>']

handler.tags = ['tools']

handler.command = /^(spamcall)$/i

handler.limit = false
handler.premium = true
handler.group = false

module.exports = handler
