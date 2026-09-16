window.addEventListener("load",()=> {

// ALL PARAMETERS 

let block = document.getElementById("block");
let posY = document.getElementById("pos-y");
let PosX = document.getElementById("pos-x");
let sizeChange = document.getElementById("size");
let opacityChange = document.getElementById('opacity')
// POS Y MANIPULATOR

posY.addEventListener("input", ()=>{
    block.style.top = posY.value + "px"
})

// POS X MANIPULATOR

PosX.addEventListener("input", ()=>{
block.style.left = PosX.value +"px"
})

// SIZE MANIPULATOR

sizeChange.addEventListener("input", ()=>{
block.style.transform = `scale(${sizeChange.value})`
})

// OPACITY MANIPULATOR

opacity.addEventListener('input', ()=>{
block.style.opacity = opacity.value;
})

// SHAPE MANIPULATOR
let shape = document.getElementById("shape-select")
let okayButton = document.getElementById("ok-shape")
okayButton.addEventListener('click', ()=>{
let option = shape.value;

if (option === "1"){
    block.style.rotate = 0 + "deg"
    block.style.borderRadius = 0 + "%";
}
   else if (option === "2"){ 
   block.style.borderRadius = 50 + "%";
} else if (option === "3"){
    block.style.borderRadius = 0 + "%";
    block.style.rotate = 45 + "deg"
}  
})

// HEX  MANIPULATOR
let hexColor = document.getElementById("hex")
hexColor.addEventListener("keyup",(e) =>{
    if (e.key === "Enter"){
        block.style.backgroundColor = `#${hexColor.value}`
    }
})


// RGBA MANIPULATION 

let rgbaR = document.getElementById("rgba-r");
let rgbaG = document.getElementById("rgba-g");
let rgbaB = document.getElementById("rgba-b");
let rgbaA = document.getElementById("rgba-a");


 
let rgbaInput = document.querySelectorAll(".rgba-container input");

rgbaInput.forEach((element)=>{
element.addEventListener("input", ()=>{

    block.style.backgroundColor = `rgba(${rgbaR.value}, ${rgbaG.value}, ${rgbaB.value}, ${rgbaA.value})`

})
});
});