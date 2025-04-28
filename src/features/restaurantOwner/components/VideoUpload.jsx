import React, { useState } from 'react';
import { FaUpload, FaTrash, FaSave } from 'react-icons/fa';

const VideoUpload = () => {
  const [videos, setVideos] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleVideoUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setUploading(true);
      
      // Simulate upload process
      setTimeout(() => {
        const newVideos = Array.from(files).map(file => ({
          id: Date.now() + Math.random(),
          name: file.name,
          size: file.size,
          file: file, // Store the actual file object
          url: URL.createObjectURL(file),
          uploadDate: new Date().toISOString()
        }));
        
        setVideos(prev => [...prev, ...newVideos]);
        setUploading(false);
      }, 1500);
    }
  };

  const handleDeleteVideo = (videoId) => {
    setVideos(prev => prev.filter(video => video.id !== videoId));
  };

  const handleSaveVideos = async () => {
    if (videos.length === 0) {
      console.log('No videos to save');
      return;
    }

    setSaving(true);
    try {
      // Create FormData to send files
      const formData = new FormData();
      videos.forEach((video, index) => {
        formData.append(`videos[${index}]`, video.file);
        formData.append(`videoNames[${index}]`, video.name);
      });

      // Send to backend
      const response = await fetch('YOUR_BACKEND_API_ENDPOINT', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to save videos');
      }

      const result = await response.json();
      console.log('Videos saved successfully:', result);
      
      // Clear videos after successful save
      setVideos([]);
    } catch (error) {
      console.error('Error saving videos:', error);
    } finally {
      setSaving(false);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="bg-[#0A171F] p-6 rounded-xl">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white mb-4">Видео байршуулах</h2>
        
        <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
          <input
            type="file"
            accept="video/*"
            multiple
            onChange={handleVideoUpload}
            className="hidden"
            id="video-upload"
          />
          <label
            htmlFor="video-upload"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <FaUpload className="text-4xl text-gray-400 mb-2" />
            <p className="text-gray-400 mb-2">Видео файл оруулах</p>
            <p className="text-sm text-gray-500">MP4, MOV, AVI (Хамгийн ихдээ 100MB)</p>
          </label>
        </div>
      </div>

      {uploading && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-lime-500 mx-auto"></div>
          <p className="text-gray-400 mt-2">Байршуулж байна...</p>
        </div>
      )}

      <div className="space-y-4">
        {videos.map((video) => (
          <div key={video.id} className="bg-[#232b32] rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <video
                src={video.url}
                className="w-24 h-16 object-cover rounded"
                controls
              />
              <div>
                <p className="text-white font-medium">{video.name}</p>
                <p className="text-gray-400 text-sm">
                  {formatFileSize(video.size)} • {new Date(video.uploadDate).toLocaleDateString()}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleDeleteVideo(video.id)}
              className="text-red-500 hover:text-red-600 p-2"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      {videos.length > 0 && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSaveVideos}
            disabled={saving}
            className="bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Хадгалж байна...
              </>
            ) : (
              <>
                <FaSave />
                Хадгалах
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoUpload; 