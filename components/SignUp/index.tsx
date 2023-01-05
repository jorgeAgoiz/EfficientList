import Button from '../Button'
import Input from '../Input'
import Text from '../Text'

const SignUp = (): JSX.Element => {
  return (
    <>
      <Text text="Efficient List" color="is-primary" />
      <Input label="Email" inputType="text" state="is-success" />
      <Input label="Password" inputType="password" state="is-success" />
      <Button state="is-primary" text="Iniciar sesión" type="button" />
    </>
  )
}

export default SignUp
