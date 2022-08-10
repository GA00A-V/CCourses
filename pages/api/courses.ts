import type { NextApiRequest, NextApiResponse } from 'next'

let courses = [
  {id:1,title:"Python's Course", price:'FREE'},
  {id:2,title:"JavaScript's Course", price:'FREE'},
  {id:3,title:"Rust Programming Course", price:'FREE'},
  {id:4,title:"Computer Networking Course", price:'FREE'},
  {id:5,title:"Linux Programming Course", price:'FREE'},
];

export default function handler(req: NextApiRequest,res: NextApiResponse) {
  res.status(200).json({ courses })
}
