function Item({ item }) {
    return (
        <li>
            <p>{item.name}</p>
            <p>{item.time}</p>
        </li>
    )
}

export default Item;