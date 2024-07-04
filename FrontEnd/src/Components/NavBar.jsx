
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useUserContext } from '../Context/UserContext';


function NavBar() {
const{user, setUser} = useUserContext()
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
     
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="coffeelist">Coffees</Nav.Link>
            <Nav.Link href="meals">Italian Meals</Nav.Link>
            <Nav.Link href="mealstwo">Savoury & Sweets</Nav.Link>
            <Nav.Link href="/">{user?.email}</Nav.Link>
          </Nav>
     
      </Navbar>
     
    </>
  );
}

export default NavBar;