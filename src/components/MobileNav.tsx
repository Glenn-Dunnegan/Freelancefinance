import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

type NavItem = {
  label: string;
  to: string;
};

type MobileNavProps = {
  items: NavItem[];
};

export const MobileNav: React.FC<MobileNavProps> = ({ items }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Close with ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        style={{
          fontSize: "24px",
          background: "none",
          border: "none",
          cursor: "pointer"
        }}
      >
        ☰
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: open ? "rgba(0,0,0,0.4)" : "transparent",
          pointerEvents: open ? "auto" : "none",
          transition: "background 0.25s ease",
          zIndex: 998
        }}
      />

      {/* Menu */}
      <div
        ref={menuRef}
        tabIndex={-1}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "260px",
          background: "white",
          boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.25s ease",
          zIndex: 999,
          padding: "20px"
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          style={{
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            marginBottom: "20px"
          }}
        >
          ✕
        </button>

        {/* Nav Links */}
        <nav>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "18px"
            }}
          >
            {items.map((item, index) => {
              const isActive =
                location.pathname === item.to ||
                location.pathname.startsWith(item.to + "/");

              return (
              <li key={index}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
                    color: isActive ? "#4338ca" : "#333",
                    background: isActive ? "#e0e7ff" : "transparent",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    display: "block"
                  }}
                >
                  {item.label}
                </Link>
              </li>
            )})}
          </ul>
        </nav>
      </div>
    </>
  );
};
