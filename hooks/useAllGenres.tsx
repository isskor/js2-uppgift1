import { useQuery } from 'react-query';
import { getGenres } from '../services';

export function useAllGenres() {
  return useQuery('genres', getGenres);
}
