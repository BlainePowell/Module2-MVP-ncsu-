import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import Nav from '../components/nav'

const Model = dynamic(
  () => import('../components/model'),
  { ssr: false }
)

export default function Home() {
  return (
    <div className={styles.container}>
<Nav/>
<Model/>
<div className={styles.who}>
  <h1>WHO ARE WE?</h1>
  <div className={styles.paragraph}>
  <p>We are the leading forefront for virtual shoe technology, we hope to one day be 
    the main providers of Augmented reality shoe collections for the youth of tomorrow.
    With our service, you will be able to sell, create, or rock any pair of digital shoes you desire
    through the lense of technology. Welcome to the future of modern shoewear.
  </p>
  </div>
</div>
<iframe src="https://www.youtube.com/embed/GhX2GVNspog" 
 className={styles.video} allowfullscreen></iframe>
 <div className={styles.footer}>
  <p>MIE 310 (001) module two MVP website created by Blaine Powell</p>
 </div>
    </div>
  )
}
