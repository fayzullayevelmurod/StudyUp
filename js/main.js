let header_media_bg = document.querySelector('.header_media_bg');
let header_media = document.querySelector('.header_media');
let header_media_close = document.querySelector('.header_media_close');
let header_burger = document.querySelector('.header_burger');


header_burger.addEventListener('click', () => {
    header_media.classList.toggle('active')
    header_media_bg.classList.toggle('active')
})

header_media_close.addEventListener('click', () => {
    header_media.classList.remove('active')
    header_media_bg.classList.remove('active')
})

header_media_bg.addEventListener('click', () => {
    header_media.classList.remove('active')
    header_media_bg.classList.remove('active')
})

