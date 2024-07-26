const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector("#res")
const display = document.querySelector(".display")
const ton = document.querySelector("#ton")
const tlimpar = document.querySelector("#tlimpar")

teclasNum.map((el)=>{
    el.addEventListener("click",(evt)=>{
        display.innerHTML += evt.target.innerHTML
    })
})
teclasOp.map((el)=>{
    el.addEventListener("click",(evt)=>{
        display.innerHTML += evt.target.innerHTML
    })
})

tlimpar.addEventListener("click",()=>{
    display.innerHTML = "0"
})