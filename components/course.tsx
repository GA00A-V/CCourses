import { Card, CardActions, CardContent, Typography, Button } from "@mui/material"
import Image from "next/image";

interface propTypes{
    title: string,
    price: string,
    key: number,
    image:string
}

export default function Course({title, price, image}:propTypes){
    return (
        <Card elevation={3} sx={{width:"320px", paddingBottom:'1em', margin:'1em'}}>
            <Image src={`${image}`} width='320px' height={'200px'} alt="logo"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h5" sx={{cursor: 'pointer','&:hover':{color:"#8c7ae6"} }}>
                {title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                {price}
                </Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'center'}}>
                <Button variant="contained">Watch</Button>
            </CardActions>
        </Card>
    );
}