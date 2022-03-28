import { useEffect, useState } from 'react';
import myPhoto from '../../assets/myPhoto.png'

import styles from './styles.module.scss'

export const AboutMe = () => {
  const [type, setType] = useState('');
  const [count, setCount] = useState(0)
  const text = 'Jonatas Santana, formando em Análise e Desenvolvimento de Sistemas. Apaixonado por programação e design.'

  useEffect(() => {
    if (count < text.length + 1) {
      setType(text.split('').slice(0, count))
    }
  }, [count])

  useEffect(() => {
    setTimeout(() => {
      if (count < text.length + 1) {
        setCount(count + 1)
      }
    }, 100);
  }, [count])

  return (
    <div id='whoIAm' className={styles.container}>
      <img src={myPhoto} alt='myPhoto' />
      <div className={styles.about}>
        <h2>Quem Sou</h2>
        <p id="description">
          {type}<span>|</span>
        </p>
      </div>
    </div>
  )
}