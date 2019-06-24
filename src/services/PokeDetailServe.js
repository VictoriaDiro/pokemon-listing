const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=25&offset=0';

const fetchPokeDetail = (url=URL) => fetch(url).then(res => res.json());

export default fetchPokeDetail;