import styles from './Input.module.css'

interface Props {
  label: string,
  inputType: string,
  state: string // is-success / is-warning / is-error
}

const Input = ({ label, inputType = 'text', state }: Props): JSX.Element => {
  return (
    <div className="nes-field">
      <label htmlFor="name_field">{label}</label>
      <input type={inputType} id="name_field" className={`nes-input ${state} ${styles.input}`} />
    </div>
  )
}

export default Input
