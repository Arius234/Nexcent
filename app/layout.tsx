import './styles/globals.css';

export const metadata = {
  title: 'Nexcent',
  description: 'Nexcent',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
