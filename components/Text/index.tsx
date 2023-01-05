import styles from './Text.module.css'

interface Props {
  text: string
  color: "is-primary" | "is-error" | "is-success" | "is-warning" | "is-disabled" | null
}

const Text = ({ text, color }: Props) => {
  return <p className={`nes-text ${color} ${styles.text}`}>{text}</p>
}

export default Text
