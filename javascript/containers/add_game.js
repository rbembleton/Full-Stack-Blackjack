import React from 'react';
import { connect } from 'react-redux';
import { addGame } from '../actions';

let AddGame = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addGame(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Game
        </button>
      </form>
    </div>
  )
}
AddGame = connect()(AddGame)

export default AddGame
