import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkest-blue border-t border-secondary-gray/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-text-muted">
              Transforming education through technology
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-text-muted hover:text-primary-blue">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-text-muted hover:text-primary-blue">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-text-muted hover:text-primary-blue">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-text-muted hover:text-primary-blue">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-text-muted hover:text-primary-blue">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-text-muted hover:text-primary-blue">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-text-muted">
                <a href="mailto:support@eduplatform.com" className="hover:text-primary-blue">
                  support@eduplatform.com
                </a>
              </li>
              <li className="text-text-muted">
                <a href="tel:+1(555)123-4567" className="hover:text-primary-blue">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-gray/20 mt-8 pt-8 text-center text-text-muted">
          <p>© 2025 EduPlatform. All rights reserved by Sai Adari.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
