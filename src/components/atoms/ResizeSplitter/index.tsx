import { Color } from "src/const";
import { cn } from "src/utils/cn";
import styled from "styled-components";

const ResizeSplitter = ({ id = "drag-bar", dir, isDragging, ...props }: any) => {
  return (
    <Container
      id={id}
      data-testid={id}
      className={cn(
        "sample-drag-bar",
        dir === "horizontal" && "sample-drag-bar--horizontal",
        isDragging && "sample-drag-bar--dragging"
      )}
      {...props}
    />
  );
};

export default ResizeSplitter;

const Container = styled.div`
  flex-shrink: 0;
  width: 2px;
  background-color: ${Color.DARK_BROWN1};
  cursor: col-resize;
  transition: background-color 0.15s 0.15s ease-in-out;

  // TODO:こちらが動いていないため調整の必要あり
  .sample-drag-bar--dragging,
  .sample-drag-bar:hover {
    background-color: black;
  }

  // 水平方向時に使用する
  .sample-drag-bar.sample-drag-bar--horizontal {
    height: 5px;
    width: 100%;
    cursor: row-resize;
  }
`;
