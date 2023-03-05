export default () => {
    return (
        <div>
            <div>{ gerarLista(20) }</div>
            <div>{ gerarLista(3) }</div>
        </div>
    )
}

function gerarLista(final = 10) {
    const lista = []
    for (let i = 0; i <= final; i++) {
        lista.push(<span>{ i },</span>)
        
    }
    return lista
}