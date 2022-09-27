var count = document.querySelector('.counter');
var count2 = document.querySelector('.counter2');
var count3 = document.querySelector('.counter3');
var count4 = document.querySelector('.counter4');


for(let i = 0; i<=999; i++){
    setTimeout(()=>{
        count.innerText = i;
    },1000)
}

for(let j = 0; j<=333; j++){
    setTimeout(()=>{
        count2.innerText = j;
    },2000)
}

for(let k = 0; k<=777; k++){
    setTimeout(()=>{
        count3.innerText = k;
    },3000)
}

for(let l = 0; l<=555; l++){
    setTimeout(()=>{
        count4.innerText = l;
    },4000)
}

// slick slider section starts

$('.slider_content').slick({
    autoplay:true,
    infinity:true,
    slidesToShow: 3,
    prevArrow:'.prev-arrow',
    nextArrow:'.next-arrow',
})
$('.slider_content2').slick({
    autoplay:true,
    infinity:true,
    slidesToShow: 1,
    prevArrow:'.prev-arrow',
    nextArrow:'.next-arrow',
})