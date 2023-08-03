import styled from "styled-components";

interface GridCellProps {
  bgcolor: string;
  setlist: string;
  surprise: string;
}

export const GridCell = styled.td<GridCellProps>`
  width: 100px !important;
  heigth: 100px !important;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => (props.setlist ? "gold" : "#fff")} !important;
  ${(props) =>
    props.surprise &&
    `
      filter: contrast(75%);
    `}
  font-size: 14px;
  font-weight: bold;
`;
