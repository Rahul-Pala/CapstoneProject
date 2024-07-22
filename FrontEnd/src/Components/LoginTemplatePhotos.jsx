import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default  function LoginTemplatePhotos() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://en.pimg.jp/100/819/140/1/100819140.jpg" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://en.pimg.jp/100/819/142/1/100819142.jpg" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://en.pimg.jp/100/819/159/1/100819159.jpg" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}
