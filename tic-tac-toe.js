





let current_player = 'X'
let spaces = Array(9).fill(null);
let gameActive = true



document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('#board div')
    

    cells.forEach((cell,index) => {
        cell.classList.add('square');
        cell.addEventListener('click', () => clickedbox(cell,index))
    })
})


function clickedbox(cell, index){
    
    const status = document.getElementById('status')
    console.log(`Cell clicked: ${index}, Current Player: ${current_player}`);
    if(!spaces[index] && gameActive){
        spaces[index] = current_player
        
        cell.classList.add(current_player === 'X' ? 'X' : 'O')
        cell.textContent = current_player
        

        const winner = playerwins()

        if (winner){
            const XO = spaces[winner[0]]
            status.innerText = 'Congratulations!' + XO + 'is the Winner!'
            status.classList.add('you-won')
            gameActive = false
            return
            
        }

        current_player = current_player == 'X' ? 'O' : 'X';
        
    }
    gameActive = true
}


const winningcombinations = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


function playerwins(){
    for (const win of winningcombinations) {
        let [a,b,c] = win

        if(spaces[a] && (spaces[a] === spaces[b] && spaces[a] === spaces[c])){
            return[a,b,c]
        }
        
    }
    return false
}

document.addEventListener('DOMContentLoaded', () => {   
    const status = document.getElementById('status')

    const newgamebutton = document.querySelector('.btn')
    if (newgamebutton){
        newgamebutton.addEventListener('click',newgame)
    }
    startGame()
})

function newgame(){
    spaces.fill(null)
    const status = document.getElementById('status')
    const cells = document.querySelectorAll('#board div')
    cells.forEach(cell => {
        cell.innerText = ''
        cell.classList.remove('X','O')
        cell.textContent = ''
    })


    status.innerText = 'Move your mouse over a square and click to play an X or an O.'
    status.classList.remove('you-won')
    current_player = X_Text

    //const status = document.getElementById('status')
    
}



startGame()

