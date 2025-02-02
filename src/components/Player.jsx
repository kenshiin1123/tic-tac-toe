import { useState } from "react";

export default function Player({
  name: initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  const handleEditing = () => {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, name);
    }
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  let playerNameSpan = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerNameSpan = (
      <input type="text" required value={name} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameSpan}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
