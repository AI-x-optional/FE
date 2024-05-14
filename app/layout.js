import Header from './components/header';
import "./globals.css";

export const metadata = {
  title: "temp",
  description: "main page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <div>{children}</div>
      </body>
    </html>
  );
}