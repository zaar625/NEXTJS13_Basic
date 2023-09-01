import Layout from '../components/layout/layout';
import '../styles/globals.css';
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps :{session, ...pageProps}}) {
  //session값에 pageProps.session을 해도 됩니다.
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
