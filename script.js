let container = document.querySelector('#grid-container')
let gridSize = 50;
let bodyRef = document.querySelector('body')
const height = 450, width = 450;
let pixelHeight = height/gridSize, pixelWidth = width/gridSize;
let pixel = document.createElement('div')
let isMouseDown = false;
let allButtons = document.querySelectorAll('button')

function setPixelSize(){
    pixelHeight = height/gridSize;
    pixelWidth = width/gridSize
}

// WHITEBOARD GENERATION

document.addEventListener('mousedown',()=>{
    isMouseDown = true;
})

document.addEventListener('mouseup',()=>{
    isMouseDown = false;
})

pixel.setAttribute('style',`width:${pixelWidth}px;height:${pixelHeight}px`)

container.setAttribute('style',`width: ${width}px; height: ${height}px`)

function makeGrid() {
    for(let row= 1 ; row<=gridSize; row++){
    let newRow = document.createElement('div')
    newRow.classList.add('row')
    newRow.setAttribute('style','display:flex')
    for(let col= 1 ; col<=gridSize; col++){
        let newCol = document.createElement('div')
        newCol.classList.add('pixel')
        newCol.setAttribute('style',`width: ${pixelWidth}px; height: ${pixelHeight}px`);

        // Interaction mouse pixel
        newCol.addEventListener('click',()=>{
            if (eraserOff && rainbowOFF) {
                newCol.style.backgroundColor = selectedColor;
            }else if(rainbowOFF || !eraserOff){
                newCol.style.backgroundColor = 'white'
            }else{
                newCol.style.backgroundColor = generateRandomColor()
            }
            
        })
        newCol.addEventListener('mouseenter',()=>{
            if (isMouseDown && eraserOff && rainbowOFF){
                newCol.style.backgroundColor = selectedColor
            }
            if(isMouseDown && !rainbowOFF){
                newCol.style.backgroundColor = generateRandomColor()
            }
        })

        
        newRow.appendChild(newCol)
    }
     container.appendChild(newRow)
}
}

makeGrid()

// BUTTONS TOOLS
//Clean whiteboard
let deleteAll = document.querySelector('#deleteAll')
deleteAll.addEventListener('click',cleanWhiteboard)

function cleanWhiteboard(){
    let pixels = document.querySelectorAll('.pixel');
    for(let pixel of pixels){
        pixel.style.backgroundColor = 'white'
    }
}

//Clean pixel
let eraserOff = true
const eraserButton = document.querySelector('#eraser')
eraserButton.addEventListener('click',()=>{
    if(eraserOff){
        eraserOff = false
        for (const button of allButtons) {
            button.disabled = true
        }
        eraserButton.disabled = false
    }else {
        for (const button of allButtons) {
            button.disabled = false
        }
        eraserOff = true
        
    }
})

//Pick a color

let selectedColor = "#179795";
const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('change', (event) => {
    selectedColor = event.target.value;
});

// Rainbow mode
let rainbowOFF = true
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const randomColorBtn = document.getElementById('random-color-btn');
randomColorBtn.addEventListener('click', () => {
    if(rainbowOFF){
        rainbowOFF = false
    }else{
        rainbowOFF = true
    }
    // selectedColor = generateRandomColor();
});

//Resolution buttons
function remakeGrid(){
    let rows = document.querySelectorAll('.row');
    for (const row of rows) {
        container.removeChild(row)
    }
    makeGrid()
}

//16x16
let sixTeen = document.querySelector('#sixTeen');
sixTeen.addEventListener('click',()=>{
    gridSize = 16;
    setPixelSize()
    remakeGrid()
})


// 30x30
let thirty = document.querySelector('#thirty');
thirty.addEventListener('click',()=>{
    gridSize = 30;
    setPixelSize()
    remakeGrid()
})

//50x50
let fifty = document.querySelector('#fifty');
fifty.addEventListener('click',()=>{
    gridSize = 50;
    setPixelSize()
    remakeGrid()
})