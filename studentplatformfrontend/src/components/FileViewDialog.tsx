import React from 'react';
import { X, FileText, FileImage, FileVideo, FileAudio } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface FileViewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  file: {
    title: string;
    type: string;
    uploadDate: string;
    views: number;
    url?: string; // Added URL property for file content
  } | null;
}

const FileViewDialog: React.FC<FileViewDialogProps> = ({
  open,
  onOpenChange,
  file
}) => {
  if (!file) return null;
  const getFileIcon = () => {
    switch (file.type) {
      case 'PDF Document':
      case 'Document':
        return <FileText className="h-16 w-16 text-primary-blue mb-4" />;
      case 'Image':
        return <FileImage className="h-16 w-16 text-primary-blue mb-4" />;
      case 'Video':
        return <FileVideo className="h-16 w-16 text-primary-blue mb-4" />;
      case 'Audio':
        return <FileAudio className="h-16 w-16 text-primary-blue mb-4" />;
      default:
        return <FileText className="h-16 w-16 text-primary-blue mb-4" />;
    }
  };

  // Function to render the file content based on its type
  const renderFileContent = () => {
    const placeholderUrl = "/lovable-uploads/cd34661a-baba-461b-bab4-fcd873344060.png";
    const fileUrl = file.url || placeholderUrl;
  
    switch (file.type) {
      case 'Image':
        return (
          <div className="w-full flex justify-center mt-4">
            <img
              src={fileUrl}
              alt={file.title}
              className="max-w-full max-h-[400px] object-contain rounded-md"
            />
          </div>
        );
  
      case 'PDF Document':
        return (
          <div className="w-full mt-4 bg-darker-blue rounded-md p-2">
            <div className="bg-secondary-gray/10 p-4 rounded-md">
              <p className="text-text-muted text-center mb-2">
                PDF Preview: {file.title}
              </p>
              <div className="mt-4 flex justify-center">
                <iframe
                  src={fileUrl}
                  title="PDF Preview"
                  className="w-full h-[400px] rounded-md border border-secondary-gray/30"
                />
              </div>
            </div>
          </div>
        );
  
      case 'Video':
        return (
          <div className="w-full mt-4">
            <div className="bg-secondary-gray/10 p-4 rounded-md">
              <p className="text-text-muted text-center mb-4">
                Video Preview: {file.title}
              </p>
              <video
                controls
                src={fileUrl}
                className="w-full rounded-md max-h-[400px]"
              />
            </div>
          </div>
        );
  
      case 'Audio':
        return (
          <div className="w-full mt-4">
            <div className="bg-secondary-gray/10 p-4 rounded-md">
              <p className="text-text-muted text-center mb-4">
                Audio: {file.title}
              </p>
              <audio
                controls
                src={fileUrl}
                className="w-full rounded-md"
              />
            </div>
          </div>
        );
  
      case 'Presentation':
      case 'Document':
      case 'Spreadsheet':
        return (
          <div className="w-full mt-4 bg-darker-blue rounded-md p-2">
            <div className="bg-secondary-gray/10 p-4 rounded-md flex flex-col items-center">
              {getFileIcon()}
              <p className="text-text-muted text-center">
                {file.title}
                <br />
                <span className="text-xs">
                  Preview not available. Please download or open with appropriate software.
                </span>
              </p>
            </div>
          </div>
        );
  
      case 'Other':
      default:
        return (
          <div className="w-full mt-4">
            <div className="bg-secondary-gray/10 p-4 rounded-md flex flex-col items-center">
              {getFileIcon()}
              <p className="text-text-muted text-center">
                {file.title}
                <br />
                <span className="text-xs">
                  No preview available for this file type.
                </span>
              </p>
            </div>
          </div>
        );
    }
  };
  

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-dark-blue border-secondary-gray/20 sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-text-white">{file.title}</DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 text-text-muted transition-opacity hover:opacity-100">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>

        {/* File Content Display */}
        {renderFileContent()}

        <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-4 text-text-light text-sm">
          <div className="text-text-muted">Type:</div>
          <div>{file.type}</div>
          <div className="text-text-muted">Upload Date:</div>
          <div>{file.uploadDate}</div>
          <div className="text-text-muted">Views:</div>
          <div>{file.views}</div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-secondary-gray/20 mt-4">
          <DialogClose asChild>
            <Button variant="outline" className="text-text-light border-secondary-gray/30">
              Close
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FileViewDialog;
