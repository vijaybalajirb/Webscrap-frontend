import React from "react";
import { Container } from "react-bootstrap";
import {Link} from "react-router-dom"
import "../App.css"

const Frontpage = () => {
    return(
        <Container>
            <br/>
        <h1>
            Scraped Data of 5 mobiles with live value updates <br/><br/>
        </h1>
        <h2>For Snapdeal</h2><br/>
       <h3 ><Link to="/snapdeal">Click here</Link></h3> <br/>
       <h2>For Flipkart</h2><br/>
       <h3><Link to="/flipkart">Click here </Link></h3>  <br/>
       <h2>For Amazon</h2><br/>
       <h3><Link to="/amazon">Click here</Link></h3>  <br/>


</Container>
    )
}

export default Frontpage