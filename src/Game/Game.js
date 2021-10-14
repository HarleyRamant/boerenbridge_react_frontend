//Functionalities
import React from 'react'

//Css
//import classes from './Game.module.css'

//Components


//Function
function Game(props) {

    const players = (
        <ul>
            {props.data.players.map(player=><li>{player.name}</li>)}
        </ul>
    )

    return (
        <div>
            <h2>Game</h2>
            {players}
        </div>
    )
}
export default Game