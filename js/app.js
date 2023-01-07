// MOBILE MENU WITH ANIMATION
const initApp = () => {
    const hamburgerBtn = document.getElementById('burger')
    const mobileMenu = document.getElementById('menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)