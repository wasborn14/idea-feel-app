import styled from "styled-components";
import Divider from "../Divider";
import ContentsIcon from "../Icons/ContentsIcon";
import { HStack } from "../Stack/HStack";
import { VStack } from "../Stack/VStack";

export type ClusterData = {
  title: string;
  titles?: ClusterData[];
  isTitlesVisible?: boolean;
};

export type MiddleSizeCardProps = {
  data: ClusterData;
};

const MiddleSizeCard = ({ data }: MiddleSizeCardProps) => {
  return (
    <Container>
      <VStack>
        <HStack spacing={12}>
          <ContentsIcon />
          <Title>{data.title}</Title>
        </HStack>
        <ContentsContainer>
          {data.titles?.map((title1, index1) => (
            <Title1Container key={`title-${index1}`}>
              <Title1>{title1.title}</Title1>
              <Divider color="#b1221a" />
              <>
                {title1.titles?.map((title2, index2) => (
                  <Title2Container key={`title2-${index2}`}>
                    <Title2>{title2.title}</Title2>
                  </Title2Container>
                ))}
              </>
            </Title1Container>
          ))}
        </ContentsContainer>
      </VStack>
    </Container>
  );
};

export default MiddleSizeCard;

const Container = styled.div`
  width: 350px;
  margin: 12px 16px;
  padding-bottom: 12px;
  border-radius: 18px;

  // 枠ありなしデザイン検討中
  /* border: solid;
  border-width: 0.5px;
  border-color: #99681d; */
`;

const Title = styled.h1`
  color: #99681d;
  font-size: 28px;
  font-family: "Times New Roman", Times, serif;
`;

const ContentsContainer = styled.div`
  margin: 0px 12px;
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
