import Navbar from "./navigation_bar/navigation";
import "./globals.css";

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}