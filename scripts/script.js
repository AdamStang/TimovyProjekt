$(document).ready(function(){
    $('.tim').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 748,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
});

var tlac = document.querySelector(".tlac");
tlac.addEventListener("click", (e) => {
    window.print();
});

var lsBtn = document.querySelector('.btn-ls');
var zsBtn = document.querySelector('.btn-zs');
var zsSem = document.querySelector('.zs');
var lsSem = document.querySelector('.ls');

lsBtn.addEventListener("click", (e) => {
    lsSem.classList.remove("hide");
    zsSem.classList.add("hide");
    lsBtn.classList.add("active");
    zsBtn.classList.remove("active");
});

zsBtn.addEventListener("click", (e) => {
    zsSem.classList.remove("hide");
    lsSem.classList.add("hide");
    zsBtn.classList.add("active");
    lsBtn.classList.remove("active");
});