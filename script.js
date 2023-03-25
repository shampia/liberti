const itemButtons = document.querySelectorAll('section.item .item-btn button')
const items = document.querySelectorAll('section.item .items .items-item')

const visibleAll = () => {
        items.forEach(item => (
        item.style.display = 'flex'
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