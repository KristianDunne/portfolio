import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 40px;
  max-width: 2228px;
  margin: 40px auto;
`;

const HeroText = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Avatar = styled.div``;

const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  margin: 1rem 0;
`;

const SubTitle = styled.h2`
  font-size: 1.5em;
  margin: 1rem 0;
`;

const IntroductionMobile = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 0;
  font-weight: 400;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Introduction = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 0;
  font-weight: 400;
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

const TopSection = styled.div`
  display: flex;
  flex: 1;
`;

const BottomSection = styled.div`
  display: flex;
  flex: 1;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Hero() {
  return (
    <Container>
      <TopSection>
        <HeroText>
          <div>
            <Title>
              Hey,
              <motion.div
                style={{
                  marginBottom: '-20px',
                  marginRight: '-45px',
                  paddingBottom: '20px',
                  paddingRight: '45px',
                  display: 'inline-block',
                  paddingLeft: '16px',
                }}
                animate={{ rotate: 60 }}
                transition={{
                  yoyo: 3,
                  from: 0,
                  duration: 0.8,
                  ease: 'easeInOut',
                  type: 'tween',
                }}>
                👋
              </motion.div>
            </Title>
          </div>
          <div>
            <SubTitle>I'm Kristian.</SubTitle>
            <Introduction>
              Frontend developer who loves bringing great user experiences to life with code.
            </Introduction>
          </div>
        </HeroText>
        <Avatar>
          <Image
            className="avatar"
            src="/me.jpg"
            width={170}
            height={170}
            alt="My Avatar"
            role="presentation"
          />
          <style jsx global>{`
            .avatar {
              border-radius: 50%;
            }
          `}</style>
        </Avatar>
      </TopSection>
      <BottomSection>
        <IntroductionMobile>
          Frontend developer who loves bringing great user experiences to life with code.
        </IntroductionMobile>
      </BottomSection>
    </Container>
  );
}
