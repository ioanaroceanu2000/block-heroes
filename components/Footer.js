import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import logo from '../public/logotilted.png'
import Link from 'next/link'

function Footer() {
    return(
      <div className={styles.wrappingDiv}> 
      
        <Container className={styles.container}>
            <Row>
                <Col lg="4" className={styles.col} id={styles.colLogo}>
                <div className={styles.pictureContainer}>
                    <Image
                    src={logo}
                    alt={"ALT"}
                    layout="responsive"
                    placeholder="blur"
                    className={styles.picture}
                    />
                </div>
                <span className={styles.title}>Block Heroes</span>
                </Col>
                <Col lg="4" className={styles.col}>
                <div className={styles.subTitle}>Latest Articles</div>
                <Link href="/about" passHref><div className={styles.article}>Link one article my ght ggunoes</div></Link>
                <Link href="/about" passHref><div className={styles.article}>All in one go here solifdity</div></Link>
                <Link href="/about" passHref><div className={styles.article}>Marta are mere si face prune</div></Link>
                </Col>
                <Col lg="4" className={styles.col}>
                <div className={styles.subTitle}>Our newsletter</div>
                <div className={styles.subInfo}>Be the first one to read our latest articles! By clicking submit you agree to receive update emails about our recent activity.</div>
                <Form className={styles.form}>
                    <Form.Control type="email" placeholder="Enter email" className={styles.input}/>
                    <Button variant="light" type="submit">
                        Subscribe
                    </Button>
                </Form>
                </Col>
                
            </Row>
            <Row>
            </Row>
        </Container>
      </div>
    )
      
}

export default Footer;