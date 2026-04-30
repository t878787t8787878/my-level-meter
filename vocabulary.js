// vocabulary.js - 核心單字資料庫
const vocabularyBase = [
    // 【動物與自然】
    { kanji: "狗", reading: "いぬ" }, { kanji: "貓", reading: "ねこ" }, { kanji: "鳥", reading: "とり" },
    { kanji: "牛", reading: "うし" }, { kanji: "豬", reading: "ぶた" }, { kanji: "馬", reading: "うま" },
    { kanji: "魚", reading: "さかな" }, { kanji: "蟲", reading: "むし" }, { kanji: "猴子", reading: "さる" },
    { kanji: "熊", reading: "くま" }, { kanji: "狐狸", reading: "きつね" }, { kanji: "狸貓", reading: "たぬき" },
    { kanji: "老鼠", reading: "ねずみ" }, { kanji: "兔子", reading: "うさぎ" }, { kanji: "櫻花", reading: "さくら" },
    { kanji: "山", reading: "やま" }, { kanji: "河川", reading: "かわ" }, { kanji: "海", reading: "うみ" },
    { kanji: "天空", reading: "そら" }, { kanji: "星星", reading: "ほし" }, { kanji: "月亮", reading: "つき" },
    { kanji: "太陽", reading: "たいよう" }, { kanji: "雲", reading: "くも" }, { kanji: "風", reading: "かぜ" },
    { kanji: "雨", reading: "あめ" }, { kanji: "雪", reading: "ゆき" }, { kanji: "打雷", reading: "かみなり" },
    { kanji: "花", reading: "はな" }, { kanji: "樹木", reading: "き" }, { kanji: "石頭", reading: "いし" },
    { kanji: "春天", reading: "はる" }, { kanji: "夏天", reading: "なつ" }, { kanji: "秋天", reading: "あき" }, { kanji: "冬天", reading: "ふゆ" },

    // 【飲食與料理】
    { kanji: "水", reading: "みず" }, { kanji: "酒", reading: "さけ" }, { kanji: "綠茶", reading: "おちゃ" },
    { kanji: "紅茶", reading: "こうちゃ" }, { kanji: "咖啡", reading: "こーひー" }, { kanji: "牛奶", reading: "ぎゅうにゅう" },
    { kanji: "果汁", reading: "じゅーす" }, { kanji: "肉", reading: "にく" }, { kanji: "白飯", reading: "ごはん" },
    { kanji: "麵包", reading: "ぱん" }, { kanji: "雞蛋", reading: "たまご" }, { kanji: "蔬菜", reading: "やさい" },
    { kanji: "水果", reading: "くだもの" }, { kanji: "蘋果", reading: "りんご" }, { kanji: "橘子", reading: "みかん" },
    { kanji: "香蕉", reading: "ばなな" }, { kanji: "草莓", reading: "いちご" }, { kanji: "西瓜", reading: "すいか" },
    { kanji: "葡萄", reading: "ぶどう" }, { kanji: "壽司", reading: "すし" }, { kanji: "拉麵", reading: "らーめん" },
    { kanji: "烏龍麵", reading: "うどん" }, { kanji: "蕎麥麵", reading: "そば" }, { kanji: "天婦羅", reading: "てんぷら" },
    { kanji: "生魚片", reading: "さしみ" }, { kanji: "飯糰", reading: "おにぎり" }, { kanji: "烤鳥肉串", reading: "やきとり" },
    { kanji: "烤肉", reading: "やきにく" }, { kanji: "牛丼", reading: "ぎゅうどん" }, { kanji: "便當", reading: "べんとう" },
    { kanji: "咖哩", reading: "かれー" }, { kanji: "蛋糕", reading: "けーき" }, { kanji: "冰淇淋", reading: "あいす" },

    // 【交通與地點】
    { kanji: "車站", reading: "えき" }, { kanji: "機場", reading: "くうこう" }, { kanji: "橋", reading: "はし" },
    { kanji: "道路", reading: "みち" }, { kanji: "學校", reading: "がっこう" }, { kanji: "大學", reading: "だいがく" },
    { kanji: "醫院", reading: "びょういん" }, { kanji: "銀行", reading: "ぎんこう" }, { kanji: "郵局", reading: "ゆうびんきょく" },
    { kanji: "警察局", reading: "けいさつしょ" }, { kanji: "消防局", reading: "しょうぼうしょ" }, { kanji: "公園", reading: "こうえん" },
    { kanji: "神社", reading: "じんじゃ" }, { kanji: "寺廟", reading: "てら" }, { kanji: "圖書館", reading: "としょかん" },
    { kanji: "電影院", reading: "えいがかん" }, { kanji: "美術館", reading: "びじゅつかん" }, { kanji: "動物園", reading: "どうぶつえん" },
    { kanji: "公司", reading: "かいしゃ" }, { kanji: "飯店", reading: "ほてる" }, { kanji: "家", reading: "いえ" },
    { kanji: "房間", reading: "へや" }, { kanji: "屋頂", reading: "おくじょう" }, { kanji: "汽車", reading: "くるま" },
    { kanji: "腳踏車", reading: "じてんしゃ" }, { kanji: "電車", reading: "でんしゃ" }, { kanji: "地下鐵", reading: "ちかてつ" },
    { kanji: "新幹線", reading: "しんかんせん" }, { kanji: "公車", reading: "ばす" }, { kanji: "計程車", reading: "たくしー" },
    { kanji: "飛機", reading: "ひこうき" }, { kanji: "船", reading: "ふね" }, { kanji: "東京", reading: "とうきょう" },
    { kanji: "大阪", reading: "おおさか" }, { kanji: "京都", reading: "きょうと" }, { kanji: "北海道", reading: "ほっかいどう" },

    // 【日常生活與物品】
    { kanji: "傘", reading: "かさ" }, { kanji: "鞋子", reading: "くつ" }, { kanji: "衣服", reading: "ふく" },
    { kanji: "襯衫", reading: "しゃつ" }, { kanji: "帽子", reading: "ぼうし" }, { kanji: "眼鏡", reading: "めがね" },
    { kanji: "包包", reading: "かばん" }, { kanji: "錢包", reading: "さいふ" }, { kanji: "時鐘", reading: "とけい" },
    { kanji: "鑰匙", reading: "かぎ" }, { kanji: "錢", reading: "かね" }, { kanji: "書", reading: "ほん" },
    { kanji: "字典", reading: "じしょ" }, { kanji: "雜誌", reading: "ざっし" }, { kanji: "報紙", reading: "しんぶん" },
    { kanji: "鉛筆", reading: "えんぴつ" }, { kanji: "橡皮擦", reading: "けしごむ" }, { kanji: "原子筆", reading: "ぼーるぺん" },
    { kanji: "相機", reading: "かめら" }, { kanji: "電腦", reading: "ぱそこん" }, { kanji: "手機", reading: "けいたい" },
    { kanji: "藥", reading: "くすり" }, { kanji: "行李", reading: "にもつ" }, { kanji: "車票", reading: "きっぷ" },
    { kanji: "秘密", reading: "ひみつ" }, { kanji: "香菸", reading: "たばこ" }, { kanji: "椅子", reading: "いす" },
    { kanji: "桌子", reading: "つくえ" }, { kanji: "冰箱", reading: "れいぞうこ" }, { kanji: "洗衣機", reading: "せんたくき" },
    { kanji: "吸塵器", reading: "そうじき" }, { kanji: "電風扇", reading: "せんぷうき" }, { kanji: "冷氣", reading: "えあこん" },
    { kanji: "電視", reading: "てれび" }, { kanji: "照片", reading: "しゃしん" }, { kanji: "信", reading: "てがみ" },

    // 【身體部位與人物】
    { kanji: "頭", reading: "あたま" }, { kanji: "臉", reading: "かお" }, { kanji: "眼睛", reading: "め" },
    { kanji: "耳朵", reading: "みみ" }, { kanji: "鼻子", reading: "はな" }, { kanji: "嘴巴", reading: "くち" },
    { kanji: "牙齒", reading: "は" }, { kanji: "頭髮", reading: "かみ" }, { kanji: "手", reading: "て" },
    { kanji: "腳", reading: "あし" }, { kanji: "肚子", reading: "おなか" }, { kanji: "背", reading: "せなか" },
    { kanji: "我", reading: "わたし" }, { kanji: "你", reading: "あなた" }, { kanji: "老師", reading: "せんせい" },
    { kanji: "學生", reading: "がくせい" }, { kanji: "朋友", reading: "ともだち" }, { kanji: "男", reading: "おとこ" },
    { kanji: "女", reading: "おんな" }, { kanji: "小孩", reading: "こども" }, { kanji: "大人", reading: "おとな" },
    { kanji: "醫生", reading: "いしゃ" }, { kanji: "警察", reading: "けいかん" }, { kanji: "店員", reading: "てんいん" },

    // 【問候與實用短語 (挑戰題)】
    { kanji: "早安", reading: "おはよう" }, { kanji: "你好", reading: "こんにちは" }, { kanji: "晚安", reading: "こんばんは" },
    { kanji: "睡前晚安", reading: "おやすみ" }, { kanji: "謝謝", reading: "ありがとう" }, { kanji: "對不起", reading: "すみません" },
    { kanji: "抱歉", reading: "ごめんなさい" }, { kanji: "我開動了", reading: "いただきます" }, { kanji: "多謝款待", reading: "ごちそうさま" },
    { kanji: "辛苦了", reading: "おつかれさま" }, { kanji: "恭喜", reading: "おめでとう" }, { kanji: "再見", reading: "さようなら" },
    { kanji: "歡迎光臨", reading: "いらっしゃい" }, { kanji: "拜託了", reading: "おねがいします" }, { kanji: "沒關係", reading: "だいじょうぶ" },

    // 【形容詞與其他】
    { kanji: "大", reading: "おおきい" }, { kanji: "小", reading: "ちいさい" }, { kanji: "高/貴", reading: "たかい" },
    { kanji: "便宜", reading: "やすい" }, { kanji: "新", reading: "あたらしい" }, { kanji: "舊", reading: "ふるい" },
    { kanji: "熱", reading: "あつい" }, { kanji: "冷", reading: "さむい" }, { kanji: "好喝", reading: "おいしい" },
    { kanji: "難吃", reading: "まずい" }, { kanji: "開心", reading: "たのしい" }, { kanji: "無聊", reading: "つまらない" },
    { kanji: "困難", reading: "むずかしい" }, { kanji: "簡單", reading: "やさしい" }, { kanji: "忙碌", reading: "いそがしい" },
    { kanji: "有趣", reading: "おもしろい" }, { kanji: "喜歡", reading: "すき" }, { kanji: "討厭", reading: "きらい" },
    { kanji: "滑雪", reading: "すきー" }, { kanji: "棒球", reading: "やきゅう" }, { kanji: "足球", reading: "さっかー" },
    { kanji: "旅行", reading: "りょこう" }, { kanji: "音樂", reading: "おんがく" }, { kanji: "電影", reading: "えいが" }
];
