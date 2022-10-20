import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-DWE6NJTWCJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-DWE6NJTWCJ');
</script>
   <Component {...pageProps} />
   </>
  )
}

export default MyApp
