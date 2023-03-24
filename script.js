const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });




const itemButtons = document.querySelectorAll('section.item .item-btn button')
const items = document.querySelectorAll('section.item .items .items-item')

const visibleAll = () => {
        items.forEach(item => (
        item.style.display = 'block'
    ))
}

const categorize = (target) => {
    visibleAll()
    items.forEach(item => {
        const type = item.getAttribute('data-type')

        if (type !== target) {
            item.style.display = 'none'
        }

    })
}

itemButtons.forEach(button => {
    const target = button.getAttribute('target')


    button.addEventListener('click', () => {
        if (target === 'all' ) {
            visibleAll()
        } else {
            categorize(target)
        }
    })

})