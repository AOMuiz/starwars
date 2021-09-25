import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import MovieList from "./components/MovieList";
import { Wrapper } from "./components/Wrapper";
import ErrorFallback from "./ErrorFallBack";
import GlobalStyle from "./shared/styles/global";

const App = () => {
  return (
    <Wrapper>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <MovieList />
      </ErrorBoundary>
      <GlobalStyle />
    </Wrapper>
  );
};

export default App;
