import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Button from '../Button'
import styles from './Header.module.css'

const Header = () => {
  const { data: session /* , status */ } = useSession()

  return (
    <header className={styles.header}>
      <>
        {!session ? (
          <Image
            className="nes-avatar is-rounded is-large"
            alt="Gravatar image example"
            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
            width={90}
            height={90}
            referrerPolicy="no-referrer"
          />
        ) : (
          <Image
            className="nes-avatar is-rounded is-large"
            alt={session!.user!.name!}
            src={session!.user!.image!}
            width={90}
            height={90}
            referrerPolicy="no-referrer"
          />
        )}
      </>
      <>
        {!session ? (
          <Button
            state="is-primary"
            text="Iniciar sesión"
            type="button"
            onClick={() =>
              signIn(undefined, { callbackUrl: 'http://localhost:3000/openai' })
            }
          />
        ) : (
          <Button
            state="is-warning"
            text="Cerrar sesión"
            type="button"
            onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
          />
        )}
      </>
    </header>
  )
}

export default Header
