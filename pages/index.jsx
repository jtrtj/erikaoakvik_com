import { useState } from "react";

function Header({ title }) {
  return <h1>{title || "Default title"}</h1>;
}

export default function HomePage() {
  const names = [
    "Something very",
    "Very",
    "Very",
    "Exciting",
    "Is coming soon.",
  ];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Erika Oakvik 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
