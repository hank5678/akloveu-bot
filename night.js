var stickers = require("./stickers")

const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

module.exports = [
  [
    {
      type: "text",
      payload: "晚安，我很想你，你也要想我，好嗎？"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["晚安"])
    }
  ],
  [
    {
      type: "text",
      payload: "寶貝，晚安時間到了"
    },
    {
      type: "text",
      payload: "希望你好好的，不要失眠"
    },
    {
      type: "text",
      payload: "我很想你，真希望現在你在我旁邊"
    },
    {
      type: "text",
      payload: "抱抱，寶貝晚安"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["晚安"])
    }
  ],
  [
    {
      type: "text",
      payload: "差不多該睡了，已經晚了"
    },
    {
      type: "text",
      payload: "這個時間我常常是特別想你"
    },
    {
      type: "text",
      payload: "真的很希望有一天你可以一直在我旁邊"
    },
    {
      type: "text",
      payload: "寶貝，晚安"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["晚安"])
    }
  ],
  [
    {
      type: "text",
      payload: "晚安，寶貝"
    },
    {
      type: "text",
      payload: "我希望今天你可以出現在我的夢裡"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["晚安"])
    }
  ],
  [
    {
      type: "text",
      payload: "一天又要結束了"
    },
    {
      type: "text",
      payload: "不知道我今天與你有沒有交集"
    },
    {
      type: "text",
      payload: "或許一天都沒有說話，或許有話不知道該怎麼開口"
    },
    {
      type: "text",
      payload: "我很想你，沒見到你，我更想你。希望你是好好的"
    },
    {
      type: "text",
      payload: "寶貝，晚安"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["晚安"])
    }
  ],
  [
    {
      type: "text",
      payload: "寶貝，晚上了，睡前吃藥，擦藥，全部都要打理好哦"
    },
    {
      type: "text",
      payload: "晚上也不要踢被，天氣冷蓋好被子，天氣熱也至少要蓋好肚肚"
    },
    {
      type: "text",
      payload: "我很想你，照顧好自己。晚安"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["晚安"])
    }
  ],
  [
    {
      type: "text",
      payload: "晚安，我愛你"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["晚安"])
    }
  ],
  [
    {
      type: "text",
      payload: "晚了，差不多要睡了"
    },
    {
      type: "text",
      payload: "機器人跟你晚安，那你跟我打個卡吧"
    },
    {
      type: "text",
      payload: "我很想你，雖然減少了平時的聯繫"
    },
    {
      type: "text",
      payload: "可你還是 不要走的離我太遠 拜託.."
    },
    {
      type: "text",
      payload: "晚安，今天就像每個夜晚一樣，我很想你"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["晚安"])
    }
  ]
]
