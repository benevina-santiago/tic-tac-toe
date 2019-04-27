/*----- constants -----*/
	const COLORS = {
		'1': 'blue',
		'-1': 'red',
		'null': 'white'
	}

    const winningCombos = {
        'winCombo1': [],           
        'winCombo2': [],
        'winCombo3': [],
        'winCombo4': [],           
        'winCombo5': [],
        'winCombo6': [],         
        'winCombo7': [],
        'winCombo8': []
    }
/*----- app's state (variables) -----*/

var board, winner, turn;


    


/*----- cached element references -----*/
const msgEl = document.getElementById('msg');


/*----- event listeners -----*/
// this does NOT Work
// document.getElementsByClassName('box')
//     .addEventListener('click', handleClick);


/*----- functions -----*/



function getWinner() {
    let winner = null;
    for (let colIdx = 0; colIdx < board.length; colIdx++) {
        winner = checkCol(colIdx);
        if (winner) break;
    }
    return winner;
}

function init() {
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    winner = null;
    turn = 1;
    render();
}








// init ();

// function handleClick() {

// }

// function getWinner() {

// }


// function checkCol() {

// }


// function render () {
//     //display the board
// }


// function init() {
//     board = [
//         [0, 0, 0],  //column 1
//         [0, 0, 0],  //column 2
//         [0, 0, 0],  //column 3
//     ];
//     winner = null;  //when game starts there is no winner
//     turn = 1;       //delaring player 1's turn
//     render ();
//}