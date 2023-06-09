import Item from "../Item";

function List({ items = [] }){

    // função de loop usado em react
    const map = items.map((item) => {
        return <Item key={item.id} item={item} />
    });

    return (
        <div>
            {/* faz renderizar os vários itens listados*/}
            <ul>{map}</ul>
        </div>
    );
}

export default List;