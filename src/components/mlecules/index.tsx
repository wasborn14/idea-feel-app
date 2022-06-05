import { useResizable } from "react-resizable-layout";
import styled from "styled-components";
import ResizeSplitter from "src/components/atoms/ResizeSplitter";

const ResizeLayout = (): JSX.Element => {
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
        <SideNav width={sideWidth}>File Tree</SideNav>
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
  background-color: #f7f6f3;
  overflow: hidden;
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

const SideNav = styled.div<{ width: number }>`
  flex-shrink: 0;
  display: grid;
  place-items: center;
  transition: filter 0.2s ease-out, background-color 0.2s ease-out;
  font-size: 16px;
  width: ${(props) => props.width}px;
`;

const MainContents = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: #ffffff;
`;

const ContentsTitle = styled.div`
  flex-grow: 1;
  display: grid;
  place-items: center;
  transition: filter 0.2s ease-out, background-color 0.2s ease-out;
  font-size: 16px;
`;
