export default () => {
    const lista = [];
    for (let index = 0; index <= 10; index++) {
        lista.push(<span>{ index }, </span>)
    }
    return (
        <div>
            { lista }
        </div>
    )
}