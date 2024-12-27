import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}){

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="5bc474ce8918071c72c8cfbdd6f8ad15";

    let[city,setCity]=useState("");
    let[error,setError]=useState(false);
    
    let getResponse= async()=>{
        try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result={
            temp:jsonResponse.main.temp,
            mintemp:jsonResponse.main.temp_min,
            maxtemp:jsonResponse.main.temp_max,
            
            feels_Like:jsonResponse.main.feels_like,
            humidity:jsonResponse.main.humidity,
            weather:jsonResponse.weather[0].description,
            city:city,
           }
           console.log(result);
           return result;
    }catch(err){
    throw err;
}
}

    let inputFiled=(event)=>{
        setCity(event.target.value)
    }

    let buttonevent=async(event)=>{
        event.preventDefault();
        try{
            setError(false);
        console.log(city);
        setCity("");
        let newInfo=await getResponse();
        updateInfo(newInfo);
        }catch(err){
            setError(true);
        }

    }
   


    return( 
    <>
    <div className='SearchBox'>
        <form>
        <TextField value={city} id="outlined-basic" label="Check today's weather" variant="outlined"required onChange={inputFiled}/>
        <br /> <br />
        <Button onClick={buttonevent} sx={{background:"#4f97A3",color:"white",border: "2px solid #4f97A3",'&:hover':{border:"2px solid #005A92"}}} type='submit'>Search</Button>

        
        {error && <p style={{color:"red"}}>NO CITY FOUND</p>}
        </form>
        </div>
</>
        
    )
}

