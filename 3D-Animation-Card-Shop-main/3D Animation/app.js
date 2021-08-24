//Movement animation
const cd = document.querySelector('.cd');
const container  = document.querySelector('.container');
const shoe = document.querySelector('.shoe img');
const title = document.querySelector('.info h1');
const text = document.querySelector('.info h3');
const btn = document.querySelector('.pur');

container.addEventListener('mousemove', (e)=>{
    let xAx = (window.innerWidth / 2 - e.pageX) / 25;
    let yAx = (window.innerHeight / 2 - e.pageY) / 25;
    cd.style.transform = `rotateY(${xAx}deg) rotateX(${yAx}deg)`;
});
//Animate in 
container.addEventListener('mouseenter', (e)=>{
    cd.style.transition = "none";
    title.style.transform = 'translateZ(150px)';
    shoe.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    text.style.transform = 'translateZ(125px)';
    btn.style.transform = 'translateZ(100px)';
});
//Animate off
container.addEventListener('mouseleave', (e) =>{
    cd.style.transform = `rotateY(0deg) rotateX(0deg)`;
    cd.style.transition = "all 0.5s ease";
    title.style.transform = 'translateZ(0px)';
    shoe.style.transform = 'translateZ(0px) rotateZ(0deg)';
    circle.style.transform = 'translateZ(0px)';
    text.style.transform = 'translateZ(0px)';
    btn.style.transform = 'translateZ(0px)';
});