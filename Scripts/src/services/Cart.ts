import { ICart, Item, ItemToCart } from '../interfaces/ICart'

class AjaxCart {
    public body: HTMLBodyElement | null = null
    public ajaxCartDrawer: HTMLDivElement | null = null
    public ajaxCartDrawerItems: HTMLDivElement | null = null

    constructor(){
        this.body                   = document.querySelector('body') as HTMLBodyElement
        this.ajaxCartDrawer         = document.querySelector('#CartDrawer') as HTMLDivElement
        this.ajaxCartDrawerItems    = document.querySelector('#CartContainer .drawer__scrollable') as HTMLDivElement
    }

    public openDrawer(){
        this.ajaxCartDrawer!.classList.add('drawer--opening')
        this.body!.classList.add('js-drawer-open');
    }

    public closeDrawer(){
        this.ajaxCartDrawer!.classList.remove('drawer--opening');
        this.body!.classList.remove('js-drawer-open');
    }

    public async addItem(variantData: ItemToCart): Promise<Item>{
        try{
            const req = await fetch('/cart/add.js', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ id: variantData.id, quantity: variantData.quantity })
            })
            const res = await req.json()
            this.buildCart()
            return res
        }catch(err){
            throw err
        }
    }

    public async modifyItem(variantData: ItemToCart): Promise<ICart>{
        try{
           const req = await fetch('/cart/change.js', {
               method: 'POST',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify({id: (variantData.id).toString(), quantity: variantData.quantity})
           })
           const res = await req.json()
           this.buildCart()
           return res 
        }catch(err){
            throw err
        }
    }

    public async getCart(): Promise<ICart>{
        try{
            const req = await fetch('/cart.js')
            const res: ICart = await req.json()
            const html = res.items.map(item => 
                `<div class="ajaxcart-product">
                    <button class="ajaxcart-product__remove" data-id="${item.id}">X</button>
                    <div class="ajaxcart-product__image">
                        <img src="${item.featured_image.url}" alt="${item.featured_image.alt}">
                    </div>
                    <div class="ajaxcart-product__meta">
                        <h4>${item.title}</h4>
                        <span>${Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.original_price)}</span>
                    </div>
                 </div>
                `
            ).join('')

            this.ajaxCartDrawerItems!.innerHTML = html

            return res;
        }catch(err){
            throw 'Error'
        }
    }

    public async buildCart(): Promise<void>{
        await this.getCart()
        this.openDrawer()
    }
}

const ajaxCart = new AjaxCart()
export default ajaxCart