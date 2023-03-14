import styled, { keyframes } from "styled-components";
import { breakpoint, space } from "@styles/theme";
import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import { ErrorBox } from "../project-card/error-box";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${space(6)};

  // reset list styles
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: ${breakpoint("desktop")}) {
    grid-template-columns: repeat(auto-fit, 400px);
  }
`;

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  margin: 10% auto;
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();
  const testProjects = useGetProjects();

  if (isLoading) {
    return (
      <Container>
        <Rotate>
          <img
            className="loading-icon"
            src="/icons/loading-circle.png"
            alt="loading"
          />
        </Rotate>
      </Container>
    );
  }

  if (isError) {
    console.error(error);
    return <ErrorBox error={testProjects} />;
  }

  return (
    <List>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </List>
  );
}
