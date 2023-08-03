import { useEffect, useState } from "react";
import { ISong } from "../../interface/ISong";
import api from "../../api";
import "./Grid.css";
import "bulma/css/bulma.min.css";

export default function GridTable() {
  const rows = 29;
  const columns = 7;

  const [data, setData] = useState<ISong[]>([]);

  useEffect(() => {
    try {
      api.get<ISong[]>("/songs").then((res) => {
        setData(res.data);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    console.log(data);
    // eslint-disable-next-line
  }, []);

  function generateGrid() {
    const tableRows = [];
    const songChunks = [];

    for (let i = 0; i < data.length; i += columns) {
      songChunks.push(data.slice(i, i + columns));
    }

    for (let i = 0; i < rows; i++) {
      const songRow = songChunks[i] || [];

      const rowCells = songRow.map((song) => {
        const setList = Boolean(Number(song.on_set_list));
        const surpriseSong = Boolean(Number(song.played));

        return (
          <td key={song.spotify_song_id}>
            <p className="song-title">{song.song_name}</p>
            <div>
              <a
                href={song.spotify_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen on Spotify
              </a>
              <br />
              {setList ? "On Setlist" : "Not on setlist"}
              <br />
              {surpriseSong
                ? `Venue: ${song.played_at} \n Date: ${song.played_when}`
                : "Not Played yet!"}
            </div>
          </td>
        );
      });
      tableRows.push(<tr key={i}>{rowCells}</tr>);
    }
    return tableRows;
  }

  return (
    <div className="table-container">
      <table className="table is-bordered is-fullwidth is-hoverable">
        <tbody>{generateGrid()}</tbody>
      </table>
    </div>
  );
}
