import Text from '../Text'
import styles from './ErrorAdvice.module.css'

const ErrorAdvice = (): JSX.Element => (
  <section className={`${styles.section}`}>
    <i className={`nes-kirby ${styles.kirby}`}></i>
    <Text color="is-error" text="Algo no ha ido bien..." />
  </section>
)

export default ErrorAdvice
