let up = document.querySelector(".upper");

window.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav");
    let x = scrollY;
    if (x < 200) {
        nav.classList.add("toggle");
        up.style.transform = "translateY(calc(100% + 30px))";
    } else {
        nav.classList.remove("toggle");
        up.style.transform = "translateY(0)";
    };
});

up.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

let head = document.querySelectorAll(".head:not(:last-child)");
let bot = document.querySelectorAll(".bot");
let rotate = document.querySelectorAll(".head i");

head.forEach((item, index) => {
    item.addEventListener("click", function () {
        if (bot[index].style.height == 0) {
            for (let i in bot) {
                if (i == index) {
                    bot[i].style.height = bot[i].scrollHeight + "px";
                    rotate[i].style.transform = "rotate(180deg)"
                } else {
                    bot[i].style.height = null;
                    rotate[i].style.transform = "rotate(0deg)"
                };
            };
        } else {
            bot[index].style.height = null;
            rotate[index].style.transform = "rotate(0deg)"
        };
    });
});

let bars = document.querySelectorAll(".fa-bars-staggered");
let close2 = document.querySelector(".close");
let aside = document.querySelector(".aside1");

bars.forEach((item) => {
    item.addEventListener("click", function(){
        aside.style.transform = "translateX(0)";
    });
})

close2.addEventListener("click", function(){
    aside.style.transform = "translateX(calc(-100% + -50px))"
})