import axios from 'axios'
import { useState } from 'react'
import styles from './styles.module.scss'

export const ContactUs = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  async function sendEmail(e) {
    e.preventDefault()

    await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: 'service_5p3qk58',
      template_id: 'template_9cpg1sn',
      user_id: 'x-ObBedNKJ_BrP8Tz',
      template_params: {
        'from_name': `'${name}'`,
        'firstname': `'${name}'`,
        'email': `${email}`,
        'phone': `'${phone}'`,
        'message': `'${message}'`,
        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
      }
    })

    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
  }

  return (
    <div className={styles.content}>
      <h2>Contate-nos</h2>
      <form className={styles.form}>
        <label htmlFor="name">Nome : <input id='name' value={name} type="text" onChange={(e) => setName(e.currentTarget.value)} /></label>
        <label htmlFor="phone">Telefone : <input id='phone' value={phone} type="text" onChange={(e) => setPhone(e.currentTarget.value)} /></label>
        <label htmlFor="telefone">Email : <input id='email' value={email} type="text" onChange={(e) => setEmail(e.currentTarget.value)} /></label>
        <textarea name="message" id="message" cols="30" rows="10"
          placeholder='digite sua mensagem aqui'
          value={message} type="text" onChange={(e) => setMessage(e.currentTarget.value)}>
        </textarea>
        <input type="submit" onClick={sendEmail} value="Enviar formulário" />
      </form>
    </div >
  )
}