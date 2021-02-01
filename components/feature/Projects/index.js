import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

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

export default function Projects() {
  const projects = [
    {
      projectName: 'Storybook Components',
      img: '/projects/storybook-components.png',
      github: 'https://github.com/KristianDunne/storybook-ui-components',
      live: 'https://storybook-ui-components.kristiandunne.vercel.app/',
    },
    {
      projectName: 'Sign Up Form',
      img: '/projects/sign-up-form.png',
      github: 'https://github.com/KristianDunne/sign-up-form-challenge',
      live: 'https://sign-up-form-challenge.kristiandunne.vercel.app/',
    },
    {
      projectName: 'Single Price Grid Component',
      img: '/projects/single-price-grid-component.png',
      github: 'https://github.com/KristianDunne/single-price-grid-component',
      live: 'https://single-price-grid-component.kristiandunne.vercel.app/',
    },
    {
      projectName: 'Ping Coming Soon Page',
      img: '/projects/ping-coming-soon-page.png',
      github: 'https://github.com/KristianDunne/ping-coming-soon-page',
      live: 'https://ping-coming-soon-page.kristiandunne.vercel.app/',
    },
    {
      projectName: 'Huddle Landing Page',
      img: '/projects/huddle-landing-page.png',
      github: 'https://github.com/KristianDunne/huddle-landing-page',
      live: 'https://huddle-landing-page.kristiandunne.vercel.app/',
    },
    {
      projectName: 'Profile Card Component',
      img: '/projects/profile-card-component.png',
      github: 'https://github.com/KristianDunne/profile-card-component',
      live: 'https://profile-card-component.kristiandunne.vercel.app/',
    },
    {
      projectName: 'GitHub Jobs App (WIP)',
      img: '/projects/github-jobs-app.png',
      github: 'https://github.com/KristianDunne/github-jobs-app',
      live: 'https://github-jobs-app.kristiandunne.vercel.app/',
    },
  ];

  return (
    <Container>
      <Title>Projects</Title>
      <Grid>
        {projects.map((project) => {
          const { projectName, img, github, live } = project;

          return (
            <Card>
              <ProjectName>{projectName}</ProjectName>
              <Link href={live}>
                <a target="_blank">
                  <Image src={img} width={641} height={401} />
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
                    <Link href={github}>
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
                    <Link href={live}>
                      <a target="_blank">Live</a>
                    </Link>
                  </LinkItemLabel>
                </LinkItem>
              </Links>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
}
