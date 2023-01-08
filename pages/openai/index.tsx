import Head from 'next/head'
import { FormEvent, useState } from 'react'
import ErrorAdvice from '../../components/ErrorAdvice'
import Form from '../../components/Form'
import Header from '../../components/Header'
import List from '../../components/List'
import ProgressBar from '../../components/ProgressBar'
import Text from '../../components/Text'
import styles from './OpenAi.module.css'

interface State {
  progress: number
  loading: boolean
  answer: Array<string> | null
  error: boolean
}

const OpenAi = (): JSX.Element => {
  const [answer, setAnswer] = useState<State['answer']>(null)
  const [progress, setProgress] = useState<State['progress']>(10)
  const [loading, setLoading] = useState<State['loading']>(false)
  const [error, setError] = useState<State['error']>(false)
  console.log(error)

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setProgress(10)
    setError(false)
    setAnswer(null)
    setLoading(true)
    const theme: string = event.currentTarget.theme.value
    setTimeout(() => setProgress(50), 500)
    setTimeout(() => setProgress(90), 1000)
    fetch('api/openai-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ theme }),
    })
      .then((result) => result.json())
      .then((data) => {
        if (!data.success && data.status !== 200) {
          setError(true)
        } else {
          setAnswer(data.result)
        }
        setLoading(false)
      })
  }

  return (
    <>
      <Head>
        <title>Efficient List - Open AI</title>
        <meta
          name="description"
          content="Ask openai to get ideas for your desired checklist"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Text text="Open AI Challenge" color="is-primary" />
        <Form onSubmit={handleSubmit} />
        {loading ? <ProgressBar value={progress} /> : <List items={answer} />}
        {error && <ErrorAdvice />}
      </main>
    </>
  )
}

export default OpenAi
