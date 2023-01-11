import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Body from '../components/body/Body'
import Body1 from '../components/body/Body1'

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Body />
      <Body1 />
    </Layout>
  )
}

