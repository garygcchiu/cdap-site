import { Inter, Rakkas, PT_Sans, Libre_Baskerville } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const rakkas = Rakkas({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
});

export const ptSans = PT_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export const libre = Libre_Baskerville({
    subsets: ['latin'],
    weight: ['400', '700'],
});
