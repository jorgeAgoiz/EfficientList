import { useState } from 'react'
import styles from './Checkbox.module.css'

interface State {
  checked: boolean
}

interface Props {
  text: string
}

const Checkbox = ({ text }: Props): JSX.Element => {
  const [checked, setChecked] = useState<State['checked']>(false)

  return (
    <label>
      <input
        type="checkbox"
        className="nes-checkbox"
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
      <span className={checked ? styles.spanGreen : styles.spanOrange}>
        {text}
      </span>
    </label>
  )
}

export default Checkbox
