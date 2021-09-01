import AjaxCart from './services/Cart'

interface WindowApps extends Window {
    $Innovate: Object
    $Cart: typeof AjaxCart
}

declare const window: WindowApps
window.$Innovate = {
    $Cart: AjaxCart    
}