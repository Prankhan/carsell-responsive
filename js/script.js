
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}



/*login btn start*/ 
document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
 }

 document.querySelector('#close-login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');
   }

/*login btn end*/ 
/*menubar start*/ 

window.onscroll = ()=>{
if(
    window.scrolly > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');

    }

    menubar.classList.remove('fa-xmark');
    navbar.classList.remove('active');

}

window.onload = ()=>{
    if(
        window.onscrolly > 0){
            document.querySelector('.header').classList.add('active');
        }else{
            document.querySelector('.header').classList.remove('active');
    
        }
    
    
    }
    /*menubar end*/ 

/*home start*/
document.querySelector('.home').onmousemove = (e) =>{ 
    
    
     document.querySelectorAll('.home-parallax').forEach(elm => {


       let speed = elm.getAttribute('data-speed');

       let x =(window.innerWidth - e.pageX * speed) /90;
       let y = (window.innerHeight - e.pageY * speed) /90;        

       elm.style.transform = `translateX(${y}px) translateY(${x}px)`;


     });
}


document.querySelector('.home').onmouseleave = () =>{ 
    
    
    document.querySelectorAll('.home-parallax').forEach(elm => {
    
      elm.style.transform = `translateX(0px) translateY(0px)`;


    });
}














/*home end*/   




  /*vehicles*/  
var swiper = new Swiper(".vehicles-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grabCursor:true,
  centeredSlides:true,
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
    },
  
    991: {
      slidesPerView: 3,
    },
  },
})

/*vehicles*/  



/*featured*/ 


var swiper = new Swiper(".featured-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grabCursor:true,
  centeredSlides:true,
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
    },
  
    991: {
      slidesPerView: 3,
    },
  },
})






/*featured*/ 

/*review*/




var swiper = new Swiper(".reviews-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grabCursor:true,
  centeredSlides:true,
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
    },
  
    991: {
      slidesPerView: 3,
    },
  },
})




/*review*/ 