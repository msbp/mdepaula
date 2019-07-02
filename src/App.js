import React from 'react'
import {
  Container,
  Col,
  Row
} from 'reactstrap'
import Menu from './menu/Menu'
import Projects from './sections/Projects'
import Intro from './sections/Intro'
import Blog from './sections/Blog'

function App () {
  return (
    <Container fluid>
      <Row>
        <Col xs='3'>
          <Menu />
        </Col>
        <Col xs='9'>
          <Intro />
          <Projects />
          <Blog />
        </Col>
      </Row >
    </Container >
  )
}

export default App
