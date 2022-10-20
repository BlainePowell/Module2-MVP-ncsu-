import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-DWE6NJTWCJ"/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DWE6NJTWCJ', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
   <Component {...pageProps} />
   </>
  )
}

export default MyApp
