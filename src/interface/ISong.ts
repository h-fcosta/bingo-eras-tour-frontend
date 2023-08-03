export interface ISong {
  id: string;
  spotify_song_id: string;
  song_name: string;
  spotify_link: string;
  played: boolean;
  played_at: string;
  played_when: string;
  on_set_list: number;
  albumId: string;
}
