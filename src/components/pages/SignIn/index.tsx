import Link from "next/link";
import { useRouter } from "next/router";
import { Layout } from "src/components/templates/Layout";
import { Color } from "src/const";
import styled from "styled-components";

export const SignIn = () => {
  const router = useRouter();
  const onClick = () => {
    router.push({
      pathname: "/pc/top",
    });
  };

  return (
    <Layout meta={{ pageTitle: "SignIn" }}>
      <Container>
        <MainContents>
          <TitleWrapper>
            <Title>SignIn</Title>
          </TitleWrapper>
          <InputWrapper>
            <Input placeholder="email" />
          </InputWrapper>
          <InputWrapper>
            <Input placeholder="password" />
          </InputWrapper>
          <ButtonWrapper>
            <Button onClick={onClick}>SignIn</Button>
          </ButtonWrapper>
          <TextWrapper>
            <Link href="/pc/login" passHref>
              <Text>Create Account</Text>
            </Link>
          </TextWrapper>
        </MainContents>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${Color.BACKGROUND_COLOR1};
`;

const MainContents = styled.div`
  width: 960px;
  height: 770px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  margin-top: 200px;
`;

const Title = styled.h1`
  font-size: 42px;
  color: ${Color.DARK_BROWN2};
`;

const InputWrapper = styled.div`
  margin-top: 24px;
`;

const Input = styled.input`
  width: 320px;
  height: 36px;
  font-size: 24px;
  padding-left: 10px;
  padding-bottom: 2px;
  vertical-align: center;
  border: solid;
  border-radius: 3px;
  border-width: 0.5px;
  border-color: black;

  ::placeholder {
    font-size: 18px;
  }
`;

const TextWrapper = styled.div`
  margin-top: 16px;
  margin-left: 200px;
`;

const Text = styled.p`
  font-size: 18px;
`;

const ButtonWrapper = styled.div`
  margin-top: 32px;
`;

const Button = styled.button`
  width: 280px;
  height: 36px;
  color: white;
  font-size: 16px;
  border-radius: 3px;
  background-color: ${Color.DARK_BROWN1};
`;
