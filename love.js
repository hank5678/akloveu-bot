var stickers = require("./stickers")

const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

module.exports = [
  [
    {
      type: "text",
      payload: "寶貝，抱抱~ 我想你"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "你要好好的喔"
    },
    {
      type: "text",
      payload: "抱抱~ 寶貝"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "我希望你在我身邊"
    },
    {
      type: "text",
      payload: "寶貝，抱抱"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "寶貝要乖乖喔~ 抱抱~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "超用力~~ 大~~~ 抱抱~~~~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "機器人罷工，沒有抱抱，要抱去找本人要"
    }
  ],
  [
    {
      type: "text",
      payload: "抱抱~ 愛你~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "寶貝，抱完乖乖哦~"
    },
    {
      type: "text",
      payload: "抱抱，我想你"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "親親~ 抱抱~ 摸摸~~~~~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "寶貝，好想你哦"
    },
    {
      type: "text",
      payload: "不要只是找機器人抱抱好嗎，我會吃醋"
    },
    {
      type: "text",
      payload: "也要找我抱抱哦"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "寶貝，你找機器人說話，或許你可能找不到我"
    },
    {
      type: "text",
      payload: "或許我們吵架了，失聯了，不再好了"
    },
    {
      type: "text",
      payload: "無論我在哪裡，無論發生什麼事情"
    },
    {
      type: "text",
      payload: "無論我承不承認"
    },
    {
      type: "text",
      payload: "其實我都很想你"
    },
    {
      type: "text",
      payload: "抱抱"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ]
]
