const btr = document.querySelector(".btr")
const navbar = document.querySelector(".navbar__collection")
const menu = document.querySelector(".menu")
const inp = document.querySelector(".inp")
const form = document.querySelector(".form")
const header = document.querySelector(".header")
 const a = document.querySelector(".top")
//  console.log(a);


menu.addEventListener("click",()=>{
    sidebarOpen()
    console.log("yaxshi");
} )
menu.addEventListener("mouseenter",  ()=> {
 
console.log("mouse enter");
})
menu.addEventListener("mousemove", ()=> {
    sidebarOpen() 
    console.log("mouse move");
})
inp.addEventListener("focus", ()=>{
    console.log("focus");
})
inp.addEventListener("blur", ()=>{
    console.log("blur");
})
inp.addEventListener("input", (event)=>{
    let value = event.target.value
    console.log(value );
})
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log("ok");
})
window.addEventListener("scroll", ()=>{
    let scrollValue = window.scrollY
    if(scrollValue > 200){
        header.classList.add("shrink")
    }else if(scrollValue <= 0 ){
        header.classList.remove("shrink")
         a.style.bottom = "-40px"
    }

    if(scrollValue > 50){
        a.style.bottom = "30px"
    }
})



function sidebarOpen(){
    navbar.classList.toggle("show")
}