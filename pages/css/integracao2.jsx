import style from "./integracao2.module.css"

export default function integracao() {
    return (
            <div>
                <div className={style.vermelho}>Texto #01</div>
                <div className={style.azul}>Texto #02</div>
                <div className={style.branco}>Texto #03</div>
            </div>
    )
}