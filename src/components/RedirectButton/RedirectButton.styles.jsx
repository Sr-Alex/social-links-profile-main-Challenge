import styled from "styled-components";

const RedirectButton = styled.button`
    display: block;
    cursor: pointer;

    margin: 1rem auto;
    padding: .5rem 0;

    width: 100%;
    height: 3rem;

    font-size: ${props => props.theme.sizes.paragraph};
    text-align: center;
    font-weight: ${props => props.theme.fonts.Inter.weights.bolder};

    background-color: ${props => props.theme.colors.neutral.Grey};
    color: ${props => props.theme.colors.neutral.White};

    border: none;
    border-radius: .5rem;

    transition: all .3s ease-in-out;

    &:hover {
        background-color: ${props => props.theme.colors.primary.Green};
        color: ${props => props.theme.colors.neutral.Off_Black};
    }

    &:active {
        transform: scale(.98);
    }
`;

export default RedirectButton;