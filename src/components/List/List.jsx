import "./List.css";
import ListItem from "../ListItem/ListItem";

function List({ items = [] }) {
  // constante chamada map, que indica que para cada item da lista iremos
  // retornar um ListItem (que por sua vez retorna uma estrutura para apresentar cada pokemon)
  const map = items.map((item) => {
    return (
      // item (em verde) referente ao parametro item do componente ListItem
      <ListItem item={item} />
    );
  });

  return (
    <div className="list-wrapper">
      <ul className="list">{map}</ul>
    </div>
  );
}

export default List;
