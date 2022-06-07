import styled from "styled-components";
import ContentsIcon from "../Icons/ContentsIcon";

const MiddleSizeCard = () => {
  return (
    <>
      <Container>
        <ContentsIcon />
        <h1>test</h1>
      </Container>
      <Container>
        <ContentsIcon />
      </Container>
      <Container>
        <ContentsIcon />
      </Container>
    </>
  );
};

export default MiddleSizeCard;

const Container = styled.div`
  width: 450px;
  height: 400px;
  margin-left: 32px;
  border-radius: 18px;
  border: solid;
  border-width: 0.5px;
  border-color: #99681d;
`;
