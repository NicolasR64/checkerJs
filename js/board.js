// generate board
function generateBoard(player1, player2){
    console.log('generating board...');
    let container = document.querySelector("#board-container");
    container.innerHTML = '';

    let displayedBoard = '';
    //création tab 2d
    let piece = new Array(8);
    for(let i=0; i < piece.length; i++){
        piece[i] = new Array(8);
    }

    //maj car var reservé
    let Case;

    //creation board
    for(let row=0; row < 8; row++){
        for(let col=0; col < 8; col++){
            if((col + row) % 2 == 1){
                displayedBoard += `<div id="case${row}${col}" class="case black"><div class="pion"></div></div>`;
                if(row < 3){
                    piece[row][col] = new pion(Number(`${row}${col}`), player1, 1);
                }else if(row > 4){
                    piece[row][col] = new pion(Number(`${row}${col}`), player2, 1);
                }else{
                    piece[row][col] = new pion(Number(`${row}${col}`), null, 0);
                }
            }else{
                displayedBoard += `<div id="case${row}${col}"  class="case white" style="color: black;"><div class="pion"></div></div>`
                piece[row][col] = new pion(Number(`${row}${col}`), null, 0);
            }
        }
    }
    console.table(piece);

    container.innerHTML += displayedBoard;
    displayPion(piece);

    //add event listener
    for(let row=0; row < 8; row++){
        for(let col=0; col < 8; col++){
            document.querySelector(`#case${id} .pion`).addEventListener('click', move.checkMoveExist);
        }
    }
}

function displayPion(piece){
    for(let row=0; row < 8; row++){
        for(let col=0; col < 8; col++){
            if(piece[row][col].owner != null) {
                piece[row][col].displayPion(`${row}${col}`, piece[row][col].owner.color);
            };
        }
    }
}

function generatePlayer(){
    let player1 = new owner(1, "red", "nicolas");
    let player2 = new owner(2, "yellow", "megane");
    generateBoard(player1, player2);
}

let target = document.querySelector("#startGame");
target.addEventListener('click', generatePlayer);