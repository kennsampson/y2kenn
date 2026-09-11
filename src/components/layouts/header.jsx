import { NavLink } from "react-router-dom";
import arrowTrIcon from "../../assets/icons/arrow.svg";
import y2kennLogoBlack from "../../assets/icons/Y2Kenn-logo-black@2x.png";
import { useRef } from "react";

export default function Header() {
  const mobileRef = useRef(null);

  const navItems = [
    { to: "/about", label: "About" },
    { to: "/work", label: "Work" },
    { to: "/playground", label: "Playground" },
    { to: "/contact", label: "Contact" },
  ];

  const closeMobileMenu = () => {
    if (mobileRef.current) {
      mobileRef.current.classList.add("hidden");
    }
  };

  return (
    <header className="page-shell">
      <nav>
        <div className="flex justify-between">
          <NavLink className="w-sm shrink-0 p-5 " to="/" end>
            <img src={y2kennLogoBlack} alt="Y2Kenn Logo" />
          </NavLink>
          <div className="hidden md:flex border-2 m-10">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "btn-primary border-0 m-0.5"
                    : "btn-ghost border-0 m-0.5"
                }
                to={item.to}
                end={item.end}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <img
                        src={arrowTrIcon}
                        alt="Arrow Icon"
                        style={{ border: "0", margin: "0.5rem" }}
                        className="menu-arrow"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
          <div className="eyebrow m-5">
            ideas <br />
            explore <br />
            make <br />
            repeat
          </div>
          {/* Hamburger Menu */}
          <button
            id="menu-btn"
            className="md:hidden"
            onClick={() => mobileRef.current.classList.toggle("hidden")}
          >
            Menu
          </button>
        </div>
        <div
          id="mobile-menu"
          ref={mobileRef}
          className="hidden flex-col space-y-4 md:hidden section-space"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className="block btn-primary"
              to={item.to}
              end={item.end}
              onClick={closeMobileMenu}
            >
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
