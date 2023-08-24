export interface ISong {
  id: string;
  song_name: string;
  single_name: string;
  played: string;
  played_at: string;
  played_when: string;
  on_set_list: string;
  albumId: string;
  links: {
    id: string;
    spotify_id: string;
    spotify_link: string;
    deezer_id: string;
    deezer_link: string;
    albumId: string;
    songId: string;
    singleId: string;
  };
  album: {
    release_order: string;
    album_color: string;
  };
}
