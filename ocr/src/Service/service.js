import axios from 'axios'
const headersWithImage=()=>
{
    const config = {
        headers: { 'Content-Type': 'multipart/form-data'},
      }
    return config
}
export async function sendFile(file,setResult,setBuffer)
{
    let formData=new FormData();
    formData.append('file',file);
    try {
    axios.post('http://localhost:3001/add',formData,headersWithImage()).then(res=>{
            if(res.status==200){
                if(res.data.statusCode==400)
                {
                    alert(res.data.body.error.message)
                    setResult(null)
                    setBuffer(null)
                }
                else{
                setResult(res.data)
                setBuffer(null)
                }
            }
        })
    } catch (error) {
        alert("nu a mers")
        console.log(error)
    }
}
