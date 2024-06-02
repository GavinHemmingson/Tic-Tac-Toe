// function gameBoard(){
//     let board = ["#","#","#","#","#","#","#","#","#"];
     
//     for(let i = 0; i<9;i++)
//         {
//             const divCreate = document.createElement("div");
           
//             document.body.appendChild(divCreate).classList.add("square"+i);
//             divCreate.textContent = `${board[i]}`
//         }
// }
// gameBoard();




// function myObject(gameBoard)
// {
//     var obj = Object.create(myObject.proto);
//     obj.gameBoard = gameBoard;
//     return obj;
// }

// myObject.proto = {
//     getData: function() {
//         return this.gameBoard;
//     }
// }

// var o = myObject("gameBoard");
// gameBoard();