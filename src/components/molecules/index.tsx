import { useResizable } from "react-resizable-layout";
import styled from "styled-components";
import ResizeSplitter from "src/components/atoms/ResizeSplitter";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ResizeLayout = ({ children }: Props): JSX.Element => {
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

const SideNav = styled.div<{ width: number }>`
  flex-shrink: 0;
  display: grid;
  place-items: center;
  transition: filter 0.2s ease-out, background-color 0.2s ease-out;
  font-size: 16px;
  width: ${(props) => props.width}px;
  background-color: rgba(250, 200, 100, 0.2); // 元の色コードFAC864
`;

const MainContents = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  overflow-y: scroll;
  height: 100vh;
  padding: 24px;
  background-color: rgba(250, 200, 100, 0.2); // 元の色コードFAC864
`;
