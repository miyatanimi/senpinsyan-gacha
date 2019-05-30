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
    {name: "香草麻婆豆腐", price: 880},
    {name: "絶品本場よだれ鷂", price: 780},
    {name: "ごま棒焼餃子", price: 480},
    {name: "本場四川プリプリ自家製のエビチリソース", price: 980},
    {name: "豆苗のガーリック炒め" ,price: 780},
    {name: "三限豚の特製黒酢酢豚" ,price: 980},
    {name: "本場牛カルビと野菜のスパイシー煮込み" ,price: 1280},
    {name: "刀削麺" ,price: 850},
    {name: "本場上海スープたっぷり蒸し小籠包" ,price: 480}
]


// const menus = [
//     {name: "apple", price: 400},
//     {name: "mikan", price: 100},
//     {name: "tamago", price: 99},
//     {name: "kyuru", price: 200}
// ]
// let balance = 500;
// let returnArry = [];

// do{
//     let result = menus.filter(menu => menu.price < balance);
//     let randommenus = result[Math.floor(Math.random() * (result.length))];
    
//     if(randommenus != undefined){
//         balance -= randommenus.price;
//         returnArry.push(randommenus);
//     }else{
//         break;
//     }
// }while(balance > 0);

// let returnPrice;
// for(let i of returnArry){
//     returnPrice += i.price;
//     console.log(returnPrice);
// }

// console.log(returnArry,returnPrice);