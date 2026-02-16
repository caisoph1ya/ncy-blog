import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-white border-b border-black">
        <div className="flex items-center h-20">
          {/* Logo Section - Left Box */}
          <div className="w-[80px] sm:w-[120px] h-20 border-r border-black flex items-center justify-center flex-shrink-0">
            <Link to="/">
              <div className="w-12 h-12 bg-primary flex items-center justify-center">
                <span className="text-accent text-2xl">★</span>
              </div>
            </Link>
          </div>

          {/* Title Section - Center */}
          <div className="flex-1 flex items-center justify-center border-r border-black h-20">
            <span className="logo-font text-3xl sm:text-4xl text-primary">
              Yahyo's | Blog
            </span>
          </div>

          {/* Menu Button - Right */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-[80px] sm:w-[120px] h-20 flex items-center justify-center flex-shrink-0 menuBtn"
          >
            <div className="text-primary font-normal text-base">
              Menu
            </div>
          </button>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <div className={`menu-fullscreen fixed inset-0 bg-primary z-50 flex items-center justify-center ${menuOpen ? 'open' : ''}`}>
        {/* Close Button - Top Right */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-8 right-8 text-accent text-5xl hover:text-white transition-colors leading-none font-light"
        >
          ✕
        </button>

        {/* Menu Items - Center */}
        <div className="text-center">
          <div className='space-y-8 w-[300px] h-[350px] bg-white pt-20'>
            <Link
              to="/blogs"
              onClick={() => setMenuOpen(false)}
              className="block text-black text-3xl sm:text-4xl font-normal hover:text-accent transition-colors"
            >
              Blogs
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="block text-black text-3xl sm:text-4xl font-normal hover:text-accent transition-colors"
            >
              About me
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-black text-3xl sm:text-4xl font-normal hover:text-accent transition-colors"
            >
              Contacts
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;