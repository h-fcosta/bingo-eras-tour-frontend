import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedAlbumState } from "../../../reducers/albumReducer";
import { useDropdownState } from "../../../hooks/useDropdownState";
import { IAlbumFilterProps } from "../../../interface/IAlbumFilterProps";
import checkIsMobile from "../../../utils/checkIsMobile";

export default function AlbumFilter({ albums }: IAlbumFilterProps) {
  const [dropdownOpen, toggleDropdown] = useDropdownState(false);
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);

  const isMobile = checkIsMobile();

  const dispatch = useDispatch();

  const handleAlbumSelect = (albumName: string | null) => {
    dispatch(setSelectedAlbumState(albumName));
    setSelectedAlbum(albumName);
    toggleDropdown();
  };

  return (
    <>
      <div
        className={`dropdown ${isMobile ? "" : "is-right"} ${
          dropdownOpen ? "is-active" : ""
        }`}
      >
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-label="true"
            aria-controls="dropdown-menu"
            onClick={toggleDropdown}
          >
            <span>{selectedAlbum ? selectedAlbum : "Filter by Era"}</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a
              href="#"
              className={`dropdown-item ${
                selectedAlbum === null ? "is-active" : ""
              }`}
              onClick={() => handleAlbumSelect(null)}
            >
              All Eras
            </a>
            {albums.map((album) => (
              <a
                href="#"
                className={`dropdown-item ${
                  selectedAlbum === album.album_name ? "is-active" : ""
                }`}
                key={album.id}
                onClick={() => handleAlbumSelect(album.album_name)}
              >
                {album.album_name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
