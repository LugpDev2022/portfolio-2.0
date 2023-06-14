import { Inter } from 'next/font/google';

import '../styles/globals.css';
import 'animate.css';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import GoUpBtn from '@/components/GoUpBtn';

const inter = Inter({ subsets: ['latin'] });

//TODO: Create a page description
export const metadata = {
  title: 'Luis Alberto Cervantes García',
  description: '',
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
        <Footer />

        <GoUpBtn />
      </body>
    </html>
  );
}
