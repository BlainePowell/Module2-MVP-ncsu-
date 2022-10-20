import '@google/model-viewer'
import styles from '/styles/Home.module.css'

function Model() {
    
    return (
        <div>
        <div className={styles.model}>
        <model-viewer
        src="/Astronaut-1.glb"
        ios-src=""
        poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
        alt="A 3D model of an astronaut"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        disable-zoom
        ar
      ></model-viewer>
      </div>
            <div className={styles.modelheader}>
            <h1>WELCOME TO THE FUTURE OF APPAREL</h1>
            </div>
            </div>
    )
}

export default Model;