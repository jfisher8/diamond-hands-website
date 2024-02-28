import Navbar from "./navigation_bar/navigation_bar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const Layout = () => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <p1>Home</p1>
        </body>
    </html>
  )
}

export default Layout;