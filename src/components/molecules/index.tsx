import { useResizable } from "react-resizable-layout";
import styled from "styled-components";
import ResizeSplitter from "src/components/atoms/ResizeSplitter";
import { ReactNode } from "react";
import { Color } from "src/const";

interface Props {
  sideNavContents: ReactNode;
  children: ReactNode;
}

const ResizeLayout = ({ sideNavContents, children }: Props): JSX.Element => {
  const {
    isDragging: isFileDragging,
    position: sideWidth,
    splitterProps: fileDragBarProps,
  } = useResizable({
    axis: "x",
    initial: 250,
    min: 200,
  });

  return (
    <Container>
      <LayoutWrapper>
        <SideNavWrapper width={sideWidth}>{sideNavContents}</SideNavWrapper>
        <ResizeSplitter isDragging={isFileDragging} {...fileDragBarProps} />
        <MainContents>{children}</MainContents>
      </LayoutWrapper>
    </Container>
  );
};

export default ResizeLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

const SideNavWrapper = styled.div<{ width: number }>`
  flex-shrink: 0;
  display: grid;
  transition: filter 0.2s ease-out, background-color 0.2s ease-out;
  font-size: 16px;
  width: ${(props) => props.width}px;
  background-color: ${Color.BACKGROUND_COLOR1};

  // 元々あったものだが必要なければ削除する
  /* place-items: center; */
`;

const MainContents = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  overflow-y: scroll;
  height: 100vh;
  padding: 24px;
  background-color: ${Color.BACKGROUND_COLOR1};
`;
