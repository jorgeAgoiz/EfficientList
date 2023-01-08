import { useRouter } from 'next/router'
import Button from '../Button'
import styles from './Navbar.module.css'

const Navbar = () => {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <Button
        state="is-success"
        text="Inicio"
        type="button"
        onClick={() => router.push('/')}
      />
      <Button
        state="is-success"
        text="Generar Checklist"
        type="button"
        onClick={() => router.push('/openai')}
      />
      <Button
        state="is-success"
        text="Historial"
        type="button"
        onClick={() => router.push('/historic')}
      />
    </nav>
  )
}

export default Navbar
