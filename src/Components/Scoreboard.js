import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
import { useState } from "react/cjs/react.development";
import react from "react";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(a, b) {
  return a.name.localeCompare(b.name);
}

export default function Scoreboard() {
  const [players, set_player] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);
  const [sort_by, set_sort_by] = useState("score");

  const players_sorted = [...players].sort(sort_by === "score" ? compare_score : compare_name);

  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  const incrementScore = (id) => {
    const new_players_array = players.map((player) => {
      if (player.id === id) {
        return { ...player, score: player.score + 1 };
      } else {
        return player;
      }
    });
    set_player(new_players_array);

    return (
      <div className="Scoreboard">
        <p>
          Sort order:{" "}
          <select onChange={change_sorting} value={sort_by}>
            <option value="score">Sort by score</option>
            <option value="name">Sort by name</option>
          </select>
        </p>
        <p> Player's scores: </p>
        <ul>
          <li>
            {players_sorted.map((player) => (
              <Player key={player.id} id={player.id} name={player.name} score={player.score} incrementScore={incrementScore} />
            ))}
          </li>
        </ul>

        <AddPlayerForm />
      </div>
    );
  };
}
