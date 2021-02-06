import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  padding: 40px;
  margin: 0 auto;
  flex-direction: column;
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  margin: 1rem 0;
`;

const Email = styled.h3`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  font-weight: 400;
`;

const Socials = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
`;
const SocialItem = styled.li`
  padding-right: 20px;
`;

const ballStyle = {
  display: 'block',
};

const bounceTransition = {
  y: {
    duration: 1,
    yoyo: Infinity,
    ease: 'easeOut',
  },
};

const MailLink = styled.a`
  text-decoration: underline;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: #000000;
  }
`;

export default function Footer() {
  return (
    <Container>
      <Title>Let's connect!</Title>
      <Email>
        You can email me directly at{' '}
        <Link href="mailto:https://twitter.com/KristianDunne_" passHref>
          <MailLink>KristianDunne@iCloud.com</MailLink>
        </Link>
      </Email>
      <Socials>
        <SocialItem>
          <Link href="https://github.com/KristianDunne">
            <a target="_blank">
              <motion.span
                style={ballStyle}
                transition={bounceTransition}
                animate={{
                  y: ['25%', '-25%'],
                }}>
                <Image
                  src="/icons/github.svg"
                  width={24}
                  height={24}
                  alt="GitHub"
                  role="presentation"></Image>
              </motion.span>
            </a>
          </Link>
        </SocialItem>
        <SocialItem>
          <Link href="https://twitter.com/KristianDunne_">
            <a target="_blank">
              <motion.span
                style={ballStyle}
                transition={bounceTransition}
                animate={{
                  y: ['25%', '-25%'],
                }}>
                <Image
                  src="/icons/twitter.svg"
                  width={24}
                  height={24}
                  alt="Twitter"
                  role="presentation"></Image>
              </motion.span>
            </a>
          </Link>
        </SocialItem>
      </Socials>
    </Container>
  );
}
