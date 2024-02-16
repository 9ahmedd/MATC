let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let colume1 = document.getElementById("colume1");
let colume2 = document.getElementById("colume2");
let desc = document.getElementById("desc");
let rev = document.getElementById("rev");

button1.addEventListener("click", () => {
    colume1.style.cssText = "display:block"
    colume2.style.cssText = "display:none"
   button1.style.cssText = "background-color:#095b6b;border-color:#095b6b;"
   button2.style.cssText = "background-color:white;border-color:white;"
})
button2.addEventListener("click", () => {
    colume2.style.cssText = "display:block"
    colume1.style.cssText = "display:none"
    button2.style.cssText = "background-color:#095b6b;border-color:#095b6b;color:white"
    button1.style.cssText = "background-color:white;border-color:white;color:black"
})

desc.addEventListener("click",() => {
    desc.style.cssText="background-color:#095b6b;border-color:#095b6b;color:white;"
     rev.style.cssText = "background-color:white;border-color:white;color:black;"
})
rev.addEventListener("click",() => {
    rev.style.cssText="background-color:#095b6b;border-color:#095b6b;color:white;"
     desc.style.cssText = "background-color:white;border-color:white;color:black;"
})