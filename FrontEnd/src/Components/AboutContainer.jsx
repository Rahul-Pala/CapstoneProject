import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function AboutConainer() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4} lg={3}>
          <Image src="https://en.pimg.jp/099/799/485/1/99799485.jpg" thumbnail />
        </Col>
        <Col xs={6} md={4} lg={3}>
          <Image src="https://en.pimg.jp/100/819/149/1/100819149.jpg" thumbnail/>
        </Col>
        <Col xs={6} md={4} lg={3}>
          <Image src="https://en.pimg.jp/100/819/168/1/100819168.jpg" thumbnail />
       </Col>
      </Row>
    </Container>
  );
}

