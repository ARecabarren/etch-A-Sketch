let container = document.querySelector('#grid-container')
let gridSize = 3;
let bodyRef = document.querySelector('body')
const height = 360, width = 360;
const pixelHeight = height/gridSize, pixelWidth = width/gridSize;
let pixel = document.createElement('div')
pixel.setAttribute('style',`width:${pixelWidth}px;height:${pixelHeight}px;background-color: blue`)
// bodyRef.appendChild(pixel)

container.setAttribute('style',`width: ${width}px; height: ${height}px`)

console.log('starting loop',container)
for(let row= 1 ; row<=gridSize; row++){
    let newRow = document.createElement('div')
    newRow.setAttribute('style','display:flex')
    for(let col= 1 ; col<=gridSize; col++){
        newCol = document.createElement('div')
        newCol.setAttribute('style',`width: ${pixelWidth}px; height: ${pixelHeight}px; border: 1px solid black`)
        // newCol.textContent = 'x'
        newRow.appendChild(newCol)
    }
     container.appendChild(newRow)
}
