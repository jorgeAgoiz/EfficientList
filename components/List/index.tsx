import styles from './List.module.css'

interface Props {
  items: Array<string> | null
}

const List = ({ items }: Props): JSX.Element => {
  return (
    <div className={`${styles.list}`}>
      <ul className={`nes-list is-disc ${styles.ul}`}>
        {items &&
          items.map((row) => {
            return <li key={row}>{row}</li>
          })}
      </ul>
    </div>
  )
}

export default List
