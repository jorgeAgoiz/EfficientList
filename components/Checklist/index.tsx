import Checkbox from '../Checkbox'
import styles from './Checklist.module.css'

interface Props {
  rows: Array<string>
}

const Checklist = ({ rows }: Props): JSX.Element => (
  <ul className={styles.ul}>
    {rows.map((row) => (
      <li key={row}>
        <Checkbox text={row} />
      </li>
    ))}
  </ul>
)

export default Checklist
