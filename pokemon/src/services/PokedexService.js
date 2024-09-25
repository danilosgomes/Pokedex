import axios from "axios";

const url = "http://localhost:3000";

class PokedexService {
  getPokedex() {
    return axios.get(url + "/listaPokedex");
  }

  createPokedex(pokedex){
    return axios.post(url + '/adicionar' + pokedex);
  }

  updatePokedex(pokedexId){
    return axios.put(url + '/atualizar' + pokedexId + "/pokemon");
  }

  deletePokedex(pokedexId){
    return axios.delete(url + "/deletar/" + pokedexId + "/pokemon");
  }
}

export default PokedexService;
