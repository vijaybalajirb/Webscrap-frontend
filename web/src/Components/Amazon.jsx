import React,{useState,useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {Container,Card,Row,Col} from "react-bootstrap"
import "../App.css"

const Amazon = () => {


    const [ar,setar] = useState([]);
      
      console.log(ar)

    useEffect(()=>{
        async function datab(){
            let fetched= await fetch("https://pacific-beach-21152.herokuapp.com/amazon");
            let datas = await fetched.json()   
            setar(await datas[0].snapmobileData)
           
          }
      datab();
    },[])


    return(
        <Container>  
           <h4><Link to="/">Home</Link></h4>
            <h1 style={{textAlign:"center",padding:"20px"}}>Scrapped Data from Amazon</h1> 
            <Row>
            {
            ar.length>0? 
                ar.map((datas,index)=>(
            
          <Col> 
        <Card key={index+1} style={{ width: '350px',flex: 1,padding:"20px"}}>
  <Card.Img variant="top" src={datas.src.substring(0,datas.src.length-1)} />
  <Card.Body>
    <Card.Title>{datas.title}</Card.Title>
    <Card.Text>
    <b>Price : {datas.offerprice}</b><br/>
    <b>Rating : {datas.rating}</b><br/>
      <b>Stock left : {datas.stockInfo}</b>
    </Card.Text>
  </Card.Body>
</Card><br/>
          
          </Col> 
                       
 )):  <b>Loading it takes some time to fetch real time data</b>
            }
            </Row>

        </Container>
    )
}

export default Amazon;