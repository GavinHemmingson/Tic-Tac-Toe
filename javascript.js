function gameBoard(game)
{
    var board = Object.create(gameBoard.prototype);
    board.game = game;
    return board;
}
gameBoard.prototype = {
    getBoard: function(){
        return this.game;
    }
}
    // let boardDisplay = `${board[0]}|${board[1]}|${board[2]}\n`+`- - -`+`\n${board[3]}|${board[4]}|${board[5]}\n`+`- - -`+`\n${board[6]}|${board[7]}|${board[8]}`


function player(change, symbol)
{
    let move = parseInt(prompt("number"),10);
    
    change.game[move] = symbol;
    var board = "";
    for(let i = 0; i < change.game.length; i++){
        if((i+1)%3 == 0)
            {
                board += change.game[i]+`\n`;
            }
        else
            {
                board += change.game[i];
            }
        }
    console.log(board)
}

function game()
{
    let player1 = true;
    let gamegoing = true;
    var gamingBoard = gameBoard(["#","#","#","#","#","#","#","#","#"])
    while(gamegoing)
        {

        
    switch(gamegoing)
    {
        case (gamingBoard.game[0] === "X" && gamingBoard.game[1] === "X" && gamingBoard.game[2] === "X")||
            (gamingBoard.game[0] === "X" && gamingBoard.game[4] === "X" && gamingBoard.game[8] === "X")||
            (gamingBoard.game[0] === "X" && gamingBoard.game[3] === "X" && gamingBoard.game[6] === "X")||
            (gamingBoard.game[1] === "X" && gamingBoard.game[4] === "X" && gamingBoard.game[7] === "X")||
            (gamingBoard.game[2] === "X" && gamingBoard.game[5] === "X" && gamingBoard.game[8] === "X")||
            (gamingBoard.game[2] === "X" && gamingBoard.game[4] === "X" && gamingBoard.game[6] === "X")||
            (gamingBoard.game[3] === "X" && gamingBoard.game[4] === "X" && gamingBoard.game[5] === "X")||
            (gamingBoard.game[6] === "X" && gamingBoard.game[7] === "X" && gamingBoard.game[8] === "X"):
            return console.log("Player One Wins!"), gamegoing = false;
        case (gamingBoard.game[0] === "O" && gamingBoard.game[1] === "O" && gamingBoard.game[2] === "O")||
            (gamingBoard.game[0] === "O" && gamingBoard.game[4] === "O" && gamingBoard.game[8] === "O")||
            (gamingBoard.game[0] === "O" && gamingBoard.game[3] === "O" && gamingBoard.game[6] === "O")||
            (gamingBoard.game[1] === "O" && gamingBoard.game[4] === "O" && gamingBoard.game[7] === "O")||
            (gamingBoard.game[2] === "O" && gamingBoard.game[5] === "O" && gamingBoard.game[8] === "O")||
            (gamingBoard.game[2] === "O" && gamingBoard.game[4] === "O" && gamingBoard.game[6] === "O")||
            (gamingBoard.game[3] === "O" && gamingBoard.game[4] === "O" && gamingBoard.game[5] === "O")||
            (gamingBoard.game[6] === "O" && gamingBoard.game[7] === "O" && gamingBoard.game[8] === "O"):
            return console.log("Player Two Wins!"), gamegoing = false;

        case gamingBoard.game[0]!== "#" && gamingBoard.game[1]!== "#" && gamingBoard.game[2]!== "#" &&
            gamingBoard.game[3]!== "#" && gamingBoard.game[4]!== "#" && gamingBoard.game[5]!== "#" &&
            gamingBoard.game[6]!== "#" && gamingBoard.game[7]!== "#" && gamingBoard.game[8] !== "#":
            return console.log("Tie Game"), gameBoard.game = ["#","#","#","#","#","#","#","#","#"]; 
        default:
            if(player1)
                {
                    player(gamingBoard, "X")
                    player1=!player1;
                }
            else
                {
                    player(gamingBoard, "O")
                    player1=!player1;
                }

            
                
        }
    }
        
    
}
