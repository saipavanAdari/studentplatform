import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-darkest-blue py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-text-white hover:text-primary-blue transition-colors">
            Features
          </Link>
          <Link to="/about" className="text-text-white hover:text-primary-blue transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-text-white hover:text-primary-blue transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button className="bg-primary-blue hover:bg-primary-blue/90" asChild>
            <Link to="/register">Register</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
