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

// accardion
const items = document.querySelectorAll('.accordion_item');

items.forEach((item) => {
    const accordion_btn = item.querySelector('.accordion_btn');
    const content = item.querySelector('.content');

    accordion_btn.addEventListener('click', () => {
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';

        item.classList.toggle('active')
    });
});
// accardion


var swiper = new Swiper(".teacherSwiper", {
    navigation: {
      nextEl: ".teacher-button-next",
      prevEl: ".teacher-button-prev",
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        650: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        993: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 68,
        },
    },
});


// Input number
let input = document.querySelector("#requestPhone");
let input2 = document.querySelector("#requestPhone2");
window.intlTelInput(input, {});
window.intlTelInput(input2, {});

let inputValue1 = document.querySelector("#requestPhone");
let inputValue2 = document.querySelector("#requestPhone2");
let countryCode = "+1";
inputValue1.value = countryCode;
inputValue2.value = countryCode;


$('.input_phone__wrap').each(function (idx, el) {
    let inp = $(el).find('input[type="tel"]')[0];
    $(inp).inputmask({"mask": "+9(999)999-9999"})
    $(inp).on('input', function () {
        setTimeout(() => {
            let ico = $(el).find('.iti__selected-flag .iti__flag')[0].getAttribute('class').split(' ')[1]
            if (ico.length > 5) {
                ico = ico.slice(ico.length - 2)
                fetchCountry(inp, ico.toUpperCase());
            }
        }, 200);
    })

    $(el).find('.iti__country-list li').each(function (li_idx, li) {
        $(li).click(function () {
            let code = $(li).find('.iti__dial-code').text();
            $(inp).val(code);
            setTimeout(() => {
                let ico = $(el).find('.iti__selected-flag .iti__flag')[0].getAttribute('class').split(' ')[1]
                if (ico.length > 5) {
                    ico = ico.slice(ico.length - 2)
                    fetchCountry(inp, ico.toUpperCase());
                }
            }, 200);
        })
    })
})


function fetchCountry (el, ico) {
    fetch("./js/country.json")
        .then((res) => res.json())
        .then(res => {
            res.forEach(c => {
                if (c.iso == ico) {
                    let m = c.mask;
                    let code = ''
                    for (let i = 1; i < c.code.length; i++) {
                        code += '9'
                    }
                    $(el).inputmask({"mask": `+${code}${m}`})
                }
            })
        })
}


