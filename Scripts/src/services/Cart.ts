import { ICart, Item, ItemToCart } from '../interfaces/ICart'

class AjaxCart {
    public ajaxCartDrawer: HTMLDivElement
    public quantityInput: NodeListOf<HTMLInputElement>

    constructor(){
        this.ajaxCartDrawer = document.querySelector('#CartDrawer') as HTMLDivElement
        this.quantityInput  = document.querySelectorAll('.product__quantity')
    }

    public openDrawer(){
        this.ajaxCartDrawer.classList.add('drawer--opening')
    }

    public closeDrawer(){
        this.ajaxCartDrawer.classList.remove('drawer--opening')
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
        }catch(err: any){
            return err
        }
    }

    public async getCart(): Promise<ICart>{
        try{
            const req = await fetch('/cart.js')
            const res: ICart = await req.json()
            return res;
        }catch(err: any){
            return err
        }
    }

    public async buildCart(): Promise<void>{
        const cart = await this.getCart()
        this.openDrawer()
    }
}

const ajaxCart = new AjaxCart()
export default ajaxCart