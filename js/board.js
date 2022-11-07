// generate board
function generateBoard(){
    console.log('generate board');
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
                displayedBoard += `<div id="${row}${col}" class="case black">${row}${col} </div>`;
                if(row < 3){
                    piece[row][col] = 1;
                }else if(row > 4){
                    piece[row][col] = 2;
                }else{
                    piece[row][col] = 0;
                }
            }else{
                displayedBoard += `<div class="case white" style="color: black;">${row}${col}</div>`
                piece[row][col] = 0;
            }
        }
    }
    console.table(piece);


    container.innerHTML += displayedBoard;
}

let target = document.querySelector("#startGame");
target.addEventListener('click', generateBoard);