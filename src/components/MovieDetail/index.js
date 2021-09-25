import React, { useState, useEffect } from "react";
import useMovieDetail from "../../hooks/useMovieDetails";
import Loader from "../../shared/components/Loader";
import CharactersTable from "../Table/CharactersTable";
import styled from "styled-components";
import { colors } from "../../shared/styles/colors";

const MovieDetail = ({ id }) => {
  const { loading, movieDetail } = useMovieDetail(Number(id));
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setMovie(movieDetail);
  }, [id, movie, movieDetail]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <StyledContainer>
          <StyledHeader>
            <Title>{movie?.title}</Title>
          </StyledHeader>
          <StyledWrapper>
            <Label>Description</Label>
            <Text>{movie?.description}</Text>
          </StyledWrapper>
          <CharactersTable products={movie?.characters} />
        </StyledContainer>
      )}
    </div>
  );
};

export default MovieDetail;

export const StyledWrapper = styled.div`
  margin-bottom: 3rem;
`;

export const Label = styled.h4`
  font-family: inherit;
  font-size: 1.8rem;
  color: ${colors.gray};
  margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
  font-family: "Star Jedi", "Open Sans", sans-serif;
  font-size: 4rem;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
  // background: -webkit-linear-gradient(${colors.yellow}, #333);
  background: linear-gradient(315deg, #fbb034 0%, ${colors.yellow} 74%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  //   margin-top: 2rem;
  // background-color: #fbb034;
  // background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%) ;
`;

export const Text = styled.p`
  font-family: inherit;
  font-size: 1.6rem;
  color: ${colors.white};
  padding: 1.5rem;
  line-height: 2.2rem;
  text-align: justify;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: ${colors.white};
  margin-bottom: 3rem;
  text-align: center;
`;

export const StyledContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 576px */
  @media (min-width: 36em) {
    max-width: 54rem;
  }

  /* 768px */
  @media (min-width: 48em) {
    max-width: 72rem;
  }

  /* 992px */
  @media (min-width: 62em) {
    max-width: 96rem;
  }

  /* 1200px */
  @media (min-width: 75em) {
    max-width: 114rem;
  }
`;
