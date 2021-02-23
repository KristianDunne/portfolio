import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import useSWR from 'swr';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fafafa;
  padding: 40px 0;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  margin: 1rem 0;
`;

const Card = styled.div`
  flex: 1;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  padding: 24px;
  margin: 24px 40px;
`;

const ProjectName = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 12px;
`;

const Links = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const LinkItem = styled.li`
  font-size: 1rem;
  line-height: 2rem;
  display: flex;
  align-items: center;
`;

const LinkItemLabel = styled.span`
  margin-left: 5px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1;

  @media only screen and (min-width: 768px) {
    grid-template-columns: auto auto;
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: auto auto auto;
  }
`;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Projects() {
  const { data, error } = useSWR('http://strapi.kristiandunne.uk/projects', fetcher);

  if (error)
    return (
      <Container role="main">
        <Title>Ooops... Couldn't load projects</Title>
      </Container>
    );

  if (!data)
    return (
      <Container role="main">
        <Title>Fetching Projects...</Title>
      </Container>
    );

  return (
    <Container role="main">
      <Title>Projects</Title>
      <Grid>
        {data.map((project) => {
          const { Name, Code, Live, id } = project;

          const imgUrl = project.Image[0].url;

          return (
            <motion.div whileHover={{ scale: 1.1 }} key={id}>
              <Card>
                <ProjectName>{Name}</ProjectName>
                <Link href={Live} rel="noreferrer">
                  <a target="_blank">
                    <Image
                      src={`http://strapi.kristiandunne.uk${imgUrl}`}
                      width={641}
                      height={401}
                      alt={Name}
                      role="presentation"
                    />
                  </a>
                </Link>
                <Links>
                  <LinkItem>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width="1rem"
                      height="1rem">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    <LinkItemLabel>
                      <Link href={Code} rel="noreferrer">
                        <a target="_blank">Code</a>
                      </Link>
                    </LinkItemLabel>
                  </LinkItem>
                  <LinkItem>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width="1rem"
                      height="1rem">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <LinkItemLabel>
                      <Link href={Live} rel="noreferrer">
                        <a target="_blank">Live</a>
                      </Link>
                    </LinkItemLabel>
                  </LinkItem>
                </Links>
              </Card>
            </motion.div>
          );
        })}
      </Grid>
    </Container>
  );
}
