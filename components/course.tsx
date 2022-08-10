import { Card, CardActions, CardContent, Typography, Button } from "@mui/material"
import image from '../hero640.jpg';
import Image from "next/image";

export default function Course({title, price}:any){
    return (
        <Card elevation={3} sx={{width:"320px", paddingBottom:'1em', margin:'1em'}}>
            <Image src={image} width='320px' height={'200px'}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
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