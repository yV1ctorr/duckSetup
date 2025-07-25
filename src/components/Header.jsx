//tem que importar o module.css com um nome(parecido com um componente)
import styles from './Header.module.css';

export function Header() {
    return(
        <div>
            <header className={styles.header}>
                <strong >Duck setup</strong>
            </header>'
        </div>
    )
    
}