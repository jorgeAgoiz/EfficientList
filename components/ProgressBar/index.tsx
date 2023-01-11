import styles from './ProgressBar.module.css'

interface Props {
  value: number
}

const ProgressBar = ({ value = 10 }: Props): JSX.Element => (
  <progress
    className={`nes-progress is-success ${styles.progress}`}
    value={value}
    max="100"
  />
)

export default ProgressBar
