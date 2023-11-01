searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick= () =>{
    searchForm.classList.toggle('active');
}





let  loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
};

document.querySelector('#close-login-btn').onclick =() =>{
    loginForm.classList.remove('active');
}

 window.onscroll = () =>{

    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add('active');
    }
    else{
        document.querySelector('.header .header2').classList.add('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add('active');
    }
    else{
        document.querySelector('.header .header2').classList.add('active');
    }
}

var swiper = new Swiper(".books-slider", {
    loop:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });








var swiper= new swiper(".books-slider",{
    loop:true,
    centeredslides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints:{
        0:{
            slidesPerView:-1,
        },
        768:{
            slidesPerView:-2,
        },
        1024:{
            slidesPerView:-3,
        },
    },
});



var swiper= new swiper(".featured-slider",{
    spacebetween:10,
    loop:true,
    centeredslides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        450:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:3,
        },
        1024:{
            slidesPerView:4,
        },
    },
});



var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

