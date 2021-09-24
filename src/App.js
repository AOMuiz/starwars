import React from "react";
import MovieList from "./components/MovieList/MovieList";
import Header from "./components/Header/Header";
import GlobalStyle from "./shared/styles/global";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallBack";

const App = () => {
  return (
    <div>
      <Header />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <MovieList />
      </ErrorBoundary>
      <GlobalStyle />
    </div>
  );
};

export default App;
