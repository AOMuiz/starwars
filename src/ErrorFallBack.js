import styled from "styled-components";

function ErrorFallback({ error, errorMessage }) {
  return (
    <StyledError role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error?.message ?? errorMessage}</pre>
    </StyledError>
  );
}

export default ErrorFallback;

const StyledError = styled.div`
display: flex,
text-align: center
font-size: 2rem;
font-family: 'Star Jedi', 'Roboto';
justify-content: center;
align-items:center;
height: 100vh
pre{
  color: red
}
`;
