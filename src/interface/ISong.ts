export interface ISong {
  id: string;
  song_name: string;
  single_name: string;
  played: boolean;
  played_at: string;
  played_when: string;
  on_set_list: boolean;
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
    id: string;
    album_name: string;
    release_order: string;
    album_color: string;
  };
  timestamp?: number;
}
