let container = document.querySelector('#grid-container')
let gridSize = 3

container.setAttribute('style','border:1px solid yellow')

console.log('starting loop',container)
for(let row= 1 ; row<=gridSize; row++){
    let newRow = document.createElement('div')
    newRow.setAttribute('style','border:1px solid red;')
    for(let col= 1 ; col<=gridSize; col++){
        newCol = document.createElement('div')
        newCol.setAttribute('style','display:inline')
        newCol.textContent = 'x'
        newRow.appendChild(newCol)
    }
     container.appendChild(newRow)
}
