import styled from "styled-components";
import Divider from "../Divider";
import ContentsIcon from "../Icons/ContentsIcon";
import { HStack } from "../Stack/HStack";
import { VStack } from "../Stack/VStack";

const MiddleSizeCard = () => {
  return (
    <Container>
      <VStack>
        <HStack spacing={12}>
          <ContentsIcon />
          <Title>Mind</Title>
        </HStack>
        <ContentsContainer>
          <Title1Container>
            <Title1>Mind</Title1>
            <Divider color="#b1221a" />
            <Title2Container>
              <Title2>Test</Title2>
            </Title2Container>
            <Title2Container>
              <Title2>Test</Title2>
            </Title2Container>
            <Title2Container>
              <Title2>Test</Title2>
            </Title2Container>
          </Title1Container>
          <Title1Container>
            <Title1>Mind</Title1>
            <Divider color="#b1221a" />
            <Title2Container>
              <Title2>Test</Title2>
            </Title2Container>
            <Title2Container>
              <Title2>Test</Title2>
            </Title2Container>
          </Title1Container>
        </ContentsContainer>
      </VStack>
    </Container>
  );
};

export default MiddleSizeCard;

const Container = styled.div`
  width: 450px;
  height: 400px;
  margin-top: 12px;
  margin-left: 32px;
  border-radius: 18px;
  /* border: solid; */
  border-width: 0.5px;
  border-color: #99681d;
`;

const Title = styled.h1`
  color: #99681d;
  font-size: 28px;
  font-family: "Times New Roman", Times, serif;
`;

const ContentsContainer = styled.div`
  margin: 0px 32px;
`;

const Title1 = styled.h2`
  color: #b1221a;
  font-size: 24px;
  font-family: "Times New Roman", Times, serif;
`;

const Title1Container = styled.div`
  margin: 12px 32px 0px;
`;

const Title2Container = styled.div`
  margin: 12px 0px 0px 32px;
`;

const Title2 = styled.h2`
  color: #492f08;
  font-size: 24px;
  font-family: "Times New Roman", Times, serif;
`;
