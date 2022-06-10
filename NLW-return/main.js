let nav = document.getElementById('navigation')
let menu = document.getElementsByClassName('open-menu')
let corpo = document.getElementById('body')

function onScroll() {
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
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
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#aboyt .content,`)
