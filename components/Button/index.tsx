import styles from './Button.module.css'

interface Props {
  state?:
    | 'is-primary'
    | 'is-success'
    | 'is-warning'
    | 'is-error'
    | 'is-disabled'
    | null
  text: string
  type: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => any
}

const Button = ({
  state,
  text,
  type = 'button',
  onClick,
}: Props): JSX.Element => {
  return (
    <button
      type={type}
      className={`nes-btn ${state} ${styles.button}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
