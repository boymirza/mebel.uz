// Harakat vaqtida navbar rangi o'zgarishi

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})



//1.windows bu - html va css papkalrni js ga ulash uchun
window.addEventListener(type="DOMContentLoaded",listener=function(){
    let products = document.querySelectorAll(selectors=".product"),
    buttons = document.querySelectorAll(selectors="button"),
    openBtn = document.querySelector(selectors=".open");


//2.Bo'sh modalniy oynani chaqiramiz.
function createCart(){
    let cart = document.createElement(tagName="div"),
    field = document.createElement(tagName="article"),
    heading = document.createElement(tagName="h2"),
    closeBtn = document.createElement(tagName="button");

    cart.classList.add('cart')
    field.classList.add("cart-field")
    closeBtn.classList.add("close")

    heading.textContent="Mening savatim"
    closeBtn.textContent="chiqish"

    document.body.appendChild(cart)
    cart.appendChild(heading)
    cart.appendChild(field)
    cart.appendChild(closeBtn)
}
createCart() 
// mening savatim chiqish ni bosganda ishlashi uchun.
let cart = document.querySelector(selectors=".cart"),
     closeBtn = document.querySelector(selectors=".close"),
     field = document.querySelector(selectors=".cart-field");

     openBtn.addEventListener(type="click",listener=function(){
        cart.style.display="block"
     })
     closeBtn.addEventListener(type="click",listener=function(){
        cart.style.display="none"
     })
// Javascriptda clone qilish
     buttons.forEach(callbackfn=function(
        item=HTMLButtonElement,i=number){
            item.addEventListener(type="click",listener=function(){
                let cloneItem=products[i].cloneNode(deep=true),
                btn=cloneItem.querySelector(selectors="button");
// sotib olish so'zini yo'q qilish
                btn.remove()
                field.appendChild(cloneItem)
                products[i].remove()
            })
        })
})

// nav menusini ko'rish uchun
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// nav menuni yopish uchun
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener("click", closeNav)

