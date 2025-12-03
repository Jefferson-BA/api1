# ✅ Ruteo, Fetch y Globalización (Zustand) — Explicación con tu propio código

A continuación se explica:

1. 🧭 **Ruteo (Routing)**
2. 🌐 **Fetch (Consumo de API)**
3. 🌍 **Globalización (Estado Global con Zustand)**

Todo usando **ejemplos DIRECTOS** de tu proyecto.

---

# 🧭 1. Ruteo (Routing)

El ruteo sirve para navegar entre páginas **sin recargar** la app.

## 📌 Ejemplo en `App.jsx`

```jsx
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
🔍 Significado de cada ruta
/ → Página principal

/characters → Lista de personajes

/characters/:id → Detalle dinámico de cada personaje

/chat → Chat con IA

📌 Navegación con botones
jsx
Copiar código
<Link to="/characters">Explorar</Link>

<Link to={`/characters/${char.id}`}>Ver detalle</Link>
✔ Aquí usas ruteo para moverte entre páginas.

🌐 2. Fetch (Consumo de API)
El fetch permite traer datos reales desde la API de Rick & Morty.

📌 Ejemplo en services/rickMortyApi.js
js
Copiar código
export const rickMortyApi = {
  getAllCharacters: async (page = 1) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    return response.json();
  }
};
🔍 Qué está pasando aquí
✔ Estás consumiendo la API

✔ Recibes la respuesta

✔ La conviertes en JSON

✔ Retornas los datos para usarlos en tu app

📌 Uso cuando entras a /characters
jsx
Copiar código
useEffect(() => {
  fetchCharacters(1);
}, []);
✔ Ejecuta el fetch al cargar la página
✔ Luego renderizas personajes con characters.map()

🌍 3. Globalización (Estado Global con Zustand)
La globalización te permite:

Compartir estado entre todas las páginas

Sin pasar props

Con acceso directo desde cualquier componente

📌 Ejemplo en useCharactersStore.js
js
Copiar código
export const useCharactersStore = create((set) => ({
  characters: [],
  isLoading: false,
  error: null,

  fetchCharacters: async (page = 1) => {
     const data = await rickMortyApi.getAllCharacters(page);
     set({ characters: data.results });
  }
}));
🔍 Qué hace esto
characters = estado global

fetchCharacters = función para actualizar el estado

Cualquier componente puede usarlo

📌 Uso en cualquier página
jsx
Copiar código
const { characters, fetchCharacters } = useCharactersStore();
✔ Sin props
✔ Estado sincronizado
✔ Disponible en toda la app

