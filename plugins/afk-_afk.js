let handler = m => m 
handler.before = async function (m, { text, args, usedPrefix, command, conn } ) {
let user = global.db.data.users[m.sender]
if (user.afk > -1) {
await conn.reply(m.chat, `${lenguajeCD['smsAvisoEG']()}✴️ *A F K* ✴️
*▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*
*@${m.sender.split("@")[0]}* ${lenguajeCD['smsAfkM1']()}${user.afkReason ? `\n${lenguajeCD['smsAfkM2']()}👉 ` + user.afkReason : ''}

${lenguajeCD['smsAfkM3']()}\n👉 *${(new Date - user.afk).toTimeString()}*`.trim(), m, { mentions: [m.sender] })
user.afk = -1
user.afkReason = ''
}
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of jids) {
let user = global.db.data.users[jid]
if (!user)
continue
let afkTime = user.afk
if (!afkTime || afkTime < 0)
continue
let reason = user.afkReason || ''
await conn.reply(m.chat, `${lenguajeCD['smsAvisoAG']()}✴️ *A F K* ✴️
*▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*
😾 ${lenguajeCD['smsAfkM4']()}\n${reason ? `${lenguajeCD['smsAfkM5']()}` + '👉 ' + reason : `${lenguajeCD['smsAfkM6']()}`}

${lenguajeCD['smsAfkM3']()}\n👉 *${(new Date - user.afk).toTimeString()}*`.trim(), m)
}
return true
}
export default handler
