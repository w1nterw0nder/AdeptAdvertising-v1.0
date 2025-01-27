const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const navLinks = document.querySelectorAll(".nav-link");

// nav(window).on("load", function () {

//   nav('.mobile_open').click(function () {
//       nav(".mobile").css("right", "0").css("transform", "scaleX(1)");
//   });
//   nav('.button.icon.close').click(function () {
//       nav(".mobile").css("right", "-20rem").css("transform", "scaleX(0)");
//   });
// });


navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./imgs/nav/cross.png";
        // nav('.nav.open').css('top', '0').css('transform','scaleX(1)');
    } else {
        navBtnImg.src = "./imgs/nav/menu.png";
        nav('.nav.open').css('right', '0').css('transform','scaleX(1)');
    }
}

AOS.init();


let mybutton = document.getElementById("myBtn");

// Появление кнопки при пролистывании
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// При нажатии на кнопку перекидывает на начало 
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

  // Закрытие меню при клике на ссылку
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      if (window.innerWidth < 1230) {
        nav.classList.remove("open");
      }
      // Плавный переход к разделу
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        event.preventDefault(); // Отключаем стандартное поведение
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
