import React from 'react';
import { Users, BookOpen, Download, Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import StatsCard from '@/components/StatsCard';
import UserProfile from '@/components/UserProfile';
import DataTable from '@/components/DataTable';

const StudentDashboard: React.FC = () => {
  const sidebarLinks = [
    { to: '/studentdashboard', icon: <Users className="h-5 w-5" />, label: 'Dashboard' },
    { to: '/study-materials', icon: <BookOpen className="h-5 w-5" />, label: 'Study Materials' },
    { to: '/downloads', icon: <Download className="h-5 w-5" />, label: 'Recent Downloads' }
  ];
  const navigate = useNavigate()
  const handlelogout = () => {

    localStorage.clear();
    navigate('/');
  };
  const studyMaterials = [
    {
      title: 'Introduction to Physics',
      subject: 'Physics',
      addedDate: 'May 1, 2025',
      size: '2.4 MB',
      actions: (
        <div className="flex space-x-2">
          <button className="text-text-muted hover:text-primary-blue">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
          <button className="text-text-muted hover:text-primary-blue">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>
      )
    }
  ];
  
  return (
    <div className="flex min-h-screen bg-darker-blue">
      <Sidebar links={sidebarLinks} />
      
      <div className="flex-1 overflow-auto">
        <header className="bg-dark-blue border-b border-secondary-gray/20 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Student Dashboard</h1>
            <div className="flex items-center gap-4">
            <button className="text-danger-red hover:text-danger-red/80" onClick={handlelogout}>
                Logout
              </button>
              <UserProfile name="Alex Thompson" />
            </div>
          </div>
          <p className="text-text-muted">Access your study materials</p>
        </header>
        
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard 
              title="Available Materials" 
              value={42} 
              icon={<BookOpen className="h-5 w-5" />}
            />
            <StatsCard 
              title="Downloads" 
              value={15} 
              icon={<Download className="h-5 w-5" />}
            />
            <StatsCard 
              title="Last Access" 
              value="2h ago" 
              icon={<Clock className="h-5 w-5" />}
            />
          </div>
          
          <div className="bg-dark-blue rounded-lg overflow-hidden">
            <DataTable 
              title="Available Study Materials"
              columns={[
                { header: 'Title', accessor: 'title' },
                { header: 'Subject', accessor: 'subject' },
                { header: 'Added Date', accessor: 'addedDate' },
                { header: 'Size', accessor: 'size' },
                { header: 'Actions', accessor: 'actions', className: 'text-right' }
              ]}
              data={studyMaterials}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
