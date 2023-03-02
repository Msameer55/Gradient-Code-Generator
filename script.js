const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const clrCode = document.querySelector('.clr-code')

let hexCode = "0123456789abcdef";
 
const generateRandomColor = () => {
    let clr = "#";

    for (i=0; i<6; i++){
        let RandhexCode = hexCode[Math.floor(Math.random() * hexCode.length)];
        clr+= RandhexCode;
      
    }
    
    return clr;
}

const generateGrad = () =>
{
    let colorOne = generateRandomColor();
    let colorTwo = generateRandomColor();

    let angle = Math.floor(Math.random() * 360);

    container.setAttribute("style", `background: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`);
    
    clrCode.innerHTML = "linear-gradient("+colorOne +"," + colorTwo +")";
}

btn.addEventListener("click", ()=>{
    generateGrad();
})

window.addEventListener("DOMContentLoaded", () =>{
    generateGrad();
});