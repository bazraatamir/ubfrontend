import React from 'react';
import VideoUpload from '../components/VideoUpload';

const VideoPage = () => {
  return (
    <div className="min-h-screen bg-[#0A171F] text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Видео удирдлага</h1>
        <VideoUpload />
      </div>
    </div>
  );
};

export default VideoPage; 