import React from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Col,
  Media,
  Row
} from 'reactstrap'

// Config
const introConfig = require('../config.json').sections.Intro

// Styling
const photoStyle = {
  height: '220px',
  marginLeft: 'auto',
  marginRight: 'auto'
  // display: 'block'
  // marginTop: '70px',
  // marginBottom: '70px'
}

const cardStyle = {
    marginLeft: '5%',
    marginRight: '5%'
}

export default function Intro (props) {
  /**
   * Render
   */
  return (
    <Row className='section'>
      <Col xs='4' style={{ backgroundColor: 'pink' }}>
        <Media
          src={introConfig.photoPath}
          className='rounded-circle'
          style={photoStyle}
        />
        <h2>Mauricio de Paula</h2>
      </Col>
      <Col xs='8' style={{ backgroundColor: 'black' }} className='align-self-center'>
        <Card style={cardStyle}>
          <CardBody>
            {introConfig.introText}
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
