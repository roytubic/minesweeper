document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener('click', checkForWin)
document.addEventListener('contextmenu', checkForWin)

// Define your `board` object here!
var board = {
  cells: []
}

makeBoard(4)

// Create function to that will make the board 
function makeBoard(size) {
  for (x = 0; x < size; x++){
    for (y = 0; y < size; y++){
      board.cells.push({
        row: x,
        col: y,
        isMine: Math.random() <0.3,
        isMarked: false,
        hidden: true
      })
    }
  }
startGame
}



function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
  let surroundingMines = 0
  // function should apply the countSurroundingMines function to the array
  for (let i = 0; i < board.cells.length; i++) {
    // console.log(i)
      board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
      //console.log(board.cells[i])
      
  }
  // console.log(board)
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  // lib.displayMessage('You win!')

let mines = board.cells.filter(fail => fail.isMine == true)
let notMines = board.cells.filter(noFail => noFail.isMine == false)
let notHidden = board.cells.filter(nonHidden => nonHidden.hidden == false)
let allMinesMarked = mines.every(fail => fail.isMarked == true)
let surroundingShown = notMines.every(noFail => noFail.hidden == false)

  if (allMinesMarked == true && surroundingShown == true)
  
  
  
  
  
  {
  return lib.displayMessage('You win!')
  }
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
// var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  // console.log(cell)
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  let mines = 0 
  for (let i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine == true) {
      mines++ 
    }
  }
  // console.log(mines)
  return mines
  // console.log(surrounding)
}

