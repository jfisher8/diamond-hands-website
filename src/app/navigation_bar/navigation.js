import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="Navbar w-full h-8 bg-emerald-800 sticky">
          <div className="flex justify-center">
            <ul className="md:flex gap-x-20 text-white padding-40">
              <li>
                <Link href="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/non-ready">
                    <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="/download">
                    Download
                </Link>
              </li>
            </ul>
          </div>
        </div>
    </>
  );
};

export default Navbar;