import React, { useState } from 'react'
import Square from './Square';
import './board.css'

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [IsXTrue, setXToTrue] = useState(true)
    function calculateWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i in lines) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
                return `Congratulations !! you are the winner${squares[a]}`
            }
        }
        return null
    }

    function buttonClicked(i) {
        if (squares[i] || calculateWinner()) {
            return;
        }
        const squaresCopy = squares.slice();
        if (IsXTrue) {
            squaresCopy[i] = 'X';
        }
        else {
            squaresCopy[i] = 'O';
        }

        setSquares(squaresCopy)
        setXToTrue(!IsXTrue)
    }
    const winner = calculateWinner();
    let status;
    if (winner) {
        const userWhoWin = IsXTrue ? 'O' : 'X';
        status = `Congratulations! You've won! ${userWhoWin}`
    }
    else {
        const userWhoIsGoingToPlayNext = IsXTrue ? 'X' : 'O';
        status = `Next Player is ${userWhoIsGoingToPlayNext}`
    }
    return (
        <div>
            <p className='status'>{status}</p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3)',
                gridTemplateRows: 'repeat(3)',
                textAlign: 'center',
                justifyContent: 'center'
            }}>
                <Square i={squares[0]} onSquareClick={() => buttonClicked(0)} />
                <Square i={squares[1]} onSquareClick={() => buttonClicked(1)} />
                <Square i={squares[2]} onSquareClick={() => buttonClicked(2)} />
                <Square i={squares[3]} onSquareClick={() => buttonClicked(3)} />
                <Square i={squares[4]} onSquareClick={() => buttonClicked(4)} />
                <Square i={squares[5]} onSquareClick={() => buttonClicked(5)} />
                <Square i={squares[6]} onSquareClick={() => buttonClicked(6)} />
                <Square i={squares[7]} onSquareClick={() => buttonClicked(7)} />
                <Square i={squares[8]} onSquareClick={() => buttonClicked(8)} />
            </div>

            <button  className='button' onClick={()=>{setSquares(Array(9).fill(null))}}>Reset</button>
        </div>
    )
}

export default Board