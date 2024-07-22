
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useUserContext } from '../Context/UserContext';


function NavBar() {
const{user, setUser} = useUserContext()
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
     
          <Navbar.Brand href="/">Adventure Galaxy</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">Attraction</Nav.Link>
            <Nav.Link href="coffeelist">Family Service</Nav.Link>
            <Nav.Link href="meals">Tickets</Nav.Link>
            <Nav.Link href="mealstwo">Contact us</Nav.Link>
            <Nav.Link href="/">{user?.email}</Nav.Link>
          </Nav>
     
      </Navbar>
     
    </>
  );
}

export default NavBar;