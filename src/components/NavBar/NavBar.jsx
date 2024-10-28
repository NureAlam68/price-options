import { useState } from "react";
import Link from "../Link/Link";
import { CiMenuFries } from "react-icons/ci";
import { GiTireIronCross } from "react-icons/gi";

const NavBar = () => {
    const [open, setOpen] = useState(false)


  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav className="p-10">
        <div onClick={() => setOpen(!open)} className="md:hidden text-2xl">
            {
                open === true ? <GiTireIronCross></GiTireIronCross> :  <CiMenuFries className=""></CiMenuFries>
            }
        </div>
      <ul className="md:flex gap-20">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
