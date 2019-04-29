/*----- constants -----*/
	const COLORS = {
		'1': 'blue',    // is player 1
		'-1': 'red',    // is player 2
		'null': 'white' // is when square is empty
	};

    const winningCombos = [
        [0, 1, 2],  // top row across
        [3, 4, 5],  // second row across
        [6, 7, 8],  // third row across
        [0, 3, 6],  // first column down
        [1, 4, 7],  // second column down
        [2, 5, 8],  // third col down
        [0, 4, 8],  // diagonal
        [2, 4, 8]   // diagonal
    ];
      
/*----- app's state (variables) -----*/

var board, winner, turn;


/*----- cached element references -----*/
const msgEl = document.getElementById('msg');
var squares = document.getElementById('cell');

/*----- event listeners -----*/

document.getElementById('cell')
 .addEventListener('click', handleClick);

 //think I need this too for the reset button
 document.getElementById('replay')
 .addEventListener('click', handleClick);


/*----- functions -----*/

function initateBoard() {
    board = [null, null, null, null, null, null, null, null, null];  // all nine squares start empty (color = white)
    winner = null;  // there is no winner at start of game
    turn = 1;       // play 1 gets first turn
    render();       // display the board with the above conditions
}

function handleClick(evt) {
    console.log("hellooo")
    const cell = evt.target;
    const colIdx = parseInt(cell.id.replace('col', ''));
    if (isNaN(colIdx)) return;
    const rowIdx = [board[colIdx].indexOf(0)];
    if (rowIdx === -1) return;
    board[colIdx][rowIdx] = turn;
    winner = getWinner();
    turn = turn *-1;
    render();
}

function getWinner() {
    let winner = null;
    for (let colIdx = 0; colIdx < board.length; colIdx++) {
        winner = checkCol(colIdx);
        if (winner) break;
    }
    return winner;
}

function resetBoard() {

}


// function checkCol() {

