import styles from '../styles/MostRecent.module.css'


function MostRecent() {
  return(
      <div>
          <p className={styles.meta}>LATEST ARTICLE</p>
          <h4>Solana - technically Explained</h4>
          <p className={styles.summery}>My solution involved placing an appropriate z-index value to the Image Component in question. Think of z-index like a stack of cards. The higher the number, the higher the element will display on the stack. In my case, I wanted a logo and a search bar to be on top of my background image.</p>
          <p className={styles.meta}>Ioana Roceanu 03/06/2000</p>
      </div>
  )
      
}

export default MostRecent;