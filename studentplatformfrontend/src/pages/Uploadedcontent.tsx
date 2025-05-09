import React, { useEffect, useState } from 'react';
import { Users, FileText, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Sidebar from '@/components/Sidebar';
import StatsCard from '@/components/StatsCard';
import UserProfile from '@/components/UserProfile';
import DataTable from '@/components/DataTable';
import { useNavigate } from 'react-router-dom';
import FileUploadDialog from '@/components/FileUploadDialog';
import FileViewDialog from '@/components/FileViewDialog';
import { useFileUpload } from '@/hooks/use-file-upload';
import { toast } from 'sonner';
import axios from 'axios';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ContentItem {
  title: string;
  type: string;
  uploadDate: string;
  views: number;
  url?: string; // Added URL property
  actions: React.ReactNode;
}

const Uploadedcontent: React.FC = () => {

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<'upload' | 'edit'>('upload');
  const [dialogData, setDialogData] = useState<any | null>(null);

  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [content, setContent] = useState<any[]>([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editData, setEditData] = useState<any | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<ContentItem | null>(null);
  const { uploadFile, isUploading } = useFileUpload();

  const navigate = useNavigate();

  useEffect(() => {
    fetchUploads();
  }, []);

  const fetchUploads = async () => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const res = await axios.get('http://localhost:9001/api/uploads', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const filteredData = res.data.filter((item: any) => item.uploadedBy._id === userId);
      const uploads = filteredData.map((item: any) => {
        const enrichedItem = {
          title: item.title,
          type: item.type,
          uploadDate: new Date(item.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
          views: 0,
          url: `http://localhost:9001/${item.filePath}`,
          id: item._id,
          originalData: item,
        };

        return {
          ...enrichedItem,
          actions: renderActions(enrichedItem), // pass enrichedItem here
        };
      });

      console.log("url", uploads)

      setContent(uploads);
    } catch (err) {
      console.error(err);
      toast.error('Failed to load uploads');
    }
  };

  console.log("content", content)
  const handleEditClick = (item: any) => {
    setDialogMode('edit');
    setDialogData({ id: item.id, title: item.title, type: item.type });
    setDialogOpen(true);
  };

  const handleUpdateUpload = async (id: string, file: File | null, title: string, type: string) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('type', type);
    if (file) formData.append('file', file);

    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:9001/api/uploads/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success('Upload updated');
      fetchUploads();
      setDialogOpen(false);
    } catch (err) {
      console.error(err);
      toast.error('Update failed');
    }
  };




  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const renderActions = (item: any) => (
    <div className="flex space-x-2 justify-end">
      <button
        className="text-text-muted hover:text-primary-blue"
        onClick={() => handleViewFile(item)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </button>
      <button
        className="text-text-muted hover:text-primary-blue"
        onClick={() => handleEditClick(item)}
      >
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
  );
  const handleViewFile = (file: ContentItem) => {
    setSelectedFile(file);
    setViewDialogOpen(true);
  };

  // const [content, setContent] = useState<ContentItem[]>([
  //   {
  //     title: 'Introduction to Physics',
  //     type: 'PDF Document',
  //     uploadDate: 'May 1, 2025',
  //     views: 245,
  //     url: '/lovable-uploads/cd34661a-baba-461b-bab4-fcd873344060.png', // Sample image URL
  //     actions: null // We'll set this after defining handleViewFile
  //   }
  // ]);

  // Now that we have handleViewFile, let's set up the actions for each content item


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
          <div className="bg-dark-blue rounded-lg overflow-hidden">
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
      <FileUploadDialog
        open={dialogOpen}
        onOpenChange={(open) => {
          if (!open) {
            setFile(null);
            setDialogData(null);
          }
          setDialogOpen(open);
        }}
        mode={dialogMode}
        initialData={dialogData}
        onSave={(selectedFile, title, type) => {
          if (dialogMode === 'upload') {
            handleUpload(selectedFile!, title, type);
          } else {
            handleUpdateUpload(dialogData.id, selectedFile, title, type);
          }
        }}
      />

      <FileViewDialog
        open={viewDialogOpen}
        onOpenChange={setViewDialogOpen}
        file={selectedFile}
      />

    </div>
  );
};

export default Uploadedcontent;
