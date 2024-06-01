//tutaj ma się stworzyć strona filmu znalezionego po id

import { axiosConfig } from 'components/axios/axiosconfig';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const GridUl = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 0 20px;
`;

const Actor = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axiosConfig.get(`/movie/${movieId}/credits`);
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchCast();
  }, [movieId]);
  console.log(castInfo);

  const createList = () => {
    return castInfo.map(cast => (
      <Actor key={cast.cast_id}>
        <img
          src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
          alt={`${cast.name}'s profile`}
        />
        <DivFlex>
          <p>{cast.name}</p>
          <p>as {cast.character}</p>
        </DivFlex>
      </Actor>
    ));
  };

  return <GridUl>{createList()}</GridUl>;
};

export default Cast;
