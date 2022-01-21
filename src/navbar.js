import * as rb from 'react-bootstrap';
import { useState, useEffect } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {

  const[sortingAlgo ,setSortingAlgo] = useState('Choose');
  const algoArr = ['Bubble Sort', 'Heap Sort', 'Merge Sort', 'Quick Sort'];


  if(!localStorage.getItem('userMode')){
    localStorage.setItem('userMode', "dark");
  }

  const[mode, setMode] = useState(localStorage.getItem('userMode'));

  useEffect(() => {
   if(mode === 'light'){
    document.querySelector('.sorting').style.backgroundColor = 'white';
    document.body.style = 'background: white;';
   } else{
    document.body.style = 'background: #303133;';
   }
  }, [])

  const handleClick = () => {
    if(mode === "dark"){
      setMode('light');
      localStorage.setItem('userMode', 'light');
      document.querySelector('.sorting').style.backgroundColor = 'white';
      document.body.style.setProperty('background-color', 'white', 'important');
    } else {
      setMode("dark");
      localStorage.setItem('userMode', 'dark');
      document.querySelector('.sorting').style.backgroundColor = '#303133';
      document.body.style.setProperty('background-color', '#303133', 'important');
    }
  }

  return (
    <rb.Navbar id='nav-body' collapseOnSelect expand="lg" bg={mode} variant={mode}>
      <rb.Container fluid>
      <rb.Navbar.Brand className='nav-brand' href="#home">SortingVisualizer</rb.Navbar.Brand>
      <rb.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <rb.Navbar.Collapse id="responsive-navbar-nav">
        <rb.Nav className="me-auto">
          <rb.Nav.Link style={{cursor: 'default', color: mode ==='dark'? 'rgba(255,255,255,1)':'rgba(0,0,0,1)'}}>SortingAlgorithm: { sortingAlgo }</rb.Nav.Link>
          <rb.NavDropdown title="Sorting-Algorithms" id="collasible-nav-dropdown">
            { algoArr.filter(i => i!==sortingAlgo).map(i => (
              <rb.NavDropdown.Item className='item' id={i} onClick={e => setSortingAlgo(e.target.id)} key={i}>{i}</rb.NavDropdown.Item>
            ))}
          </rb.NavDropdown>
        </rb.Nav>
        <rb.Nav>
          <rb.Nav.Link onClick={handleClick} > { mode === "dark"? <i className="bi bi-brightness-high-fill"></i> : <i className="bi bi-moon-fill"></i> } </rb.Nav.Link>
          <rb.Nav.Link id='reset' style={{cursor: 'pointer'}}> Shuffle </rb.Nav.Link>
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