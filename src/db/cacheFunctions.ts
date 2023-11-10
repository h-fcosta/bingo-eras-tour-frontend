import db from "./index";
import { ISong } from "../interface/ISong";
import { IAlbum } from "../interface/IAlbum";

export async function cacheSongs(songs: ISong[]): Promise<void> {
  try {
    const timestamp = new Date().getTime();

    const songsWithTimestamp = songs.map((song) => ({
      ...song,
      timestamp
    }));

    await db.song.bulkPut(songsWithTimestamp);
    console.log("Songs Cached");
  } catch (error: any) {
    console.error("Error caching data:", error);
  }
}

export async function getCachedSongs(): Promise<ISong[] | undefined> {
  try {
    const currentTime = new Date().getTime();
    const expirationThreshold = 18 * 60 * 60 * 1000; //2 day in milliseconds
    const cachedSongs = await db.song.toArray();

    const sortedSongs = cachedSongs.sort((a, b) => {
      const intA = parseInt(a.album.release_order);
      const intB = parseInt(b.album.release_order);

      return intA - intB;
    });

    const validData = sortedSongs.filter((item) => {
      return currentTime - (item.timestamp as number) <= expirationThreshold;
    });

    if (validData && validData.length > 0) {
      const data = validData.map((item) => {
        const { timestamp, ...songWithoutTimestamp } = item;

        return songWithoutTimestamp;
      });
      return data;
    }
  } catch (error: any) {
    console.error("Error retrieving cached data:", error);
    throw error;
  }
}

export async function cacheAlbums(albums: IAlbum[]): Promise<void> {
  try {
    await db.album.bulkPut(albums);
  } catch (error: any) {
    console.error("Error caching albums:", error);
    throw error;
  }
}

export async function getCachedAlbums(): Promise<IAlbum[] | undefined> {
  try {
    const cachedAlbums = await db.album.toArray();

    const sortedAlbums = cachedAlbums.sort((a, b) => {
      const intA = parseInt(a.release_order);
      const intB = parseInt(b.release_order);

      return intA - intB;
    });

    if (sortedAlbums && sortedAlbums.length > 0) {
      return sortedAlbums;
    }
  } catch (error: any) {
    console.error("error retrieving cached albums:", error);
    throw error;
  }
}
