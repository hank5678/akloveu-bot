var TelegramBot = require("node-telegram-bot-api")
var schedule = require("node-schedule")
var flirting = require("./flirting")
var love = require("./love")
var love = require("./love")
var morning = require("./morning")
var night = require("./night")
const express = require("express")

const app = express()
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

var token = "5062531955:AAFdH1eN0m-xGiLy1IFc30dnRTNO60H6jnU"
// var token = "5026027683:AAGsSpHsUATaee2ld6vda5kNixNg_tDE6FQ"
//括號裡面的內容需要改為在第5步獲得的Token
var bot = new TelegramBot(token, { polling: true })
//使用Long Polling的方式與Telegram伺服器建立連線

const chatIds = [591309041] // 456371558

//收到Start訊息時會觸發這段程式
// bot.onText(/\/start/, function (msg) {
//   var chatId = msg.chat.id //用戶的ID
//   var resp = "你好" //括號裡面的為回應內容，可以隨意更改
//   bot.sendMessage(chatId, resp) //發送訊息的function
// })

bot.onText(/抱抱~/, function (msg) {
  var chatId = msg.chat.id //用戶的ID
  const a = love[Math.floor(Math.random() * love.length)]
  a.forEach((el, id) => {
    setTimeout(() => {
      if (el.type === "text") {
        bot.sendMessage(chatId, el.payload)
      }
      if (el.type === "sticker") {
        bot.sendSticker(chatId, el.payload)
      }
    }, 3000 * id)
  })
})

// bot.onText(/撩妹~/, function (msg) {
//   var chatId = msg.chat.id //用戶的ID
//   const a = flirting[Math.floor(Math.random() * flirting.length)]
//   a.forEach((el, id) => {
//     setTimeout(() => {
//       if (el.type === "text") {
//         bot.sendMessage(chatId, el.payload)
//       }
//       if (el.type === "sticker") {
//         bot.sendSticker(chatId, el.payload)
//       }
//     }, 3000 * id)
//   })
// })

bot.onText(/(.+)/, function (msg, match) {
  console.log(msg.from.username + ": " + msg.text)
})

bot.on("sticker", (msg) => {
  console.log(msg)
})

const morningSchedule = schedule.scheduleJob({ hour: 9, minute: 30, tz: "Asia/Taipei" }, function () {
  sendMorning(chatIds)
})

const lunchSchedule = schedule.scheduleJob({ hour: 11, minute: 50, tz: "Asia/Taipei" }, function () {
  sendLunch(chatIds)
})

const dinnerSchedule = schedule.scheduleJob({ hour: 19, minute: 0, tz: "Asia/Taipei" }, function () {
  sendDinner(chatIds)
})

const nightSchedule = schedule.scheduleJob({ hour: 23, minute: 50, tz: "Asia/Taipei" }, function () {
  sendNight(chatIds)
})

const flirtingSchedule1 = schedule.scheduleJob({ hour: 11, minute: 0, tz: "Asia/Taipei" }, function () {
  sendFlirting(chatIds)
})

const flirtingSchedule2 = schedule.scheduleJob({ hour: 14, minute: 0, tz: "Asia/Taipei" }, function () {
  sendFlirting(chatIds)
})

const flirtingSchedule3 = schedule.scheduleJob({ hour: 18, minute: 30, tz: "Asia/Taipei" }, function () {
  sendFlirting(chatIds)
})

const flirtingSchedule4 = schedule.scheduleJob({ hour: 22, minute: 0, tz: "Asia/Taipei" }, function () {
  sendFlirting(chatIds)
})

const sendLunch = (chatIds) => {
  chatIds.forEach((chatId) => {
    a.forEach((el, id) => {
      bot.sendMessage(chatId, "寶貝~ 中午該吃飯囉~ 要吃飽飽唷")
    })
  })
}

const sendDinner = (chatIds) => {
  chatIds.forEach((chatId) => {
    a.forEach((el, id) => {
      bot.sendMessage(chatId, "晚餐時間囉，好好吃飯，我想你，要好好的喔")
    })
  })
}

const sendMorning = (chatIds) => {
  const a = morning[Math.floor(Math.random() * morning.length)]
  chatIds.forEach((chatId) => {
    a.forEach((el, id) => {
      setTimeout(() => {
        if (el.type === "text") {
          bot.sendMessage(chatId, el.payload)
        }
        if (el.type === "sticker") {
          bot.sendSticker(chatId, el.payload)
        }
      }, 3000 * id)
    })
  })
}

const sendNight = (chatIds) => {
  const a = night[Math.floor(Math.random() * night.length)]
  chatIds.forEach((chatId) => {
    a.forEach((el, id) => {
      setTimeout(() => {
        if (el.type === "text") {
          bot.sendMessage(chatId, el.payload)
        }
        if (el.type === "sticker") {
          bot.sendSticker(chatId, el.payload)
        }
      }, 3000 * id)
    })
  })
}

const sendFlirting = (chatIds) => {
  const a = flirting[Math.floor(Math.random() * flirting.length)]
  chatIds.forEach((chatId) => {
    a.forEach((el, id) => {
      setTimeout(() => {
        if (el.type === "text") {
          bot.sendMessage(chatId, el.payload)
        }
        if (el.type === "sticker") {
          bot.sendSticker(chatId, el.payload)
        }
      }, 3000 * id)
    })
  })
}

// sendFlirting(chatIds)
// setIntervel(() => {
bot.sendMessage(591309041, "開機~")
// sendFlirting(chatIds)
// bot.sendSticker(591309041, "CAACAgUAAxkBAAMuYeeMZNun0MX52PdqqfC72jVj1N4AAgYCAALfH3IZbjLpvcc2eq0jBA")
// }, 10000)

// const a = flirting[Math.floor(Math.random() * flirting.length)]
// a.forEach((el, id) => {
//   setTimeout(() => {
//     console.log(el)
//     if (el.type === "text") {
//       bot.sendMessage(591309041, el.payload)
//     }
//     if (el.type === "sticker") {
//       bot.sendSticker(591309041, el.payload)
//     }
//   }, 3000 * id)
// })
