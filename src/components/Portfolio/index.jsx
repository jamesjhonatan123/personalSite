import project1 from '../../assets/project1.svg'
import project2 from '../../assets/project2.svg'

import styles from './styles.module.scss'

export const Portfolio = () => {

  return (

    <div id="portfolio" className={styles.container}>
      <h2>Projetos</h2>
      <div className={styles.content}>
        <a href="https://tecertifica-b3aaa.web.app/">
          <div className={styles.card}>
            <span >TeCertifica</span>
            <p>
              Projeto pra personalização de certificados
              e emissão em massa, com envio para email, banco de dados integrado,
              api de pagamentos....
            </p>
            <img src={project1} alt='project 1' />
          </div>
        </ a>
        <a href="https://type-pcal-jamesjhonatan123.vercel.app/">
          <div className={styles.card}>
            <span href="https://type-pcal-jamesjhonatan123.vercel.app/">TypePCAL</span>
            <p>
              Site para os aprovados da Polícia Civil de Alagoas. Trata-se de um
              jogo de digitação com ranking dinâmico e integrado.
            </p>
            <img style={{ transform: 'scale(0.975)' }} src={project2} alt='project 2' />
          </div>
        </a>
      </ div>
    </ div >
  )
}