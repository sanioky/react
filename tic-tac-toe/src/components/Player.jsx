import { useState } from 'react';

const Player = ({ name, symbol }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);

    const handleEdit = () => {
        setIsEditing(true);
    }

    return (
        <li>
        <span className="player">
            {isEditing ? 
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
            />
             : 
            <span className="player-name">{name}</span>
            }
            <span className="player-symbol">{symbol}</span>
        </span>
        <button type="button" onClick={handleEdit}>Edit</button>
        </li>
    );
};

export default Player;