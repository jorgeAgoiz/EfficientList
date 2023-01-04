import { FormEvent } from 'react'
import styles from './Form.module.css'

const Form = (): JSX.Element => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log({ values: event.currentTarget.theme.value })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="textarea_field">De que quieres hacer la checklist?</label>
      <textarea
        style={{ resize: 'none' }}
        id="textarea_field"
        className="nes-textarea"
        name="theme"
      ></textarea>
      <button type="submit" className="nes-btn is-success">
        Enviar
      </button>
    </form>
  )
}

export default Form
