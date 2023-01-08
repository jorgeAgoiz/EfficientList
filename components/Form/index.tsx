import { FormEvent } from 'react'
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
      <button type="submit" className="nes-btn is-success">
        Preguntar
      </button>
    </form>
  )
}

export default Form
