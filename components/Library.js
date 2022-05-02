import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Divider from '@material-ui/core/Divider'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Library.module.css'
import pic from '../public/back2.png'
import pic2 from '../public/background.jpg'
import MostRecent from './MostRecent'
import PostPreview from './PostPreview'


function Library() {
  const sum1 = "My solution involved placing an appropriate z-index value to the Image Component in question. Think of z-index like a stack of cards. The higher the number, the higher the element will display on the stack. "
  return(
      <div> 
        <Container className={styles.container}>
            <Row>
                <Col lg="4" className={styles.col}>
                  <PostPreview title={"This is a title"} pic={pic2} summary={sum1}/>
                </Col>
                <Col lg="4" className={styles.col}>
                <PostPreview title={"This is a title"} pic={pic} summary={sum1}/>
                </Col>
                <Col lg="4" className={styles.col}>
                <PostPreview title={"This is a title"} pic={pic2} summary={sum1}/>
                </Col>
                <Col lg="4" className={styles.col}>
                  <PostPreview title={"This is a title"} pic={pic2} summary={sum1}/>
                </Col>
                <Col lg="4" className={styles.col}>
                <PostPreview title={"This is a title"} pic={pic} summary={sum1}/>
                </Col>
            </Row>
            <Row>
            </Row>
        </Container>
      </div>
  )
      
}

export default Library;