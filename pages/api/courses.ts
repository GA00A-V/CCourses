import type { NextApiRequest, NextApiResponse } from 'next';

let courses = [
  {id:1,image:'/python.jpg',title:"Python's Course", price:'FREE'},
  {id:2,image:'/js.jpg',title:"JavaScript's Course", price:'FREE'},
  {id:3,image:'/rust.jpg',title:"Rust Programming Course", price:'FREE'},
  {id:4,image:'/networking.jpg',title:"Computer Networking Course", price:'FREE'},
  {id:5,image:'/linux.jpg',title:"Linux Programming Course", price:'FREE'},
];

export default function handler(req: NextApiRequest,res: NextApiResponse) {
  res.status(200).json({ courses })
}
