import { RiComputerLine } from 'react-icons/ri'
import { DiResponsive } from 'react-icons/di'
import { BsCodeSquare } from 'react-icons/bs'
import { AiOutlineAntDesign } from 'react-icons/ai'

import styles from './styles.module.scss'

export const Services = () => {



  return (
    <div id="services" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.card}>
          <span>Criação de sites</span>
          <RiComputerLine style={{ color: 'white', width: '70px', height: '70px' }} />
          <p>
            Desenvolvimento de sites profissionais, sistemas web, blogs e lojas virtuais.
          </p>
        </div>
        <div className={styles.card}>
          <span>Sistemas responsivos</span>
          <DiResponsive style={{ color: 'white', width: '90px', height: '90px', marginTop: '-1rem' }} />
          <p>
            Desenho de layouts que se adequam ao seu negócio de forma profissional e fiel no desenvolvimento.
          </p>
        </div>
        <div className={styles.card}>
          <span>UX/UI Design</span>
          <AiOutlineAntDesign style={{ color: 'white', width: '70px', height: '70px' }} />
          <p>
            Criação de sites responsivos para a melhor visualização em todas
            as resoluções.
          </p>
        </div>
        <div className={styles.card}>
          <span>Código semântico</span>
          <BsCodeSquare style={{ color: 'white', width: '70px', height: '70px' }} />
          <p>
            Estratégia e monitoração para seu negócio, fazendo com que seu site apareça cada vez melhor nas buscas.          </p>
        </div>
      </div>
    </div >
  )
}