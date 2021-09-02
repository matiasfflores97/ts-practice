import { Item, ItemToCart } from '../interfaces/ICart'

class AjaxCart {
    public quantityInput: NodeListOf<HTMLInputElement>

    constructor(){
        this.quantityInput = document.querySelectorAll('.product__quantity')
    }

    public async addItem(variantData: ItemToCart): Promise<any>{
        try{
            const req = await fetch('/cart/add.js', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ id: variantData.id, quantity: variantData.quantity })
            })
            const res = await req.json()
            return res
        }catch(err){
            console.log(err)
            return err
        }
    }
}

const ajaxCart = new AjaxCart()
export default ajaxCart