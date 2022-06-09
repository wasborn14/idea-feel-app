import styled from "styled-components";
import { CgNotes } from "react-icons/cg"; // 最初の2文字でインポートする
import { Color } from "src/const";

const ContentsIcon = () => {
  return (
    <IconContainer>
      <IconInner>
        <CgNotes size={30} color={"#FFB600"} />
      </IconInner>
    </IconContainer>
  );
};

export default ContentsIcon;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 48px;
  height: 48px;
  margin: 16px;
  border-radius: 8px;
  border: solid;
  border-width: 3px;
  border-color: ${Color.BRIGHT_YELLOW};
  background-color: black;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
`;

const IconInner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 4px;
  background-color: ${Color.DARK_RED1};
  padding: 4px 0px 0px 4px;
  width: 40px;
  height: 40px;
`;
