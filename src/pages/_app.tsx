import { AppProps } from 'next/app'
import '@blog/styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
