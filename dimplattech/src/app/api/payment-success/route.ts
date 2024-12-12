import axios from "axios"
import nodemailer from 'nodemailer'
import path from "path"
import ejs from 'ejs'

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY 
const senderEmail = process.env.NEXT_PUBLIC_EMAIL
const password = process.env.NEXT_PUBLIC_PASSWORD

export const POST = async (req: Request) => {
    try {
      const body = await req.json();
      const { email, reference, name, course } = body;
  
      if (!req.method || req.method !== 'POST') {
        return new Response(
          JSON.stringify({ error: 'Method not allowed' }),
          { status: 405, headers: { 'Content-Type': 'application/json' } }
        );
      }
  
      const templatePath = path.resolve('templates/emailTemplates.ejs');
      const htmlContent = await ejs.renderFile(templatePath, { name, course });
  

      const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      });
      if (response.data.data.status === 'success') {
        const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: senderEmail,
            pass: password,
          },
        });
  
        const mailOptions = {
          from: senderEmail,
          to: email,
          subject: 'Welcome to Dimplattech!',
          html: htmlContent,
        };
  
        await transporter.sendMail(mailOptions);
  
        return new Response(
          JSON.stringify({ message: 'Payment verified and email sent' }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      } else {
        return new Response(
          JSON.stringify({ error: 'Payment verification failed' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    } catch (error: any) {
      return new Response(
        JSON.stringify({ error: 'An error occurred' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  };