// código creado por @Wilmer OFC 
// código parchado por @Wilmer
// https://github.com/Wilsmac
let handler = async (m, { text, conn, usedPrefix, command }) => {
let why = `*𝑹𝑬𝑪𝑼𝑬𝑹𝑫𝑨 𝑬𝑻𝑰𝑸𝑼𝑻𝑨𝑹 𝑨𝑳𝑨 𝑷𝑬𝑹𝑺𝑶𝑵𝑨 𝑸𝑼𝑬 𝑸𝑼𝑰𝑬𝑹𝑬 𝑸𝑼𝑬 𝑩𝑳𝑶𝑸𝑼𝑬𝑬😿*\n*𝑬𝑱𝑬𝑴𝑷𝑳𝑶:*\n${usedPrefix + command} @${m.sender.split("@")[0]}`
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
if (!who) conn.reply(m.chat, why, m, { mentions: [m.sender] })
let res = [];
console.log(command)

switch (command) {
case "blok":
case "block":
case "bloquear":		
if (who) await conn.updateBlockStatus(who, "block").then(() => {
res.push(who);
})
else conn.reply(m.chat, why, m, { mentions: [m.sender] })
break

case "unblok":
case "unblock":
case "desbloquear":
if (who) await conn.updateBlockStatus(who, "unblock").then(() => {
res.push(who);
})
else conn.reply(m.chat, why, m, { mentions: [m.sender] })
break
}
if (res[0]) conn.reply(m.chat, `*𝑶𝑹𝑫𝑬𝑵𝑬𝑺 𝑹𝑬𝑺𝑰𝑽𝑰𝑫𝑨𝑺🌺🌹*\n*${command} ${res ? `${res.map(v => '@' + v.split("@")[0])}` : ''}*`, m, { mentions: res })
}
handler.help = ["block", "unblock"]
handler.tags = ["owner"]
handler.command = /^(block|unblock|bloquear|desbloquear)$/i
handler.owner = true

export default handler
//𝑯𝒐𝒍𝒂, 𝑸𝒖𝒆 𝒕𝒆𝒏𝒈𝒂𝒔 𝒖𝒏 𝒍𝒊𝒏𝒅𝒐 𝒅𝒊́𝒂
// Ｏ(≧∇≦)Ｏ
