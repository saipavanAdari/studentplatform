import { useState } from 'react';

export function useFileUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const simulateUpload = (file: File): Promise<void> => {
    return new Promise((resolve) => {
      setIsUploading(true);
      setProgress(0);
      
      // Simulate upload progress
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 10;
          
          if (newProgress >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            resolve();
            return 100;
          }
          
          return newProgress;
        });
      }, 300);
    });
  };

  return {
    isUploading,
    progress,
    uploadFile: simulateUpload
  };
}
