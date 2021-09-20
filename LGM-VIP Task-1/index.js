window.onscroll=function(){
    if(window.pageYOffset>200){
        document.getElementById("header").style.backgroundColor="rgb(97, 73, 123)";
    }
    else{
        document.getElementById("header").style.backgroundColor="transparent";
    }
}
const btn1 = document.querySelector(".navbtn-1");
const btn2 = document.querySelector(".navbtn-2");
const btn3 = document.querySelector(".navbtn-3");
const btn4 = document.querySelector(".navbtn-4");
btn1.addEventListener("click", function () {
    document.getElementById("banner").style.backgroundImage = ("url('./img-1.jpg')");
})
btn2.addEventListener("click", function () {
    document.getElementById("banner").style.backgroundImage = ("url('./img-2.jpg')");
})
btn3.addEventListener("click", function () {
    document.getElementById("banner").style.backgroundImage = ("url('./img-3.jpg')");
})
btn4.addEventListener("click", function () {
    document.getElementById("banner").style.backgroundImage = ("url('./img-4.jpg')");
})

$('.video').parent().click(function () {
    if ($(this).children(".video").get(0).paused) {
        $(this).children(".video").get(0).play();
        $(this).children(".playpause").fadeOut();
    }
    else {
        $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});
var b = document.getElementById("close");
var c = document.getElementById("bigpic");
function change(s) {
    document.getElementById("img-5").src = s;
    
    c.style.display="";
}
b.addEventListener("click", function () {
    c.style.display="none";
    
});