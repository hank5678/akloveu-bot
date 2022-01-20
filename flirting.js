var stickers = require("./stickers")

const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

// ["我不是天生溫柔，而是只想對你溫柔"],
// ["希望把我壓得喘不過氣的不是生活，是你。"],
// ["我最近要去配眼鏡了", "除了你，我看不見別人。"],
// ["看到你，我就要繳罰單了。", "因為我看到你，心跳就一直超速。"],
// ["你好像又變胖了……。", "因為你在我心裡的份量變重了。"],
// ["你想喝什麼？", "我想你呵護我。"],
// ["我結婚的時候 你一定要來。", "因為婚禮沒有新娘會很尷尬的。"],
// ["你猜猜我的心在哪邊？", "在你那邊。"],
// ["我想要你知道一些事。", "你看前面四個字就行了。"],
// ["我有一箱東西需要你簽收一下。", "一廂情願，簽了就你情我願了。"],
// ["如果你不愛我，那我就會離開了，去另外一個城市。", "我要去那裡，重新等你。"],
// ["你知道為什麼我認識你以後心胸越來越窄嗎？", "因為我裝的全是你。"],
// ["你再怎麼完美，還是會有缺點。", "缺點我。"],
// ["我要給你一個愛情的建議", "建議你跟我在一起。"],
// ["只要你的心中有我，我的心中有你，到哪都是天堂。"],
// ["我的青春，就是用來尋找你。"],
// ["你知道什麼蛋最漂亮嗎？", "你的臉蛋。"],
// ["你可以幫我做一件事嗎？", "我的終生大事。"],
// ["我考上的是第二志願，你知道我的第一志願是什麼嗎？", "我的第一志願是上你。"],
// ["晴天、雨天、陰天…，你覺得我最喜歡哪一天？", "我最喜歡有你的每一天。"],
// ["你什麼都可以錯，但請別錯過我。"],
// ["遇見你是命運的安排，但愛上你是我無法抗拒的情不自禁。"],
// ["其實今天有一點想你，其實不只一點，其實也不只今天。"],
// ["我看電影不喜歡被爆雷。", "我喜歡抱你"],
// ["我的幸運數字是10，你知道你的幸運數字是多少嗎？", "是89，因為89不離10~"]
// ["有一句話說女人是水做的，但我覺得你不是水。", "妳是海水做的。", "因為妳顏值很高。"],
// ["如果你是黑板，那我是什麼？", "值日生，因為每天要「擦」黑板。"],
// ["你就像空氣一樣，每天都一定要吸。"],
// [" 我結婚的時候，要請你做一件事。", "請你嫁給我。"],
// ["你知道為什麼現在犯罪率這麼高嗎？", "因為妳的美麗，就是惹人犯罪的原因。"],
// ["我有一個超能力。", "超愛你。"],
// ["不管春天還是冬天，夏日或是秋意，也不管是晴天、雨天，還是陰天，只要有你的日子，都是我最喜歡的每一天。"],
// ["快樂的方式有很多種，最直接的，就是見到你。"]

module.exports = [
  [
    {
      type: "text",
      payload: "猜猜看我最喜歡哪個國家？"
    },
    {
      type: "text",
      payload: "我最喜歡跟你回家。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "我不是天生溫柔，而是只想對你溫柔"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "我最近要去配眼鏡了"
    },
    {
      type: "text",
      payload: "除了你，我看不見別人。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "看到你，我就要繳罰單了。"
    },
    {
      type: "text",
      payload: "因為我看到你，心跳就一直超速。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "你好像又變胖了……。"
    },
    {
      type: "text",
      payload: "因為你在我心裡的份量變重了。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "你想喝什麼？"
    },
    {
      type: "text",
      payload: "我想你呵護我。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "我結婚的時候 你一定要來。"
    },
    {
      type: "text",
      payload: "因為婚禮沒有新娘會很尷尬的。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "你猜猜我的心在哪邊？"
    },
    {
      type: "text",
      payload: "在你那邊。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "我想要你知道一些事。"
    },
    {
      type: "text",
      payload: "你看前面四個字就行了。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "我有一箱東西需要你簽收一下。"
    },
    {
      type: "text",
      payload: "一廂情願，簽了就你情我願了。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "如果你不愛我，那我就會離開了，去另外一個城市。"
    },
    {
      type: "text",
      payload: "我要去那裡，重新等你。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "你知道為什麼我認識你以後心胸越來越窄嗎？"
    },
    {
      type: "text",
      payload: "因為我裝的全是你。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "你知道為什麼我認識你以後心胸越來越窄嗎？"
    },
    {
      type: "text",
      payload: "因為我裝的全是你。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "你再怎麼完美，還是會有缺點。"
    },
    {
      type: "text",
      payload: "缺點我。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "我要給你一個愛情的建議"
    },
    {
      type: "text",
      payload: "建議你跟我在一起。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "只要你的心中有我，我的心中有你，到哪都是天堂。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "我的青春，就是用來尋找你。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "你知道什麼蛋最漂亮嗎？"
    },
    {
      type: "text",
      payload: "你的臉蛋。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "你可以幫我做一件事嗎？"
    },
    {
      type: "text",
      payload: "我的終生大事。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "我考上的是第二志願，你知道我的第一志願是什麼嗎？"
    },
    {
      type: "text",
      payload: "我的第一志願是上你。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "晴天、雨天、陰天…，你覺得我最喜歡哪一天？"
    },
    {
      type: "text",
      payload: "我最喜歡有你的每一天。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "你什麼都可以錯，但請別錯過我。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "遇見你是命運的安排，但愛上你是我無法抗拒的情不自禁。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "其實今天有一點想你，其實不只一點，其實也不只今天。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "我看電影不喜歡被爆雷。"
    },
    {
      type: "text",
      payload: "我喜歡抱你"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "我的幸運數字是10，你知道你的幸運數字是多少嗎？"
    },
    {
      type: "text",
      payload: "是89，因為89不離10~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "有一句話說女人是水做的，但我覺得你不是水。"
    },
    {
      type: "text",
      payload: "妳是海水做的。"
    },
    {
      type: "text",
      payload: "因為妳顏值很高。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "如果你是黑板，那我是什麼？"
    },
    {
      type: "text",
      payload: "值日生，因為每天要「擦」黑板。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "你就像空氣一樣，每天都一定要吸。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "我結婚的時候，要請你做一件事。"
    },
    {
      type: "text",
      payload: "請你嫁給我。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "你知道為什麼現在犯罪率這麼高嗎？"
    },
    {
      type: "text",
      payload: "因為妳的美麗，就是惹人犯罪的原因。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "我有一個超能力。"
    },
    {
      type: "text",
      payload: "超愛你。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "不管春天還是冬天，夏日或是秋意，也不管是晴天、雨天，還是陰天"
    },
    {
      type: "text",
      payload: "只要有你的日子，都是我最喜歡的每一天。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ],
  [
    {
      type: "text",
      payload: "快樂的方式有很多種，最直接的，就是見到你。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["撩妹"])
    }
  ]
]
