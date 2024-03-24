import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-white">
      <div className="mx-auto flex max-w-7xl items-start justify-between">
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            width={80}
            height={80}
            loading="lazy"
          />
          <p>look at the world with us</p>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <p>&copy; 2024 Look. All rights reserved.</p>
      </div>
    </footer>
  );
}
