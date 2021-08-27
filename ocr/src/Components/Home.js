import { Container, Nav ,Row,Col,Image,Spinner} from "react-bootstrap";
import Arrow from '../Images/arrow.png'
import { useState } from "react";
import DropzoneContainer from "./DropzoneContainer";
import * as Icons from 'react-bootstrap-icons'

export default function Home()
{
    const [result, setResult] = useState(null);
    const [bufferArray,setBuffer]=useState(null)
    const copyToClipBoard=(event)=>{
      let input = document.getElementById("result");
      event.preventDefault();
      input.select();
      document.execCommand("copy");
    }
    const render=()=>{
      if(!result && !bufferArray)
      {
        return <textarea id="result" style={{width:"100%",height:"100%",textAlign:"center",backgroundColor:"#053742",color:"#E8F0F2",padding:10,border:"1px solid white",borderRadius:"5",margin:10}}>
        Here will be you result and from where you can copy 
        </textarea>
      }
      if(!result && bufferArray)
      {
        return <Spinner animation="border" style={{position:"absolute",top:"40%"}}/>
      }
      if(result)
      {
        return <textarea id="result" style={{width:"100%",height:"100%",textAlign:"center",backgroundColor:"#053742",color:"#E8F0F2",padding:10,border:"1px solid white",borderRadius:"5",margin:10}}>
          {result}
        </textarea>
      }
      
    }
    return (
        <Container >
        <Row style={{marginTop:20}}>
          <Col>
            <DropzoneContainer setBuffer={setBuffer} setResult={setResult}></DropzoneContainer>
          </Col>
          <Col style={{textAlign:"center"}}>
            <Image src={Arrow} style={{width:300,height:300}}></Image>
          </Col>
          <Col >
          <Icons.Clipboard id="clipBoard"  onClick={(event)=>{copyToClipBoard(event)}}></Icons.Clipboard>
          {
            render()
          }
          </Col>
        </Row>
      </Container>
    );
}