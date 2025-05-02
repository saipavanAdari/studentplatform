// TeacherDashboard.tsx
import React, { useEffect, useState } from 'react';
import { Users, FileText, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Sidebar from '@/components/Sidebar';
import StatsCard from '@/components/StatsCard';
import UserProfile from '@/components/UserProfile';
import DataTable from '@/components/DataTable';
import { useNavigate } from 'react-router-dom';
import FileUploadDialog from '@/components/FileUploadDialog';
import { toast } from 'sonner';
import axios from 'axios';

const TeacherDashboard: React.FC = () => {
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [content, setContent] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUploads();
  }, []);

  const fetchUploads = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:9001/api/uploads', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const uploads = res.data.map((item: any) => ({
        title: item.title,
        type: item.type,
        uploadDate: new Date(item.createdAt).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        views: 0, // Replace with actual views when available
        actions: renderActions(),
      }));

      setContent(uploads);
    } catch (err) {
      console.error(err);
      toast.error('Failed to load uploads');
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const renderActions = () => (
    <div className="flex space-x-2 justify-end">
      <button className="text-text-muted hover:text-primary-blue">
        <Users className="h-5 w-5" />
      </button>
      <button className="text-text-muted hover:text-primary-blue">
        <FileText className="h-5 w-5" />
      </button>
      <button className="text-danger-red">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );

  const handleUpload = async (file: File, title: string, type: string) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('type', type);

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:9001/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(`${title} uploaded successfully`);
      fetchUploads();
    } catch (err) {
      console.error(err);
      toast.error('Upload failed');
    }

    setUploadDialogOpen(false);
  };

  const sidebarLinks = [
    { to: '/teacherdashboard', icon: <Users className="h-5 w-5" />, label: 'Dashboard' },
    { to: '/teacherdashboard/content', icon: <FileText className="h-5 w-5" />, label: 'My Content' }
  ];

  return (
    <div className="flex min-h-screen bg-darker-blue">
      <Sidebar links={sidebarLinks} />
      <div className="flex-1 overflow-auto">
        <header className="bg-dark-blue border-b border-secondary-gray/20 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="text-danger-red hover:text-danger-red/80" onClick={handleLogout}>
                Logout
              </button>
              <UserProfile name={localStorage.getItem("name")} />
            </div>
          </div>
          <p className="text-text-muted">Manage your educational content</p>
        </header>

        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard title="Total Content" value={content.length} icon={<FileText className="h-5 w-5" />} />
            <StatsCard title="Student Views" value="1,892" icon={<Users className="h-5 w-5" />} />
            <StatsCard title="This Month" value="8 uploads" icon={<Upload className="h-5 w-5" />} />
          </div>

          <div className="bg-dark-blue rounded-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-secondary-gray/20">
              <h2 className="text-xl font-medium">Recent Uploads</h2>
              <Button className="bg-primary-blue hover:bg-primary-blue/90" onClick={() => setUploadDialogOpen(true)}>
                + New Upload
              </Button>
            </div>
            <DataTable
              columns={[
                { header: 'Title', accessor: 'title' },
                { header: 'Type', accessor: 'type' },
                { header: 'Upload Date', accessor: 'uploadDate' },
                { header: 'Views', accessor: 'views' },
                { header: 'Actions', accessor: 'actions', className: 'text-right' },
              ]}
              data={content}
            />
          </div>
        </main>
      </div>
      <FileUploadDialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen} onUpload={handleUpload} />
    </div>
  );
};

export default TeacherDashboard;
