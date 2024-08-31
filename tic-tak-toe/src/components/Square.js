
import React from 'react'
import './board.css'

function Square({i, onSquareClick}) {
  return (
    <button className='square' onClick={onSquareClick}>{i}</button>
  )
}

export default Square