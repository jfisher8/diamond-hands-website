import Navbar from "../navigation_bar/navigation_bar";
import "./globals.css";

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <p>Third page</p>
        </body>
    </html>
  );
}