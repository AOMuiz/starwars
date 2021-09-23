import React from "react";
import MovieList from "./components/MovieList";
import Header from "./shared/Header";

const App = () => {
  return (
    <div>
      <Header />
      <MovieList />
    </div>
  );
};

export default App;
