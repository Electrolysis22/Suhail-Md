const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349166493103";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_12_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTksXG4gICAgICAgIDgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDU3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDI1LFxuICAgICAgICA3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQyLFxuICAgICAgICA2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDg0LFxuICAgICAgICA0MixcbiAgICAgICAgMTgxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDg3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNSxcbiAgICAgICAgMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDczLFxuICAgICAgICAxMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDc1LFxuICAgICAgICA2NixcbiAgICAgICAgNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0LFxuICAgICAgICA5OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNixcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIsXG4gICAgICAgIDkxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNSxcbiAgICAgICAgODEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZzZ2elpSKzlFNk85aGYzWWZqUjJEV0w1aEVIL3dLMUl4Q3dRaHJCbklIbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibHFLdjY1a3NRNktMaW91ZkpUdmRCZ1wiLFxuICBcInBob25lSWRcIjogXCIwNjQ0NDI0Mi05NWVhLTRlOWQtOTE1YS0zMGE1ZTZhODczNTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI5LFxuICAgICAgMTUsXG4gICAgICA4NixcbiAgICAgIDc3LFxuICAgICAgMTc4LFxuICAgICAgMjA1LFxuICAgICAgMjMwLFxuICAgICAgNzQsXG4gICAgICAyMTMsXG4gICAgICA4MSxcbiAgICAgIDk1LFxuICAgICAgMjMyLFxuICAgICAgMTAwLFxuICAgICAgODYsXG4gICAgICA2MCxcbiAgICAgIDQ0LFxuICAgICAgODIsXG4gICAgICAxNjQsXG4gICAgICAxODQsXG4gICAgICAyMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgNzUsXG4gICAgICAxOTcsXG4gICAgICAzMyxcbiAgICAgIDMyLFxuICAgICAgNjYsXG4gICAgICAyMTQsXG4gICAgICA2MyxcbiAgICAgIDc2LFxuICAgICAgMjIwLFxuICAgICAgMjE0LFxuICAgICAgODYsXG4gICAgICA0MCxcbiAgICAgIDE4MyxcbiAgICAgIDI0MSxcbiAgICAgIDU3LFxuICAgICAgMTI5LFxuICAgICAgMTE3LFxuICAgICAgMTgsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVFXWkxQMVJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjY0OTMxMDM6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MTIyNjMyOTYyMDY0ODoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMWEF1T0VCRU9QOXRMTUdHQTBnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhVYjNkcjhQNVNKNkZRTjhvVGFjRGg2MExNcXRqMkJWcFNjSVdtNENLUmc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicURCTjRsS3JlNTlmclUxR2NoOW8vU044cWRYNU5xUXdRR0lML2JRVEcrbTBveThwMjY2VlJVVWtCcEVSWkJUdWNNalRBUGxKVUx0V1R6U0ZNSkJpRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOFpPZ1Btb2tEaVVEekkrbEpFRXMyOFZLbmxRd1Yxd1plNWdGUUp4WG81YmxiUkZGREdMYm5ENXBNRnBvcEk0R2RGVWVwUHZZNkJjOEl5Zmx4YWo0Qnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2NjQ5MzEwMzoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODQzNTU1OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
