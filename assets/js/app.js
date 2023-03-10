var vm = new Vue ({
    el: '#app',
    data: {
        stylists: [
            {id: 1, name: "秋元夏生（GO TODAY SHAiRE SALON 原宿本店・東京都）", team: false},
            {id: 2, name: "秋吉治（Qilm・大阪府）", team: true},
            {id: 3, name: "阿部吉晃（ALLY・東京都）", team: false},
            {id: 4, name: "雨宮雄三（OCEANTOKYO  OVER・東京都）", team: false},
            {id: 5, name: "有田雄大（THE SOLOIST・東京都）", team: false},
            {id: 6, name: "有山滉大（C crew・東京都）", team: false},
            {id: 7, name: "池田識之（AREND・福岡県）", team: false},
            {id: 8, name: "石井 玲菜（Dayt.・東京都）", team: false},
            {id: 9, name: "石橋輝一（VOTAN tenjin・福岡県）", team: true},
            {id: 10, name: "礒井一輝（apish omotesando・東京都）", team: true},
            {id: 11, name: "上原俊樹（fifth SHIBUYA・東京都）", team: true},
            {id: 12, name: "内田智美（haku・京都府）", team: true},
            {id: 13, name: "ERIKO（A GRAND UNION・東京都）", team: false},
            {id: 14, name: "及川天和（Mirareee Tokyo・東京都）", team: false},
            {id: 15, name: "大田JAPAN（OCEAN TOKYO OVER・東京都）", team: true},
            {id: 16, name: "大西みやび（dakota rikka・福岡県）", team: false},
            {id: 17, name: "大西勇太（La familia・東京都）", team: true},
            {id: 18, name: "大吉博貴（GOGO HAIR・大阪府）", team: false},
            {id: 19, name: "岡澤拓夢（Timere神戸三宮・兵庫県）", team: true},
            {id: 20, name: "長田雄希（ALBUM GINZA・東京都）", team: true},
            {id: 21, name: "表直柔（プレイフル ヘアー スタジオ・千葉県）", team: false},
            {id: 22, name: "葛城 裕斗（FavyS・大阪府）", team: false},
            {id: 23, name: "金井瑛大（AFLOAT RUVUA・東京都）", team: false},
            {id: 24, name: "鎌田 天空（SAKURA omotesando・東京都）", team: false},
            {id: 25, name: "川口菜々子（HIBIO Hair&Gift Store・神奈川県）", team: false},
            {id: 26, name: "TAKERU（JOMELL.・東京都）", team: true},
            {id: 27, name: "楠瀬健介（Ciii/BELLA・大阪府）", team: false},
            {id: 28, name: "倉田一摩（GENUINE・東京都）", team: false},
            {id: 29, name: "倉辻香奈子（Reb,hair salon・京都府）", team: false},
            {id: 30, name: "栗原 貴史（PEEK-A-BOO新宿・東京都）", team: false},
            {id: 31, name: "黒山慶司（ANLY.・東京都）", team: false},
            {id: 32, name: "KENSEI（CARAL・東京都）", team: true},
            {id: 33, name: "越野久美子（SMITH・鳥取県）", team: true},
            {id: 34, name: "小高豊（ANY・千葉県）", team: true},
            {id: 35, name: "金野捷（SUNVALLEY・東京都）", team: true},
            {id: 36, name: "財前辰哉（AUBE HAIR・東京都）", team: false},
            {id: 37, name: "サイトウシロー（MaNO・東京都）", team: true},
            {id: 38, name: "坂本たかまさ（ACA ・北海道）", team: false},
            {id: 39, name: "佐々木司（GOAT HAIR SERVICE・大阪府）", team: false},
            {id: 40, name: "zakky（KAINO・東京都）", team: false},
            {id: 41, name: "佐藤陣（THOiRY・愛知県）", team: false},
            {id: 42, name: "佐藤真那人（PUNEL・東京都）", team: true},
            {id: 43, name: "SAL代官山（SAL代官山・東京都）", team: true},
            {id: 44, name: "澤辺英人（D'ICI・東京都）", team: false},
            {id: 45, name: "塩澤宏（HAVANA・東京都）", team: true},
            {id: 46, name: "柴田皓平（PEEK-A-BOO AVEDA GINZA SIX・東京都）", team: false},
            {id: 47, name: "柴田夏美（ALBUM SHIBUYA・東京都）", team: false},
            {id: 48, name: "渋谷美保（床屋にもう・兵庫県）", team: false},
            {id: 49, name: "島崎力斗（OCEAN TOKYO・東京都）", team: false},
            {id: 50, name: "末石稔（PEEK-A- BOO原宿・東京都）", team: true},
            {id: 51, name: "鈴木めぐみ（VOICE・東京都）", team: false},
            {id: 52, name: "瀬川美子（GO TODAY SHAiRE SALON	・神奈川県）", team: false},
            {id: 53, name: "高遠 翔馬（SHEA・東京都）", team: true},
            {id: 54, name: "竹村友喜（Happiness・大阪府）", team: true},
            {id: 55, name: "田代時男（SHIMA・東京都）", team: true},
            {id: 56, name: "谷口健太（EIGHT・大阪府）", team: false},
            {id: 57, name: "谷口新（isbn・石川県）", team: false},
            {id: 58, name: "種村 幸仁（Batir・新潟県）", team: false},
            {id: 59, name: "CHO（ANTI・東京都）", team: true},
            {id: 60, name: "塚田藍子（MASHU・大阪府）", team: true},
            {id: 61, name: "津田圭太郎（HAIR & MAKE EARTH 五反田店・東京都）", team: true},
            {id: 62, name: "津田恵（GARDEN・東京都）", team: true},
            {id: 63, name: "堤大輔（LiLoinveve・大阪府）", team: false},
            {id: 64, name: "椿田圭史（JONATHAN LIVING STON・熊本県）", team: true},
            {id: 65, name: "寺田彩果（LOAVE AOYAMA・東京都）", team: true},
            {id: 66, name: "土井新治（LOOPA by museum・兵庫県）", team: false},
            {id: 67, name: "土橋大毅（ABBEY2・東京都）", team: false},
            {id: 68, name: "冨永弘樹（Direct・鹿児島県）", team: false},
            {id: 69, name: "中尾康義（EIGHT・大阪府）", team: false},
            {id: 70, name: "中山智史（juno・東京都）", team: false},
            {id: 71, name: "西森将平（583koyomi・富山県）", team: false},
            {id: 72, name: "野田和宏（PARKiiiNG・大阪府）", team: false},
            {id: 73, name: "Violet（Violet・東京都）", team: true},
            {id: 74, name: "箱崎貴彦（PEEK-A-BOO 原宿・東京都）", team: true},
            {id: 75, name: "橋ヶ谷桃子（PEEK-A-BOO銀座並木通り・東京都）", team: true},
            {id: 76, name: "橋本泰宜（AWESOME・東京都）", team: false},
            {id: 77, name: "バタコ（grico・東京都）", team: false},
            {id: 78, name: "花岡瑠斗（MINX銀座五丁目店・東京都）", team: false},
            {id: 79, name: "原倫子（LONESS 表参道・東京都）", team: false},
            {id: 80, name: "張替光輝（ヒロ銀座バーバーショップ・神奈川県）", team: false},
            {id: 81, name: "平野慧人（GO TODAY SHAiRE SALON sol店・東京都）", team: false},
            {id: 82, name: "福隅亮介（mile・東京都）", team: true},
            {id: 83, name: "フジタユウタ（AnC hair&studio・大阪府）", team: false},
            {id: 84, name: "藤巻巡日人（romp・東京都）", team: false},
            {id: 85, name: "藤原愛莉（Belle表参道・東京都）", team: false},
            {id: 86, name: "別役空也（COA GINZA・東京都）", team: false},
            {id: 87, name: "堀雅通（GO TODAY SHAiRE SALON・東京都）", team: false},
            {id: 88, name: "堀口奈央（モリオフロムロンドン・埼玉県）", team: true},
            {id: 89, name: "牧島 寛季（ABBEY・東京都）", team: false},
            {id: 90, name: "みかみ。（SKILL・福岡県）", team: false},
            {id: 91, name: "峰田大暉（OCEAN TOKYO WHITE・東京都）", team: false},
            {id: 92, name: "宮内政直（MERICAN BARBERSHOP KOBE ・兵庫県）", team: true},
            {id: 93, name: "森嶋謙介（PEEK-A-BOO銀座中央通り店・東京都）", team: true},
            {id: 94, name: "森本悠史（LINDO TOKYO・大阪府）", team: true},
            {id: 95, name: "MORIYOSHI（SHACHU・東京都）", team: false},
            {id: 96, name: "矢賀部佳那（ABBEY・東京都）", team: true},
            {id: 97, name: "八木光（GO TODAY SHAiRE SALON 名古屋PARCO・愛知県）", team: true},
            {id: 98, name: "山野 俊貴（Lond・東京都）", team: true},
            {id: 99, name: "山本琢也（unacasa by lega・大阪府）", team: false},
            {id: 100, name: "横井澄愛（cachecache 表参道・東京都）", team: true},
            {id: 101, name: "吉永大介（GO TODAY SHAiRE SALON liver店・東京都）", team: false},
            {id: 102, name: "RYUSEI（PELE ・東京都）", team: true},
            {id: 103, name: "RYO（ANTI・東京都）", team: true},
        ]
    }
});
