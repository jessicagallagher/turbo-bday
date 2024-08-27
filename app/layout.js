import { Inter } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <title>IT IS YOUR BIRTHDAY.</title>
      <body>
        <div className='firework'></div>
        <div className='firework'></div>
        <div className='firework'></div>
        <div className='firework'></div>
        <div className='firework'></div>
        {children}
      </body>
    </html>
  );
}
