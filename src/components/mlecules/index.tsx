import { useResizable } from "react-resizable-layout";
import styled from "styled-components";
import ResizeSplitter from "src/components/atoms/ResizeSplitter";

const ResizeLayout = (): JSX.Element => {
  const {
    isDragging: isFileDragging,
    position: fileW,
    splitterProps: fileDragBarProps,
  } = useResizable({
    axis: "x",
    initial: 250,
    min: 200,
  });

  return (
    <Container>
      <LayoutWrapper>
        <SideNav className={isFileDragging ? "dragging" : ""} widthW={fileW}>
          File Tree
        </SideNav>
        <ResizeSplitter isDragging={isFileDragging} {...fileDragBarProps} />
        <MainContents>
          <ContentsTitle>Editor</ContentsTitle>
        </MainContents>
      </LayoutWrapper>
    </Container>
  );
};

export default ResizeLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #202020;
  color: white;
  overflow: hidden;
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

const SideNav = styled.div<{ widthW: number }>`
  flex-shrink: 0;
  display: grid;
  place-items: center;
  transition: filter 0.2s ease-out, background-color 0.2s ease-out;
  font-size: 16px;
  width: ${(props) => props.widthW}px;
`;

const MainContents = styled.div`
  display: flex;
  flex-grow: 1;
`;

const ContentsTitle = styled.div`
  flex-grow: 1;
  background-color: #202020;
  display: grid;
  place-items: center;
  transition: filter 0.2s ease-out, background-color 0.2s ease-out;
  font-size: 16px;
`;