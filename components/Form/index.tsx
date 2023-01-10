import { FormEvent } from 'react'
import Button from '../Button'
import styles from './Form.module.css'

interface Props {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

const Form = ({ onSubmit }: Props): JSX.Element => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <label htmlFor="textarea_field">Cual es tu proposito?</label>
      <textarea
        style={{ resize: 'none' }}
        id="textarea_field"
        className={`nes-textarea ${styles.textarea}`}
        name="theme"
      ></textarea>
      <Button text="Enviar" type="submit" state="is-success" />
    </form>
  )
}

export default Form
