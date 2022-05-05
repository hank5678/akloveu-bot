var TelegramBot = require("node-telegram-bot-api")
var schedule = require("node-schedule")
var flirting = require("./flirting")
var love = require("./love")
var kiss = require("./kiss")
var bigLove = require("./bigLove")
var morning = require("./morning")
var night = require("./night")
var getWeatherReportAsync = require("./getWeatherReportAsync")
const express = require("express")

const app = express()
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

var token = "5231899144:AAFiLdn3dA54HXUOiGsoI36jx6WO0I1ZGYI"
// var token = "5026027683:AAGsSpHsUATaee2ld6vda5kNixNg_tDE6FQ" // 測試
//括號裡面的內容需要改為在第5步獲得的Token
var bot = new TelegramBot(token, { polling: true })
//使用Long Polling的方式與Telegram伺服器建立連線

const chatIds = [591309041, 456371558] // 456371558 591309041

//收到Start訊息時會觸發這段程式
// bot.onText(/\/start/, function (msg) {
//   var chatId = msg.chat.id //用戶的ID
//   var resp = "你好" //括號裡面的為回應內容，可以隨意更改
//   bot.sendMessage(chatId, resp) //發送訊息的function
// })

bot.onText(/指令[~～]/, function (msg) {
  var chatId = msg.chat.id //用戶的ID
  bot.sendMessage(chatId, "最後更新時間：2022/5/5 17:54")
  bot.sendMessage(chatId, "目前指令：「抱抱~」「啵啵~」「大抱抱~」「剪刀石頭布~」")
})

bot.onText(/^抱抱[~～]$/, function (msg) {
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

bot.onText(/^啵啵[~～]$/, function (msg) {
  var chatId = msg.chat.id //用戶的ID
  const a = kiss[Math.floor(Math.random() * kiss.length)]
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

bot.onText(/^大抱抱[~～]$/, function (msg) {
  var chatId = msg.chat.id //用戶的ID
  const a = bigLove[Math.floor(Math.random() * bigLove.length)]
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
  // console.log(msg)
  if (msg.sticker.file_unique_id === "AgADTwQAAtf0yFU") {
    bot.sendMessage(591309041, `[${msg.chat.id}]: 親愛的～ (貼圖`)
    setTimeout(() => {
      bot.sendSticker(msg.chat.id, "CAACAgUAAxkBAAIBF2JFexr2SqZpiV77VqMwMUqHnPO3AAI6BgACiYrJVdL54LzcV5tfIwQ")
    }, 300)
  }
})

const morningSchedule = schedule.scheduleJob({ hour: 9, minute: 30, tz: "Asia/Taipei" }, function () {
  sendMorning(chatIds)
})

const lunchSchedule = schedule.scheduleJob({ hour: 11, minute: 45, tz: "Asia/Taipei" }, function () {
  sendLunch(chatIds)
})

const dinnerSchedule = schedule.scheduleJob({ hour: 18, minute: 45, tz: "Asia/Taipei" }, function () {
  sendDinner(chatIds)
})

const nightSchedule = schedule.scheduleJob({ hour: 23, minute: 50, tz: "Asia/Taipei" }, function () {
  sendNight(chatIds)
})

schedule.scheduleJob({ hour: 10, minute: 30, tz: "Asia/Taipei" }, function () {
  sendFlirting(chatIds)
})

schedule.scheduleJob({ hour: 13, minute: 0, tz: "Asia/Taipei" }, function () {
  sendFlirting(chatIds)
})

schedule.scheduleJob({ hour: 16, minute: 0, tz: "Asia/Taipei" }, function () {
  sendFlirting(chatIds)
})

schedule.scheduleJob({ hour: 20, minute: 0, tz: "Asia/Taipei" }, function () {
  sendLove(chatIds)
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

const sendLove = (chatIds) => {
  const a = bigLove[Math.floor(Math.random() * bigLove.length)]

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
    getWeatherReportAsync().then((report) => {
      bot.sendMessage(chatId, report)
    })
    setTimeout(() => {
      a.forEach((el, id) => {
        setTimeout(() => {
          if (el.type === "text") {
            bot.sendMessage(chatId, el.payload)
          }
          if (el.type === "sticker") {
            bot.sendSticker(chatId, el.payload)
          }
        }, 3000 * (id + 1))
      })
    }, 3000)
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

const values = ["剪刀", "石頭", "布"]

bot.onText(/^剪刀石頭布[~～]/, function (msg) {
  var chatId = msg.chat.id //用戶的ID
  const reg = /剪刀石頭布[~～](?<value>.*)/
  const value = reg.exec(msg.text)?.groups?.value

  const vv = values.indexOf(value)
  setTimeout(() => {
    if (vv === -1) {
      bot.sendMessage(chatId, "ㄜ.. 我聽不懂你在說什麼，你只能喊我才能懂喔 剪刀石頭布~[你想出的拳]，舉例：剪刀石頭布~剪刀")
    } else {
      const my = Math.floor(Math.random() * 3)

      if (my === 0 && vv === 0) {
        bot.sendMessage(chatId, "我出剪刀！平手，有種再來一把")
      }
      if (my === 1 && vv === 0) {
        bot.sendMessage(chatId, "我出石頭！我贏囉～我可沒作弊哦")
      }
      if (my === 2 && vv === 0) {
        bot.sendMessage(chatId, "我出布！好吧.. 這把算你贏了，口亨")
      }

      if (my === 0 && vv === 1) {
        bot.sendMessage(chatId, "我出剪刀！我輸了，嗚嗚")
      }
      if (my === 1 && vv === 1) {
        bot.sendMessage(chatId, "我出石頭！平手了～口亨，再來啊")
      }
      if (my === 2 && vv === 1) {
        bot.sendMessage(chatId, "我出布！我贏了，哈哈哈，你太弱啦")
      }

      if (my === 0 && vv === 2) {
        bot.sendMessage(chatId, "我出剪刀！你輸囉，輸了脫一件拍照上傳～")
      }
      if (my === 1 && vv === 2) {
        bot.sendMessage(chatId, "我出石頭！好啦你贏了啦，你是不是晚出啊")
      }
      if (my === 2 && vv === 2) {
        bot.sendMessage(chatId, "我出布！看來我今天遇到對手啦，居然跟我平分秋色")
      }
    }
  }, 1000)
})

// sendFlirting(chatIds)
// setIntervel(() => {
bot.sendMessage(591309041, "開機~")
// bot.sendSticker(591309041, "CAACAgUAAxkBAAIBSmJP4byyhHx0W4-dT1qjGkC0VUdbAAJ4BAACpar5V46bRI21N2p_IwQ")
// bot.sendSticker(591309041, "AgADeAQAAqWq-Vc")
// bot.sendSticker(591309041, "AAMCBQADGQEAAgFKYk_hvLKEfHRbj51PWqMaQLRVR1sAAngEAAKlqvlXjptEjbU3an8BAAdtAAMjBA")

// bot.onText(/\w/, function (msg) {
//   // var chatId = msg.chat.id //用戶的ID
//   // var resp = "你好" //括號裡面的為回應內容，可以隨意更改
//   // bot.sendMessage(chatId, resp) //發送訊息的function
//   // console.log(msg.chat.id)
//   // console.log(msg.text)

//   bot.sendMessage(msg.chat.id, `${msg.chat.id}:${msg.text}`)
// })

bot.onText(/(.+)/, function (msg, match) {
  bot.sendMessage(591309041, `[${msg.chat.id}]: ${msg.text}`)
})

bot.onText(/^hanktest[~～]$/, function (msg) {
  sendNight([591309041])
})
