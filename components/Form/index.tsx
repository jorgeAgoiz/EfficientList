import { FormEvent, useState } from 'react'
import styles from './Form.module.css'

interface State {
  progress: number
  loading: boolean
}

const Form = (): JSX.Element => {
  const [progress, setProgress] = useState<State['progress']>(10)
  const [loading, setLoading] = useState<State['loading']>(false)

  /* Aqui se mete un useEffect */

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    console.log({ values: event.currentTarget.theme.value })
    setLoading(true)
    setTimeout(() => setProgress(50), 500)
    setTimeout(() => setProgress(90), 1000)
    setTimeout(() => {
      setLoading(false)
      setProgress(10)
    }, 1500)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="textarea_field">
          De que quieres hacer la checklist?
        </label>
        <textarea
          style={{ resize: 'none' }}
          id="textarea_field"
          className={`nes-textarea ${styles.textarea}`}
          name="theme"
        ></textarea>
        <button type="submit" className="nes-btn is-success">
          Preguntar
        </button>
        {loading && (
          <progress
            className="nes-progress is-success"
            value={progress}
            max="100"
          />
        )}
      </form>
    </>
  )
}

export default Form
