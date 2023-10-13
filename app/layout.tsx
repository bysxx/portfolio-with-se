import '@styles/global.css';
import '@styles/font.css';

import GlobalNav from '@components/ui/global-nav';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio | Yoonsung Baek',
  description: "Yoonsung Baek's Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${raleway.className} min-w-layout`}>
        <GlobalNav />
        {children}
      </body>
    </html>
  );
}
