import React from 'react';
const Navbar = () => (
  <nav className="nav">
    {['home','about','skills','projects','experience','education','contact']
      .map(section => (
        <a key={section} href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
    ))}
  </nav>
);
export default Navbar;
