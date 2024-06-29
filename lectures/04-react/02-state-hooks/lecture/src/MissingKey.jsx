import { useState } from 'react';

export default function MissingKey() {
  const [emojis, setEmojis] = useState([
    { id: 1, emoji: '😁' },
    { id: 2, emoji: '😘' },
    { id: 3, emoji: '🤪' },
    { id: 4, emoji: '🤗' },
  ]);

  const deleteEmoji = (emojiId) => {
    const updatedEmojis = emojis.filter((emoji) => emoji.id !== emojiId);
    setEmojis(updatedEmojis);
  };

  // Key is missing! Check out what happens as a result!
  const emojiList = emojis.map((emoji) => (
    <li className="emoji-item">
      {emoji.emoji}
      <select>
        <option>Bad</option>
        <option>Okay</option>
        <option>Very good</option>
      </select>
      <button onClick={() => deleteEmoji(emoji.id)}>Delete</button>
    </li>
  ));

  return (
    <div>
      <h2>Rate these emojis!</h2>
      {emojiList}
    </div>
  );
}
