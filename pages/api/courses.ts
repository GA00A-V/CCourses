// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

let courses = [
  {title:"Python's Course", price:'FREE'},
  {title:"JavaScript's Course", price:'FREE'},
  {title:"Rust Programming Course", price:'FREE'},
  {title:"Computer Networking Course", price:'FREE'},
  {title:"Linux Programming Course", price:'FREE'},
];

export default function handler(req: NextApiRequest,res: NextApiResponse) {
  res.status(200).json({ courses })
}
