import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function SingleRecipeTwo(props) {
  return (
    <Card>
       <Card.Img variant="top" height={300} width={50} src={props.image} />
        <Card.Title>{props.name}</Card.Title>
      <Card.Text>{props.description}</Card.Text>
      <Card.Body>{props.ingredients}</Card.Body>
      <Button variant="primary">View Details</Button>
    </Card>
  );
}

