let as_nav_h2 = "Bag"
let as_nav_h3 = ""

let as_nav_list = [
    {name:"Home",href:"#home"},
    {name:"Feature",href:"#feature"},
    {name:"About",href:"#about"},
    {name:"Product",href:"#product"},
    {name:"Shop Now",href:"#shop-btn"}
]


let bags = [
    {bg:"#FFE1E8",img:'bag1'},
    {bg:"#FFE1E8",img:'bag2'},
    {bg:"#F9DCFF",img:'bag3'},
    {bg:"#FFDEE7",img:'bag4'},
    {bg:"#ECF1FF",img:'bag5'},
    {bg:"#FADADE",img:'bag6'},
    {bg:"#D9E6FE",img:'bag7'},
    {bg:"#EBF4BF",img:'bag8'}
]

for(bag of bags){
    document.querySelector(".sec3_bags").innerHTML+=`<div class="bag" style="background:${bag.bg};"><img src="./img/product/${bag.img}.png" alt=""></div>`
}