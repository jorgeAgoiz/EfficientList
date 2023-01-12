import { useSession } from 'next-auth/react'
import Header from '../Header'
import Navbar from '../Navbar'

interface Props {
  children: JSX.Element
}

const Layout = ({ children }: Props): JSX.Element => {
  const { data: session } = useSession()

  return (
    <>
      <Header />
      {session && <Navbar />}
      {children}
    </>
  )
}

export default Layout
