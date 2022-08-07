import Layout from '../components/shared/Layout'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  const AnyComponent = Component as any;
  return (
    <>
      <Layout>
        <AnyComponent {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
