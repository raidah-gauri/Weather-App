import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){

    const URL="https://images.unsplash.com/photo-1668525389832-4632957c56e6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL="https://deshgujarat.com/wp-content/uploads/2017/03/Heat-Wave.jpg";
    const COLD_URL="https://thumbs.dreamstime.com/b/thermometer-snow-shows-low-temperatures-zero-low-temperatures-degrees-celsius-fahrenheit-cold-winter-weather-zero-102786329.jpg";
    const RAIN_URL="https://t4.ftcdn.net/jpg/01/63/96/63/360_F_163966311_qh3qSk57mw9oLPOklZigzX9zlB5DgdaM.jpg";


    return(
        <>
       
        
        <div className='Cards ml-5 mt-2 '>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180}}
        image={info.humidity > 80 ? RAIN_URL :info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> :<AcUnitIcon/>  }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Temperature :<b>{info.temp} &deg;C</b> <br />
         Max Temp :<b>{info.maxtemp}&deg;C</b>  &nbsp; &nbsp; &nbsp; Min Temp : <b>{info.mintemp}&deg;C </b><br />
         Weather : <b>{info.weather }</b> <br />
         Humidity :<b>{info.humidity}&deg;C</b> <br />
         Fells Like :<b>{info.feels_Like}&deg;C</b>
         
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </div>

        </>
    );
}

