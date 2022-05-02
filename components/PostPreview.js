import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/PostPreview.module.css'
import Nav from 'react-bootstrap/Nav'


function PostPreview({pic, title, summary}) {
  return(
      <div>
        <Link href="/about" passHref>
        <Nav.Link className={styles.link}>
          <div className={styles.pictureContainer}><Image
          src={pic}
          alt={title}
          layout="responsive"
          placeholder="blur"
          className={styles.picture}
          /></div>
          <p className={styles.meta}>03/06/2000</p>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.summary}>{summary}</p>
        </Nav.Link>
        </Link>
      </div>
  )
      
}

export default PostPreview;