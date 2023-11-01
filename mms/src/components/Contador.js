import { useState } from "react";
import style from "./Contador.module.css";

function Contador() {
    const [contador, setContador] = useState(0);
    function adicionarContador() {
        setContador(contador + 1);
        
    }
    return (
        <>
        <div className={style.buttonContador}>

            <h1>Contador</h1>
            <p>{contador}</p>
            </div>
            <div className={style.buttonContador}>
            <button onClick={adicionarContador}>Adicionar</button>
            </div>
        </>
    );
}

export default Contador;