import { RiComputerLine } from 'react-icons/ri'
import { MdOutlinePhonelink } from 'react-icons/md'
import { BsCodeSquare } from 'react-icons/bs'
import { AiOutlineAntDesign } from 'react-icons/ai'

import styles from './styles.module.scss'
import { IconContext } from 'react-icons'

export const Services = () => {



  return (
    <IconContext.Provider value={{ color: "white", size: '3rem' }}>

      <div id="services" className={styles.container}>
        <div className={styles.content}>
          <div className={styles.card}>
            <span>Criação de sites</span>
            <i>
              <RiComputerLine />
            </i>
            <p>
              Desenvolvimento de sites profissionais, sistemas web, blogs e lojas virtuais.
            </p>
          </div>
          <div className={styles.card}>
            <span>Sistemas responsivos</span>
            <i>

              <MdOutlinePhonelink />
            </i>
            <p>
              Desenho de layouts que se adequam ao seu negócio de forma profissional e fiel no desenvolvimento.
            </p>
          </div>
          <div className={styles.card}>
            <span>UX/UI Design</span>
            <i>

              <AiOutlineAntDesign />
            </i>
            <p>
              Criação de sites responsivos para a melhor visualização em todas
              as resoluções.
            </p>
          </div>
          <div className={styles.card}>
            <span>Código semântico</span>
            <i>

              <BsCodeSquare />
            </i>
            <p>
              Estratégia e monitoração para seu negócio, fazendo com que seu site apareça cada vez melhor nas buscas.          </p>
          </div>
        </div>
      </div >
    </IconContext.Provider>
  )
}