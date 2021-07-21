//grab dom elements
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.middle h1');
const eye = document.querySelector('.top img');
const cta = document.querySelector('.cta');
const text = document.querySelector('.middle p');
const options = document.querySelector('.middle ul');
const circle = document.querySelector('.circle');

//capture animation event
card.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerHeight / 2 - e.pageY) / -15;
    let yAxis = (window.innerWidth / 2 - e.pageX) / -15;
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
})

//restore original position
card.addEventListener('mouseenter',(e) => {
    card.style.transition = "transform 500ms";
    card.style.transform = "rotateY(0) rotateX(0)";

    //remove perspective from elems
    title.style.transform = "translateZ(0px)";
    text.style.transform = "translateZ(0px)";
    options.style.transform = "translateZ(0px)";
    cta.style.transform = "translateZ(0px)";
    eye.style.transform = "translateZ(0px)";
    circle.style.transform = "translateZ(0px)";

});

//set animation start point
card.addEventListener('mouseleave',(e) => {
    card.style.transition = "none";

    //add perspective to elems
    title.style.transform = "translateZ(60px)";
    text.style.transform = "translateZ(60px)";
    options.style.transform = "translateZ(50px)";
    cta.style.transform = "translateZ(70px)";
    eye.style.transform = "translateZ(60px)";
    circle.style.transform = "translateZ(10px)";
});



console.log("xx");

