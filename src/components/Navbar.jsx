import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { MdCardMembership } from "react-icons/md";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="card" style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <nav
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 0",
          gap: "24px",
        }}
      >
        {/* Left Section */}
         <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <a
            href="#"
            className="badge"
            aria-label="Which Manuka is for me?"
            style={{ textDecoration: "none", color: "#111", fontWeight: "bold" }}
          >
            Which Manuka is for me?
          </a>
          <a
            href="#"
            aria-label="Shop"
            style={{ textDecoration: "none", color: "#111", fontWeight: "bold" }}
          >
            Shop
          </a>
          <a
            href="#"
            aria-label="Explore"
            style={{ textDecoration: "none", color: "#111", fontWeight: "bold" }}
          >
            Explore
          </a>
        </div>

        {/* Center Logo */}
         <a
          href="#"
          aria-label="Home"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontWeight: "bold",
            fontSize: "1.1em",
            letterSpacing: "0.28em",
            textAlign: "center",
            textDecoration: "none",
            color: "#111"
          }}
        >
          NEW ZEALAND<br />HONEY CO.
        </a>

        {/* Right Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <a
            href="#"
            aria-label="About"
            style={{ textDecoration: "none", color: "#111", fontWeight: "bold" }}
          >
            About
          </a>
          <a
            href="#"
            aria-label="Rewards"
            style={{ textDecoration: "none", color: "#111", fontWeight: "bold" }}
          >
            Rewards
          </a>
          <a
            href="#"
            aria-label="Contact"
            style={{ textDecoration: "none", color: "#111", fontWeight: "bold" }}
          >
            Contact
          </a>
          <FiSearch size={24} title="Search" style={{ cursor: "pointer", color: "#111" }} />
          <FaUserCircle size={24} title="Profile" style={{ cursor: "pointer", color: "#111" }} />
          <MdCardMembership size={24} title="Badge" style={{ cursor: "pointer", color: "#111" }} />
        </div>
      </nav>

      {/* Responsive Menu for small screens */}
      <button
        className="btn btn-outline btn-icon"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="nav-menu"
        onClick={() => setOpen((v) => !v)}
        ref={btnRef}
        style={{ display: "none" }}
      >
        <span aria-hidden>☰</span>
        <span className="hide-sm">Menu</span>
      </button>

      <style>{`
  @media (max-width:1024px){
    nav {
      flex-direction: column;
      gap: 12px;
    }
    .container > div, .container > a {
      flex-direction: row;
      gap: 8px !important; /* reduce gap between buttons */
    }
  }
`}</style>
    </header>
  );
}