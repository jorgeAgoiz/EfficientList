import { Config } from './types/middleware'
export { default } from 'next-auth/middleware'

export const config: Config = {
  matcher: ['/historic', '/openai', '/openai/:path*'],
}
