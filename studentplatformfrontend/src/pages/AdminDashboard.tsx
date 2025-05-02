import React from 'react';
import { Users, BookOpen, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Sidebar from '@/components/Sidebar';
import StatsCard from '@/components/StatsCard';
import UserProfile from '@/components/UserProfile';
import DataTable from '@/components/DataTable';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const sidebarLinks = [
    { to: '/admindashboard', icon: <Users className="h-5 w-5" />, label: 'Dashboard' },
    { to: '/admindashboard/users', icon: <Users className="h-5 w-5" />, label: 'Manage Users' },
    { to: '/admindashboard/reports', icon: <FileText className="h-5 w-5" />, label: 'Reports' }
  ];
  const navigate = useNavigate()
  const handlelogout = () => {

    localStorage.clear();
    navigate('/');
  };
  const users = [
    {
      user: (
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-secondary-gray flex items-center justify-center text-primary-blue">
            SJ
          </div>
          <span>{localStorage.getItem("name")}</span>
        </div>
      ),
      role: 'Teacher',
      email: 'sarah.j@example.com',
      status: <span className="text-green-500">Active</span>,
      actions: (
        <div className="flex space-x-2 justify-end">
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
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="text-danger-red hover:text-danger-red/80" onClick={handlelogout}>
                Logout
              </button>
              <UserProfile name={localStorage.getItem("name")} />
            </div>
          </div>
          <p className="text-text-muted">Manage your platform and users</p>
        </header>

        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="Total Users"
              value="1,234"
              icon={<Users className="h-5 w-5" />}
            />
            <StatsCard
              title="Active Courses"
              value={56}
              icon={<BookOpen className="h-5 w-5" />}
            />
            <StatsCard
              title="New Users"
              value={89}
              icon={<Users className="h-5 w-5" />}
            />
          </div>

          <div className="bg-dark-blue rounded-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-secondary-gray/20">
              <h2 className="text-xl font-medium">User Management</h2>
            </div>
            <DataTable
              columns={[
                { header: 'User', accessor: 'user' },
                { header: 'Role', accessor: 'role' },
                { header: 'Email', accessor: 'email' },
                { header: 'Status', accessor: 'status' },
                { header: 'Actions', accessor: 'actions', className: 'text-right' }
              ]}
              data={users}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
