import AjaxCart from './services/Cart'
import { ProductForm } from './interfaces/ICart'

document.addEventListener('DOMContentLoaded', () => {
    const [...btnAddToCart] = document.querySelectorAll<HTMLButtonElement>('button.add-to-cart');

    btnAddToCart.forEach( btn => {
        btn.addEventListener('click', (event: Event) => {
            event.preventDefault()
            const target = event.target as HTMLButtonElement
            const form = target.form as ProductForm
            const id = parseInt(form.elements.id.value)
            const quantity = 1
            AjaxCart.addItem({id, quantity})
        })
    })
})
