import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function SingleRecipe(props) {
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}