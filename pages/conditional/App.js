function Item({ name, isPacked }) {
    // if (isPacked) {
    //     // return <li className="item">{name} ✔</li>;
    //     return null; //null返却するとコンテンツが描画されない。
    // }
    // return <li className="item">{name}</li>

    // return <li className="item">
    //     {isPacked ? name + ' ✔' : name}
    // </li>

    // return <li className="item">
    //     {isPacked ?
    //         <del>{name + ' ✔'}</del>
    //         : name}
    // </li>

    // return <li className="item">
    //     {name} {isPacked && '✔'}
    // </li>

    // let itemContent = name;
    // if (isPacked) {
    //     itemContent = name + ' ✔'
    // }
    // return <li className="item">{itemContent}</li>

    let itemContent = name;
    if (isPacked) {
        itemContent = <del>{name + ' ✔'}</del>
    }
    return <li className="item">{itemContent}</li>

}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item isPacked={true} name="Space suit" />
                <Item isPacked={true} name="Helment with a golden leaf" />
                <Item isPacked={false} name="Photo of Tam" />
            </ul>
        </section>
    )
}