// hamburger menu should open and close when button is clicked
// menu class should show and hide on menu element
// menu must close with outside click
// prevent menu from closing on inside click
// escape key to close menu
// aria-expanded = true when open, false when closed

var hamburgerBtn =  document.querySelector('.hamburger-btn')
var hamburgerMenu = document.querySelector('.hamburger-menu')

function toggleMenu() {
    hamburgerMenu.classList.toggle('show-menu')
    hamburgerBtn.focus()
    if (hamburgerMenu.classList.contains('show-menu')) {
        hamburgerBtn.setAttribute('aria-expanded', true)
    } else {
        hamburgerBtn.setAttribute('aria-expanded', false)
    }
}

document.onkeyup = function(e) {
    if (e.key === 'Escape' && hamburgerMenu.classList.contains('show-menu')) {
        toggleMenu()
    }
}

document.onclick = function(e) {
    if(!hamburgerMenu.contains(e.target) && hamburgerMenu.classList.contains('show-menu') || e.target === hamburgerBtn) {
        toggleMenu()
    }
}





