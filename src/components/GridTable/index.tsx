import { useEffect, useState } from "react";
import { ISong } from "../../interface/ISong";
import { formatDate } from "../../utils/formatDate";
import {
  DeezerIcon,
  GridCell,
  GridFilter,
  SongName,
  SpotifyIcon
} from "./styles";
import api from "../../api";
import "./Grid.css";
import spotify from "../../img/spotify.png";
import deezer from "../../img/deezer.png";
import "bulma/css/bulma.min.css";

export default function GridTable() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ISong[]>([]);

  const columns = 7;

  useEffect(() => {
    try {
      api.get<ISong[]>("/songs").then((res) => {
        setData(res.data);
        setLoading(false);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    // eslint-disable-next-line
  }, []);

  function generateGrid() {
    const tableRows = [];
    const songChunks = [];

    const isMobile = window.innerWidth <= 480;
    const numRows = Math.ceil(data.length / (isMobile ? 3 : columns));

    for (let i = 0; i < data.length; i += isMobile ? 3 : columns) {
      songChunks.push(data.slice(i, i + (isMobile ? 3 : columns)));
    }

    for (let i = 0; i < numRows; i++) {
      const songRow = songChunks[i] || [];

      const rowCells = songRow.map((song) => {
        return (
          <GridCell
            key={song.id}
            bgcolor={song.album.album_color}
            surprise={song.played}
            setlist={song.on_set_list}
          >
            <GridFilter setlist={song.on_set_list} surprise={song.played} />
            <SongName setlist={song.on_set_list} surprise={song.played}>
              <p className="song-title">{song.song_name || song.single_name}</p>
              {song.on_set_list ? (
                <>
                  <p>On Average Setlist!</p>
                </>
              ) : song.played ? (
                <>
                  <p>Venue: {song.played_at}</p>

                  <p>Date: {formatDate(song.played_when)}</p>
                </>
              ) : (
                <p>Not played yet!</p>
              )}
              <br />
              <br />
              <a
                href={song.links.spotify_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SpotifyIcon
                  src={spotify}
                  alt="White Spotify Logo"
                  className="image is-24x24"
                />
              </a>
              <a
                href={song.links.deezer_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DeezerIcon
                  src={deezer}
                  alt="White Deezer Logo"
                  className="image is-24x24"
                />
              </a>
            </SongName>
          </GridCell>
        );
      });
      tableRows.push(<tr key={i}>{rowCells}</tr>);
    }
    return tableRows;
  }

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <table className="table is-bordered is-fullwidth">
          <tbody>{generateGrid()}</tbody>
        </table>
      )}
    </>
  );
}
