import React from 'react';
import { Users, FileText, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Sidebar from '@/components/Sidebar';
import StatsCard from '@/components/StatsCard';
import UserProfile from '@/components/UserProfile';
import DataTable from '@/components/DataTable';
import { useNavigate } from 'react-router-dom';

const Uploadedcontent: React.FC = () => {
    const sidebarLinks = [
        { to: '/teacherdashboard', icon: <Users className="h-5 w-5" />, label: 'Dashboard' },
        { to: '/teacherdashboard/content', icon: <FileText className="h-5 w-5" />, label: 'My Content' }
    ];
    const navigate = useNavigate()
    const handlelogout = () => {

        localStorage.clear();
        navigate('/');
    };



    const content = [
        {
          title: 'Introduction to Physics',
          type: 'PDF Document',
          uploadDate: 'May 1, 2025',
          views: 245,
          actions: (
            <div className="flex space-x-2 justify-end">
              <button className="text-text-muted hover:text-primary-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
              <button className="text-text-muted hover:text-primary-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button className="text-danger-red">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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
                        <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
                        <div className="flex items-center gap-4">
                            <button className="text-danger-red hover:text-danger-red/80" onClick={handlelogout}>
                                Logout
                            </button>
                            <UserProfile name={localStorage.getItem("name")} />
                        </div>
                    </div>
                    <p className="text-text-muted">Manage your educational content</p>
                </header>

                <main className="p-6">
                    <div className="bg-dark-blue rounded-lg overflow-hidden">
                        <DataTable
                            columns={[
                                { header: 'Title', accessor: 'title' },
                                { header: 'Type', accessor: 'type' },
                                { header: 'Upload Date', accessor: 'uploadDate' },
                                { header: 'Views', accessor: 'views' },
                                { header: 'Actions', accessor: 'actions', className: 'text-right' }
                            ]}
                            data={content}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Uploadedcontent;
