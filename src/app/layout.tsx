import Navbar from '@/components/Navbar';
import '../styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

//TODO: Create a page description
export const metadata = {
  title: 'Luis Cervantes | Portfolio',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='bg-[#E1DDBF]'>
      <body className={`${inter.className} mt-[72px]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
