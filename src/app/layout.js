import Navbar from "./navigation_bar/navigation"

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