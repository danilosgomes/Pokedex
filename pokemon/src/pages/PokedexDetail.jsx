import { useParams, useNavigate } from "react-router-dom"; // Adicione useNavigate
import "bootstrap/dist/css/bootstrap.css";
import "../css/App.css";
import { useState, useEffect } from "react";
import Header from "../components/Header";

const PokedexDetail = () => {
  const { id } = useParams(); // Agora pegando o id
  const navigate = useNavigate(); // Hook para navegação
  const [newName, setNewName] = useState(""); // Novo nome da Pokédex
  const [isUpdating, setIsUpdating] = useState(false); // Controla se o campo de atualização está visível
  const [error, setError] = useState(null); // Para armazenar erros
  const [pokemons, setPokemons] = useState([]); // Lista de Pokémons da Pokédex
  const [loading, setLoading] = useState(true); // Estado de loading enquanto carrega os Pokémons

  // Função para buscar os Pokémons da Pokédex atual
const fetchPokemons = async () => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/pokedex/${id}/pokemon` // Acessa a rota para pegar os Pokémons da Pokédex
    );
    if (!response.ok) {
      throw new Error("Erro ao buscar Pokémons da Pokédex");
    }
    const data = await response.json();
    setPokemons(data); // Atualiza a lista de Pokémons
  } catch (error) {
    console.error("Erro ao buscar Pokémons da Pokédex:", error);
    setError(error.message); // Armazena a mensagem de erro no estado
  } finally {
    setLoading(false); // Finaliza o estado de carregamento
  }
};



  useEffect(() => {
    fetchPokemons(); // Busca os Pokémons ao carregar o componente
  }, [id]);

  const handleUpdateName = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/pokedex/${id}/pokemon`, // Requisição por id
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: newName }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao atualizar o nome da Pokédex");
      }

      alert("Nome da Pokédex atualizado com sucesso!");
      setIsUpdating(false); // Fecha o campo de atualização
    } catch (error) {
      console.error("Erro ao atualizar o nome da Pokédex:", error);
      setError(error.message); // Armazena a mensagem de erro no estado
    }
  };

  // Função para deletar a Pokédex
  const handleDeletePokedex = async () => {
    const confirmDelete = window.confirm(
      "Você tem certeza que deseja deletar esta Pokédex?"
    ); // Pergunta de confirmação
    if (confirmDelete) {
      try {
        const response = await fetch(
          `http://localhost:8080/api/pokedex/${id}/pokemon`, // Requisição para deletar a Pokédex
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Erro ao deletar a Pokédex");
        }

        alert("Pokédex deletada com sucesso!");
        navigate("/pokedex"); // Redireciona para a página de Pokédex
      } catch (error) {
        console.error("Erro ao deletar a Pokédex:", error);
        setError(error.message); // Armazena a mensagem de erro no estado
      }
    }
  };

  return (
    <div className="background-container" style={{ overflowY: "auto" }}>
      <Header />
      <div
        className="text-start"
        style={{
          backgroundColor: "#B0B0B0",
          paddingTop: "80px",
          paddingLeft: "20px",
          paddingRight: "20px",
          marginLeft: "320px",
          marginRight: "320px",
          overflow: "auto",
          height: "93.4%",
        }}
      >
        <h1 style={{ marginLeft: "40px" }}>{newName}</h1>
        <button
          style={{ marginLeft: "40px", marginTop: "20px" }}
          className="btn btn-primary"
          onClick={() => setIsUpdating(true)}
        >
          Atualizar
        </button>

        <button
          style={{ marginLeft: "20px", marginTop: "20px" }} // Margem para separar os botões
          className="btn btn-danger"
          onClick={handleDeletePokedex}
        >
          Deletar
        </button>

        {/* Campo para atualizar o nome da Pokédex */}
        {isUpdating && (
          <div className="mt-3 d-flex justify-content-start">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Novo nome da Pokédex"
              style={{
                marginLeft: "40px",
                padding: "10px",
                marginRight: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <button className="btn btn-success" onClick={handleUpdateName}>
              OK
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setIsUpdating(false)}
              style={{ marginLeft: "10px" }}
            >
              Cancelar
            </button>
          </div>
        )}

        {/* Listagem dos Pokémons da Pokédex */}
        <h2 className="mt-5" style={{ marginLeft: "40px" }}>
          Pokémons
        </h2>
        {loading ? (
          <p>Carregando Pokémons...</p>
        ) : (
          <div style={{ marginLeft: "40px", marginTop: "20px" }}>
            {pokemons.length === 0 ? (
              <p>Nenhum Pokémon encontrado nesta Pokédex.</p>
            ) : (
              <ul className="list-group">
                {pokemons.map((pokemon) => (
                  <li key={pokemon.id} className="list-group-item">
                    {pokemon.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PokedexDetail;
