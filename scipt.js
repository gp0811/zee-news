var bars = document.querySelector('.bars');
var bar1 = document.querySelector('.bar1');
var bar2 = document.querySelector('.bar2');
var bar3 = document.querySelector('.bar3');
var search2 = document.querySelector('#search2');
var searchMain = document.querySelector('#searchMain');
var cross = document.querySelector('#cross');
var megaMenu = document.querySelector('#megaMenu');
var next = document.querySelector('#next');
var horoSlider =document.querySelector('#horoSlider');
var btn1 = document.querySelector('#btn1');
var photo10 = document.querySelector('#photo10');
var cont = document.querySelector('#cont');
var box = document.querySelector('#box');

btn1.addEventListener('click', function(){
    box.style.width = '700px';
    photo10.style.width = '35%';
    cont.style.display = 'initial';
    btn1.style.left = '93%';
});






bars.addEventListener('click',function(){
    megaMenu.classList.toggle('hello');
    bar1.classList.toggle('line1');
    bar2.classList.toggle('line2');
    bar3.classList.toggle('line3');
});


searchMain.addEventListener('click',function(){
    search2.style.height = '100%';
    searchMain.style.display = 'none';
    cross.style.display = 'initial';
});

cross.addEventListener('click',function(){
    search2.style.height = '0%';
    cross.style.display = 'none';
    searchMain.style.display = 'initial';
});









var next = document.querySelector('#next');
var horoSlider =document.querySelector('#horoSlider');

next.addEventListener('click',function(){
    horoSlider.classList.add('horoSliderNext');
});














