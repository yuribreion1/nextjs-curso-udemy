import Titulo from "../../components/Titulo";

export default function usandoTitulo() {
    return (
            <div>
                <Titulo titulo="Titulo 1" subtitulo="Subtitulo 1" />
                <Titulo titulo="Titulo 2" subtitulo="Subtitulo 2" pequeno={true}/>
            </div>
    )
}