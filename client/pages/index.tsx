import Head from 'next/head'
import Layout from '../components/layout/Layout'
import BodyLayout from '../components/body/BodyLayout'

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Geoat</title>
      </Head>
      <BodyLayout />
    </Layout>
  )
}

