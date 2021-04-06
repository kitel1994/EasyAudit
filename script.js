const dots = document.getElementById('dots')
const topel = document.getElementById('top')
const hamb = document.getElementById('hamb')
const ul = document.getElementById('ul')
const nav = document.getElementById('nav')

dots.addEventListener('click', () => {
    topel.classList.toggle('active')
    dots.classList.toggle('active')
})

hamb.addEventListener('click', () => {
    hamb.classList.toggle('active')
    ul.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    if(this.scrollY > 140) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
})