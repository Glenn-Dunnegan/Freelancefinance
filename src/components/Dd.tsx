import React, { useState, useRef, useLayoutEffect } from "react";
import {BookOpen, ChevronDown } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";

type DropdownItem = {
  label: string;
  path: string;
  onClick: () => void;
};

type DropdownProps = {
  label: string;
  items: DropdownItem[];
  activePath?: string;
};

export const Dropdown2: React.FC<DropdownProps> = ({ label, items }) => {
  const [open, setOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const location = useLocation();
  
  // Check if any dropdown item matches the current path
  const isDropdownActive = items.some(item => location.pathname === item.path);

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const next = e.relatedTarget as Node | null;
    if (!containerRef.current?.contains(next)) {
      setOpen(false);
    }
  };

  useLayoutEffect(() => {
    if (!open || !menuRef.current) return;

    const rect = menuRef.current.getBoundingClientRect();
    const overflowRight = rect.right > window.innerWidth;

    if (overflowRight) {
      setMenuStyle({ right: 0 });
    } else {
      setMenuStyle({ left: -60 });
    }
  }, [open]);

  return (
    <div
      ref={containerRef}
      tabIndex={-1}
      onBlur={handleBlur}
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <button className={`ddbtn ${
          isDropdownActive ? 'bg-indigo-100 text-indigo-700' : ''
        }`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <BookOpen className="w-4 h-4" />
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <ul
          ref={menuRef}
          className="ddmenu"
          role="menu"
          style={{
            position: "absolute",
            top: "calc(100% + 4px)",
            left: "-500px",
            borderRadius: "10px",
            zIndex: 1000,
            listStyle: "none",
            padding: 0,
            margin: 10,
            background: "white",
            border: "1px solid #ccc",
            minWidth: "160px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            ...menuStyle,
          }}
        >
          {items.map((item, i) => {
            const isActive = location.pathname === item.path;
            return (
            <li key={i}>
              <Link
                to = {item.path}
                role="menuitem"
                className={`block w-full text-left px-4 py-3 text-sm transition-colors ${
                  isActive ? 'bg-indigo-100 text-indigo-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                } ${
                  i !== items.length - 1 ? 'border-b border-gray-100' : ''
                } ${i === 0 ? 'rounded-t-lg' : ''} ${i === items.length - 1 ? 'rounded-b-lg' : ''}`}
                onClick={() => {
                  item.onClick();
                  setOpen(false);
                }}
              >
                {item.label}
              </Link>
            </li>
          )})}
        </ul>
      )}
    </div>
  );
};