import '@styles/global.css';
import '@styles/font.css';

import GlobalNav from '@components/ui/global-nav';

export const metadata = {
  title: 'Portfolio | Yoonsung Baek',
  description: "Yoonsung Baek's Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-w-layout">
        <GlobalNav />
        {children}
      </body>
    </html>
  );
}
