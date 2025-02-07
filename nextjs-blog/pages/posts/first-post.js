import Link from 'next/link';
import Layout from '../../components/Layout';
import Head from 'next/head';
import Script from 'next/script';
export default function FirstPost() {
  return (
    <Layout>
  <Head>
    <title>First post</title></Head>
    <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => console.log('SDK loaded')}/>
    <h1>First Post</h1>
<h2>
    <Link href="/">Welcome home</Link>
    </h2>
    </Layout>);
}

