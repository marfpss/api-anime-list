import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AnimeList() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    async function fetchAnimeList() {
      try {
        const response = await axios.get('http://ec2-18-191-223-138.us-east-2.compute.amazonaws.com:8080/anime-api/v1/anime');
        setAnimeList(response.data);
      } catch (error) {
        console.error('Erro ao buscar a lista de animes:', error);
      }
    }

    fetchAnimeList();
  }, []);

  return (
    <div>
      <h1>Anime List</h1>
      <ul>
        {animeList.map(anime => (
          <li key={anime.id}>
            {anime.title} - {anime.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnimeList;
