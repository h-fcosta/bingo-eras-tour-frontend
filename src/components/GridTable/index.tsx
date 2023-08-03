import { useEffect, useState } from "react";
import { ISong } from "../../interface/ISong";
import { formatDate } from "../../utils/formatDate";
import { GridCell } from "./styles";
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
        console.log(data);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }

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
        return (
          <GridCell
            key={song.id}
            bgcolor={song.album.album_color}
            setlist={song.on_set_list}
            surprise={song.played}
          >
            <p className="song-title">{song.song_name || song.single_name}</p>

            {song.played && (
              <>
                Venue: {song.played_at}
                <br />
                Date: {formatDate(song.played_when)}
              </>
            )}
            <br />
            <a
              href={song.spotify_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Listen on Spotify
            </a>
          </GridCell>
        );
      });
      tableRows.push(<tr key={i}>{rowCells}</tr>);
    }
    return tableRows;
  }

  return (
    <table className="table is-bordered is-fullwidth">
      <tbody>{generateGrid()}</tbody>
    </table>
  );
}
