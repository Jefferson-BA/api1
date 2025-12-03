import { useEffect } from "react";
import { useCharactersStore } from "../store/useCharactersStore.js";
import { Link } from "react-router";

const CharactersPage = () => {
  const{characters,isLoading,error,fetchCharacters}=useCharactersStore();
  useEffect(()=>{
    fetchCharacters(1);
  },[]);


  return (
    <article className="py-5">
      <div className="container">

        <header className="text-center mb-4">
          <h1 className="display-5 fw-bold">
            <i className="bi bi-people-fill me-2"></i>
            Personajes de Rick and Morty
          </h1>
          <p className="lead text-muted">Explora el universo de personajes</p>
        </header>

        {/* Loading */}
        {isLoading && (
          <div className="text-center py-5">
            <div className="spinner-border text-primary"></div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="alert alert-danger text-center">
            Error: {error}
          </div>
        )}

        {/* Personajes */}
        <div className="row g-4">
          {characters.map((char) => (
            <div key={char.id} className="col-md-4 col-lg-3">
              <div className="card shadow-sm border-0 h-100">
                <img src={char.image} className="card-img-top" />

                <div className="card-body text-center">
                  <h5 className="fw-bold">{char.name}</h5>

                  <div className="d-flex justify-content-center gap-2 mb-2">
                    <span className="badge bg-success">{char.status}</span>
                    <span className="badge bg-primary">{char.species}</span>
                  </div>

                  <p className="text-muted mb-3">
                    <i className="bi bi-geo-alt"></i> {char.location.name}
                  </p>

                  <Link
                    className="btn btn-outline-primary btn-sm"
                    to={`/characters/${char.id}`}
                  >
                    <i className="bi bi-eye me-1"></i>
                    Ver detalle
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </article>
  );
};

export default CharactersPage;