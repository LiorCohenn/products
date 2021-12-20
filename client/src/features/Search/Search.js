import React from 'react';
import { useSelector } from 'react-redux';

import styled from "styled-components"
import { Link } from 'react-router-dom';

const SearchWarper = styled.div`

  height: 100%;
  width: 100%;

`

const Movies = styled.div`
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    height: 100%;
    grid-gap: 1.5rem;
    padding: 2rem;

`



const MovieContent = styled.div`
 height: 0;
    width: 100%;
    height: 20rem;
    opacity: 0;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    cursor: pointer;
    color: #fff;
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .9)), to(rgba(0, 0, 0, .9)));
    background: linear-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .9));
    text-align: center;
    padding: var(--sp-sm);
    font-size: .9rem;
    letter-spacing: .05rem;
`


const MovieCard = styled.div`
background-color: white;
 background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
background: url(${props => props.img});
height: 20rem;
transition: all .4s ease;
letter-spacing: .05rem;
:hover ${MovieContent}{
  transition: all .4s ease;
  height: 100%;
    opacity: 1;
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .9)), to(rgba(0, 0, 0, .9)));
    background: linear-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .9));
}
`

const MovieName = styled.div`
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem;
`

const MovieYear = styled.div`
font-size: 1rem;
  text-align: center;
  padding: 1rem;
`
const MovieInformation = styled.div`
position: absolute;
    bottom: 0;
    text-align: center;
    padding: 1rem;
`
const NoResult = styled.div`
  top: 10%;
  left: 25rem;
  position: relative;
  color: white;
  font-size: 2rem;
`;


export function Search() {
  const {movies} = useSelector(state => state.movie);

  return (
    <SearchWarper>
      <Movies>
        {movies.length ? (
          movies.map((movie) => {
            return (
              <Link
                to={`/${movie.imdbID}`}
                key={movie.imdbID}
                style={{ textDecoration: "none" }}
              >
                <MovieCard img={movie.Poster}>
                  <MovieContent>
                    <MovieName>{movie.Title}</MovieName>
                    <MovieYear>{movie.Year}</MovieYear>
                    <MovieInformation>Click for more</MovieInformation>
                  </MovieContent>
                </MovieCard>
              </Link>
            );
          })
        ) : (
          <NoResult>no result</NoResult>
        )}
      </Movies>
    </SearchWarper>
  );
}
