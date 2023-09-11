import { useSelector } from "react-redux";
import checkIsMobile from "../../../utils/checkIsMobile";
import { RootState } from "../../../store";
import {
  DeezerIcon,
  GridCell,
  GridFilter,
  SongName,
  SpotifyIcon
} from "../styles";
import { formatDate } from "../../../utils/formatDate";
import spotify from "../../../img/spotify.png";
import deezer from "../../../img/deezer.png";
import { IGridProps } from "../../../interface/IGridProps";

export default function GenerateGrid({ columns, data }: IGridProps) {
  const tableRows = [];
  const songChunks = [];

  const selectedAlbumName = useSelector(
    (state: RootState) => state.albums.selectedAlbum
  );

  const songStatus = useSelector((state: RootState) => state.status.songStatus);

  const isMobile = checkIsMobile();

  const numRows = Math.ceil(data.length / (isMobile ? 3 : columns));

  const filteredAlbum = selectedAlbumName
    ? data.filter((song) => song.album.album_name === selectedAlbumName)
    : data;

  const filteredStatus =
    songStatus === null
      ? filteredAlbum
      : filteredAlbum.filter((song) => song.played === songStatus);

  for (let i = 0; i < filteredStatus.length; i += isMobile ? 3 : columns) {
    songChunks.push(filteredStatus.slice(i, i + (isMobile ? 3 : columns)));
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

  return <>{tableRows}</>;
}
