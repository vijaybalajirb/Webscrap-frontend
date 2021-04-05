import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Navbar} from "react-bootstrap"
import "../App.css"


const Header = () => {

    return(
        <Container fluid>
          <Navbar bg="dark">
        <Navbar.Brand style={{color:"whitesmoke"}}>Web Scrapping</Navbar.Brand>
          </Navbar>
        </Container>
    )
}

export default Header;