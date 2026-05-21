import '@/app/ui/global.css';
import { inter,lusitana } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={`${inter.className} antialiased`}>{children}
        <h1 className={`${lusitana}.className text-xl text-gray-800 md:text-3xl md:leading-normal`}>Hello world!</h1>
        <p className={`${lusitana}.className font-normal`}>this is the body copy</p>
      </body>
    </html>
  );
}
