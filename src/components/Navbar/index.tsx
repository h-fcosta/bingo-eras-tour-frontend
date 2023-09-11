import { useEffect, useState } from "react";
import logo from "../../img/logo.png";
import AlbumFilter from "./AlbumFilter";
import { IAlbum } from "../../interface/IAlbum";
import api from "../../api";
import { cacheAlbums, getCachedAlbums } from "../../db/cacheFunctions";
import SongFilter from "./SongFilter";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const [albums, setAlbums] = useState<IAlbum[]>([]);

  function toggleNavBar() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    async function fetchAlbums() {
      const cachedAlbums = await getCachedAlbums();

      if (cachedAlbums) {
        setAlbums(cachedAlbums);
      } else {
        try {
          const response = await api.get<IAlbum[]>("/albums");

          const fetchedAlbums = response.data;

          await cacheAlbums(fetchedAlbums);

          setAlbums(fetchedAlbums);
        } catch (error: any) {
          console.error("Error fetching albums:", error);
        }
      }
    }

    fetchAlbums();
  }, []);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        {/* eslint-disable-next-line */}
        <a className="navbar-item" href="#">
          <img src={logo} alt="Logo" width="112" height="28" />
        </a>
        {/* eslint-disable-next-line */}
        <a
          role="button"
          className={`navbar-burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={isActive}
          onClick={toggleNavBar}
          data-target="navbarBasicExample"
          href="#"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <a
            href="https://www.setlist.fm/stats/average-setlist/taylor-swift-3bd6bc5c.html?year=2023"
            className="navbar-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            Average Setlist
          </a>
          <a
            href="https://www.setlist.fm/setlists/taylor-swift-3bd6bc5c.html"
            className="navbar-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            Setlists Source
          </a>

          <a
            href="https://www.instagram.com/reel/Ctk10xHtVee/?igshid=MzRlODBiNWFlZA=="
            className="navbar-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inspired By
          </a>
          <a
            href="https://mischiefsmanaged.tumblr.com/post/637129593880526848/taylor-swift-album-covers-colour-palettes"
            className="navbar-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            Colors Inspiration
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <SongFilter />
          </div>
          <div className="navbar-item">
            <AlbumFilter albums={albums} />
          </div>
        </div>
      </div>
    </nav>
  );
}
