import AjaxCart from './services/Cart'
import { ProductForm } from './interfaces/ICart'

document.addEventListener('DOMContentLoaded', () => {
    const [...btnAddToCart] = document.querySelectorAll<HTMLButtonElement>('button.add-to-cart');
    const [...btnRemoveToCart] = document.querySelectorAll<HTMLButtonElement>('.ajaxcart-product__remove');
    const btnOpenCart = document.querySelector('.header__icon--cart') as HTMLAnchorElement;
    const btnCloseCart = document.querySelector('.drawer__close-button') as HTMLButtonElement;

    btnAddToCart.forEach( btn => {
        btn.addEventListener('click', async (event: Event) => {
            event.preventDefault()
            const target = event.target as HTMLButtonElement
            const form = target.form as ProductForm
            const id = parseInt(form.elements.id.value)
            const quantity = parseInt(form.elements.quantity.value)
            target.classList.add('loading')
            await AjaxCart.addItem({id, quantity})
            target.classList.remove('loading')
        })
    })

    btnRemoveToCart.forEach( btn => {
        btn.addEventListener('click', async (event: Event) => {
            event.preventDefault()
            const target = event.target as HTMLButtonElement
            const id = Number(target.dataset.id)
            const quantity = 0
            await AjaxCart.modifyItem({id, quantity})
        })
    })
    
    btnOpenCart.addEventListener('click', async(event: Event) => {
        event.preventDefault()
        AjaxCart.openDrawer()
    })

    btnCloseCart.addEventListener('click', async(event: Event) => {
        event.preventDefault()
        AjaxCart.closeDrawer()
    })

})
