import Navbar from "./navigation_bar/navigation_bar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <h1>Test 3rd page</h1>
        </body>
    </html>
  );
}