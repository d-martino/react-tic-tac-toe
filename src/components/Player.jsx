import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    
    function handleChange(event){
        setPlayerName(event.target.value);
    }

    function handleEditClick() {
        setIsEditing(editing => !editing);
        if(isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    let playerNameContainer = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        playerNameContainer = <input type="text" required value={playerName} onChange={handleChange}></input>;
    }
    
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player"></span>
            {playerNameContainer}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleEditClick}>{isEditing? "Save": "Edit"}</button>
        </li> 
    );
}
