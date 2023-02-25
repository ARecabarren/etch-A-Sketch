let container = document.querySelector('#grid-container')
let gridSize = 16;
let bodyRef = document.querySelector('body')
const height = 500, width = 500;
let pixelHeight = height/gridSize, pixelWidth = width/gridSize;
let pixel = document.createElement('div')
let isMouseDown = false;

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
            newCol.style.backgroundColor = 'black';
        })
        newCol.addEventListener('mouseenter',()=>{
            if (isMouseDown){
                newCol.style.backgroundColor = 'black'
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


//Resolution buttons
function remakeGrid(){
    let rows = document.querySelectorAll('.row');
    for (const row of rows) {
        container.removeChild(row)
    }
    makeGrid()
}


let thirty = document.querySelector('#thirty');

thirty.addEventListener('click',()=>{

    console.log('setoy en el boton de 30x30')
    gridSize = 30;
    setPixelSize()
    remakeGrid()
})

