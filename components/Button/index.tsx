interface Props {
  state?: "is-primary" | "is-success" | "is-warning" | "is-error" | "is-disabled" | null
  text: string
  type: "button" | "submit" | "reset" | undefined
}

const Button = ({ state, text, type = 'button' }: Props): JSX.Element => {
  return (
    <button type={type} className={`nes-btn ${state}`}>
      {text}
    </button>
  )
}

export default Button
