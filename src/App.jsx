import "./App.css";
import List from "./components/List/List";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  // hook usado para salvar cada um dos pokemons recebidos da api
  const [items, setItems] = useState([]);

  // carrega todos os detalhes dos pokemoons/itens
  const loadDetails = (items) => {
    const promises = items.map((item) => {
      // retorna o json de cada item com os todos os detalhes dos pokemons pela 'url'
      return fetch(item.url).then((response) => response.json());
    });
    // quando forem resolvidas todas as promessas acima, será aplicado sobre ele o setItems
    Promise.all(promises).then((data) => {
      setItems(data);
    });
  };

  //
  useEffect(() => {
    // fecth é utilizado para consultar(get) a api
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      // após obter a resposta, converte-a em json
      .then((response) => {
        return response.json();
      })
      // quando receber o conteúdo em json, printa-o
      .then((data) => {
        // código abaixo é a desestruturação do código < const results = data.results; >
        const { results } = data;
        loadDetails(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/* items (em verde) refere-se ao parametro em List, item refere-se ao parametro de teste criado em App */}
      <List items={items} />
    </div>
  );
}

export default App;
