import Head from 'next/head'
import Menu from '../components/Menu';


export default function Sobre() {
  return (
    <div >
      <Head>
        <title>Sobre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Menu />
      Sobre
      </div>
    </div>
  )
}
