import styled, { css } from "styled-components";

interface Props {
  direction?: "vertical" | "horizontal";
  color?: string;
  thin?: boolean;
  dashed?: boolean;
  height?: number;
}

export default styled.hr<Props>`
  width: ${({ direction }) => (direction === "vertical" ? undefined : "100%")};
  margin: 0;
  color: ${({ color }) => color ?? "black"};
  border: ${({ thin }) => (thin ? 0 : undefined)};
  border-top: ${({ direction }) => (direction === "vertical" ? undefined : "1px solid #ccc")};
  border-style: ${({ dashed }) => dashed && "dashed"};
  ${({ height }) =>
    height !== undefined &&
    css`
      height: ${height}px;
    `};
`;
