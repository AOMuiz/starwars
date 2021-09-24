import React, { useState, useEffect } from "react";
import useMovieDetail from "../hooks/useMovieDetails";
// import { catchError } from "../api/starwarsapi";
import Loader from "../shared/Loader";
import CharactersTable from "./CharactersTable";
import {
  Wrapper,
  Label,
  Text,
  Header,
  Title,
  Container,
} from "./MovieDetail.style";

const MovieDetail = ({ id }) => {
  const { loading, movieDetail } = useMovieDetail(Number(id));
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setMovie(movieDetail);
    console.log(movie);
  }, [id, movie, movieDetail]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Header>
            <Title>{movie.title}</Title>
          </Header>
          <Wrapper>
            <Label>Description</Label>
            <Text>{movie.description}</Text>
          </Wrapper>
          <CharactersTable products={movie.characters} />
        </Container>
      )}
    </div>
  );
};

export default MovieDetail;
