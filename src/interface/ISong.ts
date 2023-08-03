export interface ISong {
  id: string;
  spotify_song_id: string;
  song_name: string;
  single_name: string;
  spotify_link: string;
  played: string;
  played_at: string;
  played_when: string;
  on_set_list: string;
  album: {
    release_order: number;
    album_color: string;
  };
  albumId: string;
}
