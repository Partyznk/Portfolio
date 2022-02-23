const filterdropdown = document.querySelector("#filter");
document.getElementById("dropdowncontent").style.display = 'none';
filterdropdown.addEventListener('click', (event) => {
    dropdownfilter();
});

const cartdropdown = document.querySelectorAll('[id^="addtocart"] button');
cartdropdown.forEach(function(element, index){
    document.getElementById("cartdropdown_"+ (index + 1)).style.display = 'none';
})
cartdropdown.forEach(function(element, index){
    element.addEventListener('click', (event) => {
        dropdown("cartdropdown_"+ (index + 1),index);
    })
})

const cartdropdownminus = document.querySelectorAll('[id^="minus"]');
cartdropdownminus.forEach(function(element, index){
    element.addEventListener('click', (event) => {
        tickerminus(index);
    })
})

const cartdropdownplus = document.querySelectorAll('*[id^="plus"]');
cartdropdownplus.forEach(function(element, index){
    element.addEventListener('click', (event) => {
        tickerplus(index);
    })
})

const closecartdropdown = document.querySelectorAll('.cartdropdown');
closecartdropdown.forEach(function(element, index){
    element.addEventListener('mouseleave', (event) =>{
        setTimeout(function(){closecart(index)}, 1000);
    })
});

function dropdownfilter(){
    let x = document.getElementById("dropdowncontent").style.display;
    console.log(x);
    if (x == 'none') {
        document.getElementById("dropdowncontent").style.display = 'block';
    }
    else {
        document.getElementById("dropdowncontent").style.display = 'none';
    }
}

function dropdown(idelement, index){
    let x = document.getElementById(idelement).style.display;
    if (x =='none'){
        document.getElementById(idelement).style.display = 'flex';
    }
    else {
        document.getElementById(idelement).style.display = 'none';
    }
    let y = x;
    x = document.getElementById('index_'+(index+1)).innerHTML;
    x = parseInt(x, 10);
    if ((x == 0) && (y == 'none')){
        document.getElementById('index_'+(index+1)).innerHTML = x+1;
        x = document.getElementById('float').innerHTML;
        x = parseInt(x, 10);
        document.getElementById('float').innerHTML = x+1;
    }
}

function tickerminus(index){
    let x = document.getElementById('float').innerHTML;
    x = parseInt(x, 10);
    let y = document.getElementById('index_'+(index+1)).innerHTML;
    y = parseInt(y, 10);
    if ((x != 0) && (y != 0)){
        document.getElementById('float').innerHTML = x-1;
        document.getElementById('index_'+(index + 1)).innerHTML = y-1;
    }
    else if ((x == 0) && (y != 0)) {
    }
    else if ((x != 0) && (y == 0)){ 
    }
    else {
    }
}

function tickerplus(index){
    var x = document.getElementById('float').innerHTML;
    x = parseInt(x, 10);
    document.getElementById('float').innerHTML = x+1;
    x = document.getElementById('index_'+(index+1)).innerHTML;
    x = parseInt(x, 10);
    document.getElementById('index_'+(index + 1)).innerHTML = x+1;
    document.getElementById("cartdropdown_"+ (index + 1)).style.display = 'flex';
}

function closecart(index){
    document.getElementById("cartdropdown_"+(index+1)).style.display = 'none';
}


var jsonData = require('./elements.json');
var postedData = JSON.parse(jsonData);
var postedElement = '<div><div class="number"><span></span></div><div class="container_1"></div><h4></h4><p class="ingredients"></p><div class="addtocart" id="addtocart_1"><button type="button" class="button"><span class="button__icon"><ion-icon name="cart-outline"></ion-icon></span><span class="button__text">Add to cart</span></button><div class="cartdropdown" id="cartdropdown_1"><span id="minus_1">–</span><p id="index_1">0</p><span id="plus_1">+</span></div></div><p class="price"></p></div>';

console.log(postedData);
