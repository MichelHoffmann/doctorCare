let nav = document.getElementById('navigation')
let menu = document.getElementsByClassName('open-menu')
let corpo = document.getElementById('body')
let scrollitem = document.getElementById('BackToTop')

function onScroll() {
  function navScroll() {
    if (scrollY > 0) {
      nav.classList.add('scroll')
    } else {
      nav.classList.remove('scroll')
    }
  }

  function BackToTop() {
    if (scrollY > 550) {
      scrollitem.classList.add('BackToTopOn')
    } else {
      scrollitem.classList.remove('BackToTopOn')
    }
  }
}

function openMenu() {
  corpo.classList.add('menu-expanded')
}

function closeMenu() {
  corpo.classList.remove('menu-expanded')
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
#aboyt .content,`)
