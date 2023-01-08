import { FormEvent, useState } from 'react'
import styles from './Form.module.css'

interface State {
  progress: number
  loading: boolean
  answer: string
}

const Form = (): JSX.Element => {
  const [progress, setProgress] = useState<State['progress']>(10)
  const [loading, setLoading] = useState<State['loading']>(false)
  const [answer, setAnswer] = useState<State['answer']>('')
  console.log('new render')

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const theme: string = event.currentTarget.theme.value
    setLoading(true)
    setTimeout(() => setProgress(50), 500)
    setTimeout(() => setProgress(90), 1000)
    setTimeout(() => {
      setLoading(false)
      setProgress(10)
    }, 1500)
    fetch('api/openai-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ theme }),
    })
      .then((result) => result.json())
      .then((data) => setAnswer(data.result))
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
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
