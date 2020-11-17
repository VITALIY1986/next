import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

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
        alt="Picture of the author"
       
      />
       
        </div>
        <div><Link href="/posts/first-post"><a>this page!</a></Link></div>
   
        
        <div className='md:flex bg-white rounded-lg p-24 '>
        
        <img
          className='h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6'
          src="/www.jpg" alt="Vercel Logo"
        />
        
        <div className='text-center md:text-left'>
          <h2 className='Sblack'>Jake Prins</h2>
          <div className='text-purple-500'>JavaScript developer</div>
          <div className='text-purple-500'>Twitter: @jakeprins_nl</div>
        <div className='text-gray-600'>www.jakeprins.com</div>
      </div>
    </div>
     
     
     
     
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
        
    </div>
  )
}
