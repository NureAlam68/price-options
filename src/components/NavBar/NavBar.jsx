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
    <nav className="p-10 bg-slate-100">
        <div className="flex items-center justify-between">
        <div onClick={() => setOpen(!open)} className="md:hidden text-2xl cursor-pointer">
            {
                open === true ? <GiTireIronCross></GiTireIronCross> :  <CiMenuFries className=""></CiMenuFries>
            }
        </div>
        <div className="md:hidden">
        <button className="px-[24px] rounded-[12px] text-white py-[10px] bg-blue-600">
            View All
        </button>
      </div>
        </div>
      <div className="flex justify-between items-center">
      <ul className={`md:flex absolute md:static py-4 duration-1000 md:py-0 bg-slate-100 px-10 rounded-md ${open ? 'top-20' : '-top-60'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
      <div className="px-20 hidden md:block">
        <button className="px-[30px] rounded-[12px] text-white py-[14px] bg-blue-600">
            View All
        </button>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
