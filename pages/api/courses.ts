import type { NextApiRequest, NextApiResponse } from 'next';

let courses = [
  {id:1,image:'https://drive.google.com/uc?export=view&id=1OLaWoHsvD2ZBN_a2Popc-mycBWdOEi01',title:"Python's Course", price:'FREE'},
  {id:2,image:'https://drive.google.com/uc?export=view&id=1Bkrt4Dw5GubwSrQOfUIOnQgleXlvqeuB',title:"JavaScript's Course", price:'FREE'},
  {id:3,image:'https://drive.google.com/uc?export=view&id=1iK51T97dmIYXy0asmRksLp3gJN1HI8On',title:"Rust Programming Course", price:'FREE'},
  {id:4,image:'https://drive.google.com/uc?export=view&id=13x89z-tEkrRbv61EoAyniWBIbunZvi2h',title:"Computer Networking Course", price:'FREE'},
  {id:5,image:'https://drive.google.com/uc?export=view&id=1v7zN3WZuviswGkceWQJA150Gi5ZXhvof',title:"Linux Programming Course", price:'FREE'},
];

export default function handler(req: NextApiRequest,res: NextApiResponse) {
  res.status(200).json({ courses })
}
