import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Link from 'next/link'
import styles from '../styles/MyNavbar.module.css'


function MyNavbar() {
  return(
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className={styles.container}>
      <Link href="/" passHref>
        <Navbar.Brand>
        <div className={styles.title}>Block Heroes</div>
        </Navbar.Brand>
      </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
          <Link href="/about" passHref><Nav.Link className={styles.menutext}>About</Nav.Link></Link>
          <Link href="/" passHref><Nav.Link className={styles.menutext}>Home</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
      
}

export default MyNavbar;