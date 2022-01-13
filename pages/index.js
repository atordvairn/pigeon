import Head from 'next/head'
import useSWR from 'swr';
import Link from 'next/link'

export default function Home() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR('/api/readfiles', fetcher);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet" />
         <title>pigeon- famously known as cool creators on earth 🌎</title>
        <link rel="icon" href="/1.jpg" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-light">
         pigeons
        </h1>

        <p className="mt-3 text-2xl">
          They're cool.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {!data && "just hang on for a sec..."}
          {data && data.map(imgPath => <img src={imgPath} alt="a cool pegion"/>)}
        </div>
      </main>
      <br /><br />
      <footer className="text-center m-3 p-5 items-center justify-center w-full h-24 border-t">
        (c) atordvairn {new Date().getFullYear()} All Rights Reserved.
        <br /><br />
        <Link href="https://github.com/atordvairn/pigeon">Add Another Cool Guy</Link>
      </footer>
    </div>
  )
}
