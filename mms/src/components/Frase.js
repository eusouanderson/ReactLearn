import styles from './Frase.module.css'

function Frase(){
    return (
    <div>
        <div className={styles.FraseContainer}>
            <p>
                Esta é uma primeira frase de exemplo para o React!
            </p>
        </div>
        
        <div className={styles.FraseContent}>
            <p>
                Esta é a segunda frase de exemplo para o React!
            </p>
        </div>
    </div>
    )
}

export default Frase