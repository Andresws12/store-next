import { useRouter } from 'next/router'
import Head from 'next/head' 

export default function Page() {
  const router = useRouter();
  const { platform, page } = router.query;

  
  return (
    <div>
      <Head>
        <title>Homedasdasd</title>
        <meta name="description" content="Home" />
      </Head> 
      <p>Pagina: {platform} / {page}</p>
    </div>
  )
}