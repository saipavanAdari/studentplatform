import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-darker-blue p-6">
      <h1 className="text-6xl font-bold text-primary-blue mb-4">404</h1>
      <p className="text-2xl text-text-white mb-6">Page Not Found</p>
      <p className="text-text-muted mb-8 text-center max-w-md">
        We couldn't find the page you were looking for. The page might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button className="bg-primary-blue hover:bg-primary-blue/90" asChild>
        <Link to="/">Return to Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
