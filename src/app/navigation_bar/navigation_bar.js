const Navbar = () => {
    return (
      <>
        <div className="w-full h-20 bg-emerald-800 sticky top-0">
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
              <ul className="hidden md:flex gap-x-6 text-white">
                <li>
                    <p>About Us</p>
                </li>
                <li>
                    <p>Services</p>
                </li>
                <li>
                    <p>Contacts</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Navbar;