import Head from 'next/head'
import { useRouter } from 'next/router'
import Button from '../../components/Button'
import ErrorAdvice from '../../components/ErrorAdvice'
import Form from '../../components/Form'
import Layout from '../../components/Layout'
import ProgressBar from '../../components/ProgressBar'
import Text from '../../components/Text'
import useRequest from '../../hooks/useRequest'
import styles from './OpenAi.module.css'

const OpenAi = (): JSX.Element => {
  const router = useRouter()
  const { handleSubmit, error, listId, loading, progress } = useRequest()

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
      <Layout>
        <main className={styles.main}>
          <Text text="Open AI Challenge" color="is-primary" />
          <Form onSubmit={handleSubmit} />
          {loading && <ProgressBar value={progress} />}
          {listId && (
            <>
              <Text
                color="is-success"
                text="Se ha generado tu Checklist correctamente!!"
              />
              <Button
                text="Visualizar"
                type="button"
                state="is-primary"
                onClick={() => router.push(`/openai/${listId}`)}
              />
            </>
          )}
          {error && <ErrorAdvice />}
        </main>
      </Layout>
    </>
  )
}

export default OpenAi
