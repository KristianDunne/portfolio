import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  max-width: 2228px;
  margin: 40px auto;
`;

const HeroText = styled.div`
  flex: 1;
`;

const Avatar = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  margin: 1rem 0;
`;

const SubTitle = styled.h2`
  font-size: 1.5em;
  margin: 1rem 0;
`;

const Introduction = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 0;
  font-weight: 400;
`;

export default function Hero() {
  return (
    <Container>
      <HeroText>
        <Title>Hey!</Title>
        <SubTitle>I'm Kristian.</SubTitle>
        <Introduction>I love bringing beautiful UIs to life with code.</Introduction>
      </HeroText>
      <Avatar>
        <Image className="avatar" src="/me.jpg" width={170} height={170} />
        <style jsx global>{`
          .avatar {
            border-radius: 50%;
          }
        `}</style>
      </Avatar>
    </Container>
  );
}
