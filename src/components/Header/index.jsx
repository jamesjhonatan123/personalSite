import { Fragment } from 'react'
import logo from '../../assets/logo.png'
import styles from './styles.module.scss'

export const Header = () => {

  return (
    <Fragment>
      <div className={styles.header}>
        <img className={styles.logo} src={logo} alt='logo' />
        <nav>
          <a href='#whoIAm'>Quem sou</a>
          <a href='#portfolio'>Portfólio</a>
          <a href='#services'>Serviços</a>
          <a href='#contactus'>Contato</a>
        </nav>
      </div>
    </Fragment>
  )

}