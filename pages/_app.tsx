import Layout from '../components/shared/Layout'
import { InfoProvider } from '../core/context-provider/info-provider'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  const AnyComponent = Component as any;
  return (
    <>
      <InfoProvider>
        <Layout>
          <AnyComponent {...pageProps} />
        </Layout>
      </InfoProvider>
    </>
  );
}

export default MyApp
