import Dropzone from 'react-dropzone'
import React, {useCallback} from 'react'
import { Container,Image } from 'react-bootstrap'
import UploadImage from '../Images/upload.png'
import { sendFile } from '../Service/service'
import $ from 'jquery'
import * as jquery from 'jquery'
export default function DropzoneContainer({setBuffer,setResult})
{
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles)
        acceptedFiles.forEach((file) => {
          setResult(null)
          setBuffer("ceva");
          sendFile(file,setResult,setBuffer)
        })
        
      }, [])


    return <Container style={{height:"20rem",width:"20rem",border:"2px dotted white",padding:20}}>
    <Dropzone onDrop={onDrop}>
    {
      ({getRootProps, getInputProps}) => (
      <section style={{height:"100%",width:"100%",textAlign:"center",border:"2px solid white"}}>
        <div style={{height:"100%",width:"100%",position:"relative"}} {...getRootProps()}>
          <Image src={UploadImage} style={{width:180,height:180}}></Image> 
          <input  style={{height:"100%",width:"100%"}} {...getInputProps()} />
          <p style={{position:"absolute",top:"40%"}}>Drag and drop the pdf or the picture here, or click to select the file</p>
        </div>
      </section>
    )}
    </Dropzone>
    </Container>
}