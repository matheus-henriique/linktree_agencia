import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.logo}>
            LOGO
        </div>
        <ul className={styles.containerCardLinks}>
            <li className={styles.cardLink}>
                <a href="">WhatsApp Suporte</a>
            </li>
            <li className={styles.cardLink}>
                <a href="">Nosso site</a>
            </li>
            <li className={styles.cardLink}>
                <a href="">Instagram</a>
            </li>
        </ul>
    </div>
    <a className={styles.author} href="#">by agência</a>
    </main>
  )
}
