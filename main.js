/* full_page */
let fullPages = document.querySelectorAll(".page")

function fullPageScroll() {
  fullPages.forEach((thisElement, i) => {
      thisElement.addEventListener("wheel", (e) => {
      e.preventDefault()
      let { deltaY } = e
      if(i==0){
        if(deltaY === 100){
          pageScroll(i+1)
        }
      }else if(i==8){
        if(deltaY === -100){
          pageScroll(i-1)
        }
      }else{
        pageMove(i,deltaY)
      }
      })
  })
}
fullPageScroll()

//페이지 이동
function pageMove (i,deltaY){
  if (deltaY === 100) {
    pageScroll(i+1)
  } else if (deltaY === -100){
    pageScroll(i-1)
  }
}

//스크롤 애니메이션
function pageScroll(direction) {
  gsap.to(window, 1, {
      scrollTo: fullPages[direction].offsetTop,
  })
}

//스크롤 = 탭 메뉴
let pageOn = document.querySelectorAll('.on')
let menus = document.querySelectorAll('.nav .menu')

window.addEventListener('scroll', ()=>{
  pageOn.forEach((page, i) => {
    if(window.scrollY == page.offsetTop){
      menus.forEach(menu=>{
        menu.classList.remove('active')
      })
      menus[i].classList.add('active')
    }
  })
})


/* background_effect */
const particle = document.querySelector(".bg_img");
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5 ;

particle.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;
  
  particle.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});

const particles = document.querySelector(".bg_img_end");
const windowWidths = window.innerWidth / 5;
const windowHeights = window.innerHeight / 5 ;

particles.addEventListener('mousemove', (e) => {
  const mouseXs = e.clientX / windowWidths;
  const mouseYs = e.clientY / windowHeights;
  
  particles.style.transform = `translate3d(-${mouseXs}%, -${mouseYs}%, 0)`;
});


/* text_anime */
new TypeIt('.page1_txt' , {
    speed: 45, 
}).go()

/* mouse_cursor */
const cursor = document.querySelector(".cursor");
let timeout

//follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

//cursor effects when mouse stopped
  function mouseStopped(){
    cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 8000);
});

/* img_animation */
  // const targets = document.querySelectorAll(".fade-class");
  // const options = { root: null, threshold: 0.1, rootMargin: "0px" };

  // const observer = new IntersectionObserver(function (entries, observer) {
  //   entries.forEach((entry) => {
  //     const container = entry.target;
  //     if (entry.isIntersecting) {
  //       container.classList.add("fade-in");
  //     } else {
  //       container.classList.remove("fade-in");
  //     }
  //   });
  // }, options);

  // targets.forEach((target) => {
  // observer.observe(target);
  // });

/* img_animation(aos) */
AOS.init({
   duration: 1000,
});

/* scroll_magic */
new ScrollMagic.Scene({
  triggerElement: ".skill_box",
  triggerHook: 0.6,
})
  .setClassToggle(".skill_box", "on")
  .addTo(new ScrollMagic.Controller())

/* toTop */
const topBtn =document.querySelector('.toTop')

topBtn.addEventListener('click',()=>{
  gsap.to(window, 2, {
    scrollTo: 0
  })
})

/* hover_3d */
VanillaTilt.init(document.querySelector(".profile"), {
		max: 10,
		speed: 800,
    perspective: 1000, 
	});

VanillaTilt.init(document.querySelectorAll(".skill_txt .text"), {
		max: 10,
		speed: 800,
    perspective: 1000, 
	});

/* swiper */
const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

/* img_popup */
// let img = document.querySelector('.pop_up')
// for(let i = 0; i<img.length; i++){
//   img.item(i).onclick = function(){window.open("./images/resume.pdf")}}

function resume() {
window.open('./images/resume.pdf')
}
function porart() {
window.open('./images/porart_mobile.pdf')
}
function porart_mobile(){
window.open("https://tamoimi.github.io/porart_mobile/", 'porart_mobile', 
           'width=500, height=1000, scrollbars=yes, resizable=no')
}
function responsive() {
window.open('./images/responsive.pdf')
}
function mobile_main(){
  window.open("https://tamoimi.github.io/porart_mobile/main_page/main.html", 'porart_mobile', 
             'width=500, height=1000, scrollbars=yes, resizable=no')
  }
function mobile_sub(){
  window.open("https://tamoimi.github.io/porart_mobile/sub_page/sub.html", 'porart_mobile', 
             'width=500, height=1000, scrollbars=yes, resizable=no')
  }
function mobile_detail(){
  window.open("https://tamoimi.github.io/porart_mobile/detail_page/detail.html", 'porart_mobile', 
             'width=500, height=1000, scrollbars=yes, resizable=no')
  }
function baggu_react() {
  window.open('./images/baggu_web.pdf')
  } 

