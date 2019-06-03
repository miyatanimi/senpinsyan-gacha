var app = new Vue({
    el: "#app",
    data: {
        returnMenus: [],
        budget: 3000,
        personNum: 3,
        totalPrice: null
    },
    methods: {
        gacharu: function(balance){
            let returnArry = [];
            let total = 0;
            
            do{
                let result = menus.filter(menu => menu.price < balance);
                let randommenus = result[Math.floor(Math.random() * (result.length))];
                
                if(randommenus != undefined){
                    balance -= randommenus.price;
                    total += randommenus.price;
                    returnArry.push(randommenus);
                }else{
                    break;
                }
            }while(balance > 0);
            this.returnMenus = returnArry;
            this.totalPrice = total;
        }
    }
});

const menus = [
    {cat: "前菜", name: "本場四川のよだれ鶏", price: 780},
    {cat: "前菜", name: "牛タンとハチノスのスパイシー和え", price: 780},
    {cat: "前菜", name: "豆苗とキクラゲのしゃきしゃき和えサラダ", price: 680},
    {cat: "前菜", name: "クラゲ入り彩るコリアンダーのピリ辛サラダ", price: 680},
    {cat: "前菜", name: "細切りのジャガイモのラー油和え", price: 480},
    {cat: "前菜", name: "極上四川皮蛋豆腐", price: 580},
    {cat: "前菜", name: "自家製のとろとろ柔らかい炙りチャーシュー", price: 480},
    {cat: "前菜", name: "たたき胡瓜のニンニクソース和え", price: 480},
    {cat: "前菜", name: "ネギチャーシュー和え物", price: 480},
    {cat: "前菜", name: "棒棒鶏サラダ", price: 480},
    {cat: "前菜", name: "サザエの白髪ネギ和え", price: 780},
    {cat: "前菜", name: "ザーサイの香味和え", price: 380},
    {cat: "前菜", name: "クラゲの黒酢和え", price: 580},
    {cat: "前菜", name: "押し豆腐の和え物", price: 380},
    {cat: "前菜", name: "特製枝豆", price: 380},
    {cat: "前菜", name: "川エビの麻辣揚げ", price: 480},
    {cat: "前菜", name: "ししゃもの中華風揚げ", price: 480},
    {cat: "海鮮", name: "本場四川プリプリエビの自家製チリソース炒め", price: 980},
    {cat: "海鮮", name: "殻付きの大エビの四川のスパイス揚げ", price: 1180},
    {cat: "海鮮", name: "鉄板牡蠣の四川スパイシー炒め", price: 980},
    {cat: "海鮮", name: "ソフトシェルクラブの黒胡椒揚げ", price: 1280},
    {cat: "海鮮", name: "白身魚の四川スパイシー煮込み", price: 1280},
    {cat: "海鮮", name: "プリプリエビマヨ", price: 880},
    {cat: "海鮮", name: "エビと銀杏、アスパラ、山芋の岩塩炒め", price: 980},
    {cat: "海鮮", name: "エビと貝柱と春雨の自家製XO醤炒め", price: 880},
    {cat: "海鮮", name: "海鮮三種類（イカ、エビ、ホタテ）自家製XO醤炒め（塩味選べる）", price: 1180},
    {cat: "豆腐、玉子、野菜", name: "元祖火焔山香草麻婆豆腐", price: 880},
    {cat: "豆腐、玉子、野菜", name: "茄子の四川山椒揚げ", price: 780},
    {cat: "豆腐、玉子、野菜", name: "シャキシャキ豆苗のガーリック炒め", price: 780},
    {cat: "豆腐、玉子、野菜", name: "トマトと玉子の香味炒め", price: 780},
    {cat: "豆腐、玉子、野菜", name: "空心菜の香味炒め", price: 880},
    {cat: "豆腐、玉子、野菜", name: "玉子とエビのふんわり炒め", price: 880},
    {cat: "豆腐、玉子、野菜", name: "クラゲともやしの強火塩味炒め", price: 780},
    {cat: "豆腐、玉子、野菜", name: "カボチャのバター香味炒め", price: 780},
    {cat: "肉類", name: "四川鶏唐揚げのスパイシー炒め", price: 880},
    {cat: "肉類", name: "三元豚の特製黒酢酢豚", price: 980},
    {cat: "肉類", name: "牛カルビと野菜のスパイス煮込み", price: 1280},
    {cat: "肉類", name: "鉄板牛カルビのオイスターソース炒め", price: 980},
    {cat: "肉類", name: "豚肉スライスと長葱のピリ辛炒め", price: 780},
    {cat: "肉類", name: "鶏肉とカシューナッツ炒め", price: 780},
    {cat: "肉類", name: "特製ジューシー地鶏の唐揚げ", price: 680},
    {cat: "肉類", name: "牛カルビとニンニクのスタミナ炒め", price: 980},
    {cat: "肉類", name: "牛カルビとクミン炒め", price: 980},
    {cat: "点心", name: "せんぴんしゃん手作りゴマ棒餃子", price: 480},
    {cat: "点心", name: "本場上海スープたっぷり蒸し小籠包", price: 480},
    {cat: "点心", name: "自家製海鮮春巻き", price: 580},
    {cat: "ご飯", name: "自家製炙りチャーシュー炒飯", price: 880},
    {cat: "ご飯", name: "上海焼きそば", price: 850},
    {cat: "ご飯", name: "海鮮入りおこげ", price: 980},
    {cat: "ご飯", name: "牛カルビの黒胡椒炒飯", price: 880},
    {cat: "ご飯", name: "エビ入り自家製XO醤炒飯", price: 880},
    {cat: "ご飯", name: "フカヒレあんかけ炒飯", price: 1280},
    {cat: "スープ類", name: "トマトと玉子の香味スープ", price: 680},
    {cat: "刀削麺", name: "痺れる麻辣刀削麺", price: 850},
    {cat: "刀削麺", name: "坦々刀削麺", price: 850},
    {cat: "刀削麺", name: "自家製とろとろ叉焼刀削麺", price: 850}
]