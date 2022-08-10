import type { NextApiRequest, NextApiResponse } from 'next';
import { createTransport, SentMessageInfo } from 'nodemailer';
let transport = createTransport(
  {
    host:'smtp.office365.com',
    port: 587,
    auth:{
      user:process.env.USERNAME_MAIL,
      pass:process.env.PASSWORD_MAIL
    }
  }
);

function getMessage(email:string){
  return {
    from: process.env.USERNAME_MAIL,
    to: email,
    subject: 'Subscription to ccourses',
    text:"You are subscribed to ccourses.Don't worry we don't even save your email in our database, so you are safe."
  }
}

function isEmail(email:string){
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return regex.test(email);
  }

export default function handler(req: NextApiRequest,res: NextApiResponse) {
  if(req.body.email && isEmail(req.body.email)){
    let msg = getMessage(req.body.email);
    transport.sendMail(msg, (err:Error | null, info:SentMessageInfo)=>{
      if(err){
        res.status(500).send('internal server error');
      }
      else{
        res.status(200).send('done');
      }
    });
  }
  else{
    res.status(500).send('internal server error');
  }

}
