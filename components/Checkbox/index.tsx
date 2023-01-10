import { useState } from 'react'

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
      <span>{text}</span>
    </label>
  )
}

export default Checkbox
