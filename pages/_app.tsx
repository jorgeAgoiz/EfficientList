import { NextFont } from '@next/font/dist/types'
import localFont from '@next/font/local'
import 'nes.css/css/nes.min.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

const myFont: NextFont = localFont({
  src: '../assets/fonts/PressStart2P-Regular.ttf',
})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
  return (
    <SessionProvider session={session}>
      <div className={myFont.className}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
