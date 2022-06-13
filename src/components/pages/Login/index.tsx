import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Layout } from "src/components/templates/Layout";
import { Color } from "src/const";
import styled from "styled-components";
import Cookie from "universal-cookie";

const cookie = new Cookie();

export const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    console.log("login");
    try {
      await fetch(`${process.env.NEXT_PUBLIC_IDEA_API_URL}api/auth/jwt/create/`, {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          if (res.status === 400) {
            throw "authentication failed";
          } else if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          const options = { path: "/" };
          console.log("data", data);
          cookie.set("access_token", data.access, options);
        });
      router.push("/pc/top");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_IDEA_API_URL);
  }, []);

  return (
    <Layout meta={{ pageTitle: "Login" }}>
      <Container>
        <form onSubmit={login}>
          <MainContents>
            <TitleWrapper>
              <Title>Login</Title>
            </TitleWrapper>
            <InputWrapper>
              <Input
                name="username"
                type="username"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="username"
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </InputWrapper>
            <ButtonWrapper>
              <Button>Login</Button>
            </ButtonWrapper>
            <TextWrapper>
              <Link href="/pc/signin" passHref>
                <Text>Create Account</Text>
              </Link>
            </TextWrapper>
          </MainContents>
        </form>
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
