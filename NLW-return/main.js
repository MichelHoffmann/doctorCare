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
