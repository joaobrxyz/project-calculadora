const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector("#res")
const display = document.querySelector(".display")
const tcopy = document.querySelector("#tcopy")
const tlimpar = document.querySelector("#tlimpar")
const tigual = document.querySelector("#tigual")
let sinal = false
let decimal = false

teclasNum.map((el)=>{
    el.addEventListener("click",(evt)=>{
        if(display.innerHTML == "0"){
            display.innerHTML = ""
        }
        if (evt.target.innerHTML == "."){
            if (display.innerHTML == ""){
                display.innerHTML = "0"
            }
            if(!decimal){
                decimal = true
                sinal = true
                display.innerHTML += evt.target.innerHTML
            }
        } else {
            if(["-","+","*","/"].includes(display.innerHTML[display.innerHTML.length-1])){
                decimal = false
            }
            display.innerHTML += evt.target.innerHTML
            sinal = false
        }
    })
})
teclasOp.map((el)=>{
    el.addEventListener("click",(evt)=>{
        if (sinal === false){
            if (display.innerHTML == "0"){
                display.innerHTML = ""
            }
            if (evt.target.innerHTML == "x") {
                display.innerHTML += "*"
            } else {
                display.innerHTML += evt.target.innerHTML
            }
            sinal = true
            decimal = true
        } 
    })
})

tlimpar.addEventListener("click",()=>{
    display.innerHTML = "0"
    decimal = false
    sinal = false
})

tigual.addEventListener("click",(evt)=>{
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

tcopy.addEventListener("click",(evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
})