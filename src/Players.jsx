import { useGetPlayersQuery } from "./playerSlice";

export default function Players() {
  const { data: players } = useGetPlayersQuery();

  return (
    <>
      <ul>
        {players &&
          players.data.players.map((player) => (
            <li key={player.id}>
              <h2>{player.name}</h2>
              <h3>{player.breed}</h3>
              <p>{player.status}</p>
              <img src={player.imageUrl} />
              <p>{player.teamId}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
