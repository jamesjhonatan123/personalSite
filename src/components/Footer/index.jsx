import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'

import styles from './styles.module.scss'

export const Footer = () => {


  return (
    <footer className={styles.container}>
      <span>
        Desenvolvido por Jonatas Santana
      </span>
      <div>
        <a target="_blank" href="https://github.com/jamesjhonatan123?tab=repositories" rel="noreferrer"><AiOutlineGithub style={{ transform: 'scale(2)', marginRight: '3rem', color: 'white' }} /></a>
        <a target="_blank" href="https://www.linkedin.com/in/jonatas-santana-souza-7a9784123/" rel="noreferrer"><AiOutlineLinkedin style={{ transform: 'scale(2)', marginRight: '3rem', color: 'white' }} /></a>
        <a target="_blank" href="mailto:webjonatasdeveloper@gmail.com" rel="noreferrer"><AiOutlineMail style={{ transform: 'scale(2)', marginRight: '3rem', color: 'white' }} /></a>

      </div>
    </footer>
  )
}