import styled from "styled-components";

const ProfileContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem 1.5rem 0.5rem 1.5rem;

  width: 85%;
  min-width: 20rem;
  height: fit-content;

  border-radius: 1rem;

  background-color: ${(props) => props.theme.colors.neutral.Dark_Grey};

  transition: all .5s ease-in-out;

  & figure {
    width: 6rem;
    height: 6rem;

    margin: 0 0 1rem 0;
  }

  & figure img {
    border-radius: 9999px;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: ${(props) => props.theme.fonts.Inter.weights.bolder};
  }

  h3 {
    margin: 0.5rem 0 1rem 0;

    font-size: ${(props) => props.theme.sizes.paragraph};
    font-weight: ${(props) => props.theme.fonts.Inter.weights.bold};
    color: ${(props) => props.theme.colors.primary.Green};
  }

  nav {
    margin: 0.5rem 0 0 0;

    width: 100%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    padding: 1rem 2rem 0.5rem 2rem;
    
    width: 22rem;
  }
`;

export default ProfileContainer;
