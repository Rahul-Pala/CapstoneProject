import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function ContainerComponent(props) {
    
  return (
    <div>
    <Container>
      {/* {props.component} */}
      {props.children}
    </Container>
    </div>
  )
}
