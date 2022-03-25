import myPhoto from '../../assets/myPhoto.png'

import styles from './styles.module.scss'

export const AboutMe = () => {
  return (
    <div id='whoIAm' className={styles.container}>
      <img src={myPhoto} alt='myPhoto' />
      <div className={styles.about}>
        <h2>Quem Sou</h2>
        <p>Jonatas Santana, formando em Análise e Desenvolvimento de Sistemas.
          Apaixonado por programação e design.
        </p>
      </div>
    </div>
  )
}