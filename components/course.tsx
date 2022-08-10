import { Card, CardActions, CardContent, Typography, Button } from "@mui/material"
import image from '../hero640.jpg';
import Image from "next/image";
import Link from "next/link";

export default function Course({title, price, id}:any){
    return (
        <Card elevation={3} sx={{width:"320px", paddingBottom:'1em', margin:'1em'}}>
            <Image src={image} width='320px' height={'200px'}/>
            <CardContent>
                <Link href={`/course/${id}`}>
                    <Typography gutterBottom variant="h5" component="h5" sx={{cursor: 'pointer','&:hover':{color:"#8c7ae6"} }}>
                    {title}
                    </Typography>
                </Link>
                <Typography variant="body1" color="text.secondary">
                {price}
                </Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'center'}}>
                <Button href={`/course/${id}`} variant="contained">Watch</Button>
            </CardActions>
        </Card>
    );
}