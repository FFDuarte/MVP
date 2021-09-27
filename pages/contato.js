import Head from 'next/head'
import Menu from '../components/Menu';

export default function Contato() {
  return (
    <div >
      <Head>
        <title>Contato</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Menu />
      Contato
      </div>
    </div>
  )
}
