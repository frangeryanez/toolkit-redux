import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices';

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { 
    isLoading, 
    pokemons=[],
    page 
  } = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const onClick = page => dispatch(getPokemons(page));

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>
        Loading: { !isLoading ? 'True' : 'False' }
      </span>
      <ul>
        {pokemons.map(({ name }) => (
          <li>{ name }</li>
        ))}
      </ul>
      <button
        disabled={ !isLoading }
        onClick={ () => onClick(page) }
      >
        Next
      </button>
    </>
  );
};