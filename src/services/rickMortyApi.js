const BASE_URL = 'https://rickandmortyapi.com/api';

export const rickMortyApi = {
    getAllCharacters: async (page = 1) => {
        const response = await fetch(`${BASE_URL}/character?page=${page}`);
        if (!response.ok) throw new Error('Error al cargar personajes');
        return response.json();
    }
};
