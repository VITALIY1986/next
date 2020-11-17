import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'


export default function Home() {
  return (
    <div class='container my-0 mx-auto'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
       
      </Head>

      
        <header>
          <div class="flex bg-gray-200 justify-between">
            <a class="p-4">Logo</a>
            <div class="p-4">burger</div>
          </div>
        </header>
        <div class="h-screen">
           <Image
        class='object-cover h-screen w-full'
        src="/www.jpg" 
        width={500}
        height={500}
      />
       
        </div>
        <div><Link href="/posts/first-post"><a>this page!</a></Link></div>
   
        
       
     
     
     
      <footer >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo"  />
        </a>
      </footer>
        
    </div>
  )
}
