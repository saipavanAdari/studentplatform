import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl'
  };

  return (
    <Link to="/" className="flex items-center gap-2 text-primary-blue">
      <GraduationCap className="h-6 w-6" />
      <span className={`font-bold ${sizeClasses[size]}`}>EduPlatform</span>
    </Link>
  );
};

export default Logo;
