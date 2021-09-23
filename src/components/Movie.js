import React from "react";

const Movie = ({ singleMovie }) => {
  return (
    <div>
      <h1>{singleMovie.title}</h1>
      <table>
        <caption>Our products</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>gender</th>
          </tr>
        </thead>
        <tbody>
          {singleMovie.characters.map((character, index) => (
            <tr key={character.id}>
              <td>{character[index]}</td>
              <td>{character.price}</td>
              <td>{character.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Movie;
