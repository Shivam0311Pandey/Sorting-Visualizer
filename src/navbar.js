import * as rb from 'react-bootstrap';

const Navbar = () => {
    return (
<rb.Navbar id='nav-body' collapseOnSelect expand="lg" bg="dark" variant="dark">
  <rb.Container fluid>
  <rb.Navbar.Brand className='nav-brand' href="#home">SortingVisualizer</rb.Navbar.Brand>
  <rb.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <rb.Navbar.Collapse id="responsive-navbar-nav">
    <rb.Nav className="me-auto">
      <rb.Nav.Link href="#features">Features</rb.Nav.Link>
      <rb.Nav.Link href="#pricing">Pricing</rb.Nav.Link>
      <rb.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <rb.NavDropdown.Item href="#action/3.1">Action</rb.NavDropdown.Item>
        <rb.NavDropdown.Item href="#action/3.2">Another action</rb.NavDropdown.Item>
        <rb.NavDropdown.Item href="#action/3.3">Something</rb.NavDropdown.Item>
        <rb.NavDropdown.Divider />
        <rb.NavDropdown.Item href="#action/3.4">Separated link</rb.NavDropdown.Item>
      </rb.NavDropdown>
    </rb.Nav>
    <rb.Nav>
      <rb.Nav.Link href="#deets">More deets</rb.Nav.Link>
      <rb.Nav.Link eventKey={2} href="#memes">
        Dank memes
      </rb.Nav.Link>
    </rb.Nav>
  </rb.Navbar.Collapse>
  </rb.Container>
</rb.Navbar>
    );
}
export default Navbar;