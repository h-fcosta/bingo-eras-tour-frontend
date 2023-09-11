import styled from "styled-components";

interface GridCellProps {
  setlist: boolean;
  surprise: boolean;
  bgcolor: string;
}

interface SongDetailsProps {
  setlist: boolean;
  surprise: boolean;
}

export const GridCell = styled.td<GridCellProps>`
  width: 100px !important;
  heigth: 100px !important;
  background-color: ${(props) => props.bgcolor};
  font-size: 14px;
  color: #fff;
  vertical-align: top;
  position: relative;
`;

export const GridFilter = styled.div<SongDetailsProps>`
  position: absolute;
  display: ${(props) => (props.setlist || props.surprise ? "block" : "none")};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: ${(props) => (props.setlist || props.surprise ? 1 : -1)};
`;

export const SongName = styled.div<SongDetailsProps>`
  position: relative;
  text-align: center;
  font-weight: bold;
  color: #fff !important;
  z-index: 1;
`;

export const SpotifyIcon = styled.img`
  position: absolute;
  bottom: 5px;
  left: calc(50% - 15px);
  transform: translateX(-50%);
`;

export const DeezerIcon = styled.img`
  position: absolute;
  bottom: 5px;
  left: calc(50% + 15px);
  transform: translateX(-50%);
`;
