// ========================================== Auto Typing ================================
class TxtRotate {
    constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  }
};
  
TxtRotate.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    let that = this;
    let calculate = 300 - Math.random() * 100;
  
    if (this.isDeleting) { calculate /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      calculate = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      calculate = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, calculate);
};
  
window.onload = function() {
    let elements = document.getElementsByClassName('header__span');
    for (let i=0; i<elements.length; i++) {
      const toRotate = elements[i].getAttribute('data-rotate');
      const period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
  };

/*================================================== Countdown =======================================*/
(function () {
    //Calculating seconds, minutes, hours, Days.
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    //Set the deadline from current date till 
    let deadline = 'Dec 22, 2021 00:00:00',
        countdown = new Date(deadline).getTime(),
        x = setInterval(() => {
            let currentDate = new Date().getTime(),
                distance = countdown - currentDate;
            
            const setDays = document.getElementById('Days'),
                  setHours = document.getElementById('Hours'),
                  setMinutes = document.getElementById('Minutes'),
                  setSeconds = document.getElementById('Seconds');
            
            setDays.innerHTML = Math.floor(distance / (days)),
            setHours.innerHTML = Math.floor((distance % (days)) / (hours)),
            setMinutes.innerHTML = Math.floor((distance % (hours)) / (minutes)),
            setSeconds.innerHTML = Math.floor((distance % (minutes)) / (seconds));

            if(distance < 0) {
                clearInterval(x);
            }

        }, 0);
}());

/*======================================== Show Menu ==========================*/
const menu__container = document.getElementById('menu__box');
const menu__close = document.getElementById('menu__close');
const menu__burger = document.getElementById('header__menu');

menu__burger.addEventListener('click', () => {
  menu__container.classList.add('active')
})

// ============================== Close Menu ==================
menu__close.addEventListener('click', () => {
  menu__container.classList.remove('active')
})


// ====================== Sticky Nav Bar ==================
window.addEventListener('scroll', () => {
  let header__navigation = document.getElementById('header__navigation');

  if(window.scrollY > 100) {
    header__navigation.classList.add('scroll-header')
  }else {
    header__navigation.classList.remove('scroll-header')
  }
})

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1500,
    reset: true
});

sr.reveal(`.header__grid, .header__btn-left,
            .header__btn-right, .about__textBox,
            .about__grid, .form__text,
            .form__subject, .form__textarea,
            .footer__iconBox, .redirect, .form__btn, .show-scroll`, {
    interval: 100
})