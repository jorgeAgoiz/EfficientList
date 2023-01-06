import Head from 'next/head'
import Form from '../../components/Form'
import Header from '../../components/Header'
import List from '../../components/List'
import Text from '../../components/Text'
import styles from './OpenAi.module.css'

const OpenAi = (): JSX.Element => {
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
        <Form />
        <List />
      </main>
    </>
  )
}

export default OpenAi
