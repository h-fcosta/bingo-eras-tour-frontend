import Dexie, { Table } from "dexie";
import { ISong } from "../interface/ISong";
import { IAlbum } from "../interface/IAlbum";

class SongsCache extends Dexie {
  song!: Table<ISong>;
  album!: Table<IAlbum>;

  constructor() {
    super("songsCache");
    this.version(1).stores({
      song: "id, album.release_order",
      album: "id, release_order"
    });
  }
}

const db = new SongsCache();

export default db;
