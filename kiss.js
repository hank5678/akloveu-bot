var stickers = require("./stickers")

const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

module.exports = [
  [
    {
      type: "text",
      payload: "寶貝，啵啵~ 我想你了"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "三連啵~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "啵啵啵啵啵啵啵啵啵啵啵啵啵啵啵啵~ 不要逃跑"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "啵啵~ 我愛你，我很想你"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "不啵，去找主人～ 他在想你～！"
    }
  ],
  [
    {
      type: "text",
      payload: "啵啵~~~~~"
    },
    {
      type: "text",
      payload: "順便偷偷摸你屁屁~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "要親臉臉還是親嘴嘴？"
    },
    {
      type: "text",
      payload: "不管都要啦~ 屁屁也要"
    },
    {
      type: "text",
      payload: "啵啵啵啵啵啵~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "你只可以跟我啵啵... 知道嗎"
    },
    {
      type: "text",
      payload: "我想你，寶貝，啵啵~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "喵啵啵~"
    },
    {
      type: "sticker",
      payload: "CAACAgUAAxkBAAIBSmJP4byyhHx0W4-dT1qjGkC0VUdbAAJ4BAACpar5V46bRI21N2p_IwQ"
    }
  ],
  [
    {
      type: "text",
      payload: "想啵啵你全身，脫光，躺好～"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "啵啵妳～舔舔耳朵～你喜歡"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "我最喜歡你了～啵啵"
    },
    {
      type: "text",
      payload: "不，不是，我的意思是說，我只喜歡你～"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "好久沒有啵啵，想你了"
    },
    {
      type: "text",
      payload: "寶貝~啵啵啵啵啵啵啵啵啵啵啵啵啵啵"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "大啵啵～ 母蛙"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "想你了，我要啵啵～"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "寶貝 啵一個～ 過來"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ]
]
