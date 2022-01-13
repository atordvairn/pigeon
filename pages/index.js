import Head from 'next/head'
import useSWR from 'swr';
import Link from 'next/link'

export default function Home() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR('/api/readfiles', fetcher);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>death-pegions- a collection of pigeons photos like they're willing to die.</title>
        <link rel="icon" href="/1.jpg" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-light">
         death-pegions
        </h1>

        <p className="mt-3 text-2xl">
          a collection of pigeons photos like they're willing to die.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {!data && "Sharpening Knife..."}
          {data && data.map(imgPath => <img src={imgPath} alt="DEath"/>)}

         {/* <a href="" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
           <Image
             src={}
             height={300}
             width={auto}
             placeholder="blur"
           />
          </a>*/}

        </div>
      </main>
      <br /><br />
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <Link href="https://github.com/atordvairn/death-pegions">Add Another One</Link>
        <br />
        (c) atordvairn {new Date().getFullYear()} All Rights Reserved.
      </footer>
    </div>
  )
}
