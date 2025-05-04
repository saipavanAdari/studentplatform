import React, { useState, useRef, useEffect } from 'react';
import { Cloud, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface FileUploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (file: File | null, title: string, type: string) => void;
  initialData?: {
    title: string;
    type: string;
    id?: string;
  };
  mode: 'upload' | 'edit';
}


const FileUploadDialog: React.FC<FileUploadDialogProps> = ({
  open,
  onOpenChange,
  onSave,
  initialData,
  mode
}) => {
  const [title, setTitle] = useState('');
  const [fileType, setFileType] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setFileType(initialData.type);
    } else {
      setTitle('');
      setFileType('');
    }
    setFile(null);
  }, [initialData, open]);

  const handleSubmit = () => {
    if (title && fileType && (mode === 'edit' || file)) {
      onSave(file, title, fileType);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };



  const resetForm = () => {
    setFile(null);
    setTitle('');
    setFileType('');
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-dark-blue border-secondary-gray/20 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-text-white">Upload Files</DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 text-text-muted transition-opacity hover:opacity-100">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>

        <div
          className={`border-2 border-dashed rounded-md ${isDragging ? 'border-primary-blue bg-primary-blue/5' : 'border-secondary-gray/30'
            } p-8 text-center`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileSelect}
          />
          <div className="flex flex-col items-center">
            <Cloud className="h-10 w-10 text-text-muted mb-2" />
            <p className="text-sm text-text-muted mb-1">
              {file ? file.name : 'Drag and drop files here'}
            </p>
            <p className="text-xs text-text-muted mb-4">or</p>
            <Button
              onClick={handleBrowseClick}
              variant="secondary"
              className="bg-primary-blue hover:bg-primary-blue/90 text-text-white"
            >
              Browse Files
            </Button>
          </div>
        </div>

        <div className="space-y-4 py-2">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium text-text-light">Title</label>
            <Input
              id="title"
              placeholder="Enter file title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-secondary-gray border-secondary-gray/30 text-text-light"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="type" className="text-sm font-medium text-text-light">Type</label>
            <select
              id="type"
              value={fileType}
              onChange={(e) => setFileType(e.target.value)}
              className="flex h-10 w-full rounded-md border border-secondary-gray/30 bg-secondary-gray px-3 py-2 text-base text-text-light ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            >
              <option value="" disabled>Select file type</option>
              <option value="PDF Document">PDF Document</option>
              <option value="Video">Video</option>
              <option value="Audio">Audio</option>
              <option value="Presentation">Presentation</option>
              <option value="Document">Document</option>
              <option value="Spreadsheet">Spreadsheet</option>
              <option value="Image">Image</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <DialogClose asChild>
            <Button variant="outline" className="text-text-light border-secondary-gray/30">
              Cancel
            </Button>
          </DialogClose>
          <Button
            onClick={handleSubmit}
            disabled={mode === 'upload' ? !file || !title || !fileType : !title || !fileType}
          >
            {mode === 'edit' ? 'Save Changes' : 'Upload'}
          </Button>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FileUploadDialog;
