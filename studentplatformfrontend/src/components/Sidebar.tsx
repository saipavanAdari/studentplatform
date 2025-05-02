import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { cn } from '@/lib/utils';

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon, label, isActive = false }) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "sidebar-link",
        isActive && "active"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

interface SidebarProps {
  links: Array<{
    to: string;
    icon: React.ReactNode;
    label: string;
  }>;
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  const location = useLocation();
  
  return (
    <div className="bg-dark-blue min-h-screen w-64 p-4 border-r border-secondary-gray/20">
      <div className="mb-8 px-4 pt-2">
        <Logo />
      </div>
      
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <SidebarLink
            key={link.to}
            to={link.to}
            icon={link.icon}
            label={link.label}
            isActive={location.pathname === link.to}
          />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
