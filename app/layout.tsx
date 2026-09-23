import type {Metadata} from 'next';
import type {ReactNode} from 'react';
import {Cinzel,Inter} from 'next/font/google';
import './global.css';
import {AudioController} from "@/components/ui/AudioController";
const cinzel=Cinzel({
  subsets:['latin'],
  variable:'--font-cinzel',
  display:'swap',
});
const inter=Inter({
  subsets:['latin'],
  variable:'--font-inter',
  display:'swap',
});
export const metadata:Metadata={
  title:'Treasure Hunter: unburied Secrets',
  description:'An atmospheric, interactive mystery expedition site and visual novel archive.',
};
export default function RootLayout({
  children,
}:{
  children:ReactNode;
}){
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="font-sans min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
        {children}
        <AudioController />
      </body>
    </html>
  );
}