import * as rb from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Navbar = ({isSorting}) => {

  const[sortingAlgo ,setSortingAlgo] = useState('Choose')
  const algoArr = ['Bubble Sort', 'Heap Sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort', 'Radix Sort', 'Selection Sort'];
  let cursor;
  
  
  if(isSorting){
    cursor = 'default';
  } else{
    cursor = 'ponter';
  }

  return (
    <rb.Navbar id='nav-body' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <rb.Container fluid>
      <rb.Navbar.Brand className='nav-brand' href="#home">SortingVisualizer</rb.Navbar.Brand>
      <rb.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <rb.Navbar.Collapse id="responsive-navbar-nav">
        <rb.Nav className="me-auto">
          <rb.Nav.Link style={{cursor: 'default', color: 'rgba(255,255,255,1)'}}>SortingAlgorithm: { sortingAlgo }</rb.Nav.Link>
          {/* <rb.Nav.Link href="#pricing">Pricing</rb.Nav.Link> */}
          <rb.NavDropdown title="Sorting-Algorithms" id="collasible-nav-dropdown">
            { algoArr.filter(i => i!==sortingAlgo).map(i => (
              <rb.NavDropdown.Item id={i} onClick={e => setSortingAlgo(e.target.id)} key={i}>{i}</rb.NavDropdown.Item>
            ))}
          </rb.NavDropdown>
        </rb.Nav>
        <rb.Nav>
          <rb.Nav.Link id='reset' style={{cursor: 'pointer'}}>Shuffle</rb.Nav.Link>
          <rb.Nav.Link eventKey={2} id='sort' style={{cursor: 'pointer'}} data-sortalgo={sortingAlgo}>
            Sort!
          </rb.Nav.Link>
          
        </rb.Nav>
      </rb.Navbar.Collapse>
      </rb.Container>
    </rb.Navbar>
  );
}
export default Navbar;