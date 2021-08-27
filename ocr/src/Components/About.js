import { Container,Col,Row,Carousel,Card,Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import Ex3 from '../Images/Ex3.png'
import Ex2 from '../Images/Ex2.png'
import Ex1 from '../Images/Ex1.png'
export default function About()
{
    const textStyle={color:"#383E56",fontWeight:"bold",fontSize:40};
    return (<Container >
        <Col style={{textAlign:"center"}}>
        <Row style={{justifyContent:"center",margin:20}}>
            <h1 >Let's talk about it</h1>
        </Row>
        <Row style={{textAlign:"center"}}>
        <Carousel style={{margin:10,border:"7px solid #132C33",boxShadow:"4px 6px #150E56"}}>
            <Carousel.Item>
                <img 
                className="d-block w-100"
                src={Ex1}
                alt="First slide"
                />
                <Carousel.Caption>
                <div class="mask">
                <h3 style={textStyle}>OCR used for pictures</h3> </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className="d-block w-100"
                src={Ex2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <div class="mask">
                <h3 style={textStyle}>Documents with multiple language</h3> </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className="d-block w-100"
                src={Ex3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <div class="mask">
                <h3 style={textStyle}>Also for handwriting</h3>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </Row>
        <Row style={{marginTop:30,justifyContent:"space-between",width:"100%",textAlign:"center",justifySelf:"center",display:"flex"}}>
            
            <Card
                bg={'info'}
                text={'white'}
                style={{ width: '15rem' ,height:'25rem',boxShadow:"4px 6px #150E56"}}
                className="mb-2"
            >
                <Card.Header>For short</Card.Header>
                <Card.Body>
                <Card.Text>
                    This is a free service named OCR that offers you the possibility to take the text from a image or document, even if is handwriting or normal text in a tabel.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card
                bg={'info'}
                text={'white'}
                style={{ width: '15rem' ,height:'25rem',boxShadow:"4px 6px #150E56"}}
                className="mb-2"
            >
                <Card.Header>Amazon Web Service</Card.Header>
                <Card.Body>
                <Card.Text>
                    This service is a interface for the free API that offers the Cognitive Service from AWS. That's why can't be used so many times till i can offer the full service.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card
                bg={'info'}
                text={'white'}
                style={{ width: '15rem' ,height:'25rem',boxShadow:"4px 6px #150E56"}}
                className="mb-2"
            >
                <Card.Header>Why?</Card.Header>
                <Card.Body>
                <Card.Text>
                    This is used as a proof that I have the necessary skills as a software engineer. This website is build with react framework and express framework for backend.
                    Also for interface i used react bootstrap. Now you can continue to the page that makes everything.
                    <br></br>
                    <br></br>
                    <Link to="/home"><Button>For the OCR</Button></Link>
                </Card.Text>
                </Card.Body>
            </Card>
        </Row>
        </Col>
    </Container>);
}