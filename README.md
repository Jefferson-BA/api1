✅ 1. Ruteo (Routing)
✅ 2. Fetch (Consumo de API)
✅ 3. Globalización (Estado global con Zustand)

Con ejemplos DIRECTOS de tu código.

🧭 1. RUTEO (ROUTING)

El ruteo sirve para navegar entre páginas sin recargar la app.

📌 Tú lo usas en App.jsx:

import { BrowserRouter, Route, Routes } from 'react-router'

<BrowserRouter>
  <Routes>
    <Route element={<RootLayout />}>

      <Route path="/" element={<HomePage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/characters/:id" element={<CharacterDetailPage />} />
      <Route path="/chat" element={<ChatPage />} />

    </Route>
  </Routes>
</BrowserRouter>

🔍 Qué significa cada parte:

/ → Página principal

/characters → Lista de personajes

/characters/:id → Detalle dinámico de cada personaje

/chat → Chat con IA

📌 Y también usas ruteo en los botones:

<Link to="/characters">Explorar</Link>

<Link to={`/characters/${char.id}`}>Ver detalle</Link>


✔ Ahí usas ruteo para moverte entre páginas.

🌐 2. FETCH (Consumo de API)

El fetch sirve para traer datos desde la API de Rick & Morty.

📌 Tú lo usas en services/rickMortyApi.js:

export const rickMortyApi = {
  getAllCharacters: async (page = 1) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    return response.json();
  }
};


👀 Aquí estás:

✔ Consumiento la API
✔ Recibiendo JSON
✔ Retornando los resultados

Y en tu página:

useEffect(() => {
  fetchCharacters(1);
}, []);


✔ Cuando entras a /characters → ejecutas el fetch
✔ Luego renderizas los personajes con characters.map()

🌍 3. GLOBALIZACIÓN (Estado Global con Zustand)

La globalización significa:
👉 tener valores compartidos entre toda la app
👉 accesibles en cualquier página
👉 sin pasarlos como props

Tú lo haces con Zustand.

📌 Ejemplo: useCharactersStore.js

export const useCharactersStore = create((set) => ({
  characters: [],
  isLoading: false,
  error: null,
  fetchCharacters: async (page = 1) => {
     const data = await rickMortyApi.getAllCharacters(page);
     set({ characters: data.results });
  }
}));


En cualquier página puedes hacer:

const { characters, fetchCharacters } = useCharactersStore();


✔ No necesitas "pasar los datos" desde el padre
✔ Todas las páginas pueden acceder al mismo estado
✔ Los cambios se sincronizan automáticamente