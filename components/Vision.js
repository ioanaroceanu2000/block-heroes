import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Divider from '@material-ui/core/Divider'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Vision.module.css'
import pic from '../public/background.png'
import pic2 from '../public/back2.png'
import MostRecent from './MostRecent'


function Vision() {
  return(
      <div>
        <Container>
            <Row>
                <Col sm={{ span: 12, order: 2 }} xs={{ span: 12, order: 2 }} lg={{ span: 4, order: 1 }} className={styles.colStatement}>
                <p className={styles.statement}>
                    WEB3 
                    <span style={{letterSpacing: '0.1em'}}>  things </span>
                    I
                    <span style={{letterSpacing: '0.2em'}}>  couldn't</span>
                    <span style={{letterSpacing: '0.3em'}}>  find </span>
                    <span style={{letterSpacing: '0.4em'}}>  on </span>
                    <span style={{letterSpacing: '0.5em'}}>  the </span> 
                    <span style={{letterSpacing: '0.6em'}}>  Internet... </span>
                </p>
                    
                    <div className={styles.post}>
                    <MostRecent />
                    </div>                   
                    
                </Col>
                <Col sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }} lg={{ span: 8, order: 2 }} className={styles.colPicture}>
                    <Image
                    src={pic}
                    alt="Block Heroes Background"
                    layout="responsive"
                    placeholder="blur"
                    className={styles.picture}
                    />
                </Col>
            </Row>
            <Row>
            <Divider className={styles.divider}/>
            </Row>
        </Container>
      </div>
  )
      
}

export default Vision;