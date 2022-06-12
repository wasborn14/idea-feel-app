import { CgNotes } from "react-icons/cg";
import Divider from "src/components/atoms/Divider";
import { Spacer } from "src/components/atoms/Spacer";
import { Color } from "src/const";
import styled from "styled-components";

const SideNav = () => {
  return (
    <Container>
      <ProfileWrapper>
        <Profile>Yoshida Naoki</Profile>
      </ProfileWrapper>
      <MainNavWrapper>
        <TitleWrapper>
          <CgNotes size={20} color={"#FFB600"} />
          <Spacer x={8} />
          <Title>Mind</Title>
        </TitleWrapper>
        <TitleWrapper>
          <CgNotes size={20} color={"#FFB600"} />
          <Spacer x={8} />
          <Title>Schedule</Title>
        </TitleWrapper>
        <TitleWrapper>
          <CgNotes size={20} color={"#FFB600"} />
          <Spacer x={8} />
          <Title>Memo</Title>
        </TitleWrapper>
      </MainNavWrapper>
      <Spacer y={32} />
      <Divider color="#b1221a" />
      <CurrentContents>
        <ContentsTitle>Work</ContentsTitle>
        <ChildContentsWrapper>
          <ContentsTitle>Time</ContentsTitle>
          <ChildContentsWrapper>
            <ContentsTitle>Memo</ContentsTitle>
            <ChildContentsWrapper>
              <ContentsTitle>Schedule</ContentsTitle>
            </ChildContentsWrapper>
          </ChildContentsWrapper>
        </ChildContentsWrapper>
        <ContentsTitle>Work</ContentsTitle>
        <ChildContentsWrapper>
          <ContentsTitle>Time</ContentsTitle>
          <ChildContentsWrapper>
            <ContentsTitle>Memo</ContentsTitle>
            <ChildContentsWrapper>
              <ContentsTitle>Schedule</ContentsTitle>
            </ChildContentsWrapper>
          </ChildContentsWrapper>
        </ChildContentsWrapper>
        <ContentsTitle>Work</ContentsTitle>
        <ChildContentsWrapper>
          <ContentsTitle>Time</ContentsTitle>
          <ChildContentsWrapper>
            <ContentsTitle>Memo</ContentsTitle>
            <ChildContentsWrapper>
              <ContentsTitle>Schedule</ContentsTitle>
              <ChildContentsWrapper>
                <ContentsTitle>Schedule</ContentsTitle>
                <ChildContentsWrapper>
                  <ContentsTitle>Schedule</ContentsTitle>
                  <ChildContentsWrapper>
                    <ContentsTitle>Schedule</ContentsTitle>
                  </ChildContentsWrapper>
                </ChildContentsWrapper>
              </ChildContentsWrapper>
              <ChildContentsWrapper>
                <ContentsTitle>Schedule</ContentsTitle>
              </ChildContentsWrapper>
            </ChildContentsWrapper>
          </ChildContentsWrapper>
        </ChildContentsWrapper>
        <ContentsTitle>Work</ContentsTitle>
        <ChildContentsWrapper>
          <ContentsTitle>Time</ContentsTitle>
          <ChildContentsWrapper>
            <ContentsTitle>Memo</ContentsTitle>
            <ChildContentsWrapper>
              <ContentsTitle>Schedule</ContentsTitle>
            </ChildContentsWrapper>
            <ChildContentsWrapper>
              <ContentsTitle>Schedule</ContentsTitle>
            </ChildContentsWrapper>
            <ChildContentsWrapper>
              <ContentsTitle>Schedule</ContentsTitle>
            </ChildContentsWrapper>
          </ChildContentsWrapper>
        </ChildContentsWrapper>
      </CurrentContents>
    </Container>
  );
};

export default SideNav;

const Container = styled.div`
  margin: 16px;
`;

const ProfileWrapper = styled.div``;

const Profile = styled.p`
  color: ${Color.DARK_BROWN2};
  font-size: 18px;
`;

const MainNavWrapper = styled.div`
  margin-top: 32px;
  margin-left: 8px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

const Title = styled.p`
  color: ${Color.DARK_BROWN2};
  font-size: 18px;
`;

const CurrentContents = styled.div`
  margin-top: 32px;
`;

const ContentsTitle = styled.p`
  color: ${Color.DARK_BROWN2};
  font-size: 18px;
`;

const ChildContentsWrapper = styled.div`
  margin-top: 8px;
  margin-left: 16px;
`;
