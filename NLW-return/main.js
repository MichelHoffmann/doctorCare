window.addEventListener('scroll', onScroll)

let nav = document.getElementById('navigation')
let menu = document.getElementsByClassName('open-menu')
let corpo = document.getElementById('body')
let scrollitem = document.getElementById('BackToTopButton')

onScroll()
function onScroll() {
  ShowNavOnScroll()
  ShowBackToTopButtonOnScroll()
  activeMenuLine()
}

function ShowNavOnScroll() {
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

function ShowBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    scrollitem.classList.add('BackToTopOn')
  } else {
    scrollitem.classList.remove('BackToTopOn')
  }
}

function openMenu() {
  corpo.classList.add('menu-expanded')
}

function closeMenu() {
  corpo.classList.remove('menu-expanded')
}

function activeMenuLine() {
  if (scrollY < 500) {
    //window.alert('entrou no if')
    //scrollitem.classList.add('BackToTopOn')
  } else {
    //window.alert('entrou no else')
    //scrollitem.classList.remove('BackToTopOn')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: '700',
}).reveal(`#home,
#home img, 
#home .stat,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
#about .content img,
#contact,
#contact header,
#contact .content,
#contact .content img,
footer`)
