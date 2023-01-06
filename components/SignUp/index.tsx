import { signIn, signOut, useSession } from 'next-auth/react'
import Button from '../Button'
import Text from '../Text'

const SignUp = (): JSX.Element => {
  const { data: session } = useSession()

  console.log(session)

  return (
    <>
      <Text text="Efficient List" color="is-primary" />
      {!session ? (
        <>
          <Button
            state="is-primary"
            text="Iniciar sesión"
            type="button"
            onClick={() => signIn()}
          />
          <img
            className="nes-avatar is-rounded is-large"
            alt="Gravatar image example"
            src="https://www.gravatar.com/avatar?s=15"
            style={{ imageRendering: 'pixelated' }}
          />
        </>
      ) : (
        <>
          <Button
            state="is-warning"
            text="Cerrar sesión"
            type="button"
            onClick={() => signOut()}
          />
          <img
            className="nes-avatar is-rounded is-large"
            alt="Gravatar image example"
            src={session.user!.image!}
            style={{ imageRendering: 'pixelated' }}
          />
        </>
      )}
    </>
  )
}

export default SignUp
