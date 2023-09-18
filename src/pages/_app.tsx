import '@/styles/globals.css';
import { Poppins } from 'next/font/google';
import type { AppProps } from 'next/app';

const poppins = Poppins({
  weight: ['500', '700'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </main>
    
  )
  
}
