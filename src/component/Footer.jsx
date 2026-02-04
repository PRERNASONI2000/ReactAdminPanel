import React from "react";

export default function Footer() {
  return (
    <footer className="bg-base-100 text-center py-3 border-t border-base-content/10">
      © {new Date().getFullYear()} My Dashboard
    </footer>
  );
}
