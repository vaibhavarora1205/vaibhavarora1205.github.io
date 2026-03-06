let btn=document.querySelectorAll(".btn");
let displayel=document.querySelector(".display");
let output=document.querySelector("#output");
let container=document.querySelector(".container");
 let dispval="";
const updatedisplay=(value)=>{
    if(value=="X")
    {
        value="*";
    }
    if(value=="AC" || value=="Delete")
    {
        dispval="";
    }
    else if(value=="DEL" || value=="Backspace"){
        dispval=dispval.slice(0,-1);
    }
    else if(value=="=" || value=="Enter")
    {
        try{
        dispval=eval(dispval);
        }
        catch{
            dispval="Error";
        }
    }
    else
    {
        dispval=dispval+value;
    }
    output.innerText= dispval;
}
const buttonanimate=(value)=>{
    btn.forEach((button)=>{
        if(button.textContent==value)
        {
            button.classList.add("active");
            setTimeout(()=>{
                button.classList.remove("active");
            },100);
        }
    })
}
document.addEventListener("keydown",(e)=>{
    console.log(e.key);
    value=e.key;
    console.log(value);
    updatedisplay(value);
    buttonanimate(value);
})
btn.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log("Button was clicked");
        let value1= e.target.innerText;
        console.log(value1);
        console.log(e);
        updatedisplay(value1);
    })
})
let colourbtn=document.querySelectorAll(".colours");
colourbtn.forEach((cbtn)=>{
    cbtn.addEventListener("click",(e)=>{
    let colour=e.target.innerText;
    changecolour(colour);
})
})
function changecolour(colour){
    if(colour=="1")
    {
        container.classList.add("whitebg");
        console.log("white");
    }
    if(colour=="2")
    {
        container.classList.add("pinkbg");
    }
    if(colour=="3")
    {
        container.classList.add("bluebg");
    }
    if(colour=="4")
    {
        container.classList.remove("pinkbg");
        container.classList.remove("bluebg");
        container.classList.remove("whitebg");
    }
}