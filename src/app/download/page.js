import Navbar from "../navigation_bar/navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <h1>To-be download page</h1>
        </body>
    </html>
  );
}